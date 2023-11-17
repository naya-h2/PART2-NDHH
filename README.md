# 💌 Rolling by NDHH

추억의 롤링 페이퍼를 웹 상에서 즐겨보세요!

> 코드잇 스프린트-프론트엔드 1기 PART2 - 7팀<br>
> 개발기간: 2023. 11. 05 ~ 2023. 11.16

배포 URL : https://ndhh.netlify.app/

## 💡 프로젝트 소개

- Rolling은 누구나 쉽게 롤링 페이퍼를 만들고, 작성할 수 있는 웹 플랫폼입니다.
- `롤링 페이퍼 만들기` 버튼을 눌러 롤링 페이퍼를 직접 만들 수 있습니다.
- 롤링 페이퍼에 메세지를 직접 작성하거나 삭제할 수 있습니다.

## 👨‍👩‍👧‍👧 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/Nico1eKim">
      <img width=100px src="https://avatars.githubusercontent.com/u/102296721?v=4" alt=""/><br />
      <sub><b>[FE] 김나은</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/kde98892">
      <img width=100px src="https://avatars.githubusercontent.com/u/144599629?v=4" alt=""/><br />
      <sub><b>[FE] 김다은</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/han-kimm">
      <img width=100px src="https://avatars.githubusercontent.com/u/78120157?v=4" alt=""/><br />
      <sub><b>[FE] 김하늘</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/naya-h2">
      <img width=100px src="https://avatars.githubusercontent.com/u/103186362?v=4" alt=""/><br />
      <sub><b>[FE] 안희원</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## ⚙️ 기술 스택

<img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

## 🧩 역할 분담

자세한 역할 분담은 /docs 파일을 확인해주세요!

### 🤩 김나은

- UI
  - 공통 컴포넌트 : 버튼, Text Field
  - 페이지 : 롤링페이퍼 만들기 페이지, 404 페이지
- 기능
  - 롤링페이퍼 검색, 롤링페이퍼 캐러셀 더블 클릭 기능, 스켈레톤 기능

### 😚 김다은

- UI
  - 공통 컴포넌트 : 헤더
  - 페이지 : 홈페이지, 롤링페이퍼 리스트 페이지
- 기능
  - 롤링페이퍼 카카오톡 및 URL 공유, 롤링페이퍼 리스트 불러오기, 롤링페이퍼에 이모지 추가 기능

### 😏 김하늘

- UI
  - 공통 컴포넌트 : 카드 본문 모달, 이모티콘 뱃지, 토스트, 옵션
  - 페이지 : 메세지 카드 작성 페이지
- 기능
  - 롤링페이퍼 등록, 메세지 카드 등록, 에디터 관련 기능, 뒤로가기 버튼

### 😖 안희원

- UI
  - 공통 컴포넌트 : 메세지 카드, 롤링페이퍼 카드, 비밀번호 및 삭제 확인 모달
  - 페이지 : 롤링페이퍼 페이지, 롤링페이퍼 수정 페이지
- 기능
  - 메세지 카드 불러오기, 메세지 카드 삭제하기, 수정 페이지 접근 제한 설정

## 🎲 페이지별 기능

### 홈페이지
<img width="720" alt="image" src="https://github.com/han-kimm/PART2-NDHH/assets/103186362/a324bef1-baff-4790-bc07-58019086a0b0">

- **[ 구경해보기 ]** 버튼을 눌러 롤링페이퍼 리스트 페이지로 이동할 수 있습니다.
- **[ 롤링 페이퍼 만들기 ]** 버튼을 눌러 롤링페이퍼 만들기 페이지로 이동할 수 있습니다.

