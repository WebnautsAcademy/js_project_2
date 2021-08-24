import {randomInteger} from './helpers.js';

let houses = ["palace", "flat", "house", "bungalo"];
let titles = ["Суточная оренда", "Долгосрочная оренда", "По часовая оренда"];
let addresses = ["top: 450px left 850px", "top: 350px left 750px", "top: 300px left 700px", "top: 250px left 650px"]; 
let prices = ["1100","1200","1300","1400","1500","1600","1700","1800"];
let roomsses = ["1","2","3","4","5","6"];
let guestsses = ["7","8","9","10"];
let check = ["13:00","14:00","15:00"];
let checkOut = ["14:00","15:00","16:00"];
let featur = ["wifi dishwasher parking", "parking elevator", "washer dishwasher parking", "elevator parking elevator", "conditioner wifi dishwasher parking"];
let x = [410, 420, 430, 440];
let y = [230, 330, 430, 530, 630];


let mapPins=[];
for (let index = 0; index < 8; index++){
    let pin = {
        "author": {
            "avatar": "img/avatars/user01.png" //строка, адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
        },     
        "offer": {
        "title": "Оренда", //строка, заголовок предложения
        "address": "top: 400px left 800px", // строка, адрес предложения. Для простоты пусть пока представляет собой запись вида "{{location.x}}, {	{location.y}}", например, "600, 350"
        "price":  1000, //число, стоимость
        "type":  "palace", //строка с одним из четырёх фиксированных значений: palace, flat, house или bungalo
        "rooms":  3,//число, количество комнат
        "guests":  2, //число, количество гостей, которое можно разместить
        "checkin":  "12:00", //строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
        "checkout": "12:00",  //строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
        "features":  "wifi dishwasher parking washer",  //массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",
        "description": "some dscr",  //строка с описанием,
    },
    
    "location": {
        "x":  randomInteger(0, 400) ,//случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
        "y":  randomInteger(0, 800) //случайное число, координата y метки на карте от 130 до 630.
    }
    };
    pin.author.avatar = "img/avatars/user0"+ randomInteger(1, 8) + ".png";
    pin.offer.title = titles[randomInteger(0, titles.length - 1)];
    pin.offer.address = addresses[randomInteger(0, addresses.length - 1)];
    pin.offer.price = prices[randomInteger(0, prices.length - 1)];
    pin.offer.type = houses[randomInteger(0, titles.length - 1)];
    pin.offer.rooms = roomsses[randomInteger(0, roomsses.length - 1)];
    pin.offer.guests = guestsses[randomInteger(0, guestsses.length - 1)];
    pin.offer.checkin = check[randomInteger(0, check.length - 1)];
    pin.offer.checkout = checkOut[randomInteger(0, checkOut.length - 1)];
    pin.offer.features = featur[randomInteger(0, featur.length - 1)];
    // pin.location.x = x[randomInteger(0, x.length - 1)];
    // pin.location.y = y[randomInteger(0, y.length - 1)];


    mapPins.push(pin)
}
// console.log(mapPins)

export const data = mapPins;