# Manual Hub
## '2019년 군장병 공개SW 집체교육'(2019.10.21~2019.10.25)


### 1. 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
>아직 안됬음

### 2. 설치안내 ( Project Setup )

#### clone remote space
```
git clone 저장소
```
#### change directory to space
```
cd {clone장소}
```
#### install node_modules
```
npm install
```

### 3. 사용법 ( Getting Started )
 #### Change Directory to remote Place
  ```
  cd {clone space}
  ```
 #### run compiles and local host server
  ```
  npm run serve
  ```
 #### connect to localhost page!


### 4. 파일 정보 및 목록 ( File Manifest )
|디렉토리|파일|설명|
|------|---|---|
|public/image|0~3.jpg|사용자 그룹별 이미지|
||그외 .jpg 파일|MOCKUP 데이터에 필요한 사진|
|src|App.vue| Vue 컴포넌트들의 Head 컴포넌트|
|src/components|store.js| vuex 글로벌 변수 모음파일 |
||TopHeader.vue|페이지 헤더|
||MainFooter.vue|페이지 푸터|
||**MainContent.vue**|**메인 read 페이지**|
||**NewsContent.vue**|**메인 news 페이지**|
||LoginContent.vue|메인 로그인 페이지|
||SearchPage.vue|read 페이지의 search 페이지|
||SearchTab.vue|search 페이지 검색창|
||SearchList.vue|search 페이지 검색리스트|
||PlusButton.vue|글쓰기 버튼|
||**HistoryPage.vue**| 해당 문서 작업 이력 리스트 ( History 체크 할 경우 search와 교체 )|
||DocumentPage.vue|read 페이지의 문서창|
||ReadHeader.vue|document 페이지의 헤더(제목,수정하기,작성자 등등)|
||CarouselPage.vue|document 페이지의 내용( 문서 열람 )|
||DocumentEditor.vue| 문서 Editor 페이지 ( 수정하기, 글 작성 눌렀을 경우 document페이지와 교체 )|
||EditMode.vue|Editor 페이지의 헤더( 수정하기 눌렀을 경우)|
||WriteMode.vue|글 작성 Header (Plus버튼 눌렀을 경우 ReadHeader 와 교체)|
|src/components/newscomponent|DepartMember.vue|news 페이지 부서원 탭|
||Newnews.vue|news 페이지 최근 추가된 history list를 보여주는 탭|
||RecentRead.vue|news 페이지 읽었던 문서 list를 보여주는 탭|

> 자세한 사항의 소프트웨어 설계서 참조 ( 파일이름 )





### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
