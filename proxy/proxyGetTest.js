const target = {
    message1: "hello",
    message2: "everyone",
    message3: "메세지3",
};

const handler2 = {
    get(target, prop, receiver) {
        if (prop == 'message1') {
            return '메세지 1입니다?';
        } else if(prop == 'message2') {
            return '메세지 2입니다?';
        } 

        return Reflect.get(target, prop, receiver);
    },
};

const proxy2 = new Proxy(target, handler2);
console.log(proxy2.message3);
