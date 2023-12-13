// const request = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand > 0.7) {
//         resolve("REQUEST SUCCESS");
//       } else {
//         reject("REQUEST FAILED");
//       }
//     }, 1000);
//   });
// };

// request()
//   .then((data) => {
//     console.log("Your Data is: ", data);
//   })
//   .catch((error) => {
//     console.log("Error :", error);
//   });

// const changeBackground = (color, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     //doNext เช็คว่ามีค่าฟังก์ชันรับมาหรือไม่ ถ้ามีให้ทำต่อ
//     doNext && doNext();
//   }, delay);
// };

// สร้างในรูปแบบ Promise
const changeBackgroundPromise = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

changeBackgroundPromise("red", 1000)
  .then(() => {
    //ต้องมี return เพื่อให้ใส่ .then ทำงานอย่างอื่นต่อได้
    return changeBackgroundPromise("yellow", 1000);
  })
  //javascript if there is only one expression, it can change to shorthand for one line
  .then(() => changeBackgroundPromise("green", 1000))
  .then(() => changeBackgroundPromise("blue", 1000))
  .then(() => changeBackgroundPromise("pink", 1000));

// ลักษณะการเขียน code แบบนี้เรียกว่า call back hell!!!
// changeBackground("red", 1000, () => {
//   changeBackground("yellow", 1000, () => {
//     changeBackground("orange", 1000, () => {
//       changeBackground("green", 1000, () => {});
//     });
//   });
// });
