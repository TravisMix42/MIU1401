//conversion formulas for the temperature converter app
//by Travis A. Mix
//January 29, 2014


function fToC(fah){
	fah = parseFloat(fah);
	var r = (fah - 32) * 5/9;
	return r;
}

function fToK(fah){
	fah = parseFloat(fah);
	var r = (fah - 32) / 1.8000 + 273.15;
	return r;
}

function fToR(fah){
	fah = parseFloat(fah);
	var r = (fah + 459.67);
	return r;
}

function cToF(cel){
	cel = parseFloat(cel);
	var r = cel * (9/5) + 32;
	return r;
}

function cToK(cel){
	cel = parseFloat(cel);
	var r = cel + 273.15;
	return r;
}

function cToR(cel){
	cel = parseFloat(cel);
	var r = (cel + 273.15) * (9/5);
	return r;
}

function kToF(kel){
	kel = parseFloat(kel);
	var r = kel * (9/5) - 459.67;
	return r;
}

function kToC(kel){
	kel = parseFloat(kel);
	var r = kel - 273.15;
	return r;
}

function kToR(kel){
	kel = parseFloat(kel);
	var r = kel * (9/5);
	return r;
}

function rToF(ran){
	ran = parseFloat(ran);
	var r = ran - 459.67;
	return r;
}

function rToC(ran){
	ran = parseFloat(ran);
	var r = (ran - 491.67) * (5/9);
	return r;
}

function rToK(ran){
	ran = parseFloat(ran);
	var r = ran * (5/9);
	return r;
}
