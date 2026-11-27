import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/lib/sample-data";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-12 px-7 py-16 sm:px-6 sm:py-24">
      {/* 상단: 원형 프로필 사진 + 이름 + 한줄 소개 */}
      <ProfileHeader {...profile} />

      {/* 하단: 링크카드 3개를 세로로 배치 */}
      <LinkList links={links} />
    </main>
  );
}
