// Shared by the inquiry form (client) and /api/inquiry (server).

export const MAX_GUESTS = 60;

export const EVENT_TYPES = [
  "Wedding",
  "Elopement",
  "Private celebration",
  "Corporate event or retreat",
  "Other",
] as const;

export const GUEST_RANGES = [
  "2–10",
  "11–30",
  "31–45",
  "46–60",
  "More than 60",
] as const;

export const CATERING_OPTIONS = [
  "Yes, we have a caterer",
  "Yes, we'd like recommendations",
  "No food service",
] as const;

export const PLANNING_STAGES = [
  "Ready to book",
  "Comparing a few venues",
  "Just starting to explore",
] as const;

export const SOURCES = [
  "Google search",
  "Instagram",
  "Zola",
  "Friend or past guest",
  "Wedding planner or vendor",
  "Other",
] as const;

export type Inquiry = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  dateFlexible: boolean;
  guests: string;
  catering: string;
  stage: string;
  hasPlanner: string;
  source: string;
  message: string;
  soundAck: boolean;
};

export const REQUIRED_FIELDS: (keyof Inquiry)[] = [
  "name",
  "email",
  "eventType",
  "guests",
  "catering",
  "stage",
];

/**
 * Rough fit rating so the team can triage the inbox. The thresholds are a
 * first guess — tune them once real pricing and booking data are known.
 */
export function rateInquiry(i: Inquiry): { rating: "Strong fit" | "Possible fit" | "Unlikely fit"; reasons: string[] } {
  const reasons: string[] = [];

  if (i.guests === "More than 60") reasons.push(`Over ${MAX_GUESTS}-guest capacity`);
  if (!i.soundAck) reasons.push("Did not accept sound guidelines");
  if (i.catering === "No food service" && i.eventType === "Wedding") reasons.push("Wedding with no catering");

  if (reasons.length > 0) {
    return { rating: reasons.length > 1 || i.guests === "More than 60" ? "Unlikely fit" : "Possible fit", reasons };
  }

  const strong =
    i.stage !== "Just starting to explore" &&
    Boolean(i.date || i.dateFlexible);
  return { rating: strong ? "Strong fit" : "Possible fit", reasons };
}

export function formatInquiry(i: Inquiry): string {
  const { rating, reasons } = rateInquiry(i);
  return [
    `Fit: ${rating}${reasons.length ? ` (${reasons.join("; ")})` : ""}`,
    "",
    `Name: ${i.name}`,
    `Email: ${i.email}`,
    `Phone: ${i.phone || "—"}`,
    "",
    `Event type: ${i.eventType}`,
    `Date: ${i.date || "—"}${i.dateFlexible ? " (flexible)" : ""}`,
    `Guests: ${i.guests}`,
    `Catering: ${i.catering}`,
    `Planning stage: ${i.stage}`,
    `Working with a planner: ${i.hasPlanner || "—"}`,
    `Heard about us: ${i.source || "—"}`,
    `Accepts sound guidelines: ${i.soundAck ? "Yes" : "No"}`,
    "",
    "Message:",
    i.message || "—",
  ].join("\n");
}
