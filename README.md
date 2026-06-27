# 케이엠경영컨설팅 홈페이지

Next.js 기반의 상담 전환용 MVP 웹사이트입니다.

## 주요 기능

- 메인 화면, 서비스 소개, 컨설팅 안내, 회사 소개, 상담 문의, 오시는 길
- 카카오톡, 이메일, 인스타그램, 블로그, 네이버 지도 링크
- Supabase `consultation_inquiries` 테이블에 상담 문의 저장

## 개발

```bash
npm install
npm run dev
```

로컬 주소:

```text
http://127.0.0.1:3000
```

## 환경변수

`.env.local`에 아래 값을 설정합니다.

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```
