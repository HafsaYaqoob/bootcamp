
 let key = "ce2e4b9ac889e3f92fd32e347f4706ed&units=metric";
 let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let inputCity = document.querySelector("#inputField") as HTMLInputElement;


let btn = document.querySelector("#btn") as HTMLButtonElement;



async function callapi(){
   let valueInput = inputCity.value.trim();
   // console.log(valueInput);
    let req =  await fetch(url+ valueInput +`&appid=${key}`);
   // console.log(req);//
     let res = await req.json();
   //  console.log(res);//
    
     let result = (Math.round(res.main.temp));
    console.log(result);
     let output = document.querySelector("#output") as HTMLDivElement;
     output.style.color='red';
     output.textContent = `Temp :${result}C `;
}
 callapi();


 btn.addEventListener('click',()=>{
   
      callapi();
 });