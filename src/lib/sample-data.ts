export type Profile = {
  name: string;
  bio: string;
  /** 프로필 사진 URL. 없으면 이름의 첫 글자를 표시합니다. */
  photoUrl?: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// 보여주기용 더미 값입니다. 실제 내용과 사진은 나중에 교체하세요.
// (사진은 public/ 폴더에 파일을 넣고 "/파일명" 으로 지정하면 됩니다.)
export const profile: Profile = {
  name: "백가네",
  bio: "세계 최강 바이브코더",
  photoUrl: "/dummy-profile.svg",
};

export const links: LinkItem[] = [
  { id: "link-1", title: "링크 1", url: "https://example.com/1" },
  { id: "link-2", title: "링크 2", url: "https://example.com/2" },
  { id: "link-3", title: "링크 3", url: "https://example.com/3" },
];
