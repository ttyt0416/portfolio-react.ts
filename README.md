# 이 repository 는 https://portfolio-yoon-react.herokuapp.com/ 에 호스팅되어 있습니다.

- 디자인은 html5up.net의 phantom을 참고하였습니다.

## 사용 스택

- react.ts
- react hooks
- scss
- firebase (auth, realtime database)

## 설명

전체적으로 하얀색, 검은색, 분홍색, 붉은색을 주로 사용하고 있으며, hover시 분홍색으로, active시 붉은색으로 변하는 효과를 주로 사용하고 있습니다.
또한 넓이 335px, 758px, 1024px에 브레이크 포인트를 두어 모바일, 태블릿, 데스크탑에 최대한 반응 할 수 있게 하였습니다.

### 홈페이지

이 포트폴리오는 로그인을 하였을때와 하지 않았을 때의 route자체를 나눠서 로그인을 하지 않았을 때엔 홈페이지 및 sign in페이지만 사용 가능하며 사이드메뉴에서 sign in 메뉴를 통해 로그인 및 회원가입 페이지에 들어갈 수 있습니다. 또한 홈페이지의 사각형을 클릭시 예시 페이지로 이동합니다.

### 로그인 및 회원가입

firebase의 authentication을 사용하여 이메일 및 비밀번호 로그인 및 회원가입을 지원하고 있습니다. (테스트 목적으로 이메일 test@test.com 및 비밀번호 testing을 등록해두었습니다.)

### 예시 페이지

문장을 단어별로 map해서 hover시 색이 변화하는 효과를 주었습니다.

### 사이드메뉴 (로그인시)

- Home & Sample1 & Sample2
  홈페이지로 이동합니다
- Community
  커뮤니티 페이지로 이동합니다.
- Sign out
  로그아웃 됩니다.

### 커뮤니티 페이지

firebase의 realtime database및 axios를 활용하여 CRUD시스템을 구축하였으며, 게시물의 수가 많아지면 10개씩 끊어서 pagination되게 하였으며, 우측상단의 검색 기능을 통해 제목 관련한 검색 또한 사용 가능합니다.
