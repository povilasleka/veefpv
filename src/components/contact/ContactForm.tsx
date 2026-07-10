"use client";

import { useId, useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  date: string;
  location: string;
  projectType: string;
  propStyle: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  date: "",
  location: "",
  projectType: "event",
  propStyle: "open",
  message: "",
};

const fieldClassName =
  "border border-white/14 bg-[#101114] px-3.75 py-3.5 text-[15px] text-white outline-none placeholder:text-white/30 focus:border-white/50";

const labelClassName = "text-mono-label text-[10.5px] font-medium text-white/45";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const idPrefix = useId();

  const setField =
    <K extends keyof ContactFormData>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData((s) => ({ ...s, [key]: e.target.value }));

  if (submitted) {
    return (
      <div
        className="border-accent mt-12 border-[1.5px] bg-[#0e0f11] p-9"
        style={{ animation: "scaleIn .5s cubic-bezier(.16,1,.3,1) both" }}
      >
        <div className="text-display text-accent text-[30px]">Request Received</div>
        <p className="mt-2.5 text-[14px] leading-relaxed font-medium text-white/70">
          Thanks — I&apos;ll reply at {formData.email} shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          if (!res.ok) throw new Error();
          setSubmitted(true);
        } catch {
          setError("Something went wrong — please try again.");
        } finally {
          setSubmitting(false);
        }
      }}
      className="mt-13 grid grid-cols-1 gap-5.5 md:grid-cols-2"
      style={{ animation: "fadeUp .7s cubic-bezier(.16,1,.3,1) .24s both" }}
    >
      <div className="flex flex-col gap-2.25">
        <label htmlFor={`${idPrefix}-name`} className={labelClassName}>
          Name
        </label>
        <input
          id={`${idPrefix}-name`}
          placeholder="Your name"
          value={formData.name}
          onChange={setField("name")}
          required
          className={fieldClassName}
        />
      </div>

      <div className="flex flex-col gap-2.25">
        <label htmlFor={`${idPrefix}-email`} className={labelClassName}>
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          placeholder="you@company.com"
          value={formData.email}
          onChange={setField("email")}
          required
          className={fieldClassName}
        />
      </div>

      <div className="flex flex-col gap-2.25">
        <label htmlFor={`${idPrefix}-date`} className={labelClassName}>
          Project date
        </label>
        <input
          id={`${idPrefix}-date`}
          type="date"
          value={formData.date}
          onChange={setField("date")}
          className={fieldClassName}
        />
      </div>

      <div className="flex flex-col gap-2.25">
        <label htmlFor={`${idPrefix}-location`} className={labelClassName}>
          Location
        </label>
        <input
          id={`${idPrefix}-location`}
          placeholder="Venue / city"
          value={formData.location}
          onChange={setField("location")}
          className={fieldClassName}
        />
      </div>

      <div className="flex flex-col gap-2.25">
        <label htmlFor={`${idPrefix}-projectType`} className={labelClassName}>
          Project type
        </label>
        <select
          id={`${idPrefix}-projectType`}
          value={formData.projectType}
          onChange={setField("projectType")}
          className={fieldClassName}
        >
          <option value="event">Live event / concert</option>
          <option value="music">Music video</option>
          <option value="commercial">Commercial / real estate</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2.25">
        <label htmlFor={`${idPrefix}-propStyle`} className={labelClassName}>
          Drone style
        </label>
        <select
          id={`${idPrefix}-propStyle`}
          value={formData.propStyle}
          onChange={setField("propStyle")}
          className={fieldClassName}
        >
          <option value="open">Open propellers (open air, no crowd contact)</option>
          <option value="closed">Closed / ducted propellers (near crowds &amp; indoors)</option>
        </select>
      </div>

      <div className="col-span-full flex flex-col gap-2.25">
        <label htmlFor={`${idPrefix}-message`} className={labelClassName}>
          Project details
        </label>
        <textarea
          id={`${idPrefix}-message`}
          rows={5}
          placeholder="What are you shooting, and what feeling should it capture?"
          value={formData.message}
          onChange={setField("message")}
          className={fieldClassName}
        />
      </div>

      <div className="col-span-full">
        <button
          type="submit"
          disabled={submitting}
          className="bg-accent text-ink inline-flex px-8.5 py-4.5 text-[14px] font-bold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
        >
          {submitting ? "SENDING…" : "SEND INQUIRY →"}
        </button>
        {error && <p className="mt-3 text-[13px] font-medium text-red-400">{error}</p>}
      </div>
    </form>
  );
}
