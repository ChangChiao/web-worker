const complexCalculation = () => {
  let result = 0;
  for (let i = 0; i < 10000000000; i++) {
    result += i;
  }

  return result;
};

self.onmessage = (event) => {
  console.log("event", event);
  if (event.data.action === "calc") {
    const result = complexCalculation();
    self.postMessage(result);
  }
};
