function showElement(id, type){

	// // // //// console.log("id: " + id);
	// // // //// console.log("objeto: " + document.getElementById(id));

	// crecer cosa
	var entrada = document.getElementById(id);
	// // //// console.log("RIGHT HERE");

	var padre = entrada.parentNode;
	if(type == 1){
		padre = entrada.parentNode.parentNode;
	}
	padre.style.height= "180px";

	entrada.style.visibility = "inherit";
}

function hideElement(id, type, campoParticular){

	// // // //// console.log("id: " + id);
	// // // //// console.log("objeto: " + document.getElementById(id));
	var entrada = document.getElementById(id);
	var padre = entrada.parentNode;
	if(type == 1){
		padre = entrada.parentNode.parentNode;
	} else {

		seleccionarElementoConInput(campoParticular, null, null);
	}
	padre.style.height= "75px";
	entrada.style.visibility = "hidden";

	// resetear valores en caso que sea tipo 1
}

function recargarMenu(){

	//if(ultimoCargado != ""){

		cargarMenu(null, ultimoCargado);
		//alert("recargando");
	//}
}

function cargarMenu(padre, elementoString){

	console.log("*******************************************	");
	console.log(elementoString);
	console.log(eval(elementoString).uiText);
	uiActual = eval(elementoString).uiText;
	document.getElementById("popupTitle").innerHTML = uiActual;
	console.log(document.getElementById("popupTitle").innerHTML);

	if(uiActual == "Site specific"){
		$("#warning").css("visibility", "visible");

	} else {

		$("#warning").css("visibility", "hidden");
	}
	// //// console.log(elementoString);
	// verificar si lo hace con este o con hijos
	// no recursivo porque sólo necesita hacerlo a 1 nivel
	//console.log("1");
	ultimoCargado = elementoString;
	var elemento = eval(elementoString);
	//console.log("2");
	var opciones = elemento.options;
	var listado = "";

	// //// console.log(elemento);

	var campoACambiar ="";

	// obtener propiedad a cambiar si hay
	if(elemento.hasOwnProperty("selection")){
		// //// console.log("SI HABIA SELECTION");
		campoACambiar = elemento["selection"];
	}
	//console.log("3");
	if(padre != null){
		stackMenu.push(padre);
	}

	if(stackMenu.length > 0){

		listado += "<div class='elemento' onclick=\"javascript:back()\">&#60; Back</div>";
	}

	// //// console.log(opciones);

	// todas las opciones
	for(var propName in opciones) {

		// //// console.log("ahora iterando con : " + propName);
		var encontrado = 1;

		if(opciones.hasOwnProperty(propName)) {

			if(opciones[propName].hasOwnProperty("showInMenu") && opciones[propName].showInMenu == "false"){
				continue;
			}

			// contrario al anterior en este caso tiene que cumplir con todos los requisitos para poder considerarlo
			// encontrado
			if(opciones[propName].hasOwnProperty("requiresAnd")) {

				//console.log("requería algo");

				// obtener los validos
				var requisitos = opciones[propName]["requiresAnd"];

				// verificar que este esté en los válidos
				for(var i = 0; i < requisitos.length; i++){

					//console.log(requisitos[i].field);
					var campoActual = eval(requisitos[i].field);

					//console.log("****************" + campoActual);

					if(requisitos[i].value == null && campoActual == "null" || requisitos[i].value != null && campoActual == "not null" || campoActual == requisitos[i].value){
						encontrado = 1;

					} else {
						encontrado = 0;
						break;
					}
					//console.log("25");
				}
			}

			//console.log("26");
			// comprobar si requiere algo y si se cumple
			// si se cumple seguir y si no saltarse al siguiente elemento


			if(encontrado == 1 && opciones[propName].hasOwnProperty("requires")) {



				// obtener los validos
				var requisitos = opciones[propName]["requires"];

				//console.log("27");
				// verificar que este esté en los válidos
				for(var i = 0; i < requisitos.length; i++){

					var campoActual = eval(requisitos[i].field);

					if(requisitos[i].field== "selection.hobbies.casita") {

						console.log("***** " + campoActual);
					}

					if(requisitos[i].value == null && campoActual == "null" || requisitos[i].value == "not null" && campoActual != null && campoActual != "" || campoActual == requisitos[i].value){
						encontrado = 1;
						break;
					} else {
						encontrado = 0;
					}
				}
			}

			//console.log("28");
			if(encontrado == 0){

				//// console.log("no lo encontramos");
				continue;
			}

			//// console.log("si llego aqui si lo encontro");
			var campoParticular = "";
			// //// console.log("ADENTRO iterando con: " + propName);
			// //// console.log(opciones);

			// sobreescribir campo a cambiar si es específico
			if(opciones[propName].hasOwnProperty("selection")){
				// // // //// console.log("selection sobreescrito");
				campoParticular = opciones[propName]["selection"];
				campoACambiar = campoParticular;
			}
			// //// console.log(1);

			// cargar el menú - puede cambiar donde se haga según el código
			var cargarMenu = "onclick=\"javascript:cargarMenu('"+
								elementoString + "', '" +
								elementoString + ".options." +
								propName +
								"')\"";

			// verificar si es yesNo
			// si es el onclick no hace nada
			var id = elementoString + "." + propName;
			var idBox = id + ".box";
			// // // //// console.log("id:" + id);

			// //// console.log(2);
			//// console.log("********" + campoACambiar);
			//// console.log(elementoString);
			//// console.log(propName);
			//// console.log(idBox);
			var onClickGral = "onclick=\"javascript:seleccionarElemento('"+
								campoACambiar + "','" +
								elementoString +
								".options." +
								propName + "','" + idBox + "')\"";

			//// console.log(onClickGral);

			var opcionYesNo = "";
			var cargarGeneral = cargarMenu;
			var menuHijo = "";

			// //// console.log(3 + elementoString);
			var checkedYes = "";
			var checkedNo = "";
			if(campoACambiar != "" && wasChecked(elementoString + ".options." + propName, campoACambiar)){

				checkedYes = "checked";
			} else {
				checkedNo = "checked";
			}

			// //// console.log(4);
			// // // //// console.log("propName: " + opciones[propName].enabler);
			if(opciones[propName].enabler == "yesNo"){



				onClickGral = "";
				cargarGeneral = "";
				var type = 0;

				if(opciones[propName].hasOwnProperty("input") && opciones[propName].input == "number"){
					menuHijo = "<div id='" +
								id +
								"' style='height:200px; visibility:hidden;' " +
								"" +
								"><input type=\"number\" size=5 value=0 style='color: black; height:60px; width:200px; opacity=1.0;' id='"+
								idBox + "'/>&nbsp;" +
								opciones[propName].unit +
								"&nbsp;&nbsp;&nbsp;<input type=\"button\" value=\"Update\"  onclick=\"javascript:seleccionarElementoConInput('"+
								campoParticular + "','" +
								elementoString +
								".options." +
								propName + "','" + idBox + "')\"/></div>";


				} else {
					menuHijo = "<BR /><center><span id='" +
								id +
								"' style='visibility:hidden;' " +
								cargarMenu +
								">GO</span></center>";
					type = 1;
				}

				opcionYesNo = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"radio\" name=\"" +
								propName +
								"\" value=\"yes\" onclick='javascript:showElement(\"" + id + "\", "+ type + ")' " + checkedYes + ">&nbsp;YES &nbsp;" +
								"<input type=\"radio\" name=\"" +
								propName +
								"\" value=\"no\" onclick='javascript:hideElement(\"" + id + "\", "+ type + ", \"" + campoParticular + "\")' " + checkedNo + ">&nbsp;NO";


			}

			if(elemento.hasOwnProperty("sub") && elemento.sub != "menu"){
				if(elemento.sub == "choice"){
					// // // //// console.log("*** onclick: " + onClickGral);
					listado += "<div class='elemento' " +
									onClickGral +
									">&nbsp;&nbsp;&nbsp;<input type=\"radio\" id=\"" +
									idBox +
									"\" name=\"" +
									elementoString +
									"\"c value=\"" +
									elementoString +
									"." +
									propName +
									"\" " + checkedYes + ">&nbsp;&nbsp;&nbsp;" +
									opciones[propName].uiText +
									"" +
									opcionYesNo +
									"</div>";
				} else if(elemento.sub == "multiple"){

					// // //// console.log("*** onclick: " + onClickGral);
					listado += "<div class='elemento' " +
									onClickGral +
									">&nbsp;&nbsp;&nbsp;<input type=\"checkbox\" id =\"" +
									idBox +
									"\" name=\"" +
									elementoString +
									"\" value=\"" +
									elementoString +
									"." +
									propName +
									"\" " +
									checkedYes +
									">&nbsp;&nbsp;&nbsp;" +
									opciones[propName].uiText +
									"" +
									opcionYesNo +
									"</div>";

				}
			} else {

                if(opciones[propName].hasOwnProperty("inline") && opciones[propName].inline == "true") {

                    // // //// console.log("*** onclick: " + onClickGral);
                    listado += "<div class='elemento' " +
                    onClickGral +
                    ">&nbsp;&nbsp;&nbsp;<input type=\"checkbox\" id =\"" +
                    idBox +
                    "\" name=\"" +
                    elementoString +
                    "\" value=\"" +
                    elementoString +
                    "." +
                    propName +
                    "\" " +
                    checkedYes +
                    ">&nbsp;&nbsp;&nbsp;" +
                    opciones[propName].uiText +
                    "" +
                    opcionYesNo +
                    "</div>";
                } else if(opciones[propName].hasOwnProperty("fourCorner") && opciones[propName].fourCorner == "true") {

					listado += "<div class='elemento' "+
							//cargarGeneral +
							" onclick='showFourCorners(\"" + opciones[propName].uiText + "\")'>" +
							opciones[propName].uiText +
							opcionYesNo +
							"" +
							menuHijo +
							"</div>";
				} else {

					// prueba de pop-up
					$('.vhmorepopup').magnificPopup({
						items: [
							{src: host + "/retrieve.php?key=" + k  + "&f=06_MORE INFO IMAGES/03_VINTAGE HEAVEN/VH_MORE_INFO.jpg", type: 'image'}
						],
						gallery: {
							enabled: false
						},
						image: {
							tError: '<a href="%url%">The imavhmorepopupge #%curr%</a> could not be loaded.',
							titleSrc: function(item) {
								return "Vintage Heaven";
							}
						}
					});

                    // cambia dependiendo del sub del padre
                    //listado += "<div class='elemento'> <span width='100%'"+
                    listado += "<div class='elemento' "+
							cargarGeneral +
							">" +
							opciones[propName].uiText +
							opcionYesNo +
							"&nbsp; &gt;" +
							menuHijo +
							//"</span>" +
							//"<span>	<a href='javascript:createPopUp();' title='Preview'>[preview]</a> </span>" +

							"</div>";
                }
			}
		}
	}

	menu.innerHTML = listado;
}

