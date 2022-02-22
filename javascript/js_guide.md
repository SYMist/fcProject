## 1. forEach 사용예
  - boxEls.forEach(function (boxEl) {
      boxEl.classList.add('')
    })

## 2. scroll함수
window.addEventListener('scroll', _.throttle(function () {
  console.log('scroll');
}, 300));  
-  scroll에 함수 쓸 때 많이 쓰임
- _.throttle(함수, 시간) 

## 3. gsap.to 사용법
gsap.to(요소, 지속시간, 옵션);

## 4. callback 함수
함수의 인수로 사용되는 함수를 의미
예)
```javascript
function timeout(callback) {
  setTimeout(() => {
    console.log('HI!')
    callback()
  }, 3 * 1000)
}
timeout(() => {
  console.log('Done!')
})
```

## 5. Prototype
https://medium.com/@bluesh55/javascript-prototype-이해하기-f8e67c286b67

## 6. this
- 일반(Normal) 함수는 호출 위치에 따라 this 정의!
- 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!
예)
```javascript
const heropy = {
  name: 'Heropy',
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name); <- 호출 위치 (자신이 선언된 위치의 함수 범위에서 this가 정의되기 때문에 화살표 함수가 선언된 그 영역의 함수 범위를 this로 참조)
  }
}
heropy.normal() <- 호출 위치 (this가 호출 위치에서 정의되니까 normal이라는 메서드가 실행되는 호출위치에 연결된 객체의 인스턴스에 연결됨)
//Heropy
heropy.arrow()
//undefined

const amy = {
  name: 'Amy',
  normal: heropy.normal,
  arrow: heropy.arrow
}

amy.normal() <- 호출 위치 ()
//Amy
amy.arrow()
//undefined
```
```javascript
const timer = {
  name: 'Heropy',
  timeout: function() {
    // setTimeout(함수, 시간)
    setTimeout(function() {
      console.log(this.name) 
    }, 2 * 1000)
  }
}
timer.timeout(); -> 결과 없음
//일반(normal)함수이기 때문에 this는 setTiimeOout의 내부 로직으로 callback이 들어가서 어디선가 실행이 됨. this.name이 timer의 name 부분으로 지칭해서 출력하길 원했다면 이렇게 하면 안됨. console.log(this.name)은 setTimeout의 로직 어딘가에서 실행되기 때문. -> 화살표 함수로 바꿔야 한다
```
고친 부분
```javascript
const timer = {
  name: 'Heropy'
  timeout: function () {
    setTimeout( () => {
      console.log(this.name)
    }, 2 * 1000)
  }
}
//화살표 함수가 this를 정의할 때는 자신이 만들어진 그 함수 범위에서 정의되기 때문. 화살표 함수를 감싸고 있는 추가적인 함수범위에서 정의된다는 것. => setTimeout이나 setInterval 등 timer 함수를 사용할 때는 콜백으로 일반함수보다는 화살표함수를 쓰는 게 활용도가 더 높음.