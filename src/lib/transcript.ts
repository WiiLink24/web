export type TranscriptParticipant = {
  role: "speaker" | "interviewee";
  name: string;
  avatar: string;
  initials: string;
  color: string;
};

function decodeHtmlEntities(text: string) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function stripHtmlTags(text: string) {
  return text.replace(/<[^>]+>/g, "");
}

function getTranscriptInitials(name: string) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .map(part => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return initials || name.slice(0, 1).toUpperCase();
}

function getTranscriptColor(name: string) {
  let hash = 0;
  for (const character of name) {
    hash = character.charCodeAt(0) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash) % 360;
  return `hsl(${hue} 65% 45%)`;
}

function parseTranscriptHeaderLine(line: string) {
  const match = line.match(/^(Speaker|Interviewee):\s*([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\s*-\s*(.+?)\s*\((.*?)\)\s*$/i);
  if (!match) {
    return null;
  }

  return {
    role: (match[1].toLowerCase() === "speaker" ? "speaker" : "interviewee") as
      | "speaker"
      | "interviewee",
    aliases: match[2].split("-").map(alias => alias.trim()).filter(Boolean),
    name: match[3].trim(),
    avatar: match[4].trim()
  };
}

export function extractTranscriptParticipantsFromHtml(html: string): TranscriptParticipant[] {
  const blocks = html.match(/<p>[\s\S]*?<\/p>/g) ?? [];
  const firstBlock = blocks[0];

  if (!firstBlock) {
    return [];
  }

  const firstBlockText = decodeHtmlEntities(firstBlock.replace(/^<p>|<\/p>$/g, "")).trim();
  const lines = firstBlockText
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);

  if (!lines.includes("---")) {
    return [];
  }

  const participants = new Map<string, TranscriptParticipant>();
  for (const line of lines.filter(item => item !== "---")) {
    const participant = parseTranscriptHeaderLine(line);
    if (!participant) {
      continue;
    }

    const entry = {
      role: participant.role,
      name: participant.name,
      avatar: participant.avatar,
      initials: getTranscriptInitials(participant.name),
      color: getTranscriptColor(participant.name)
    };

    for (const alias of participant.aliases) {
      participants.set(alias, entry);
    }
  }

  const uniqueParticipants = new Map<string, TranscriptParticipant>();
  for (const participant of participants.values()) {
    const key = `${participant.role}:${participant.name}:${participant.avatar}`;
    if (!uniqueParticipants.has(key)) {
      uniqueParticipants.set(key, participant);
    }
  }

  return Array.from(uniqueParticipants.values());
}

export function getTranscriptParticipantBadgeText(participant: TranscriptParticipant) {
  return participant.initials;
}

export function getTranscriptParticipantBadgeColor(participant: TranscriptParticipant) {
  return participant.color;
}