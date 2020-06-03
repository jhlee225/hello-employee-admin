# HELLO-EMPLOYEE Admin page

2020.03.23 ~ 2020.04.24

첫 풀스택 프로젝트를 마치고 처음으로 팀원들과 함께한 프로젝트

직원이 출퇴근을 하고 이를 확인 할 수 있는 직원 출퇴근 시스템의 관리자 페이지를 만들었습니다.

직원정보의 등록과 관리를 할 수 있으며 직원의 지문을 등록할 수 있습니다.

## 90Factory Team Project

팀 프로젝트 전체의 세부 내용 및 개요는 아래 주소에서 확인 하실 수 있습니다.

[팀프로젝트 전체 깃허브](https://github.com/90factory/3rd_employee)

## 개발

- Create-react-app을 사용한 React 웹 앱 개발

- 백엔드 개발자와의 협업 - Swagger 로 API 문서를 공유

- Redux를 사용하여 Component의 State관리

- Axios 모듈화 하여 Ajax를 통한 서버 요청

## 상세

### React 아키텍쳐

<img src="./ReadMe/React.jpg">

### `Container - Presenter`

Component 를 logic과 action을 관리하는 Container 와 view 를 관리하는 Presenter 로 나누어 관리 하였습니다.

<img src="./ReadMe/Common.jpg">
또한 자주 사용하는 Component 는 Common Component 에 만들어 놓고 재 사용 하였습니다.

### `Swagger`

<img src="./ReadMe/Apis.png">
<img src="./ReadMe/Swagger.png">

BackEnd에서 열어준 API들을 Swagger로 서버 연결 전에 확인하여 코드를 쉽게 짤 수 있었습니다.

### `Redux`

<img src="./ReadMe/Redux.jpg">
Redux를 사용하여 Store 에서 Component의 state를 관리하였습니다.

### `Axios Module`

<img src="./ReadMe/Axios.jpg">
Axios를 모듈화 하여 Ajax 로 서버와 통신하였습니다.