### 롤링페이퍼 리스트 페이지
![ezgif com-video-to-gif](https://github.com/han-kimm/PART2-NDHH/assets/103186362/edb7043e-ebae-43e3-afde-0b7a51463009)

- 현재 만들어진 롤링페이퍼들을 인기순, 최신순으로 구경할 수 있습니다.
- PC버전의 경우, 캐러셀을 이용해 롤링페이퍼 목록을 구경할 수 있습니다.
- 캐러셀의 화살표를 한 번 클릭하면 카드를 하나씩 넘길 수 있고, 더블 클릭하면 카드의 맨 앞 또는 맨 끝으로 이동할 수 있습니다.
- 검색 기능을 통해 원하는 롤링페이퍼를 직접 찾아볼 수 있습니다.
- 롤링페이퍼 카드를 누르면 해당 롤링페이퍼 페이지로 이동할 수 있습니다.

### 롤링페이퍼 만들기 페이지
[make_paper.webm](https://github.com/han-kimm/PART2-NDHH/assets/103186362/2fdc9140-538c-438f-9108-ea0b8a5ce44c)

- 받는 사람 이름을 입력합니다.
- 롤링 페이퍼의 표지를 선택합니다. 표지는 기본 옵션으로 주어진 색깔 또는 이미지를 선택할 수 있습니다.
- 이미지를 선택하면 직접 원하는 이미지를 URL 또는 파일로 첨부할 수 있습니다.
- 이후 롤링페이퍼 수정에 필요한 비밀번호를 입력합니다.
- **[ 보내기 ]** 버튼을 눌러 롤링페이퍼를 만들 수 있습니다.

### 롤링페이퍼 페이지

- 해당 롤링페이퍼에 작성된 메시지 카드 목록을 볼 수 있습니다.
- 각 메세지 카드는 **[ 더보기 ]** 를 눌러 전체 내용을 확인할 수 있습니다.
- 첫 번째 카드의 **[ + ]** 버튼을 눌러 메세지 카드를 작성하는 페이지로 이동할 수 있습니다.
- 편집하기 버튼을 누르고, 초기에 설정했던 비밀번호를 입력하면 롤링 페이퍼 수정 페이지로 이동할 수 있습니다.
- url을 이용해서 수정 페이지로 직접 이동할 수 없습니다.
- 헤더의 이모지 아이콘을 눌러 해당 롤링페이퍼에 이모지를 추가할 수 있습니다.
- 헤더의 공유 아이콘을 눌러 카카오톡으로 해당 롤링페이퍼를 공유하거나, URL로 공유할 수 있습니다.

### 롤링페이퍼 수정하기 페이지

- 메세지 카드의 쓰레기통 버튼을 눌러 삭제할 메세지 카드들을 선택할 수 있습니다.
- 선택된 메세지 카드를 다시 누르면 선택 취소가 가능합니다.
- 삭제할 메세지 카드를 선택하고, **[ 저장하기 ]** 버튼을 누르면 선택한 카드들이 삭제됩니다.
- **[ 페이지 삭제하기 ]** 버튼을 누르면 해당 롤링페이퍼를 삭제할 수 있습니다.

### 카드 작성하기 페이지

- 보내는 사람 이름을 입력합니다.
- 기본 프로필 사진을 선택하거나 원하는 프로필 사진을 직접 추가할 수 있습니다.
- 관계 태그를 선택합니다.
- 메세지 카드에 작성할 메세지를 입력합니다.
- **[ 보내기 ]** 버튼을 눌러 메세지 카드를 보낼 수 있습니다.

### 404 페이지
<img width="720" alt="image" src="https://github.com/han-kimm/PART2-NDHH/assets/103186362/cccadff3-9b6e-4fb7-b74e-5f00073b1ec3">

- 존재하지 않는 url에 접근했을 경우 해당 페이지가 보여집니다.
- 데이터가 존재하지 않는 ID의 롤링페이퍼에 url로 직접 접근했을 시 해당 페이지로 연결됩니다.
- 롤링페이퍼 수정하기 페이지를 비밀번호를 입력하지 않고, url로 직접 접근했을 시 해당 페이지로 연결됩니다.

## 🍔 프로젝트 후기

### 🤩 김나은

후기를 작성해주세요.

### 😚 김다은

후기를 작성해주세요.

### 😏 김하늘

후기를 작성해주세요.

### 😖 안희원

후기를 작성해주세요.
