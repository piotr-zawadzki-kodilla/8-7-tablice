var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

var newName = prompt("Jakie imię dodać do bazy?");

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	alert(newName + " zostało dodane.")
} else {
	alert("Niestety, "+ newName + " już jest w bazie.")
}
