# bokwang.dev

Personal homepage (academic / lab style), English with Korean notes.
개인 소개 홈페이지 (연구실 · 교수님 홈페이지 스타일), 영어 + 한국어 병기.

## Structure / 구조

```
site/              # static files / 정적 파일
  index.html       # all content lives here / 모든 내용은 여기서 수정
  assets/          # css, js, images
Dockerfile         # nginx (non-root, port 8080)
nginx.conf
.github/workflows/docker.yml   # build & push to GHCR
```

## Edit content / 내용 수정

Open `site/index.html` and replace the `TODO` placeholders.
`site/index.html`을 열어 `TODO` 표시된 예시 내용을 본인 정보로 바꾸면 됩니다.

- English: normal text / 영어: 일반 텍스트
- Korean: `<span class="ko">...</span>` (gray, small). The `한/EN` button hides it.
  한국어는 `ko` 클래스로 작성 (회색 작은 글씨). 상단 `한/EN` 버튼으로 숨김 가능.
- Profile photo: replace `site/assets/profile.svg` (or add a `.jpg` and update the `src`).
  프로필 사진: `site/assets/profile.svg` 교체.

## Run locally / 로컬 실행

```bash
docker build -t bokwang.dev .
docker run --rm -p 8080:8080 bokwang.dev
# open http://localhost:8080
```

## Deploy / 배포

Pushing to `main` builds the image and pushes it to GHCR.
`main`에 push하면 GitHub Actions가 이미지를 빌드해 GHCR에 올립니다.

```
ghcr.io/azxcv24/bokwang.dev:latest     # latest main / 최신 main
ghcr.io/azxcv24/bokwang.dev:sha-xxxxxxx
ghcr.io/azxcv24/bokwang.dev:1.0.0      # when you push tag v1.0.0 / v1.0.0 태그 push 시
```

On the server / 서버에서:

```bash
docker pull ghcr.io/azxcv24/bokwang.dev:latest
docker run -d --name bokwang --restart unless-stopped -p 80:8080 ghcr.io/azxcv24/bokwang.dev:latest
```

> If the package is private, run `docker login ghcr.io` first, or make the package public in GitHub → Packages.
> 패키지가 private이면 `docker login ghcr.io` 먼저 하거나, GitHub Packages 설정에서 public으로 변경.

## Commit convention / 커밋 규칙

`[tag] English summary / 한국어 요약`

| Tag | Use / 용도 |
|---|---|
| `[feat]` | new feature or section / 기능·섹션 추가 |
| `[fix]` | bug fix / 버그 수정 |
| `[docs]` | README, content text / 문서·내용 수정 |
| `[style]` | CSS, design / 디자인 수정 |
| `[ci]` | GitHub Actions, Docker / 빌드·배포 |
| `[chore]` | misc / 기타 |
