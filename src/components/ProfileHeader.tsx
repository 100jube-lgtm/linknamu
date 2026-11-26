import type { Profile } from "@/lib/sample-data";

export default function ProfileHeader({ name, bio, photoUrl }: Profile) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      {photoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photoUrl}
          alt={`${name} 프로필 사진`}
          className="h-28 w-28 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-600 text-3xl font-bold text-white"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
