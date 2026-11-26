import type { LinkItem } from "@/lib/sample-data";

// 클릭수를 집계하기 위해 /go/[id] 를 거쳐 원래 URL로 이동합니다.
export default function LinkCard({ id, title }: LinkItem) {
  return (
    <a
      href={`/go/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-zinc-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
    >
      {title}
    </a>
  );
}
