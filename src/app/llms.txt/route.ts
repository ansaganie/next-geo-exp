import { NextResponse } from "next/server";

const LLMS_TXT = `# GeoExploration

> Professional engineering-geological surveys, water well drilling, geodesy, and topographic mapping across Kazakhstan.

GeoExploration provides comprehensive engineering and geological services for civil construction, mining, and infrastructure projects across the Republic of Kazakhstan.

## Services

- [Engineering-Geological Surveys](https://geoexploration.kz/en/services/geotechnical): Drilling exploratory boreholes, laboratory soil testing, and normative engineering reports.
- [Geodesy and Topographic Mapping](https://geoexploration.kz/en/services/geodesy): Topographic surveys, geodetic networks, executive surveying, and volume calculation.
- [Water Well Drilling](https://geoexploration.kz/en/services/drilling): Drilling water supply and exploratory wells with pumping tests and sanitary protection zones.
- [Hydrogeology](https://geoexploration.kz/en/services/hydrogeology): Aquifer testing, groundwater monitoring, and water balance assessments.
- [Equipment & Geological Supplies](https://geoexploration.kz/en/services/equipment): Production of PQ/HQ/NQ core boxes, customized sampling bags, and field exploration gear.

## Key Links

- [Official Website](https://geoexploration.kz/en)
- [Company Portfolio](https://geoexploration.kz/en#portfolio)
- [Contact GeoExploration](https://geoexploration.kz/en#contact-us)
`;

export function GET() {
  return new NextResponse(LLMS_TXT, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
