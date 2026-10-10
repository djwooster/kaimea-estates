"use client";

import { useState } from "react";
import {
  CATERING_OPTIONS,
  EVENT_TYPES,
  GUEST_RANGES,
  MAX_GUESTS,
  PLANNING_STAGES,
  SOURCES,
  formatInquiry,
  type Inquiry,
} from "@/lib/inquiry";

const EMPTY: Inquiry = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  dateFlexible: false,
  guests: "",
  catering: "",
  stage: "",
  hasPlanner: "",
  source: "",
  message: "",
  soundAck: false,
};

const inputClass =
  "w-full bg-white border border-forest-100 focus:border-gold-600 focus:outline-none px-4 py-3 font-sans text-sm text-forest-900 placeholder:text-forest-700/40 transition-colors";
const labelClass = "block font-sans text-[10px] tracking-[0.25em] uppercase text-forest-700 mb-2";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label}
        {required && <span className="text-gold-700"> *</span>}
      </span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
  required,
}: {
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <select
      className={inputClass}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
    >
      <option value="" disabled>
        Select…
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default function InquiryForm() {
  const [form, setForm] = useState<Inquiry>(EMPTY);
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "fallback">("idle");

  const set = <K extends keyof Inquiry>(key: K) => (value: Inquiry[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const mailtoHref = `mailto:events@kaimeaestates.com?subject=${encodeURIComponent(
    `${form.eventType || "Event"} inquiry — ${form.name}`,
  )}&body=${encodeURIComponent(formatInquiry(form))}`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company }),
      });
      setStatus(res.ok ? "sent" : "fallback");
    } catch {
      setStatus("fallback");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-cream p-10 sm:p-14 text-center">
        <p className="label-accent mb-4">Mahalo</p>
        <h3 className="font-serif text-forest-900 text-3xl sm:text-4xl font-light mb-4">
          We&rsquo;ve received your inquiry
        </h3>
        <p className="font-sans text-sm font-light text-forest-700/80 max-w-md mx-auto leading-relaxed">
          Our events team will check availability for your date and reply to {form.email} within
          two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-cream p-6 sm:p-10 lg:p-12 text-left">
      {/* Honeypot — hidden from people, tempting to bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
        </label>
      </div>

      <fieldset className="mb-10">
        <legend className="font-serif text-2xl text-forest-900 mb-6">Your celebration</legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Event type" required>
            <Select value={form.eventType} onChange={set("eventType")} options={EVENT_TYPES} required />
          </Field>
          <Field label="Guest count" required>
            <Select value={form.guests} onChange={set("guests")} options={GUEST_RANGES} required />
          </Field>
          <div>
            <Field label="Preferred date">
              <input
                type="date"
                className={inputClass}
                value={form.date}
                onChange={(e) => set("date")(e.target.value)}
              />
            </Field>
            <label className="flex items-center gap-2 mt-2 font-sans text-xs text-forest-700/80">
              <input
                type="checkbox"
                checked={form.dateFlexible}
                onChange={(e) => set("dateFlexible")(e.target.checked)}
                className="accent-gold-600"
              />
              Our date is flexible
            </label>
          </div>
          <Field label="Will you have catering?" required>
            <Select value={form.catering} onChange={set("catering")} options={CATERING_OPTIONS} required />
          </Field>
          <Field label="Where are you in planning?" required>
            <Select value={form.stage} onChange={set("stage")} options={PLANNING_STAGES} required />
          </Field>
          <Field label="Working with a planner?">
            <Select value={form.hasPlanner} onChange={set("hasPlanner")} options={["Yes", "No", "Not yet"]} />
          </Field>
          <Field label="How did you hear about us?">
            <Select value={form.source} onChange={set("source")} options={SOURCES} />
          </Field>
        </div>

        {form.guests === "More than 60" && (
          <p className="mt-5 border-l-2 border-gold-600 pl-4 font-sans text-sm text-forest-700/90 leading-relaxed">
            Kaimea Estates is an intimate venue for up to {MAX_GUESTS} guests. You&rsquo;re welcome
            to inquire, but we may not be able to accommodate a larger group.
          </p>
        )}
        <p className="mt-5 font-sans text-xs text-forest-700/70 leading-relaxed">
          There&rsquo;s no in-house catering — you bring your own caterer, and we&rsquo;re happy to
          recommend trusted local teams.
        </p>
      </fieldset>

      <fieldset className="mb-10">
        <legend className="font-serif text-2xl text-forest-900 mb-6">About you</legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Name" required>
            <input
              className={inputClass}
              value={form.name}
              onChange={(e) => set("name")(e.target.value)}
              autoComplete="name"
              required
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              className={inputClass}
              value={form.email}
              onChange={(e) => set("email")(e.target.value)}
              autoComplete="email"
              required
            />
          </Field>
          <Field label="Phone">
            <input
              type="tel"
              className={inputClass}
              value={form.phone}
              onChange={(e) => set("phone")(e.target.value)}
              autoComplete="tel"
            />
          </Field>
        </div>
        <div className="mt-5">
          <Field label="Tell us about your vision">
            <textarea
              className={`${inputClass} min-h-[110px]`}
              value={form.message}
              onChange={(e) => set("message")(e.target.value)}
              placeholder="Ceremony and reception, time of day, anything we should know…"
            />
          </Field>
        </div>
      </fieldset>

      <label className="flex items-start gap-3 mb-8 font-sans text-sm text-forest-700/90 leading-relaxed">
        <input
          type="checkbox"
          checked={form.soundAck}
          onChange={(e) => set("soundAck")(e.target.checked)}
          className="mt-1 accent-gold-600"
        />
        <span>
          I understand the estate is in a residential neighborhood and follows sound guidelines —
          music plays through the venue&rsquo;s speaker system, with no DJs or amplified bands.
        </span>
      </label>

      {status === "fallback" ? (
        <div className="border border-gold-600/40 bg-white p-5 font-sans text-sm text-forest-700 leading-relaxed">
          We couldn&rsquo;t send your inquiry automatically.{" "}
          <a href={mailtoHref} className="text-gold-700 underline underline-offset-2">
            Open it as an email
          </a>{" "}
          — your answers are already filled in.
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto bg-gold-600 hover:bg-gold-500 disabled:opacity-60 text-forest-950 font-sans text-[11px] tracking-[0.35em] uppercase px-12 py-4 transition-all duration-300"
        >
          {status === "sending" ? "Sending…" : "Check Availability"}
        </button>
      )}
    </form>
  );
}
