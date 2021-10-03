  // Write your code here!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
      return 'This one is on me!'
    }
  else if (someValue <=2500) {
      return 'I will gladly take your thirty bucks.'
    }
  else if (someValue > 2500) {
      return 'No can do.'
    }
  }

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return "Ok, sounds good."
  }
  else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous') {
    return "Thank you so much."
  }
  else if (tip === 'not as generous') {
    return "Thank you."
  }
  else {
    return 'Bye.'
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip(2);