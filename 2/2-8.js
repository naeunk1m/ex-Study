function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

isPositive(
  [],
  (res) => {
    console.log("성공적으로 수행됨 : ", res);
  },
  (err) => {
    console.log("실패 : !", err);
  }
);
