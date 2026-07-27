const STATUSPAGE_BASE = "https://status.wiilink24.com";

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

export async function fetchStatusSummary(): Promise<StatusSummary> {
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

export async function fetchIncidentHistory(): Promise<RssIncident[]> {
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
