//http https://swapi.dev/api/people/1/

const req = new XMLHttpRequest();
//การที่ file javascript นี้โหลดขึ้นมา เราอยากจะให้ มันทำงานอะะไร

//เมื่อ endpoint ถูกส่งออกไป ถ้าไมีมีปัญหาอะไร จะ print success
req.onload = function () {
  console.log("success");

  //ใช้ JSON.parse เพื่อแปลงเป็น javascript object
  const res = JSON.parse(this.responseText);
  console.log(res);
};

//จะถูกเรียกใช้เมื่อส่ง request ไปแล้วมี error / ปัญหา กลับมา
req.onerror = function () {
  console.log("Failed");
  console.log(this);
};

//1. ต้องระบุ open สำหรับเรียกใช้ method อะไร ("method" , "URL")
req.open("GET", "https://swapi.dev/api/people/1/");

//2. ส่งข้อมูล 1 ออกไป
req.send();
