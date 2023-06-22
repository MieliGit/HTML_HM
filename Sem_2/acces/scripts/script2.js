n = prompt("Сколько вам лет?");
var age = parseInt(n);
if (age > 18) {
  a = 1;
}
if (age < 18) {
  a = 2;
}

if (age == 18) {
  a = 3;
}

switch (a) {
  case 3:
    alert("Вы совершеннолетний, все можно!");
    break;

  case 2:
    alert("Вам надо учить уроки!");
    break;

  case 1:
    alert("Ложитесь спать, завтра на работу");
    break;
  default:
    alert("Мы не знаем что Вам делать");
    break;
}
