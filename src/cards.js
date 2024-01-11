import { tovarsObj } from './tovars.js';
let cards = Array.from(document.querySelectorAll('.card'));
console.log(cards);
cards.forEach(function (elem, index) {
  elem.querySelector('img').src = `img/${tovarsObj[index].imgScr}`;
  elem.querySelector('h5').innerHTML = `<br>${tovarsObj[index].nameTovar}`;
  let str = `<br>Корпус: ${tovarsObj[index].corpus}
    <br>Ремешок: ${tovarsObj[index].remen}
    <br>Размер дисплея: ${tovarsObj[index].displaySize}
    <br>Тип дисплея: ${tovarsObj[index].displayType}`;
  if (tovarsObj[index].blutooth) str += '<br>Блютуз: есть';
  else str += '<br>Блютуз: нет';
  str += `<br>Операционные системы: ${tovarsObj[index].OS.os1}, ${tovarsObj[index].OS.os2}`;
  elem.querySelector('.card-text').innerHTML = str;
});
