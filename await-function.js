// สร้างในรูปแบบ Promise
const changeBackgroundPromise = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// changeBackgroundPromise("red", 1000)
//   //ต้องมี return เพื่อให้ใส่ .then ทำงานอย่างอื่นต่อได้
//   //javascript if there is only one expression, it can change to shorthand for one line
//   .then(() => changeBackgroundPromise("green", 1000))
//   .then(() => changeBackgroundPromise("blue", 1000))
//   .then(() => changeBackgroundPromise("pink", 1000));

// first example
// const rainbow = async () => {
//   await changeBackgroundPromise("red", 1000);
//   await changeBackgroundPromise("yellow", 1000);
//   await changeBackgroundPromise("orange", 1000);
//   await changeBackgroundPromise("green", 1000);
//   changeBackgroundPromise("blue", 1000);
// };

// second example
const fakeRequestPromise = (url) => {
  // return เป็น object Promise โดย return resolve ถ้า success และ reject ถ้า failed
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject(`Connection Timeout :(`);
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

//example promises
// fakeRequestPromise("books.com")
//   .then((data) => {
//     console.log("SUCCESS", data);
//   })
//   .catch((error) => {
//     console.log("FAILED", error);
//   });

const requestAsync = async () => {
  try {
    const res = await fakeRequestPromise("books/page1");
    console.log(res);
    const res2 = await fakeRequestPromise("books/page2");
    console.log(res2);
  } catch (error) {
    console.log("Failed", error);
  }
};

// requestAsync().then((data) => {
//   console.log("BOOKS");
//   console.log(data);
// });
