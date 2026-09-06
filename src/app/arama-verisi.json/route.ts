import { aramaDizini } from "@/lib/arama";

export const revalidate = 300;

/** Site ici aramanin kullandigi dizin. Tarayici bunu bir kez indirir. */
export async function GET() {
  const kayitlar = await aramaDizini();
  return Response.json(kayitlar, {
    headers: { "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=86400" },
  });
}
