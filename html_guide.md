## 1. ```<a href = '/'> ```
- 해당 요소를 누르면 이 페이지의 메인페이지로 이동하겠다

## 2. img
img는 기본적으로 inline으로 취급되기 때문에 display: block 처리를 해줘야 한다.

## 3. ```<a href="javascript:void(0)"></a>```
- 링크가 들어갈건데 아직 완성이 안됐을 때 쓰는 거

## 4. position:absolute;
이거는 자동으로 display가 block으로 바뀜

## 5. 
top이나 bottom 속성을 사용하지 않아 수직 위치 값이 없다면, 요소의 원래 위치를 그대로 사용함.
만약 position: absolute를 사용했다면 (위치상) 부모 요소를 기준으로 하기 때문에 화면의 뷰포트 좌우 끝까지 늘어날 수 없게 됨.

## 6. BEM(Block Element Modifier)
HTML 클래스의 작명법
- 요소__일부분
- 요소--상태