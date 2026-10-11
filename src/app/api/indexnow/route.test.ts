import { describe, it, expect } from "bun:test";
import { GET } from "./route";

describe("IndexNow API Route", () => {
  it("GET returns the verification key as plain text", async () => {
    const res = await GET();
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text.trim()).toBe("c03dfd68a2134cb98b671a5ff6d8b2e1");
  });
});
