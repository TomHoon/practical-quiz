function delay(ms) {
  // 여기에 코드 작성
  return new Promise((res,rej) => {
    setTimeout(() => res(123), ms);
  })
}

delay(3000).then((msg) => console.log(msg));
