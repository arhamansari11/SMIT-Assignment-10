// Assignment no 10

// task no 2
// 5 > 4 (true)
// "apple" > "pineapple" (false)
// "2" > "12" (true)
// undefined == null (true)
// undefined === null (false)
// null == "\n0\n" (false)
// null === +"\n0\n" (false)

// task no 3
// values of a and b will 1
// values of c and d will 2
// task no 4
// the value of a is 2
// the value mof x will 5
// task no 5
// because the default data type of prompt is string 
// it can be fix by changing the data tyope of prompt by using parseint
// let a =parseInt (prompt("First number?", 1));
// let b =parseInt (prompt("Second number?", 2));

// alert(a + b)
// task no 6
let result = (a + b < 4) ? 'Below' : 'Over';
// task no 7
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :'';
              
        
// task no 8
// the output will 2
// task no 9
// the output will 1
// task no 10
// the output will null
// task no 11
// the output will 1
// task no 12
// 3 will be display in alert box

// task no 13
if (!(age >= 14 && age <= 90)) {
    // age is NOT between 14 and 90
}
if (age < 14 || age > 90) {
    // age is NOT between 14 and 90
}
// task no 14
// first and 3 will execute
// task no 15
if (browser === 'Edge') {
    alert("You've got the Edge!");
  } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
  } else {
    alert('We hope that this page looks ok!');
  }
// task no 16
let a = +prompt('a?', '');

switch(a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
  default:
    alert('Invalid input');
}

  
  