//conversion formulas for the temperature converter app
//by Travis A. Mix
//January 29, 2014

var r;

function fToC(fah){
	r = (fah - 32) * 5/9;
	return r;
}

function fToK(fah){
	r = (fah - 32) / 1.8000 + 273.15;
	return r;
}

function fToR(fah){
	r = fah + 459.67;
	return r;
}

function cToF(cel){
	r = cel * (9/5) + 32;
	return r;
}

function cToK(cel){
	r = cel + 273.15;
	return r;
}

function cToR(cel){
	r = (cel + 273.15) * (9/5);
	return r;
}

function kToF(kel){
	r = kel * (9/5) - 459.67;
	return r;
}

function kToC(kel){
	r = kel - 273.15;
	return r;
}

function kToR(kel){
	r = kel * (9/5);
	return r;
}

function rToF(ran){
	r = ran - 459.67;
	return r;
}

function rToC(ran){
	r = (ran - 491.67) * (5/9);
	return r;
}

function rToK(ran){
	r = ran * (5/9);
	return r;
}