function createPopUp(){
	$.magnificPopup.open({
	  items: {
		src: host + "/retrieve.php?key=" + k  + "&f=04_RENDERS/HEAVENLY NEST/HEAVENLY_NEST_FRONTAL_DIA_01.jpg",
		type: 'image'
	  }
	});
}

function enableSelf(id) {
	var element = document.getElementById(id);

}

function back(){

	var regreso = stackMenu.pop();
	cargarMenu(null, regreso);
}

function clickMenu(ubicacion) {


	// reset history
	//console.log("0.1");
	stackMenu = new Array();

	ultimoCargado = "";

	// toggle visibilidad - si invisible cargar y volver visible
	// // // //// console.log(menu.style.visibility);
	//console.log("0.2");
	/*if(menu.style.visibility == "visible" && lastElement == ubicacion){

		menu.style.visibility = "hidden";
	} else {
	*/
		cargarMenu(null, ubicacion);
		menu.style.visibility = "visible";
	//}
	//console.log("0.3");
	// // // //// console.log(menu.style.visibility);

	lastElement = ubicacion;
	$.magnificPopup.open({
		items:{

			src: "#sectionPopup"
		},
		type: "inline",
		alignTop: true
	});

}

// invocado sólo en los que tienen extra
function seleccionarElementoConInput(elemento, valor, idInput){

	//// console.log("------------------- " + elemento);
	// console.log("------------------- " + valor);

	var selCambio = elemento.lastIndexOf(".");
	var selPrincipal = elemento.substring(0, selCambio);
	var selPropiedad = elemento.substring(selCambio + 1);

	var cantidadCambio = selPrincipal.indexOf(".");
	var cantidadPrincipal = "unitBased." + selPrincipal.substring(cantidadCambio + 1);

	var elementoSeleccion = eval(selPrincipal);
	var elementoCantidad = eval(cantidadPrincipal);

	if(valor != null){
		// console.log(cantidadPrincipal + " [" + selPropiedad);
		elementoSeleccion[selPropiedad] = valor;
		elementoCantidad[selPropiedad] = document.getElementById(idInput).value;
	} else {

		elementoSeleccion[selPropiedad] = null;
		elementoCantidad[selPropiedad] = 0;
	}
	// recargar precios
	calcularPrecios();
}

