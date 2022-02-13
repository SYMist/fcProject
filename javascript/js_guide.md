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