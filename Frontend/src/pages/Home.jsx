import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    axios.get("/api/health")
      .then(res => setMsg(res.data))
      .catch(() => setMsg("API error"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Home</h1>
      <div className="text-sm">Backend says: <b>{msg}</b></div>
    </div>
  );
}