function seleccionarElemento(elemento, valor, idBox){



	// alert(elemento);
	var cambio = elemento.lastIndexOf(".");
	var principal = elemento.substring(0, cambio);
	var propiedad = elemento.substring(cambio + 1);

	if (idBox != ""){
		var idBoxObj = document.getElementById(idBox);
	}

	// guardar valor en el elemento
	var elementoTrad = eval(principal);
	var elementoComp = eval(elemento);
	//// console.log(principal);
	//// console.log(elemento);

	// verificar si el valor ya estaba guardado
	if(elementoTrad[propiedad] == valor && idBoxObj.type != "radio"){

		// descheckar el ui
		if(idBox != "")
			idBoxObj.checked = false;
		//elementoTrad[propiedad] = null;
		deselecciona(valor);
	} else {

		// si hay algo que des-seleccionar hacerlo
		if(idBox != "")
			idBoxObj.checked = true;

		// si es null mandarla a volar
		var objAGuardar = eval(valor);

		// //// console.log("objeto: " + valor);
		// //// console.log(objAGuardar.nullChoice);
		//if(objAGuardar.hasOwnProperty("nullChoice") && objAGuardar.nullChoice == true)
		//	valor = null;

		// cargar preset si hay para este
		//if(valor != null){

			var seleccion = retrieveFromObjectStorage("currentSelections");
			// alert(JSON.stringify(seleccion));

			//console.log(subpaquetes);

			// iterar para ver si es alguno de estos
			/*
			for(var i = 0; i < subpaquetes.length; i++){

				if(subpaquetes[i].field == elemento) {

					console.log("...................2");
					var postfix = "";

					//determinar paquete a integrar
					if(subpaquetes[i].hasOwnProperty('postfix') && subpaquetes[i].postfix == true){

						if(plan == "prices.masterPlans.options.HN" || plan == "prices.masterPlans.options.AB"){
							postfix = "HNAB";
						} else {
							postfix = "VH";
						}
					}

					console.log("...................3");
					var aCargar = subpaquetes[i].prefix + postfix + "_" + terminados ;
					//alert(aCargar);
					$.extend(true, selection, eval(aCargar));
					console.log("...................4");
				}
			}
			*/
		//}

		console.log("5");
		// finalmente guardar el valor
		elementoTrad[propiedad] = valor;


	}


	// recargar precios
	calcularPrecios();
	recargarMenu();
}

