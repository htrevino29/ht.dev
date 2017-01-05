function loadChangeOrdersPDF(type) {

	// batear a los que no tienen guardados
	if(loadedID == -1)
		return;

	var conexion = new XMLHttpRequest();

	//window.plugins.spinnerDialog.show(null, "Loading...", true);

	// cargar basado en ID y tipo de change order
	conexion.onreadystatechange = function(){

		// cargar datos
		changeOrdersRows = "";

		if(conexion.readyState == 4){



			if(conexion.responseText == "none"){


				changeOrdersRows += "<tr>";
				changeOrdersRows += "<td width='100%'>No records found.</td>";
				changeOrdersRows += "</tr>";

			} else {
				console.log(conexion.responseText);
				data = eval(conexion.responseText);




				for(i = 0; i < data.length; i++) {

					console.log(data[i]);
					changeOrdersRows += "<tr>";
					changeOrdersRows += "<td width='50%'>" + data[i].pdf + "</td>";
					changeOrdersRows += "<td width='50%'><a href=\"javascript:retrieveChangeOrderPDF('" + data[i].pdf + "');\">[download]</a></td>";
					changeOrdersRows += "</tr>";
				}
			}


		} else {

			changeOrdersRows += "<tr>";
				changeOrdersRows += "<td width='100%'>No connection available.</td>";
				changeOrdersRows += "</tr>";
		}

		document.getElementById("changeOrders").innerHTML = changeOrdersRows;

		// abrir popup
		$.magnificPopup.open({
	        items: {
	            src: '#changeOrdersPopup'
	        },
	        type: 'inline',
	        preloader: false,
			alignTop: true
	    });

		//window.plugins.spinnerDialog.hide();
	}


	conexion.open("POST", host + "/getCO.php",true);
	conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	conexion.send("id=" + loadedID + "&t=" + type);

}
