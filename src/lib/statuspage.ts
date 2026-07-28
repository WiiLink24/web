const STATUSPAGE_BASE = import.meta.env.STATUSPAGE_BASE ?? "https://status.wiilink24.com";

export interface IncidentUpdate {
  status: string;
  body: string;
  created_at: string;
}

export interface Incident {
  id: string;
  name: string;
  status: string;
  impact: string;
  created_at: string;
  updated_at: string;
  resolved_at: string | null;
  shortlink: string;
  incident_updates: IncidentUpdate[];
  components?: Component[];
}

export interface Component {
  id: string;
  name: string;
  status: string;
}

export interface StatusSummary {
  indicator: string;
  description: string;
  incidents: Incident[];
  components: Component[];
}

export interface RssIncident {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  latestStatus: string;
}

export interface BannerIncident {
  incidentName: string;
  shortlink: string;
  serviceName: string;
  serviceIcon: string;
  serviceColor: string;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"');
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

// Cached at module level so data is fetched only once per build,
// not once per page per language.
let summaryCache: Promise<StatusSummary> | null = null;
let historyCache: Promise<RssIncident[]> | null = null;
const bannerIncidentsCache = new Map<string, Promise<BannerIncident[]>>();

async function _fetchStatusSummary(): Promise<StatusSummary> {
  try {
    const res = await fetch(`${STATUSPAGE_BASE}/api/v2/summary.json`);
    if (!res.ok) return { indicator: "none", description: "All Systems Operational", incidents: [], components: [] };
    const data = await res.json();
    return {
      indicator: data.status?.indicator ?? "none",
      description: data.status?.description ?? "All Systems Operational",
      incidents: data.incidents ?? [],
      components: data.components ?? [],
    };
  } catch {
    return { indicator: "none", description: "All Systems Operational", incidents: [], components: [] };
  }
}

export function fetchStatusSummary(): Promise<StatusSummary> {
  if (!summaryCache) summaryCache = _fetchStatusSummary();
  return summaryCache;
}

async function _fetchIncidentHistory(): Promise<RssIncident[]> {
  try {
    const res = await fetch(`${STATUSPAGE_BASE}/history.rss`);
    if (!res.ok) return [];
    const xml = await res.text();
    const items: RssIncident[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml)) !== null) {
      const block = match[1];
      const title = block.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? "";
      const description = decodeHtmlEntities(block.match(/<description>([\s\S]*?)<\/description>/)?.[1]?.trim() ?? "");
      const pubDate = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() ?? "";
      const link = block.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() ?? "";
      const firstStrong = description.match(/<strong>([\s\S]*?)<\/strong>/);
      const latestStatus = firstStrong ? stripHtmlTags(firstStrong[1]) : "";
      items.push({ title, description, pubDate, link, latestStatus });
    }
    return items;
  } catch {
    return [];
  }
}

export function fetchIncidentHistory(): Promise<RssIncident[]> {
  if (!historyCache) historyCache = _fetchIncidentHistory();
  return historyCache;
}

async function _getBannerIncidents(servicesPath: string): Promise<BannerIncident[]> {
  const statusSummary = await fetchStatusSummary();

  let services: any[] = [];
  try {
    const res = await fetch(`https://raw.githubusercontent.com/WiiLink24/web/refs/heads/main/public/json${servicesPath}`);
    const data = await res.json();
    services = data.services.service;
  } catch {}

  const mergedData = services.map((service: any) => {
    const component = statusSummary.components.find(c => c.name.toLowerCase().includes(service.name.toLowerCase()) ||
      service.name.toLowerCase().includes(c.name.toLowerCase().split(" ")[0]));
    const serviceIncidents = statusSummary.incidents.filter(incident => {
      if (incident.components) {
        return incident.components.some(c => c.name.toLowerCase().includes(service.name.toLowerCase()) ||
          service.name.toLowerCase().includes(c.name.toLowerCase().split(" ")[0]));
      }
      return incident.name.toLowerCase().includes(service.name.toLowerCase());
    });
    return {
      ...service,
      statuspageStatus: component?.status ?? "operational",
      incidents: serviceIncidents.map(inc => ({
        name: inc.name,
        impact: inc.impact,
        status: inc.status,
        description: inc.incident_updates?.[0]?.body ?? "",
        shortlink: inc.shortlink,
      })),
    };
  });

  return mergedData
    .filter(svc => svc.incidents.length > 0)
    .flatMap(svc =>
      svc.incidents.map(inc => ({
        incidentName: inc.name,
        shortlink: inc.shortlink,
        serviceName: svc.name,
        serviceIcon: svc.icon,
        serviceColor: svc.color,
      }))
    );
}

export function getBannerIncidents(servicesPath: string): Promise<BannerIncident[]> {
  if (!bannerIncidentsCache.has(servicesPath)) {
    bannerIncidentsCache.set(servicesPath, _getBannerIncidents(servicesPath));
  }
  return bannerIncidentsCache.get(servicesPath)!;
}

export function getComponentStatus(componentName: string, components: Component[]): string {
  const component = components.find(c => c.name.toLowerCase().includes(componentName.toLowerCase()));
  return component?.status ?? "operational";
}

export function getIncidentsForService(serviceName: string, incidents: Incident[]): Incident[] {
  return incidents.filter(incident => 
    incident.components?.some(c => c.name.toLowerCase().includes(serviceName.toLowerCase())) ||
    incident.name.toLowerCase().includes(serviceName.toLowerCase())
  );
}