function deselecciona(elemento){

	// poner null el que corresponde a este
	var actual = eval(elemento);

	if(actual.hasOwnProperty("selection")){

		var cambio = actual["selection"].lastIndexOf(".");
		var principal = actual["selection"].substring(0, cambio);
		var propiedad = actual["selection"].substring(cambio + 1);
		var principalObj = eval(principal);

		var campo = eval(actual["selection"]);
		// // //// console.log("----------------" + elemento);
		// // //// console.log("----------------" + actual["selection"]);
		// // //// console.log("----------------" + principal);
		// // //// console.log("----------------" + propiedad);
		// // //// console.log("----------------" + campo);

		principalObj[propiedad] = null;
	}

	// si tiene hijos repetir por hijo
	if(actual.hasOwnProperty("options")) {
		for(var hijo in actual["options"]) {
			if(actual["options"].hasOwnProperty(hijo)) {
				deselecciona(actual["options"][hijo]);
			}
		}
	}
}

function wasChecked(element, sel) {

	// //// console.log("element: " + element);
	// //// console.log("seleccion: " + sel);

	if(element == "" || element == undefined || sel == "" || sel == undefined)
		return false;

	//console.log("***** " + sel);
	var selectionObj = eval(sel);

	// //// console.log("wasChecked " + 1.5);
	// caso especial - objeto es nullChoice
	var objSeleccionado = eval(element);

	// //// console.log("wasChecked " + 2);
	/*
	if(objSeleccionado.hasOwnProperty("nullChoice") &&
		objSeleccionado.nullChoice &&
		selectionObj == null){
			return true;
	}*/

	// //// console.log("wasChecked " + 3);
	if(selectionObj == element) {
		return true;
	}
	return false;
}

