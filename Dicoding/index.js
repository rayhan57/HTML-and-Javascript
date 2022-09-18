class ValidationError extends Error {
  constructor(message) {
    this.name = message;
  }
}

function validateNumberInput(pertama, kedua, ketiga) {
  if (typeof pertama !== "number") {
    console.log("Argumen pertama harus number");
  } else if (typeof kedua !== "number") {
    console.log("Argumen kedua harus number");
  } else if (typeof ketiga !== "number") {
    console.log("Argumen ketiga harus number");
  }
}
console.log(validateNumberInput(3, 4, 5));
