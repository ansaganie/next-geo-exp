import { NextResponse } from "next/server";

const DEFAULT_KEY = "c03dfd68a2134cb98b671a5ff6d8b2e1";
const HOST = "geoexploration.kz";

export async function GET() {
  const key = process.env.INDEXNOW_KEY || DEFAULT_KEY;
  return new NextResponse(key, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const secret = process.env.INDEXNOW_SECRET;

  if (secret && authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const key = process.env.INDEXNOW_KEY || DEFAULT_KEY;
  const keyLocation = `https://${HOST}/${key}.txt`;

  const locales = ["kk", "ru", "en"] as const;
  const categories = [
    "drilling",
    "geotechnical",
    "geodesy",
    "hydrogeology",
    "equipment",
  ];

  const urlList: string[] = [];

  locales.forEach((loc) => {
    const prefix = loc === "kk" ? "" : `/${loc}`;
    urlList.push(`https://${HOST}${prefix}`);
  });

  categories.forEach((cat) => {
    locales.forEach((loc) => {
      const prefix = loc === "kk" ? "" : `/${loc}`;
      urlList.push(`https://${HOST}${prefix}/services/${cat}`);
    });
  });

  const payload = {
    host: HOST,
    key,
    keyLocation,
    urlList,
  };

  const endpoints = [
    "https://yandex.com/indexnow",
    "https://api.indexnow.org/indexnow",
  ];

  const results = await Promise.allSettled(
    endpoints.map(async (endpoint) => {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "GeoExploration-IndexNow/1.0",
        },
        body: JSON.stringify(payload),
      });
      return {
        endpoint,
        status: res.status,
        statusText: res.statusText,
      };
    }),
  );

  return NextResponse.json({
    submittedUrlsCount: urlList.length,
    results,
  });
}
