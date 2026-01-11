import type { VercelRequest, VercelResponse } from "@vercel/node";
import main from "../src/codingCalendar/main.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const data = await main();
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ error: "Failed to compute activity" });
  }
}
