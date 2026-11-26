# 링크나무 (link in bio 서비스)

## 프로젝트 개요

Linktree처럼 내 몯ㄴ 링크를 한 페이지에 모아두고 하나의 URL로 공유할 수 있는 서비스입니다.

## 기술 스택
- next.js 16 (app router)
- tailwind css
- mongoDB atlas (클릭수 저장)
- vercel (배포)

## 주요 기능
- 프로필 표시(이름, 소개, 사진)
- 링크카드 목록
- 링크클릭수 집계

## 코드 규칙
- typescript사용
- 컴포넌트는 src/components/아래에 작성
- 환경변수는 .env.local에 저장(절대 커밋하지 않음)
- 모바일 우선 반응형 디자인