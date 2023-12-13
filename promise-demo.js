const fakeRequestPromise = (url) => {
  // return เป็น object Promise โดย return resolve ถ้า success และ reject ถ้า failed
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve("Here is your fake data from ${url}");
      }
    }, delay);
  });
};

// fakeRequestPromise("books.com");

// const res = fakeRequestPromise("books.com");
// //จะรอให้ promise ทำงานเสร็จก่อนว่าได้ state อะไรกลับมากับ object
// //call back กับ mehtod then จะทำงานก็ต่อเมื่อ state ของ promise กลับมาเป็น fulfill / resolve
// res
//   .then(() => {
//     console.log("Success!!!");
//   }) //ถ้าเข้ามาใน .catch มันคือ failed / reject
//   .catch(() => {
//     console.log("Failed!!!");
//   });

// ทำงานเหมือนกับ code ด้านบนเลย
fakeRequestPromise("books.com/page1")
  .then(() => {
    console.log(`SUCCESS !!! (page1)`);
    return fakeRequestPromise("books.com/page2");
  })
  .then(() => {
    console.log(`SUCCESS !!! (page2)`);
    return fakeRequestPromise("books.com/page3");
  })
  .then(() => {
    console.log(`SUCCESS !!! (page3)`);
  })
  .catch(() => {
    console.log(`FAILED !!!`);
  });
