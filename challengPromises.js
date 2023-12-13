// จงสร้าง Function ที่รับ Parameter ได้หนึ่งตัว คือ data และ Function นั้น จะต้องมีความสามารถ ดังต่อไปนี้

// Function นั้น จะต้อง Return เป็น Promise Object เสมอ
// ถ้าชนิดของ data ไม่ใช่ตัวเลข, ให้ Return Promise Rejected ทันที พร้อมกับค่า "error" เป็น String
// ถ้า data เป็นเลขคี่, หลังจากเวลาผ่านไป 1 วินาที ให้ Return Promise Resolved พร้อมกับค่า "odd" เป็น String
// ถ้า data เป็นเลขคู่, หลังจากเวลาผ่านไป 2 วินาที ให้ Return Promise Resolved พร้อมกับค่า "even" เป็น String

const oddAndEvenPromise = (data) => {
  return new Promise((resolve, reject) => {
    if (typeof data === "string") {
      console.log("number is string");
    } else if (typeof data === "number" && data % 2 !== 0) {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
      resolve("odd");
    } else if (typeof data === "number" && data % 2 === 0)
      setTimeout(() => {
        resolve("even");
      }, 2000);
    else {
      reject(error);
    }
  });
};

oddAndEvenPromise(10)
  .then((data) => {
    console.log(data);
    return oddAndEvenPromise(1);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
