document.getElementById('profile').style.display = 'none';
document.getElementById('selections').style.display = 'none';

var shProf = false;
var shSel = false;
function showProfile(){
	if(shProf){
		document.getElementById('profile').style.display = 'none';
	}
	else{
		document.getElementById('profile').style.display = 'block';	
	}
	shProf = !shProf;
	
}

function showSelections(){
	if(shSel){
		document.getElementById('selections').style.display = 'block';	
	}
	else{
		document.getElementById('selections').style.display = 'none';		
	}
	shSel = !shSel;
	
}