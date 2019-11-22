// Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

let fileMb = 820,
    fileGb = 1024,
    flesh = prompt('Укажите объем флешки в Гб');
alert(Math.floor(flesh * fileGb / fileMb) + ' Файлов по 820 Мб');

let
    purse = prompt('Какая сумма у Вас в кошильке?'),
    price = prompt('Цена за 1 шоколадку'),
    chocolate = purse / price;
chocolateInteger = Math.floor(chocolate);
change = purse - (chocolateInteger * price);

alert(chocolateInteger + ' Шоколадок ' + change + ' грн Сдача');

