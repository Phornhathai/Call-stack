//https://api.tvmaze.com/search/shows?q=girls

const formElement = document.querySelector("#searchForm");

//Step 1 : ดึงข้อมูลจาก input มาก่อน
formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  //ให้ console print formElement เป็น javascript object ออกมา
  //ใช้ .dir ค้นหา properties ทุกอันที่มีใน formElement

  //console.dir(formElement);
  //ดึงข้อมูลที่ input ออกมาจาก form
  //console.dir(formElement.elements.query.value);
  const searchContent = formElement.elements.query.value;
  clearImage();
  getMovieDetails(searchContent);
});

//Step 3 : เอาคำค้นหาที่ได้จาก step 1 ส่งไปค้นหาที่ API
const getMovieDetails = async (searchContent) => {
  try {
    const config = { params: { q: searchContent } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    renderImg(res.data);
  } catch (error) {
    console.log(error);
  }
};

const clearImage = () => {
  const existingImage = document.querySelectorAll("img");
  for (let image of existingImage) {
    //method สำหรับลบ element นั้นออกจากหน้าเว็บ
    image.remove();
  }
};

//Step 2 : สร้าง element image เพื่อมารับค่าที่ search ค้นหารูปภาพจาก step 1
const renderImg = (data) => {
  for (let item of data) {
    // console.log(item);
    if (item.show.image?.medium) {
      const imageElement = document.createElement("img");
      imageElement.src = item.show.image.medium;
      document.body.append(imageElement);
    }
  }
};
