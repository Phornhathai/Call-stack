const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return console.log(square(a) + square(b) === square(c));
};

isRightTriangle(3, 4, 5);
