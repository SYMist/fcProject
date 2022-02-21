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