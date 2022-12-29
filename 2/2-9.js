function hello() {
  return "hello";
}

async function helloAsync() {
  return "hello Async";
}

helloAsync().then((res) => {
  console.log(res);
});
