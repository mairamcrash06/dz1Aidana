function greetUser() {

    var lastName = prompt("Введите вашу фамилию:");
    var firstName = prompt("Введите ваше имя:");
    var age = parseInt(prompt("Введите ваш возраст:"));

    if (age < 18) {
        alert("Привет, " + firstName);
    } else if (age >= 18 && age < 60) {
        alert("Здравствуйте, " + lastName + " " + firstName);
    } else if (age >= 60 && age < 80) {
        alert("Добро пожаловать, " + lastName + " " + firstName);
    } else {
        alert("Произошла ошибка");
    }
}
greetUser();