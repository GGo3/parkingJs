// Фронтенд парковки. Сколько сделаете пунктов, столько и сдаёте до занятия в пятницу. 
// 1) Сгенерировать массив паркомест. Количество задано в константе SPACES. 
// Каждое паркоместо имеет свойства: id, occupied, time
// 2) Функция подсчета количества занятых и свободных паркомест
// 3) Отобразить на странице паркоместа с указанием id, свободно/занято, время занятого. 
// Важно. Для работы со временем используйте библиотеку Moment. 
// 4) Также на странице отобразить время из переменной currentTime.
// 5) При нажатии на паркоместо, если оно пустое, появляется модальное окно с полем input, в котором нужно ввести время занимания парковки.
// При нажатии "ОК" парковка занимается. 
// 6) Если нажать на занятой парковке, то появляется модальное окно "освободить парковку? Да/Нет. Время занимания паркоместа: столько-то".
// 7) При нажатии на пустой парковке, если количество свободных паркомест меньше 20% от всех и при этом время занимания больше 9:00 и меньше 18:00, то в модальном окне порекомендовать не занимать паркоместо.
// const moment = require("moment");

// *************** 1) функция гернерации паркомест ***************

const parking = [];
const spaces = 20;

const genereteParking = () => {
  let parkSpace = [];
  for (let i = 0; i < spaces; i++) {
    parkSpace[i] = {
      occupied: true,
      time: 0,
      id: i,
    }
    parking.push(parkSpace[i]);
  }
};
genereteParking();

// *************** 2) Функция подсчета количества занятых и свободных паркомест ***************
let takenSpaces = 0;
let emptySpaces = 0;

const countingOccupiedParking = () => {
  for (let i = 0; i < parking.length; i++) {
    (parking[i].occupied) ? takenSpaces++ : emptySpaces++;
  }
};
countingOccupiedParking();

// *************** 3) Функция для отображения на странице паркоместа с указанием id, свободно/занято, время занятого. ***************
const mainEl = document.querySelector('.main');
let str = '';

const genereteParkingOnPage = (park) => {
  for (let i = 0; i < park.length; i++) {
    str = `${str}<div class="space">ID: ${park[i].id}<br>occupied: ${park[i].occupied}<br>time: ${park[i].time}<br></div>`
  }
  mainEl.innerHTML = str;
}
genereteParkingOnPage(parking);

// *************** 4) Подключение библиотеки moment.js через npm и отображение на странице время из переменной currentTime. ***************

let currentTime = moment().format('HH:mm');
const currentTimeEl = document.querySelector('.current-time');
currentTimeEl.textContent = `Time ${currentTime}`;
console.log(currentTime);

// *************** 5) При нажатии на паркоместо, если оно пустое, появляется модальное окно с полем input, в котором нужно ввести время занимания парковки. При нажатии "ОК" парковка занимается. ***************
const modalEmptyEl = document.getElementById('myModal');
const spaceEl = document.querySelectorAll('.space');
const closeModal = document.querySelector('.close');
const modalBtnOk = document.querySelector('.modal-ok');
const timeInputEl = document.querySelector('.time-inp');
let timeSpace = 0;

closeModal.onclick = () => {
  modalEmptyEl.style.display = "none";
};

const openModalEmpty = () => {
  modalEmptyEl.style.display = "block";
};

for (i = 0; i < spaceEl.length; i++) {
  spaceEl[i].addEventListener('click', openModalEmpty);
};

const getTimeSpace = () => {
  timeSpace = timeInputEl.valueAsNumber;
  modalEmptyEl.style.display = "none";
  console.log(timeSpace);
}
modalBtnOk.addEventListener('click', getTimeSpace);


