import React, { useState } from "react";
import { sendInquiry } from "../api";
import "./InquiryForm.css";

const eventTypes = [
  { value: "Birthday", label: "Birthday Celebration" },
  { value: "Wedding", label: "Wedding Ceremony" },
  { value: "Mehendi", label: "Mehendi Function" },
  { value: "Sangeet", label: "Sangeet Night" },
  { value: "Corporate", label: "Corporate Event" },
  { value: "Proposal", label: "Proposal Setup" },
  { value: "Festival", label: "Festival Celebration" },
  { value: "Other", label: "Other Event" },
];

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Birthday",
    eventDate: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(null);

  function update(k, v) {
    setForm((prev) => ({ ...prev, [k]: v }));
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setOk(null);

    try {
      const resp = await sendInquiry({ ...form, source: "website" });

      if (resp && resp.success) {
        setOk(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          eventType: "Birthday",
          eventDate: "",
          message: "",
        });
      } else {
        setOk(false);
      }
    } catch (err) {
      console.error(err);
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="inquiry-form">
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            className="form-input"
            required
            placeholder="Enter your full name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Phone Number *</label>
            <input
              className="form-input"
              required
              placeholder="Your contact number"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              type="email"
              placeholder="Your email (optional)"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Event Type *</label>
            <select
              className="form-input"
              value={form.eventType}
              onChange={(e) => update("eventType", e.target.value)}
            >
              {eventTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Event Date</label>
            <input
              className="form-input"
              type="date"
              value={form.eventDate}
              onChange={(e) => update("eventDate", e.target.value)}
            />
          </div>
        </div>

        {/* LOCATION + BUDGET REMOVED */}

        <div className="form-group">
          <label className="form-label">Additional Details</label>
          <textarea
            className="form-input"
            placeholder="Tell us more about your event requirements..."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={4}
          />
        </div>

        <div className="form-footer">
          {ok === true && (
            <div className="alert success">
              Thank you! We'll get back to you within 24 hours.
            </div>
          )}

          {ok === false && (
            <div className="alert error">
              Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Submit Inquiry"}
          </button>
        </div>
      </div>
    </form>
  );
}
