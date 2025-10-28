export const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export async function http(path, { method = "GET", body, headers } = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: { "Content-Type": "application/json", ...(headers || {}) },
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include", // quan trọng để nhận cookie HttpOnly
  });
  const isJson = res.headers.get("content-type")?.includes("application/json");
  if (!res.ok) throw new Error(isJson ? (await res.json()).message ?? res.statusText : res.statusText);
  return isJson ? res.json() : null;
}