function showFourCorners(type){

	hideFourCorners();

	// agregar titulo
	var titulo = document.createElement("div");
	titulo.setAttribute('style', 'position:absolute; left:800px; top:1050px; font-size:60px; color:#ffffff;');
	titulo.innerHTML = type + " [ <a href='javascript:hideFourCorners();' style='color:white;'>X</a> ]";

	// y los cuatro rincones
	var ai = document.createElement("input");
	ai.setAttribute('style', 'position:absolute; left:630px; top:1150px; width:80px;');
	ai.setAttribute('type', 'number');
	ai.setAttribute('id', 'ai');
	ai.setAttribute('value', '0');
	ai.setAttribute('onchange', 'javascript:reCalculate("' + type + '")');

	var ad = document.createElement("input");
	ad.setAttribute('style', 'position:absolute; left:1350px; top:1150px; width:80px;');
	ad.setAttribute('type', 'number');
	ad.setAttribute('id', 'ad');
	ad.setAttribute('value', '0');
	ad.setAttribute('onchange', 'javascript:reCalculate("' + type + '")');

	var bi = document.createElement("input");
	bi.setAttribute('style', 'position:absolute; left:630px; top:2350px; width:80px;');
	bi.setAttribute('type', 'number');
	bi.setAttribute('id', 'bi');
	bi.setAttribute('value', '0');
	bi.setAttribute('onchange', 'javascript:reCalculate("' + type + '")');

	var bd = document.createElement("input");
	bd.setAttribute('style', 'position:absolute; left:1350px; top:2350px; width:80px;');
	bd.setAttribute('type', 'number');
	bd.setAttribute('id', 'bd');
	bd.setAttribute('value', '0');
	bd.setAttribute('onchange', 'javascript:reCalculate("' + type + '")');

	var rearElevationLF = document.createElement("input");
	rearElevationLF.setAttribute('style', 'position:absolute; left:990px; top:1150px; width:80px;');
	rearElevationLF.setAttribute('type', 'number');
	rearElevationLF.setAttribute('id', 'rearElevationLF');
	rearElevationLF.setAttribute('value', '0');
	rearElevationLF.setAttribute('onchange', 'javascript:reCalculate("' + type + '")');

	var frontElevationLF = document.createElement("input");
	frontElevationLF.setAttribute('style', 'position:absolute; left:990px; top:2350px; width:80px;');
	frontElevationLF.setAttribute('type', 'number');
	frontElevationLF.setAttribute('id', 'frontElevationLF');
	frontElevationLF.setAttribute('value', '0');
	frontElevationLF.setAttribute('onchange', 'javascript:reCalculate("' + type + '")');

	var rightElevationLF = document.createElement("input");
	rightElevationLF.setAttribute('style', 'position:absolute; left:1350px; top:1750px; width:80px;');
	rightElevationLF.setAttribute('type', 'number');
	rightElevationLF.setAttribute('id', 'rightElevationLF');
	rightElevationLF.setAttribute('value', '0');
	rightElevationLF.setAttribute('onchange', 'javascript:reCalculate("' + type + '")');

	var leftElevationLF = document.createElement("input");
	leftElevationLF.setAttribute('style', 'position:absolute; left:630px; top:1750px; width:80px;');
	leftElevationLF.setAttribute('type', 'number');
	leftElevationLF.setAttribute('id', 'leftElevationLF');
	leftElevationLF.setAttribute('value', '0');
	leftElevationLF.setAttribute('onchange', 'javascript:reCalculate("' + type + '")');

	var calculate = document.createElement("button");
	calculate.setAttribute('style', 'position:absolute; left:890px; top:2400px; height:40px;');
	calculate.setAttribute('onclick', 'javascript:reCalculate("")');
	calculate.innerHTML = "Calculate foundation price";

	contenedor4.appendChild(titulo);
	contenedor4.appendChild(ai);
	contenedor4.appendChild(rearElevationLF);
	contenedor4.appendChild(ad);
	contenedor4.appendChild(frontElevationLF);
	contenedor4.appendChild(bi);
	contenedor4.appendChild(rightElevationLF);
	contenedor4.appendChild(bd);
	contenedor4.appendChild(leftElevationLF);
	contenedor4.appendChild(calculate);
}

