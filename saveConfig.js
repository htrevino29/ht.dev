
function saveConfig(saveTo, padre){
	
	var nombre = document.getElementById("saveTitle").innerHTML;
	if(saveTo == undefined){

		saveTo = "saveConfig.php";
		padre = "saveStatus";
		nombre = document.getElementById("configName").value;
	} 

	$("#saveOptions").css("display", "none");
	$("#registroSave").css("display", "none");
	// alert("saving");
	
	document.getElementById(padre).innerHTML = "Saving...";
	
	// guardando datos necesarios
	var resultado = {};
	
	resultado['ownerData'] = ownerData;
	resultado['selection'] = selection;
	resultado['finance'] = financiera;
	
	var resultadoStr = JSON.stringify(resultado);
	//console.log(resultadoStr);
	
	// hacer request y ver qué fue lo último guardado
	var conexion = new XMLHttpRequest();
	
	conexion.onreadystatechange = function(){
		
		if(conexion.readyState == 4){
			//alert(conexion.responseText);
			document.getElementById(padre).innerHTML = "Lot saved successfully.";
			document.getElementById("saveTitle").innerHTML = nombre;
			loadedID = conexion.responseText;
			$("#saveOptions").css("display", "block");
			$("#registroSave").css("display", "block");
		}
	}
	
	conexion.open("POST",host + "/" + saveTo, true);
	conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	conexion.send("key=" + k +  
					"&lot=" + lote + 
					"&name=" + nombre + 
					"&data=" + resultadoStr);
					
				
	
}

function checkSave() {

	// si es primera vez lanzar directo el segundo, si es segunda preguntar
	if(loadedID == -1) {

		$.magnificPopup.open({
	        items: {
	            src: '#configPopup' 
	        },
	        type: 'inline',
	        preloader: false,
			alignTop: true,
			callbacks: {
						beforeOpen: function() {
							//alert("antes que todo");
							
							//resetear forma con loading.
							
							/*
							document.getElementById("registro").innerHTML = '<table width="100%" >' + 
							'<tr><td>Configuration name</td><td></td></tr>' + 
							'<tr><td><span style="background-color: rgba(255, 255, 255, 1); color:black;"><input type="text" id="configName" style="width:100%"></span></td>' +
							'<td><input type="button" onclick="javascript:saveConfig();" value="Save" style="background-color: rgba(255, 255, 255, 1); color:black;"/></td></tr>' +
							'</table>';*/
						}
					}
	    });

	} else {

		$.magnificPopup.open({
	        items: {
	            src: '#saveOptionsPopup' 
	        },
	        type: 'inline',
	        preloader: false,
			alignTop: true,
			callbacks: {
						beforeOpen: function() {
						
							document.getElementById("saveStatus").innerHTML = "";	
						}
					}
	    });
	}
}

function updateConfig() {

	saveConfig("updateConfig.php?id=" + loadedID, "saveStatus");
}