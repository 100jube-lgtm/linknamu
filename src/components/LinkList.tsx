"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/lib/sample-data";

// 페이지가 열릴 때 모든 링크의 클릭수를 한 번에 받아와 카드에 내려줍니다.
// 받기 전에는 0회로 보이고, 받으면 실제 값으로 갱신됩니다.
export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: Record<string, number>) => setCounts(data))
      .catch((error) => {
        if (error?.name !== "AbortError") console.error("클릭수를 가져오지 못했습니다:", error);
      });
    return () => controller.abort();
  }, []);

  // 카드를 누르면 화면의 숫자도 바로 1 올립니다(실제 기록은 /go/[id] 에서 서버가 합니다).
  // 받아온 값 위에 "이 화면에서 누른 횟수"를 더해 보여줍니다.
  const [pending, setPending] = useState<Record<string, number>>({});

  return (
    <ul className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            {...link}
            count={(counts[link.id] ?? 0) + (pending[link.id] ?? 0)}
            onOpen={() =>
              setPending((prev) => ({ ...prev, [link.id]: (prev[link.id] ?? 0) + 1 }))
            }
          />
        </li>
      ))}
    </ul>
  );
}
