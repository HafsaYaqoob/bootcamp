"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let key = "ce2e4b9ac889e3f92fd32e347f4706ed&units=metric";
let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let inputCity = document.querySelector("#inputField");
let btn = document.querySelector("#btn");
function callapi() {
    return __awaiter(this, void 0, void 0, function* () {
        let valueInput = inputCity.value.trim();
        // console.log(valueInput);
        let req = yield fetch(url + valueInput + `&appid=${key}`);
        // console.log(req);//
        let res = yield req.json();
        //  console.log(res);//
        let result = (Math.round(res.main.temp));
        console.log(result);
        let output = document.querySelector("#output");
        output.style.color = 'red';
        output.textContent = `Temp :${result}C `;
    });
}
callapi();
btn.addEventListener('click', () => {
    callapi();
});
