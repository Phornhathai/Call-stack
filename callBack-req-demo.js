const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  console.log(delay);
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

fakeRequestCallback(
  "books.com",
  (data) => {
    console.log("Its work");
    //ข้อมูลมาจากบรรทัดที่ 8
    console.log(data);
    fakeRequestCallback(
      "books.com/page1",
      (data1) => {
        console.log("Its work Again");
        //ข้อมูลมาจากบรรทัดที่ 8
        console.log(data1);
        fakeRequestCallback(
          "books.com/page2",
          (data2) => {
            console.log("Its work again and again");
            console.log(data2);
          },
          (err) => {
            console.log("Error Page 2");
            console.log(err);
          }
        );
      },
      (err) => {
        console.log("Error Page 1");
        console.log(err);
      }
    );
  },
  (err) => {
    console.log("Error");
    console.log(err);
  }
);
