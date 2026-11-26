import { NextResponse } from "next/server";
import { recordClick } from "@/lib/clicks";
import { links } from "@/lib/sample-data";

// 링크카드 클릭 → 클릭수 +1 기록 → 원래 URL로 이동
export async function GET(_req: Request, ctx: RouteContext<"/go/[id]">) {
  const { id } = await ctx.params;

  // 등록된 링크 id만 허용합니다(임의 URL로 리다이렉트되는 것을 막기 위함).
  const link = links.find((l) => l.id === id);
  if (!link) {
    return new NextResponse("링크를 찾을 수 없습니다.", { status: 404 });
  }

  await recordClick(link.id);
  return NextResponse.redirect(link.url, 302);
}
