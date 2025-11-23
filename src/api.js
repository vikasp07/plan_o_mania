const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

export async function sendInquiry(payload) {
  const res = await fetch(`${API_BASE}/api/inquiry`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}
