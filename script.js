// connects "Age and day" button to "checking" function
document.getElementById('button').addEventListener('click', checking)
let userAge = 0
let notAWeekend = 0

function checking () {
  // Get userAge and converts it to an integer
  userAge = document.getElementById('input').value
  userAge = parseInt(userAge)
  notAWeekend = document.getElementById('enter').value
  // checking what the User day will be
  if (((notAWeekend === 'monday') || (notAWeekend === 'tuesday') || (notAWeekend === 'wednesday') || (notAWeekend === 'thursday') || (notAWeekend === 'friday')) && (userAge < 18)) {
    document.getElementById('answer').innerHTML = 'Time for school!'
  } else if (((notAWeekend === 'monday') || (notAWeekend === 'tuesday') || (notAWeekend === 'wednesday') || (notAWeekend === 'thursday') || (notAWeekend === 'friday')) && (userAge >= 18)) {
    document.getElementById('answer').innerHTML = 'Time to go to work!'
  } else {
    document.getElementById('answer').innerHTML = 'Relax for weekend!'
  }
}
