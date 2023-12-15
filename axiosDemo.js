// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Success!", res);
//   })
//   .catch((err) => {
//     console.log("Failed!", err);
//   });

// const makeAxiosRequest = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log("Success", res.data.name);
//   } catch (error) {
//     console.log("Failed", error);
//   }
// };

// makeAxiosRequest(6);

//Setting headers axios

// const makeAxiosRequest = async () => {
//     try {
//       const config = { headers: { Accept: "application/json" } };
//       const res = await axios.get(`https://icanhazdadjoke.com/`, config);
//       // console.log("Success", res.data.joke);
//       return res.data.joke;
//     } catch (error) {
//       // console.log("Failed", error);
//       return console.log("No joke available");
//     }
//   };

// makeAxiosRequest();

const getDadjoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    // console.log("Success", res.data.joke);
    return res.data.joke;
  } catch (error) {
    // console.log("Failed", error);
    return console.log("No joke available");
  }
};

const renderJoke = async () => {
  const jokeString = await getDadjoke();
  const ul = document.querySelector("#joke");
  //สร้าง tag li เปล่าๆขึ้นมา
  const liElement = document.createElement("li");
  //เอา string jokes มาใส่ใน <li>...</li>
  liElement.append(jokeString);
  ul.append(liElement);
};

getDadjoke();

const jokeBtn = document.querySelector("#jokeBtn");
jokeBtn.addEventListener("click", renderJoke);
