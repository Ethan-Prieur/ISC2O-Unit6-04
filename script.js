document.getElementById('btn').addEventListener('click', myFunction)
//When you hit the button it will display the function I programmed.
function myFunction () {
  let age = document.getElementById('box1').value
  //Making it so it gets age from the first box
  age = parseInt(age)
  //making it know age is a number
  let day = document.getElementById('box2').value
if ((day == "tuesday" || day == "thursday") && (age > 11 && age < 22)) {
  alert('congrats on your discount')
} else {
  alert('you didnt get a discount')
}
}