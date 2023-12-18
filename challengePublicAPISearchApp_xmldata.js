// ให้สร้างเว็บไซต์ Public API search โดยใช้ api ตาม document นี้ (document link)

// api ที่ให้ไว้เป็น api ที่ให้ข้อมูลเกี่ยวกับ public api ในโลกนี่ ซึ่งมี feature ต่างๆ มากมาย อยากให้เข้าไปอ่านทำความเข้าใจใน document (document link) ก่อนเริ่มทำ challenge

// Public API search web ควรมี feature ดังนี้

// มีระบบการ search โดย search ตาม api title
// มีระบบการ search โดย search ตาม ประเภทของ api โดย UI การ search จะเป็น Text field หรือ เป็น dropdown ก็ได้ (เเนะนำให้เป็น dropdown  เพื่อ ux ที่ดี)
// นำ api detail ที่ดึงมาได้เเสดงผลให้สวยงาม เเละเข้าใจง่าย (สามารถใช้ css framework เพื่อช่วยเรื่องความสวยงามได้)
// feature อื่นๆ สามารถเพิ่มเติมได้เต็มที่
// สามารถ design รูปเเบบของเว็บนี้ได้อย่างเต็มที่ตามความคิดสร้างสรรค์

// API Animechan - Get a random quote by anime character

// pseudo code / get value by input element
// step 1 : ดึงข้อมูลจาก input ช่อง search มาก่อน
const formElement = document.querySelector("#searchForm");
const animeDetails = document.querySelector("#animeDetails");

formElement.addEventListener("submit", function (e) {
  //ป้องกันการ refresh หน้าจอ
  e.preventDefault();
  const searchName = document.getElementById("nameOfCharacter").value;
  console.log(searchName);
  getDetailApis(searchName);
});
// step 2 : สร้าง element detail ของ anime ที่ค้นหา
// https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=~name
// {
// 	anime: "...",
// 	character: "Saitama",
// 	quote: "..."
// }

const getDetailApis = async (searchName) => {
  try {
    const config = { params: { name: searchName } };
    const res = await axios.get(
      `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=~${searchName}`
    );

    console.log(res.data);
    showDetail(res.data);
  } catch (error) {
    console.log(error);
  }
};

// step 3 : เอาคำค้นหาที่ได้จาก step 1 ส่งไปค้นหาที่ api
const showDetail = (data) => {
  //clear previous details
  animeDetails.innerHTML = "";

  const entryDiv = document.createElement("div");

  const animeName = document.createElement("h1");
  animeName.innerHTML = data.name;
  entryDiv.appendChild(animeName);

  animeDetails.appendChild(entryDiv);
};
