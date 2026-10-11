import { describe, it, expect } from "bun:test";
import { services, serviceCategories } from "./services";

describe("services registry", () => {
  it("places core-drilling, water-well-drilling, and geotechnical-drilling at the top of services", () => {
    const firstThree = services.slice(0, 3).map((s) => s.id);
    expect(firstThree).toEqual([
      "core-drilling",
      "water-well-drilling",
      "geotechnical-drilling",
    ]);
  });

  it("assigns all drilling services to category 'drilling'", () => {
    const drillingServices = services.filter((s) => s.category === "drilling");
    expect(drillingServices.length).toBe(3);
    expect(drillingServices.map((s) => s.id)).toEqual([
      "core-drilling",
      "water-well-drilling",
      "geotechnical-drilling",
    ]);
  });

  it("exports canonical serviceCategories matching the domain model", () => {
    expect(serviceCategories).toEqual([
      "drilling",
      "geotechnical",
      "geodesy",
      "hydrogeology",
      "equipment",
    ]);
  });
});
