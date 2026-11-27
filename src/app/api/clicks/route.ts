import { NextResponse } from "next/server";
import { getClickCounts } from "@/lib/clicks";
import { links } from "@/lib/sample-data";

// 모든 링크의 현재 클릭수를 한 번에 돌려줍니다. 예: { "link-1": 42, "link-2": 0, ... }
export async function GET() {
  const counts = await getClickCounts(links.map((l) => l.id));
  return NextResponse.json(counts, {
    headers: { "Cache-Control": "no-store" },
  });
}
