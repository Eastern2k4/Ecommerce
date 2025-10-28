import { http } from "../lib/http";

export async function signin(email, password) {
  const data = await http("/api/auth/signin", {
    method: "POST",
    body: { email, password },
  });
  // backend trả { user: {...} } và set cookie access_token
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
}

export async function signout() {
  await http("/api/auth/signout", { method: "POST" });
  localStorage.removeItem("user");
}
