var recursiveDone;
var checador;

function generarMatrix() {

	tablaMatrix = generarMatrixRecursiva("prices.matrix", 0);
	document.getElementById("contenidoMatrix").innerHTML =  "<table width='100%' id='matrixTable'>" +
			"<tr>" +
			"<td width='36%'></td>" +
			"<td width='18%'></td>" +
			"<td width='18%'></td>" +
			"<td width='18%'></td>" +
			"<td width='10%'></td>" +
			"</tr>" +
			tablaMatrix.substring(9) +
			"</table>";
	//console.log(tablaMatrix);
}

function generarMatrixRecursiva(actual, level) {

	var actualObj = eval(actual);

	if(actual != "prices.matrix"){
		// checar requires
		if(actualObj.hasOwnProperty("requires")){

			//console.log("******************************" + actual);

			// checar condiciones entonces
			// obtener los validos
			var requisitos = actualObj.requires;

			encontrado = 0;

			// verificar que este esté en los válidos
			for(var i = 0; i < requisitos.length; i++){

				//console.log(requisitos[i].field + " " + requisitos[i].value);
				if(eval(requisitos[i].field) == requisitos[i].value || (requisitos[i].value == "not null" && eval(requisitos[i].field) != null)){

					encontrado++;
				}
			}

			if(encontrado == 0){
				//console.log("esto se va");
				return "";
			}
		}

		var resultado = "";
		var desplazamiento = level * 20 - 20;
		color = Array();
		color[0] = "#ffffff";
		color[1] = "#000";
		color[2] = "#4a5354";
		color[3] = "#5b6666";
		color[4] = "#757c75";
		color[5] = "#939a93";

		encabezado = "<tr style='height:40px; background-color:" + color[level] + ";'>";
		titulo = 	"<td >" +
					"<table width='100%'>" +
						"<tr style='height:100%;'>" +
						"<td style='width:" + desplazamiento + "px;' />" +
						"<td>" + actualObj.uiText  + "</td>" +
						"<tr>" +
					"</table>" +
					"</td>";


		if(actualObj.hasOwnProperty("levels")){

			niveles = "";
			actualLvl = 1;
			totalNiveles = actualObj.levels;

			for(i = 0; i < totalNiveles; i++) {

				niveles += "<td>&nbsp;&nbsp;<input type='checkbox' onclick='javascript:selectDefaultMaster(\"" +
							actual + "\"," +
							actualLvl +
							", this)' />" +
							"&nbsp;&nbsp;&nbsp; SELECT ALL</td>";
				actualLvl++;
			}

			for(i = totalNiveles; i < 4; i++) {

				niveles += "<td></td>";
			}
			// ver si tiene niveles (seleccionar nivel completo)
			resultado += 	encabezado +
							titulo +
							niveles +
							"</tr>";

		} else if(actualObj.hasOwnProperty("checked")) {

			// ver si es checked

			// recopilar hijos
			hijos = "";

			totalHijos = 0;

			// agregar cada hijo
			if(actualObj.hasOwnProperty("options")){
				jQuery.each(actualObj.options, function(key, val){


					//console.log(val);
					// ver si esto está checked
					seleccionObj = eval(val.selection);
					actualStr = actual + ".options." + key;
					checkedMatrix = "";
					checkedValue = 0;
					image = "";

					if(seleccionObj == actualStr || (seleccionObj == null && val.hasOwnProperty("nullChoice"))){

						checkedMatrix = " checked='true' ";
						checkedValue = 1;
					}

					if(val.hasOwnProperty("styleText")){

						image = "&nbsp;<a href='javascript:openPopup(\"" + val.styleText + "\")'><img src='ic_all_out_white_18dp_2x.png' /></a>";
					}


					hijos += 	"<td>" +
								"&nbsp;&nbsp;<input type='checkbox' onclick='javascript:seleccionarElementoMatrix(" +
								"\"" + val.selection  + "\"," +
								"\"" + actualStr + "\"," +
								" false, \"" + val.id + "\")' " +
								checkedMatrix +
								" id='" + val.id + "' " +
								" data-target='" + val.selection + "'/>&nbsp;&nbsp;&nbsp;" +
								val.uiText + "&nbsp;" + finance.format(obtenerPrecio(val), 'USD') +
								image +
								"</td>";
					totalHijos++;
				});
			}

			// agregar espacios en blanco
			for(i = totalHijos; i < 4; i++) {

				hijos += "<td></td>";
			}

			resultado += 	encabezado  +
							titulo +
							hijos +
							"</tr>";

			//console.log("/// " + encabezado + titulo);
			// si fue checked este nivel está terminado
			return ((resultado == undefined)? "" : resultado);

		} else {


			// generar html de línea actual
			resultado += 	encabezado  +
							titulo +
							"<td></td><td></td><td></td><td></td></tr>";

		}
	}
	// repetir proceso con los hijos recursivamente
	if(actualObj.hasOwnProperty("options")){
		jQuery.each(actualObj.options, function(key, val){

			//console.log(key + ": " + val);
			//console.log();
			resultado += generarMatrixRecursiva(actual + ".options." + key, level + 1);
		});
	}

	// regresar resultado
	return ((resultado == undefined)? "" : resultado);
}

