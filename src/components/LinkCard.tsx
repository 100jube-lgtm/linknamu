import type { LinkItem } from "@/lib/sample-data";

const iconClass = "h-5 w-5 shrink-0";

// 링크 종류를 상징하는 아이콘 (글자색을 따라 색이 바뀝니다)
function Icon({ type }: { type?: LinkItem["icon"] }) {
  switch (type) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={iconClass}>
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      );
    case "blog":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={iconClass}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={iconClass}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      );
    default:
      return null;
  }
}

// 클릭수를 집계하기 위해 /go/[id] 를 거쳐 원래 URL로 이동합니다.
// count: 지금까지의 클릭수(받기 전에는 0), onOpen: 카드를 눌렀을 때 화면의 숫자를 바로 올리는 콜백
type LinkCardProps = LinkItem & {
  count?: number;
  onOpen?: () => void;
};

export default function LinkCard({ id, title, icon, count = 0, onOpen }: LinkCardProps) {
  return (
    <a
      href={`/go/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onOpen}
      onAuxClick={(e) => {
        if (e.button === 1) onOpen?.(); // 휠 클릭으로 새 탭에 열 때도 집계됩니다
      }}
      className="relative flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/70 bg-white/45 px-14 py-[1.125rem] text-center text-[0.95rem] font-medium shadow-[0_8px_30px_-12px_rgba(150,80,30,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-px hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/10"
    >
      <Icon type={icon} />
      {title}
      <span className="absolute right-5 text-xs font-normal tabular-nums opacity-55">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
