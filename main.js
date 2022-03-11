const BMICalculator = (height, weight) => {
  const BMI = height / (weight * weight);
  if (BMI < 19.5) {
    return console.log("You are too under average");
  } else if (BMI < 23 && BMI > 18.5) {
    return console.log("You are on average");
  } else {
    return console.log("You are above average");
  }
};

BMICalculator(165, 60);
