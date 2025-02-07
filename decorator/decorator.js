// 인사하는 함수인 sayHi 함수가 있고
// 3초뒤 실행시키는 래퍼함수 delay를 생성하여
// 인사하는 함수를 래핑하여 사용해보기

function delay(func, time) {
    return function(message) {
        console.log(func);
        setTimeout(() => func(message), time);
    }
}

function sayHi(message) {
    console.log(message);
}

sayHi = delay(sayHi, 3000);

sayHi('h33ll');

// 
