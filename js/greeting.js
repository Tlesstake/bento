var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
var name = 'tlesstake';
var lateTxt = ', stay up for a little while longer';
var morningTxt = ', did you stay up all night?';
var afterTxt = ', eat something for lunch this time';
var evenTxt = ', it\'s still pretty early';

if (Hr >= 0 && Hr < 6) {
    document.getElementById('greetings').innerText = name + lateTxt;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = name + morningTxt;
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = name + afterTxt;
} else {
    document.getElementById('greetings').innerText = name + evenTxt;
}
