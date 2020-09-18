var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
var name = 'roland';
var lateTxt = 'stay up for a little while longer';
var morningTxt = 'did you stay up all night?';
var afterTxt = 'eat something for lunch this time';
var evenTxt = 'it\'s still pretty early';

if (Hr >= 0 && Hr < 6) {
    document.getElementById('greetings').innerText = lateTxt + name;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = morningTxt + name;
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = afterTxt + name;
} else {
    document.getElementById('greetings').innerText = evenTxt + name;
}
