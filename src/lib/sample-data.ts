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
  /** 제목 앞에 표시할 아이콘 종류 */
  icon?: "github" | "blog" | "mail";
};

// 보여주기용 더미 값입니다. 실제 내용과 사진은 나중에 교체하세요.
// (사진은 public/ 폴더에 파일을 넣고 "/파일명" 으로 지정하면 됩니다.)
export const profile: Profile = {
  name: "파인라임",
  bio: "풀스택 개발자 : 요즘에는 AI개발에 관심이 많아요",
  photoUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "link-1", title: "깃허브", url: "https://github.com/100jube-lgtm", icon: "github" },
  { id: "link-2", title: "블로그", url: "https://example.com/2", icon: "blog" },
  { id: "link-3", title: "이메일", url: "https://example.com/3", icon: "mail" },
];
