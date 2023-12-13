// async function hello() {
//   //   throw new error("FAILED");
//   //   throw "ERROR";
//   return 'Hello';
// }

//arrow function with async

const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentails";
  // In async function, we can use return instead of resolve
  if (password === "hello") return "WELCOME!";
  throw "Invalid Password";
};

login("test", "hell123")
  .then((data) => {
    console.log("SUCCESS!!!", data);
  })
  .catch((data) => {
    console.log("FAILED!!!", data);
  });
