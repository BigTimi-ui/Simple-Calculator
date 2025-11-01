function add(){
  let num1=Number(document.getElementById("num1").value)
    let num2=Number(document.getElementById("num2").value)
    let result=num1+num2
document.getElementById("result").textContent="Result:" +result
}
function subtract(){
    let num1 =Number(document.getElementById("num1").value)
    let num2 =Number(document.getElementById("num2").value)
    let result=num1-num2
    document.getElementById("result").textContent="Result:"+result
}
function divide(){
   let num1 =Number(document.getElementById("num1").value)
    let num2 =Number(document.getElementById("num2").value)
    let result=num1/num2
    document.getElementById("result").textContent="Result:"+result
}
function multiply(){
   let num1 =Number(document.getElementById("num1").value)
    let num2 =Number(document.getElementById("num2").value)
    let result=num1*num2
    document.getElementById("result").textContent="Result:"+result
}
function calculatePercentage() {
      // Get the numbers entered by the user
      let num1 = Number(document.getElementById("num1").value);
      let num2 = Number(document.getElementById("num2").value);

      // Check that both numbers are valid
      if (num2 === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero.";
        return;
      }

      // Calculate the percentage
      let result = (num1 / num2) * 100;

      // Display the result
      document.getElementById("result").textContent =
        `${num1} is ${percentage.toFixed(2)}% of ${num2}`;
    }