function seleccionarElementoMatrix(seleccion, campo, esDefault, id, fromDefault) {

	if(fromDefault == undefined)
		fromDefault = false;


	pos = seleccion.lastIndexOf(".");
	key = eval(seleccion.substring(0, pos));
	value = seleccion.substring(pos + 1);

	// actualizar folder y detalle i guess
	if(plan == "GH" && seleccion == "selection.matrix.elevationStyle"){


		if(style == "") estilo = " - Traditional";
		else estilo = " - Tuscan";

		document.getElementById("floorPlan").innerHTML = "Glorious Hills" + estilo;


	}


	// si está seleccionado y le dan click hacerle null
	if(key[value] == campo && !esDefault){

		// chequeo para stone
		if(eval(campo).hasOwnProperty("stone")){
			stone = "";
		}

		key[value] = null;
		document.getElementById(id).checked = false;
		console.log("++++++++++++++++++++++++ campo");

	} else {

		if(eval(campo).hasOwnProperty("stone")){
			campoObj = eval(campo);
			stone = campoObj['stone'];
			//alert("STONE: " + stone);
		}

		if(eval(campo).hasOwnProperty("fullhouseStone")){
			campoObj = eval(campo);
			fullhouseStone = campoObj['fullhouseStone'];
			//alert("STONE: " + stone);
		}


		key[value] = campo;

		idNum = parseInt(id.substring(0,3));
		min = idNum - 2;
		max = idNum + 2;

		if(min < 0)
			min = 0;

		elegido = document.getElementById(id);

		if(elegido != null){
			attrElegido = elegido.getAttribute("data-target");

			for(j = min; j <= max; j++){
				for(i = 3; i >= 0; i--){

					idActual = "" + j;
					while(idActual.length < 3)
						idActual = "0" + idActual;

					idActual += "_" + i;
					//console.log("++++++++++++++++++++++++ " + idActual);

					checkboxActual = document.getElementById(idActual);


					if(checkboxActual != undefined &&
						checkboxActual != null &&
						id != idActual &&
						attrElegido == checkboxActual.getAttribute("data-target")) {

						checkboxActual.checked = false;
					}


				}
			}

			elegido.checked = true;
		}
	}

	if(!fromDefault)
		calcularPrecios();
	//generarMatrix();
	setupPopup();
}

function checkIfDone() {

	if(recursiveDone){
		alert("done: " + recursiveDone);
		window.plugins.spinnerDialog.hide();
		clearInterval(checador);
	}
}

function selectDefaultMaster(actualStr, level, checkbox) {

	// habilitar loader
	console.log("+++++++++++++++++++++++++++++++");
	console.log(checkbox);
	checkbox.checked = false;
	recursiveDone = false;

	// TODO: descomentar para compilación final
	//window.plugins.spinnerDialog.show(null, "Working...", true);

	//checador = setInterval(checkIfDone, 2000);
	selectDefault(actualStr, level);

	//window.plugins.spinnerDialog.hide();

	//if(typeof(w) == undefined){
}

function selectDefault(actualStr, level){

	/*
	pos = actualStr.lastIndexOf(".");
	key = eval(actualStr.substring(0, pos));
	value = actualStr.substring(pos + 1);
	*/

	actual = eval(actualStr);
	console.log("1 " + actualStr + " : " + level);

	// recorrer todos los hijos para ver cuáles cumplen con este nivel
	if(actual.hasOwnProperty("options")){
		jQuery.each(actual.options, function(key, val){


			strHijo = actualStr + ".options." + key;

			console.log(val);

			if(val.hasOwnProperty("options")) {

				// - tiene options
				selectDefault(strHijo, level);

			} else {

				// TIENE QUE HABER DEFAULT - irse de grande a chico

				// por cada uno ver 1 de dos

				for(i = level; i > 0; i--){

					if(val.hasOwnProperty("levelDefault") && val.levelDefault == i){

						// - tiene level default
						seleccionarElementoMatrix(val.selection, strHijo, true, val.id, true);
						break;
					}
				}
			}

		});
	}
	calcularPrecios();
}

ownerData = {
			name: "",
			address: "",
			phone: "",
			cellphone: "",
			workNumber: "",
			email: "",
			fax: ""
		};

function saveOwner() {

	ownerData['name'] = document.getElementById('ownerName').value;
	ownerData['address'] = document.getElementById('ownerAddress').value;
	ownerData['phone'] = document.getElementById('ownerPhone').value;
	ownerData['cellphone'] = document.getElementById('ownerCellphone').value;
	ownerData['workNumber'] = document.getElementById('ownerWorkNumber').value;
	ownerData['email'] = document.getElementById('ownerEmail').value;
	ownerData['fax'] = document.getElementById('ownerFax').value;

	pdfData['owner'] = ownerData['name'];
	pdfData['address'] = ownerData['address'];
	console.log(JSON.stringify(ownerData));
	// update owner data
	$.magnificPopup.close();
}

function showMatrix() {

	generarMatrix();
	$("#MatrixPopup").css("visibility", "visible");
}

function hideMatrix() {
	$("#MatrixPopup").css("visibility", "hidden");

}
