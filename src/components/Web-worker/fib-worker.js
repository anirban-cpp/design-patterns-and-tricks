const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

onmessage = (e) => {
  const { num } = e.data;
  const startTime = new Date().getTime();
  const fibNum = fib(num);
  postMessage({
    fibNum,
    time: new Date().getTime() - startTime,
  });
};

/*
    web workers and their parent communicate using the onmessage event handler and postMessage() method. 
    Here we’re using the onmessage event handler to listen to messages from the parent component. 
    Once we get a message, we destructure the number from the data attribute of the event. 
    Next, we get the current time and start the computation. 
    Once the result is ready, we use the postMessage() method to post the results back to the parent component.
*/
