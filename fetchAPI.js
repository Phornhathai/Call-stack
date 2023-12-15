//https://swapi.dev/api/people/1/

// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Resolved_1");
//     //method json() จำเป็นต้องมี response จาก fetchAPI ก่อน
//     // res.json().then((data) => console.log(data)); // JSON.parse คือคนละอย่างกัน
//     return res.json();
//   })
//   .then((data) => {
//     //return data api 1
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("Resolved_2");
//     return res.json();
//   })
//   .then((data) => {
//     //return data api 2
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/3/");
//   })
//   .then((res) => {
//     console.log("Resolved_3");
//     return res.json();
//   })
//   .then((data) => {
//     //return data api 3
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Rejected!", err);
//   });

async function makeRequest() {
  try {
    const res1 = await fetch("https://swapi.dev/api/people/1/");
    //ใส่ keyword เพื่อให้ async เสร็จก่อนแล้วส่ง promise object status กลับมาถึงจะทำ await ต่อ
    const data1 = await res1.json();
    console.log("Resolved #1");
    console.log(data1);
    const res2 = await fetch("https://swapi.dev/api/people/2/");
    //ใส่ keyword เพื่อให้ async เสร็จก่อนแล้วส่ง promise object status กลับมาถึงจะทำ await ต่อ
    const data2 = await res2.json();
    console.log("Resolved #2");
    console.log(data2);
  } catch (error) {
    console.log("Error!", error);
  }
}

makeRequest();
