function ShowBMI(name, gender, weight, height) {
  var BMI = weight / (height * height);
  if (BMI < 18.5) {
    console.log(
      name + " | " + gender + " | " + "BMI: ",
      BMI + " | " + "Underweight"
    );
  } else if (BMI > 18.5 && BMI < 25) {
    console.log(
      name + " | " + gender + " | " + "BMI: ",
      BMI + " | " + "Normal Weight"
    );
  } else if (BMI > 25 && BMI < 30) {
    console.log(
      name + " | " + gender + " | " + "BMI: ",
      BMI + " | " + "Overweight"
    );
  } else {
    console.log(name + " | " + gender + " | " + "BMI: ", BMI + " | " + "Obese");
  }
}
