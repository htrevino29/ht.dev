var version = '0.1a';
function saveInformation(){
	var currentCustomer = {};
	currentCustomer['owner'] = document.getElementById('owner').value;
	currentCustomer['lotNumber'] = document.getElementById('lot-number').value;
	currentCustomer['address'] = document.getElementById('address').value;
	currentCustomer['frontSize'] = document.getElementById('front').value;
	currentCustomer['backSize'] = document.getElementById('back').value;
	currentCustomer['leftSize'] = document.getElementById('left').value;
	currentCustomer['rightSize'] = document.getElementById('right').value;
	currentCustomer['totalArea'] = document.getElementById('totalArea').value;
	//createCookie('currentCustomer', JSON.stringify(currentCustomer), 1);
	window.localStorage.setItem('currentCustomer',JSON.stringify(currentCustomer));
	//console.log(currentCustomer);
	window.location.replace('packages.html');
}

function retrieveInformation(){
	return JSON.parse(window.localStorage.getItem('currentCustomer'));
}

function retrieveFromObjectStorage(key){
	if(window.localStorage.getItem(key) == undefined)
		return {};
	return JSON.parse(window.localStorage.getItem(key));
}

function retrieveFromStorage(key){
	return window.localStorage.getItem(key);
}

function saveToStorage(key, value){
	window.localStorage.setItem(key, value);
}

function saveToObjectStorage(key, value){
	window.localStorage.setItem(key, JSON.stringify(value));
}

function saveSelections(id, style){
	var currentSelections = {};
	lote = document.getElementById("lotNumber").value;

	if(lote == undefined || lote == ""){

		alert("A lot number is needed in order to proceed. Please verify");
		return;
	}

	currentSelections['package']=id;
	currentSelections['lot']=lote;

	if(style != undefined){
		currentSelections['style']= style;
	} else {
		currentSelections['style']= null;
	}

	saveToObjectStorage('currentSelections', currentSelections);
	saveToObjectStorage('loadedID', "");
	window.location.href="selection.html";

	/*
	var heavenlyNest = document.getElementById('heavenlyNest');
	var airyBliss = document.getElementById('airyBliss');
	var vintageHeaven = document.getElementById('vintageHeaven');
	if(typeof heavenlyNest !== 'undefined' &&
		typeof airyBliss !== 'undefined' &&
		typeof vintageHeaven !== 'undefined') {
		if (id == 'Heavenly Nest'){
			heavenlyNest.innerHTML = "<img src='ui/package-selector_checked.png' width='15%'>";
			airyBliss.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
			vintageHeaven.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
		}
		else if(id == 'Airy Bliss'){
			heavenlyNest.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
			airyBliss.innerHTML = "<img src='ui/package-selector_checked.png' width='15%'>";
			vintageHeaven.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
		}
		else if (id == 'Vintage Heaven'){
			heavenlyNest.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
			airyBliss.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
			vintageHeaven.innerHTML = "<img src='ui/package-selector_checked.png' width='15%'>";
		}
		document.getElementById('next').className = 'btn btn-link';
		window.localStorage.setItem('currentSelections', JSON.stringify(currentSelections));
	}
	*/
	//loadPreviousPackage();
}

function retrieveSelections(){
	return JSON.parse(window.localStorage.getItem('currentSelections'));
}

function exists(element){
	if(document.body != null)
		return document.body.contains(element);
	return false;
}

function spawnSelection(){
	var sel = retrieveSelections();
	if(exists(document.getElementById('package'))){
		document.getElementById('package').innerHTML = sel.package;
	}
	if(exists(document.getElementById('package2'))){
		document.getElementById('package2').innerHTML = sel.package;
	}
	if(exists(document.getElementById('price'))){
		document.getElementById('price').innerHTML = Math.random().toString().substring(2,5)+",000";
	}
	if(exists(document.getElementById('sqftarea'))){
		document.getElementById('sqftarea').innerHTML = Math.random().toString().substring(2,5);
	}
}

function spawnInformationOnPage(){
	var customer = retrieveInformation();
	if(exists(document.getElementById('customerName'))){
		document.getElementById('customerName').innerHTML = customer.owner;
	}
	if(exists(document.getElementById('customerLotNumber'))){
		document.getElementById('customerLotNumber').innerHTML = customer.lotNumber;
	}
	if(exists(document.getElementById('customerAddress'))){
		document.getElementById('customerAddress').innerHTML = customer.address;
	}
	if (exists(document.getElementById('customerLeftSize'))){
		document.getElementById('customerLeftSize').innerHTML = customer.leftSize;
	}
	if (exists(document.getElementById('customerRightSize'))){
		document.getElementById('customerRightSize').innerHTML = customer.rightSize;
	}
	if (exists(document.getElementById('customerBackSize'))){
		document.getElementById('customerBackSize').innerHTML = customer.backSize;
	}
	if (exists(document.getElementById('customerFrontSize'))){
		document.getElementById('customerFrontSize').innerHTML = customer.frontSize;
	}
	if (exists(document.getElementById('customerTotalArea'))){
		document.getElementById('customerTotalArea').innerHTML = customer.totalArea;
	}

}

