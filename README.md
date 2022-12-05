# Maldives_In_Mojito
<img src="public/로고.png" width="400">

#
 
### 배포 서버 주소
[사이트 주소💥](https://maldivesinmojito.netlify.app/)  
[백엔드 서버 주소💥](https://mojitomalajo.herokuapp.com/)  
[서버 배포 깃헙주소💥](https://github.com/A-Maldive-in-the-Mojito/backdeploy)

#

### 프로젝트 개요
🍷 칵테일에 대해 잘 알고 계신가요?  
기분좋게 친구와 술을 마시러 바에 갔을 때, 어떤 술을 골라야 할 지 몰라 당황하신 적이 있나요?  
수많은 종류의 칵테일 중, 나에게 맞는 칵테일이 무엇인지 우리는 어떻게 알 수 있을까요?  
공부하거나 열심히 찾아보고 맛보지 않는 한 우리는 '내 칵테일' 이라고 부를 만한 음료를 찾기 어려울 것입니다.    
그래서 저희는 누구나 쉽게 칵테일에 대해 검색하고,  
정보를 얻을 수 있는 사이트를 만들고자 했습니다.  
분위기, 재료, 당도, 알콜세기, 이름 등의 여러 조건으로 쉽게 검색 가능한 칵테일 사이트!  
**<u>"모히또에서 몰디브 한 잔"</u>**  를 소개합니다.✨


#

### 서비스 이미지 
###### 🍸 메인페이지의 필터섹션
<img src="public/필터.png" width="500">  

###### 🍸 칵테일 검색
<img src="public/검색레몬.png" width="500">

###### 🍸 즐겨찾기 (찜) 한 칵테일
<img src="public/내칵테일창고.png" width="500">

###### 🍸 칵테일 상세 페이지
<img src="public/상세페이지.png" width="500">



#
### 기술스택
#### 🔥 프론트

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">


<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">

#### 🔥 백엔드

<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"> 
<img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white"> 
<img src="https://img.shields.io/badge/Selenium
-43B02A?style=for-the-badge&logo=Selenium
&logoColor=white"> 


#### 🔥 DB및 배포 툴

<img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white">
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
<img src="https://img.shields.io/badge/Amazon S3
-569A31?style=for-the-badge&logo=Amazon S3
&logoColor=white">

#### 🔥 협업 툴
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">

#### 🔥 디자인
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">

#

## 구현 기능 

노션링크첨부~!~!
  #### 🎈프론트
  * 카카오 SDK 로그인  
      * 회원정보 저장 및 새로고침 시에도 로그인 유지 
  * 검색 기능
      * 필터 검색   
      => 맛, 재료, 도수, 당도의 4가지 조건 검색 
      * 타이핑 검색  
      => 대,소문자 구분 없이 이름,재료에 따른 검색 가능
      * 해쉬태그 검색  
      => 클릭한 해쉬태그 값에 속한 음료 검색 및 렌더링
  * 칵테일 즐겨찾기 (좋아요)  
      * '내 칵테일 창고' 에서 확인가능
      * 좋아요 클릭 및 취소에 따른 즉시 렌더링
  * 랜덤 추천 기능
  => 랜덤의 데이터 중복제거 및 렌더
  
  * 반응형 웹페이지


### 🎈백
* 칵테일 정보 크롤링
* DB관리
* API 생성



#

## 파일구조  
C:.  
│ App.css  
│ App.js  
│ App.module.css  
│ index.css  
│ index.js  
│ reportWebVitals.js  
│ seleniumtENtoKR.py  
│  
├─component  
│　  │  Card.js  
│　  │  Card.module.css  
│　  │  Desc.js  
│　  │  Desc.module.css  
│　  │  Find.js  
│　  │  Find.module.css  
│　  │  Header.js  
│　  │  Header.module.css  
│　  │  Home.js  
│　  │  Login.js  
│　  │  Storage.js  
│　  │  Storage.module.css  
│　  │  
│　  └─main_page  
│　　　　         Filter.js  
│　　　　          Main.js  
│　　　　          Main.module.css  
│　　　　          Top100.js  
│            
├─context  
│　　      APIContext.js  
│        
└─redux  
    　　    getEmail.js  
    　　    getEmoji.js  
    　　    getStore.js  
    　　    root-reducer.js  
    　　    store.js  
    　　    
#
## 문제해결 
### 자세한 과정은  [📍노션링크](https://inexpensive-language-04b.notion.site/Maldives-in-Mojito-ed8d32f29da9481f8a8449e5b7a610a7) 를 참조해주시기 바랍니다🎡
  * 첫 로딩페이지 속도 향상
  * 회원가입으로 즐겨찾기(좋아요) 기능 구현.
  * 값이 들어오지 않은 상태(데이터가 크기에)에서 초기 화면 렌더를 어떻게 구현했는지.
  * redux-persist 로 회원정보 redux 및 local storage에 저장
(새로고침 혹은 유효기간 내 재접속 시 다시 로그인 할 필요 없음.)
  * 여러 개의 데이터 값에서 중복 제거한 5개의 값 선별.
#
## 이후의 계획
   * 모바일 반응형 디자인
   * 첫 메인페이지 로딩속도 개선  
  => 백엔드에서 20개의 칵테일 데이터를 끊어서 전송하는 API 코드 작성  
  혹은 Next.js 를 통해 SSR+CSR 방식의 페이지 구현
   * 간단한 칵테일 제조 게임(unity) 구현.  
   => 선택한 재료 조합으로 만들 수 있는 칵테일 정보 제공