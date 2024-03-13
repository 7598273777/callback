const callback = (some)=> {
  document.getElementById("demo").innerText = some;
}

callback(10);

setTimeout(() => {
  callback(9);
  setTimeout(() => {
    callback(8);
    setTimeout(() => {
      callback(7);
      setTimeout(() => {
        callback(6);
        setTimeout(() => {
           callback(5);
          setTimeout(() => {
            callback(4);
            setTimeout(() => {
               callback(3);
              setTimeout(() => {
                callback(2);
                setTimeout(() => {
                  callback(1);
                  setTimeout(() => {
                  callback("Happy Independence Day!");
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);