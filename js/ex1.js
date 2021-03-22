/*=============================================
=            Function wait til pg loads       =
=============================================*/
document.addEventListener('DOMContentLoaded', function () {
  msgBox();
  urlSwap();
  divideNumbers();
  validateIfPhoneNum();
  toThePower();
});

/*=============================================
=            Section Exercises #1             =
=============================================*/
function divideNumbers() {
  let num1 = parseInt(document.getElementById('num_1').innerHTML);
  let num2 = document.getElementById('num_2').innerHTML;
  console.log(num1 / num2);
  document.getElementById('result').innerHTML = (num1 / num2).toFixed(2);
}

function msgBox() {
  let fName = 'Bryan';
  let lName = 'Lundeen';
  let dob = 1974;
  let curYr = 2021;
  let age = curYr - dob;
  let msg = `Hello, my name is ${fName} ${lName}, I'm ${age} years old and I'm learning JavaScript.`;
  document.getElementById('student_message').innerHTML = msg;
}

function numToString(num) {
  // called by returnNotifyMsg
  if (typeof num != 'string') {
    return num.toString();
  } else {
    return num;
  }
}

function returnNotifyMsg(phoneNumber) {
  // calls numToString
  // called by validateIfPhoneNum
  let notifyMsg = '';
  let phoneString = numToString(phoneNumber);
  if (phoneString.length === 9) {
    notifyMsg = `${phoneNumber} is a valid phone number.`;
  } else if (phoneString.length > 9) {
    notifyMsg = `${phoneNumber} is not a valid phone number because it is greater than 9 digits.`;
  } else if (phoneString.length < 9) {
    notifyMsg = `${phoneNumber} is not a valid phone number because it is less than 9 digits.`;
  }
  return notifyMsg;
}

function validateIfPhoneNum() {
  // calls returnNotifyMsg
  let phone1 = '';
  let phone2 = '';
  let phone3 = '';
  phone1 = document.getElementById('phone1').innerHTML.replace(`"`, '');
  phone2 = document.getElementById('phone2').innerHTML.replace(`"`, '');
  phone3 = document.getElementById('phone3').innerHTML.replace(`"`, '');
  console.log(returnNotifyMsg(phone1));
  console.log(returnNotifyMsg(phone2));
  console.log(returnNotifyMsg(phone3));
}

function urlSwap() {
  let url1 = document.getElementById('url_1').innerHTML;
  url1 = url1.trim();
  url1 = 'https://' + url1;
  let url3 = document.getElementById('url_3').innerHTML;
  url3 = url3.replace('https://', '');
  document.getElementById('url_2').innerHTML = url1;
  document.getElementById('url_4').innerHTML = url3;
}

function toThePower() {
  document.getElementById('power').innerHTML = Math.pow(32, 6);
}

/*=====  End of Section Exercises #1  ======*/
