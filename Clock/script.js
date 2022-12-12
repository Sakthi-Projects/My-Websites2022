let week = document.querySelectorAll('.days span');
let months = document.querySelectorAll('.month span');
let clock = document.querySelectorAll(".clock");
let hour = document.querySelectorAll('.h');
let minute = document.querySelectorAll('.m');
let second = document.querySelectorAll('.s');
let dates = document.querySelector('.date');
let spans = document.querySelectorAll('.meridian span');

setInterval(runClock,1000);

function runClock () {
let Time = new Date();

//days
months[Time.getMonth()].classList.add('month-active');
//Months
week[Time.getDay()].classList.add('days-active');

//Date
let da = Time.getDate();
let mo = Time.getMonth()+1;
let ya = Time.getFullYear();

da=da<10?'0'+da:da;
mo=mo<10?'0'+mo:mo;

dates.innerHTML = `${da}-${mo}-${ya}`;


//Time
let nodi = Time.getSeconds();
let nimisham = Time.getMinutes();
let mani = Time.getHours();

if(mani>12){
    mani=mani-12;
    spans[1].classList.add('active');
}else{
    if(mani===0){
    mani=12;
}
    spans[0].classList.add('active');
}

nodi=nodi<10?'0'+nodi:nodi;
nimisham=nimisham<10?'0'+nimisham:nimisham;
mani=mani<10?'0'+mani:mani;

nodi = nodi.toString();
nimisham = nimisham.toString();
mani = mani.toString();

hour[0].innerHTML = mani[0]
hour[1].innerHTML = mani[1]
minute[0].innerHTML = nimisham[0]
minute[1].innerHTML = nimisham[1]
second[0].innerHTML = nodi[0]
second[1].innerHTML = nodi[1]

};

