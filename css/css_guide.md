## 1. position:relative
- **position:relative**를 이용하는 배치는 실제로 거의 사용되지 않음

## 2. absolute는 'position 상' 부모 요소를 기준으로 배치함. 무조건 부모 요소를 기준으로 배치하는 게 아님.
- 부모 요소의 position이 static이면 'position 상' 부모 요소가 아님. 
- 부모 요소의 position이 relativeaus 'position 상' 부모 요소임을 의미.
- 'positon:relative'의 역할은 'position:absolute'를 가진 요소의 기준 역할. (relative가 제일 무난함)
- 'position:static'은 없는 거랑 마찬가지

## 3. position이 있는 요소가 요소 쌓임의 우선 조건이다. (더 위에 쌓인다.)

## 4. flex
- flex: 자식 요소 1차원 배열
- flex-direction: 부모 요소에 쓰이며, 자식 주축 변경(row, row-reverse, column, ..)
- justify-content: 부모 요소에 쓰이며, 자식 수평 정렬 (center, space-between, left, right, ..)
- align-content: 부모 요소에 쓰이며, 자식 수직 정렬 (stretch, center, flex-start, flex-end, ..)
- flex-wrap: 부모 요소에 쓰이며, 줄바꿈 처리(wrap)
- align-content: 부모 요소에 쓰이며, 교차 축(수직)의 여러 줄 정렬 (그냥 싹 다 몰아서 정렬함)
- align-items: 부모 요소에 쓰이며, 교차 축(수직)의 한 줄 정렬 (각 줄마다 정렬함)
---
- order: 자식 요소에 쓰이며, 순서를 정렬함
- flex-grow: 자식 요소에 쓰이며, 증가 너비 비율을 결정함 (아이템이 있는 공간을 제외한 공간을 채울 비율)
- flex-shrink: 자식 요소에 쓰이며, 감소 너비 비율을 결정함 (flex-shrink:0으로 설정하면 container의 width가 작아질 때 같이 작아지는 걸 막을 수 있다.)
- flex-basis: 자식 요소에 쓰이며, 공간을 배분하기 전 기본 너비 (요소는 안의 content가 있어서 flex-grow 등을 설정했을 때 요소의 너비가 그와 정확하지 않다. 따라서 flex-basis:0으로 설정하여 시각적으로 정확하게 맞춘다.)

## 5. 변환함수(transform)
- translate(x,y): 이동(x축, y축)
- translateX(x): 이동(x축)
- translateY(y): 이동(y축)
- scale(x,y): 크기(x축, y축)
- rotate(degree): 회전
- skewX(x): 기울임(x축)
- skewY(y): 기울임(y축)

- rotateX(x): 회전(x축)
- rotateY(y): 회전(y축)
- perspective(n): 원근법(거리)
  - 원근법은 가장 앞에 작성해야 함
  - perspective는 속성일 수도, 함수일 수도 있다.
    - 속성일 때는 자식 요소에 transform을 주고, 부모 요소에 perspective를 줌
    - 함수일 때는 자식 요소에 transform을 주고 거기에 perspective를 줌

## 6. box-sizing: border-box;
- padding, border-radius 등을 설정하면 elem의 크기가 영향을 받는데, 이러한 영향을 없애줌

## 7. transition
- 특정 속성을 에만 transition을 넣고 싶으면 맨 앞에 '해당 속성'을 쓴다. 여러 개를 달리 주려면 ,로 구분(ex. transform .1s, background-color 2s)

## 8. background-
- background-repeat: 배경 반복
- background-size: 배경 사이즈
- background-image: url("사진 주소")
- background-position: 배경 위치

## 9. cursor: pointer
커서가 손가락 모양으로 바뀜

## 10. 비율로 크기 조절하기
```css
.container {
  width: 100px;
}
```

```css
.container .item {
  width: 100%;
  height: 0;
  padding-top: xx%
}
```

- .container 클래스 객체의 height가 width * xx임
(16:9 하려면 xx에 56.25 넣으면 됨)

## 11. 수직정렬 배치
```css 
  div {
  height: 75px;
  position: absolute; (조건)
  top: 0; (조건)
  bottom: 0; (조건)
  margin: auto 0; (조건)
}
```

## 12. 수평정렬 배치
``` css  
div {
  width: 75px;
  position: absolute; (조건)
  left: 0; (조건)
  right: 0; (조건)
  margin: 0 auto; (조건)
}
```