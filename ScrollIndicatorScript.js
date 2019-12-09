'use sctrict'

const h1 = document.documentElement.scrollHeight

const h2 = document.documentElement.clientHeight

//console.log(h1-h2);

//Valor maximo de scroll 1427

const scrollUnit = (h1 - h2)/100;

const rootStyles = document.documentElement.style;

addEventListener('scroll', ()=>{
	console.log(Math.round(scrollY/scrollUnit));
	var PorScroll = Math.round(scrollY/scrollUnit);
	rootStyles.setProperty('--width', PorScroll);
});