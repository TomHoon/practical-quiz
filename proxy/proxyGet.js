// console overriding 
const cslog = console.log;
const csinfo = console.info;
const csdebug = console.debug;

// bind
// -> arguments 생략가능
// -> 함수를 리턴
console.log = cslog.bind(this, ">>> LOG ");
console.info = cslog.bind(this, ">>> 인포 ");
console.debug = cslog.bind(this, ">>> 디버그 ");

// call
// -> arguments 생략불가
// -> 즉시 실행
console.log = function(...args) {
    cslog.call(this, ">>> LOG ", ...args);
}
console.info = function(...args) {
    cslog.call(this, ">>> INFO ", ...args);
}
console.debug = function(...args) {
    cslog.call(this, ">>> DEBUG ", ...args);
}

window.console = new Proxy(console, {
    // apply,
    // set,
    get(target, props, receiver) {
        const 운영 = Math.random() >= 0.5;

        alert('운영' + 운영);
        
        if (운영) {
            if (['log', 'debug', 'info'].includes(props)) {
                return () => {};
            }
        } else {
            return Reflect.get(target, props, receiver);
        }
    }
})
