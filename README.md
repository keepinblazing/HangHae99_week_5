# 프로젝트 가이드

### 모든 페이지는 반응형으로 작성 할 것.
### 머터리얼 ui 같은 라이브러리 사용가능.
### Redux 외의 MobX, contextAPI 등 다른 상태관리 라이브러리 사용가능.

# 구현해야 될 기능

### 1. 게시글 

   - 목록 가져오기
      - 게시글 목록 노출
      - 게시글은 작성자, 작성시간, 이미지 미리보기, 텍스트 내용으로 구성
      - 게시글 클릭시 상세페이지로 이동
      - 게시글 상세페이지는 게시글 레이아웃에 맞춰 이미지, 텍스트 위치 조절해서 노출
   - 추가하기 (+이미지 업로드하기)
       - 3가지 레이아웃 중 선택
          - 1. 이미지가 오른편에, 텍스트는 왼편에 위치한 레이아웃
          - 2. 이미지가 왼편에, 텍스트는 오른편에 위치한 레이아웃
          - 3. 텍스트가 위에, 이미지는 아래에 위치한 레이아웃
       - 레이아웃 선택 시, 게시글 레이아웃(모양새)대로 보이도록 할 것
       - 텍스트, 이미지 중 입력 안된 게 있다면 게시글 작성 버튼 비활성화
       - 작성 완료 시 메인 페이지로 이동
   - 삭제하기 
   - 수정하기
   
### 2. 회원가입하기
   - 이메일 형식, 비밀번호 체크 할 것
   
### 3. 로그인하기  
   - 이메일, 패스워드 미기입 시 로그인 버튼 활성화 막을 것
   
### 4. 파이어베이스 or S3로 배포

# 추가로 구현하면 좋을 기능

### 메인 페이지 (게시글 목록 페이지)
   - 무한 스크롤
   - 좋아요 기능 : 게시글 중 좋아요버튼(분홍색 하트 버튼)을 누르면 [좋아요]를 +1한다. 다시 누르면 분홍색 하트가 회색 하트가 되고 좋아요가 -1개 된다.
### 이미지 여러장 업로드 (상세 페이지에서는 슬라이더로 이미지 넘겨가며 보도록 처리)
### 알림 기능 만들기 (+알림페이지도 추가)
### 좋아요 눌렀을 때 게시글 위로 하트 이미지가 나타났다 사라지게 
