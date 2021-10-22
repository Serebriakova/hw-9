
let yearOfBirth = prompt("Enter the year of your birth");
let city;
let favouriteSport;

if ((yearOfBirth === null) || (yearOfBirth.trim() === "")) {
    alert("Sorry, you haven't entered the year of your birth");
} else {
    city = prompt("Enter the city you live in");
}

const age = 2021 - yearOfBirth;

if ((city === null) || (city.trim() === "")) {
    alert("Sorry, you haven't entered the city you live in");
} else {
    favouriteSport = prompt("Enter you favourite kind of sport");
}

let cityText;
switch (city) {
    case "Kiev":
    case "Moscow":
    case "Minsk":
        cityText = `You live in the capital - ${city}`;
    default:
        cityText = `You live in the city - ${city}`;
}
let sportChamp;

if ((favouriteSport === null) || (favouriteSport.trim() === "")) {
    alert("Sorry, you haven't entered your favourite kind of sport");
} else if (favouriteSport === "football") {
    sportChamp = "Cool! You want to become Lionell Messi!";
} else if (favouriteSport === "formula 1") {
    sportChamp = "Cool! You want to become Lewis Hamilton!";
} else if (favouriteSport === "boxing") {
    sportChamp = "Cool! You want to become Oleksandr Usik!";
} else {
    sportChamp = "";
}
alert (`1. You are: ${age} years old;
        2. ${cityText};
        3. Your favourite sport is ${favouriteSport}! ${sportChamp}`);
