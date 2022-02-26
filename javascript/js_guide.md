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
```
## 7. Class 키워드
```javascript
function User(first, last) {
  this.firstName = first
  this.lastName = last
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}
```
위의 코드는 아래처럼 쓸 수 있다.
```javascript
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
```
## 8. 상속(확장)
class로 객체를 만든다.
```javascript
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}

const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

```
Vehicle 클래스를 상속하는 Bicycle을 만든다.
```javascript
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}

const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)
```
Vehicle 클래스를 상속하고 license 매개변수를 추가한 Car를 만든다.

```javascript
class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('Mercedez-Benz', 4, true)
const daughtersCar = new Car('Porsche', 4, false)
console.log(myCar)
console.log(daughtersCar)
```

## 9. forEach() vs map()
forEach() 예
```javascript
const fruits = ["Apple", "Banana", "Cherry"]

const a = fruits.forEach(function(fruit, index) {
  console.log(`${fruit} - ${index}`)
})
console.log(a)
// undefined
```
map() 예
```javascript
const fruits = ["Apple", "Banana", "Cherry"]

const b = fruits.map(function(fruit, index) {
  console.log(`${fruit} - ${index}`)
})
console.log(a)
// ['Apple no.0', 'Banana no.1', 'Cherry no.2']
```
차이점: map은 인수로 사용하는 callback의 내부에서 반환하는 하나의 데이터를 가지고 새로운 배열을 만들어서 반환함.

## 10. map() vs filter()
map() 예
```javascript
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => {
  return number < 3
})
console.log(a)
// [true, true, false, false]
// 모든 요소에 대한 새로운 배열을 만듦
```
filter() 예
```javascript
const b = numbers.filter(number => {
  return number < 3
})
console.log(b)
// [1, 2]
// 조건을 만족하는 요소에 대한 새로운 배열을 만듦
```
# 11. find()
find() 예시
```javascript
const fruits = ['Apple', 'Banana', 'Cherry']

const a = fruits.find(fruit => {
  return /^B/.test(fruit)
})
console.log(a)
// Banana
```
# 12. push(), unshift()
push() 예시
```javascript
const numbers = [1, 2, 3, 4]
numbers.push(5)
console.log(numbers)
// [1, 2, 3, 4, 5]
// 원본데이터 수정
```
unshift() 예시
```javascript
const numbers = [1, 2, 3, 4]
numbers.unshift(0)
console.log(numbers)
// [0, 1, 2, 3, 4, 5]
// 원본데이터 수정
```
# 13. reverse(), splice()
reverse() 예시
```javascript
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)
// [4, 3, 2, 1]
// ['Cherry', 'Banana', 'Apple']
// 원본데이터 수정
```
splice() 예시
```javascript
const numbers = [1, 2, 3, 4]

numbers.splice(2, 1)

console.log(numbers)
// [1, 2, 4]
// 원본데이터 수정
// xx.splice(a, b, c)
// = a번째 인수부터 b개의 인수(a번째 인수 포함)를 지우고, a인덱스에 c를 추가한다.
```
## 14. Obejct.assign()
대상객체에 출처객체의 데이터를 복사하는 것. 이 때 변수로 할당된 대상객체는 변수와 동일하다
```javascript
const userAge = {
  name: 'Heropy',
  age: 85
}

const userEmail = {
  name: 'Heropy',
  email: 'mmist0226@gmail.com'
}

const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge) // true

// 얕은 복사할 때 쓰이기도 함 Object.assign({}, '객체')
```

## 15. 구조분해할당
```javascript
const user = {
  name: 'Heropy',
  age: 84,
  email: 'mmist0226@gmail.com',
  address: 'USA'
}

const {name, age, address, email} = user

console.log(`사용자의 이름은 ${name}입니다.`)
// 사용자의 이름은 Heropy입니다.
console.log(`사용자의 나이는 ${age}입니다.`)
// 사용자의 나이는 84입니다.
console.log(`사용자의 이메일은 ${email}입니다.`)
// 사용자의 이메일은 mmist0226@gmail.com입니다.

const fruits = ['Apple', 'Banana', 'Cherry'] 
const [a, b, c, d] = fruits
console.log(a, b, c, d)
// Apple Banana Cherry undefined
```

## 16. 전개연산자
```javascript
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange'] 
console.log(fruits) // ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(...fruits) // Apple Banana Cherry Orange

const toObject = (a, b, ...c) => ({a, b, c})

console.log(toObject(...fruits)) // {a: 'Apple', b: 'Banana', c: Array(2)}

```