function hideFourCorners() {

	while (contenedor4.firstChild) {
		contenedor4.removeChild(contenedor4.firstChild);
	}
}

function reCalculate(type) {

	var ai = parseFloat($("#ai").val());
	console.log("ai: " + ai);
	var ad = parseFloat($("#ad").val());
	console.log("ai: " + ad);
	var bi = parseFloat($("#bi").val());
	console.log("ai: " + bi);
	var bd = parseFloat($("#bd").val());
	console.log("ai: " + bd);

	var rearElevationLF = parseFloat($("#rearElevationLF").val());
	var frontElevationLF = parseFloat($("#frontElevationLF").val());
	var leftElevationLF = parseFloat($("#leftElevationLF").val());
	var rightElevationLF = parseFloat($("#rightElevationLF").val());

	var pricePerInch = 0.12;
	var priceMasonry = 5.5;


	var average = (ai + ad + bi + bd)/4;
	console.log("average: " + average);
	var conDiferencia = average - 24;
	console.log("dif: " + conDiferencia);
	var precioPorExcedente = conDiferencia * pricePerInch * totalArea;
	console.log("precio: " + precioPorExcedente);

	if(precioPorExcedente < 0)
		precioPorExcedente = 0;

	prices.siteSpecific.options.foundations.price = precioPorExcedente;

	var rearDrop = (((ai + ad)/2)-30)/12;
	var frontDrop = (((bi + bd)/2)-30)/12;
	var rightDrop = (((ad + bd)/2)-30)/12;
	var leftDrop = (((ai + bi)/2)-30)/12;

	var totalExpuesto = 0;

	if(rearDrop > 0) {
		totalExpuesto += rearDrop * rearElevationLF;
	}
	if(frontDrop > 0) {
		totalExpuesto += frontDrop * frontElevationLF;
	}
	if(rightDrop > 0) {
		totalExpuesto += rightDrop * rightElevationLF;
	}
	if(leftDrop > 0) {
		totalExpuesto += leftDrop * leftElevationLF;
	}

	prices.siteSpecific.options.foundationMasonry.price = totalExpuesto * priceMasonry;

	calcularPrecios();
}

function changeFloorPlan() {

	//alert("aqui");
	$(segundoPiso).toggle();
}
