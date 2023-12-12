// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//   }, 1000);
// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
//   }, 2000);
// setTimeout(() => {
//     document.body.style.backgroundColor = 'green';
//   }, 3000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//     }, 1000);
//   }, 1000);
// }, 1000);

const changeBackground = (color, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    //doNext เช็คว่ามีค่าฟังก์ชันรับมาหรือไม่ ถ้ามีให้ทำต่อ
    doNext && doNext(() => {}, delay);
  }, delay);
};

// changeBackground("red", 3000);
// changeBackground("yellow", 6000);

// ลักษณะการเขียน code แบบนี้เรียกว่า call back hell!!!
changeBackground("red", 1000, () => {
  changeBackground("yellow", 1000, () => {
    changeBackground("orange", 1000, () => {
      changeBackground("green", 1000, () => {});
    });
  });
});
