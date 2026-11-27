import type { Profile } from "@/lib/sample-data";

// 둥근 사진 + 흰 테두리 + 부드러운 그림자로 살짝 떠 있는 입체감을 줍니다.
const photoClass =
  "h-28 w-28 rounded-full ring-4 ring-white/80 shadow-[0_12px_32px_-8px_rgba(150,80,30,0.35)] dark:ring-white/15";

export default function ProfileHeader({ name, bio, photoUrl }: Profile) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      {photoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photoUrl}
          alt={`${name} 프로필 사진`}
          className={`${photoClass} object-cover`}
        />
      ) : (
        <div
          aria-hidden
          className={`${photoClass} flex items-center justify-center bg-gradient-to-br from-orange-300 to-orange-500 text-3xl font-bold text-white`}
        >
          {name.charAt(0)}
        </div>
      )}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
        <p className="max-w-[17rem] text-balance text-sm leading-relaxed text-muted">
          {bio}
        </p>
      </div>
    </header>
  );
}
