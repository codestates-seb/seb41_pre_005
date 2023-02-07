## 💻 StackOverFlow Clone
CodeStates 41기 Pre-Project 05 StackOverFlow 클론 코딩
- [배포 주소](http://stackoverflowclone.s3-website.ap-northeast-2.amazonaws.com/questions)
- 프로젝트 기간: 2022.12.15 ~ 2023.01.02

<br>

## 📌 팀소개
👨‍👨‍👦‍👦👩‍👦5남 1녀

|김형진|박승철|문재웅|강호수|박우진|김지현|
|:--:|:--:|:--:|:--:|:--:|:--:|
|<img width="140px" height="140px" src="https://user-images.githubusercontent.com/111180375/210194653-db128c51-b09b-4a42-8012-4bcdfdecfd2b.png">|<img width="140px" height="140px" src="https://user-images.githubusercontent.com/111180375/210195387-1bd0cbb1-f83b-4c72-b385-1bcf6ee0f246.png">|<img width="140px" height="140px" src="https://user-images.githubusercontent.com/111180375/210195124-375e3d90-bf48-4f58-aa57-f1e05ebd4d06.png">|<img width="140px" height="140px" src="https://user-images.githubusercontent.com/111180375/210194880-e66d3fcf-4942-498b-b493-acb78d1ebe5b.png">|<img width="140px" height="140px" src="https://user-images.githubusercontent.com/111180375/210194930-22b263cc-e62a-4051-a713-fadaec6be23b.png">|<img width="140px" height="140px" src="https://user-images.githubusercontent.com/111180375/210195435-ada5f804-0ba8-423c-b838-10cc3ed1d96c.png">|
|FE(Captain)|FE|FE|BE|BE|BE|
|[koreadinosaur](https://github.com/koreadinosaur)|[DPDPO](https://github.com/DPDPO)|[mjwoong](https://github.com/mjwoong)|[hosoo3513](https://github.com/hosoo3513)|[GGOOPARK](https://github.com/GGOOPARK)|[7ihyun](https://github.com/7ihyun)|

<br>

## 📌 기술 스택
### 프론트엔드
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logoColor=black"> <br> <img src="https://img.shields.io/badge/Axios-181717?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### 백엔드
<img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"> <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"> <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white"> <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white"> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> <br>
<img src="https://img.shields.io/badge/Mysql-4479A1?style=for-the-badge&logo=Mysql&logoColor=white"> <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json web tokens&logoColor=white">

<br>

## 📌 커밋 규칙
|이름|내용|
|:--:|:--:|
|feat| 새로운 기능 추가|
|fix| 버그 수정|
|docs| 문서 수정|
|style| 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우|
|refactor| 코드 리팩토링|
|test| 테스트 코드|
|chore| 빌드 업무 수정, 패키지 매니저 수정|

<br>

## 📌 구현 기능

### 1. 회원가입
<img src="https://user-images.githubusercontent.com/91445593/210200593-7224c8dc-01b5-4ea1-9d10-87adf6a40c23.gif" width="650" height="500"/>
✔ 닉네임, 이메일, 패스워드를 입력해서 회원가입할 수 있습니다. <br>
✔ 회원가입 성공 시 모달창에 메시지가 출력됩니다. <br>
✔ 닉네임,이메일, 패스워드가 조건에 부합하지 않은 채 회원가입 시도시, 메시지가 출력됩니다.

-----

### 2. 로그인
<img src="https://user-images.githubusercontent.com/91445593/210200599-0ffa4724-f5b4-456c-8d35-ddc557f8e107.gif" width="650" height="500"/>
✔ 회원가입에 성공한 이메일과 패스워드를 입력해서 로그인 할 수 있습니다. <br>
✔ 로그인 실패 시, 모달창에 메시지가 출력됩니다. <br>
✔ 로그인 성공 시 최초화면에 진입합니다.

-----

### 3. top questions 페이지
<img src="https://user-images.githubusercontent.com/91445593/210200605-56e1ecbc-4d84-4179-b2e3-07ec18dbe7aa.gif" width="650" height="500"/>
✔ Home에서 Top Questions을, Questions에서 All Questions을 볼 수 있습니다. <br>
✔ top Question 페이지는 질문의 view를 기준으로 내림차순으로 질문 30개를 보여줍니다. <br>
✔ 질문의 제목을 클릭하여 질문 상세 페이지로 이동할 수 있습니다. <br>
✔ 각 질문의 조회수, 투표수, 답변수, 질문자, 질문 시간을 볼 수 있습니다. <br>


-----

### 4. questions 페이지
<img src="https://user-images.githubusercontent.com/91445593/210200608-98684235-f0a4-449d-b6b4-53458aee2a39.gif" width="650" height="500"/>
✔ questions 페이지당 질문 15개를 볼 수 있고, view, vote, time을 기준으로 정렬할 수 있습니다. <br>
✔ 검색창에서 질문을 검색할 수 있습니다. <br>
✔ 페이지네이션: 각 페이지를 이동할 수 있습니다. <br>
✔ 페이지 상단에는 질문의 개수가 출력됩니다. <br>

-----

### 5. tags 페이지
<img src="https://user-images.githubusercontent.com/91445593/210200610-1ec71241-55d8-4c00-bbed-58b0fc561a40.gif" width="650" height="500"/>
✔ 등록된 태그의 종류와 각 태그의 설명을 확인할 수 있습니다.

-----

### 6. 질문 작성
<img src="https://user-images.githubusercontent.com/91445593/210200611-d40fa6a1-175c-42a1-b7bb-2f9528ca2328.gif" width="650" height="500"/>
✔ 질문을 작성할 수 있습니다. <br>
✔ 20자 이상 작성하지 않으면 문구가 뜨면서 게시물 등록이 불가능합니다. <br>
✔ 태그를 등록할 수 있습니다.

-----

### 7. 질문 수정
<img src="https://user-images.githubusercontent.com/91445593/210200616-9c5279bd-c261-4384-a8d2-d3ce859caaa0.gif" width="650" height="500"/>
✔ edit 버튼을 누르게 되면 수정 창으로 넘어갑니다. <br>
✔ 내용의 경우 수정이 필수적입니다. <br>
✔ 수정되지 않았을 시에는 'Edit is required' 문구가 뜨며 저장되지 않습니다. <br>
✔ Tags 또한 수정이 가능합니다.

-----

### 8. 답변(댓글) 기능 & 투표(추천)
<img src="https://user-images.githubusercontent.com/91445593/210200627-053348d1-156b-42e6-bee6-be8b5eb8fa0b.gif" width="650" height="500"/>
✔ 이미 올라온 질문에 답변을 달 수 있습니다. <br>
✔ 답변은 여러 개 달 수 있으며, 질문 개수가 위에 출력됩니다. <br>
✔ 한명의 user는 한개의 투표만 할 수 있습니다. <br>
✔ 투표는 질문과 답변에 모두 가능합니다. <br>
✔ 답변 또한 질문과 같이 수정, 삭제가 가능합니다.

-----

### 9. my page
<img src="https://user-images.githubusercontent.com/91445593/210200636-d4563154-4f33-48db-89e2-6e3a1fe3ed57.gif" width="650" height="500"/>
✔ 로그인 유저의 이름 조회, 생성 날짜 조회 , 질문 등록 수 조회 ,답변 등록 수 조회를 할 수 있습니다.

-----

### 10. 질문 상세 페이지
<img src="https://user-images.githubusercontent.com/91445593/210200638-6b7f331d-9320-43e3-bc95-c271f9f17665.gif" width="650" height="500"/>
✔ 질문 상세 페이지에서 댓글 삭제 , 질문 추천 기능 , 질문 삭제를 할 수 있습니다.

-----

### 11. 로그아웃
<img src="https://user-images.githubusercontent.com/91445593/210200643-3dcbd052-9590-425a-b3e7-118bde47a84f.gif" width="650" height="500"/>
✔ Header의 우측  말풍선 아이콘을 누른 후 로그아웃을 누르면 로그아웃을 할 수 있습니다. 


 

