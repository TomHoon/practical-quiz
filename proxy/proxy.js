// 1. proxy를 사용하여 delay 래퍼함수를 만들자
// 2. sayHi

function delay(fn, ms = 5000) {
    return new Proxy(fn, {
        apply(target, thisArgs, args) { // Proxy의 apply는 해당 메소드를 실행할 때 마다 발동
            // thisArgs는 context임. 
            // 여기서 target은 'sayHi'이고 thisArgs는 null임.
            // sayHi에서 this를 사용하지 않기 때문에 null이 와도 괜찮음
            setTimeout(() => target.apply(thisArgs, args), ms); 
        }
    })
}

function sayHi(message) {
    console.log(message);
}

sayHi = delay(sayHi);

sayHi('hello', 111);