function loadPreviousPackage(){
	var sel = retrieveSelections();
	var heavenlyNest = document.getElementById('heavenlyNest');
	var airyBliss = document.getElementById('airyBliss');
	var vintageHeaven = document.getElementById('vintageHeaven');
	//console.log(sel);
	if(!(sel === undefined || sel === null)){
		if(sel.package == 'Heavenly Nest'){
			heavenlyNest.innerHTML = "<img src='ui/package-selector_checked.png' width='15%'>";
			airyBliss.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
			vintageHeaven.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
			document.getElementById('next').className = 'btn btn-link';
		}
		else if(sel.package == 'Airy Bliss'){
			heavenlyNest.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
			airyBliss.innerHTML = "<img src='ui/package-selector_checked.png' width='15%'>";
			vintageHeaven.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
			document.getElementById('next').className = 'btn btn-link';
		}
		else if(sel.package == 'vintageHeaven'){
			heavenlyNest.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
			airyBliss.innerHTML = "<img src='ui/package-selector_unchecked.png' width='15%'>";
			vintageHeaven.innerHTML = "<img src='ui/package-selector_checked.png' width='15%'>";
			document.getElementById('next').className = 'btn btn-link';
		}
	}
}

function getById(id){
	return document.getElementById(id);
}

function saveFinishes(stringFinish){
	var sel = retrieveSelections();
	var trendy = getById('trendy');
	var gold = getById('gold');
	var premium = getById('premium');
	var platinum = getById('platinum');
	sel['finish'] = stringFinish;
	window.localStorage.setItem('currentSelections',JSON.stringify(sel));
	if (stringFinish == 'Trendy'){
		trendy.innerHTML = "<img src='ui/package-selector_checked.png' width='20%'>";
		gold.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		premium.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		platinum.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		document.getElementById('next').className = 'btn btn-link';
	}
	else if (stringFinish == 'Gold'){
		trendy.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		gold.innerHTML = "<img src='ui/package-selector_checked.png' width='20%'>";
		premium.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		platinum.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		document.getElementById('next').className = 'btn btn-link';
	}
	else if (stringFinish == 'Premium'){
		trendy.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		gold.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		premium.innerHTML = "<img src='ui/package-selector_checked.png' width='20%'>";
		platinum.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		document.getElementById('next').className = 'btn btn-link';
	}
	else if (stringFinish == 'Platinum'){
		trendy.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		gold.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		premium.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
		platinum.innerHTML = "<img src='ui/package-selector_checked.png' width='20%'>";
		document.getElementById('next').className = 'btn btn-link';
	}
}

function loadPreviousFinishes(){
	var stringFinish = readCookie('currentSelections');
	stringFinish = JSON.parse(stringFinish)['finish'];
	var trendy = getById('trendy');
	var gold = getById('gold');
	var premium = getById('premium');
	var platinum = getById('platinum');
	//console.log(stringFinish);
	if (stringFinish){
		document.getElementById('next').className = 'btn btn-link';
		if (stringFinish == 'Trendy'){
			trendy.innerHTML = "<img src='ui/package-selector_checked.png' width='20%'>";
			gold.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			premium.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			platinum.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			document.getElementById('next').className = 'btn btn-link';

		}
		else if (stringFinish == 'Gold'){
			trendy.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			gold.innerHTML = "<img src='ui/package-selector_checked.png' width='20%'>";
			premium.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			platinum.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			document.getElementById('next').className = 'btn btn-link';
		}
		else if (stringFinish == 'Premium'){
			trendy.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			gold.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			premium.innerHTML = "<img src='ui/package-selector_checked.png' width='20%'>";
			platinum.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			document.getElementById('next').className = 'btn btn-link';
		}
		else if (stringFinish == 'Platinum'){
			trendy.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			gold.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			premium.innerHTML = "<img src='ui/package-selector_unchecked.png' width='20%'>";
			platinum.innerHTML = "<img src='ui/package-selector_checked.png' width='20%'>";
			document.getElementById('next').className = 'btn btn-link';
		}
	}
}


function changeBackground(imageURL){
	document.body.style.backgroundImage ="url('"+imageURL+"')";
}

function spawnVersion (){
	if(exists('version')){
		document.getElementById('version').innerHTML = version;
	}
}

//spawnVersion();

//console.log(document.URL.split('/')[document.URL.split('/').length-1]);
if (document.URL.split('/')[document.URL.split('/').length-1]!='selection.html'){
	$('body').bind('touchmove', function(e){e.preventDefault()});
}
else{
	$('#dontMove').bind('touchmove', function(e){e.preventDefault()});
	$('#espacio').unbind('touchmove');
}
