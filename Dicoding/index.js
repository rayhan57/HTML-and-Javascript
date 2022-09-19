class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const validateNumberInput = (pertama, kedua, ketiga) => {
  try {
    if (typeof pertama !== "number") {
      throw new ValidationError("Argumen pertama harus number");
    } else if (typeof kedua !== "number") {
      throw new ValidationError("Argumen kedua harus number");
    } else if (typeof ketiga !== "number") {
      throw new ValidationError("Argumen ketiga harus number");
    }
  } catch (err) {
    console.log(`Terjadi kesalahan ${err.message}`);
  }
};

// console.log(validateNumberInput(3, 4, 5));

const detectTriangle = (a, b, c) => {
  try {
    validateNumberInput(2, 2, 2);
    if (a === b && b === c) {
      return "Segitiga sama sisi";
    }
    if (a === b || a === c || b === c) {
      return "Segitiga sama kaki";
    }
  } catch (err) {
    console.log(`Terjadi kesalahan ${err.message}`);
  }
  return "Segitiga sembarang";
};
