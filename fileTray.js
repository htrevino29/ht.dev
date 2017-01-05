var trayIndex, bIndex, pdfFileName;

function loadFiles() {

	registro = document.getElementById("registros");

	// hacer request y ver qué fue lo último guardado
	var conexion = new XMLHttpRequest();
	console.log("aqui");

	conexion.onreadystatechange = function(){

		if(conexion.readyState == 4){
			if(conexion.responseText == "none"){
				registro.innerHTML = "<tr><td>No results found.</td></tr>";
			} else {
				encontrados = JSON.parse(conexion.responseText);
				console.log(conexion.responseText);
				var tabla = "";

				for(var i = 0; i < encontrados.length; i++){

					console.log("iterando");
					tabla += "<tr><td>" + encontrados[i].file + "</td>" +
							"<td>" + encontrados[i].date_added + "</td>" +
							"<td><a href=\"javascript:retrieveSpecificFile(" + i + ");\">[download]</a></td></tr>";
				}

				console.log(tabla);
				registro.innerHTML = tabla;

			}
		}
	}

	console.log("aqui2");
	console.log(loadedID);
	conexion.open("POST", host + "/files.php",true);
	conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	conexion.send("key=" + k + "&id=" + loadedID);
	console.log("aqui3");
}

function retrieveChangeOrderPDF(thePDF){

	pdfFileName = thePDF;
	window.open(host + "/retrieveTray.php?key=" + k + "&f=" + pdfFileName, "_blank");

	/*console.log("file system...");
		window.requestFileSystem(LocalFileSystem.PERSISTENT,
			0,
			coFileSystemSuccess,
			tFailure);
			*/
}

function retrieveSpecificFile(index) {

	trayIndex = index;
	console.log("file system...");

	window.open(host + "/retrieveTray.php?key=" + k + "&f=" + encontrados[trayIndex].file, "_blank");
	/*
		window.requestFileSystem(LocalFileSystem.PERSISTENT,
			0,
			tFileSystemSuccess,
			tFailure);
			*/
}

function retrieveBlueprints(index) {

	bIndex = index;
	console.log(host + "/retrieve.php?key=" + k + "&f=" + estiloImg + blueprintsArray[bIndex]);
	console.log("file system...");
	window.open(host + "/retrieve.php?key=" + k + "&f=" + estiloImg + blueprintsArray[bIndex], "_blank");

	/*
		window.requestFileSystem(LocalFileSystem.PERSISTENT,
			0,
			bFileSystemSuccess,
			tFailure);
			*/
}


function tFileSystemSuccess(fileSystem){
	console.log(fileSystem.name);
	console.log("veamos uri: " + fileSystem.root.name);
	console.log(fileSystem.root.fullPath);
	fileSystem.root.getFile("RJR.temp",
		{create: true},
		tFileEntrySuccess,
		tFailure);
}

function bFileSystemSuccess(fileSystem){
	console.log(fileSystem.name);
	console.log("veamos uri: " + fileSystem.root.name);
	console.log(fileSystem.root.fullPath);
	fileSystem.root.getFile("RJR.temp",
		{create: true},
		bFileEntrySuccess,
		tFailure);
}

function coFileSystemSuccess(fileSystem){
	console.log(fileSystem.name);
	console.log("veamos uri: " + fileSystem.root.name);
	console.log(fileSystem.root.fullPath);
	fileSystem.root.getFile("RJR.pdf",
		{create: true},
		coFileEntrySuccess,
		tFailure);
}

function tFileEntrySuccess(entry){

	nativeURL = entry.toURL();
	console.log("******** NATIVO: " + nativeURL);

	var fileTransfer = new FileTransfer();
	var dataToSend = JSON.stringify(dataFromPDF);


	var uri = encodeURI(host + "/retrieveTray.php?key=" + k + "&f=" + encontrados[trayIndex].file);
	console.log("uri: " + uri);

	fileTransfer.download(
		uri,
		nativeURL,
		function(entry) {
			console.log("archivo supuestamente bajado");
			cordova.plugins.fileOpener2.open(
				entry.toURL(),
				encontrados[trayIndex].mime,
				{
					error : function(e) {
						console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
					},
					success : function () {
						//if(sendable == 0){
							console.log('file opened successfully');
						/*
						} else {

							cordova.plugins.email.open({
								attachments: entry.toURL()
							});
						}*/
					}
				}
			);
		},
		function(error) {
			console.log("download error source " + error.source);
			console.log("download error target " + error.target);
			console.log("upload error code" + error.code);
		},
		false,
		null
	);
	//entry.createWriter(createWriterSuccess, failure);
}

function bFileEntrySuccess(entry){

	nativeURL = entry.toURL();
	console.log("******** NATIVO: " + nativeURL);

	var fileTransfer = new FileTransfer();
	var dataToSend = JSON.stringify(dataFromPDF);


	var uri = encodeURI(host + "/retrieve.php?key=" + k + "&f=" + blueprintsArray[bIndex]);
	console.log("uri: " + uri);

	fileTransfer.download(
		uri,
		nativeURL,
		function(entry) {
			console.log("archivo supuestamente bajado");
			cordova.plugins.fileOpener2.open(
				entry.toURL(),
				"application/pdf",
				{
					error : function(e) {
						console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
					},
					success : function () {
						//if(sendable == 0){
							console.log('file opened successfully');
						/*
						} else {

							cordova.plugins.email.open({
								attachments: entry.toURL()
							});
						}*/
					}
				}
			);
		},
		function(error) {
			console.log("download error source " + error.source);
			console.log("download error target " + error.target);
			console.log("upload error code" + error.code);
		},
		false,
		null
	);
	//entry.createWriter(createWriterSuccess, failure);
}

function coFileEntrySuccess(entry){

	nativeURL = entry.toURL();
	console.log("******** NATIVO: " + nativeURL);

	var fileTransfer = new FileTransfer();
	var dataToSend = JSON.stringify(dataFromPDF);


	var uri = encodeURI(host + "/retrieveTray.php?key=" + k + "&f=" + pdfFileName);
	console.log("uri: " + uri);

	fileTransfer.download(
		uri,
		nativeURL,
		function(entry) {
			console.log("archivo supuestamente bajado");
			cordova.plugins.fileOpener2.open(
				entry.toURL(),
				"application/pdf",
				{
					error : function(e) {
						console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
					},
					success : function () {
						//if(sendable == 0){
							console.log('file opened successfully');
						/*
						} else {

							cordova.plugins.email.open({
								attachments: entry.toURL()
							});
						}*/
					}
				}
			);
		},
		function(error) {
			console.log("download error source " + error.source);
			console.log("download error target " + error.target);
			console.log("upload error code" + error.code);
		},
		false,
		null
	);
	//entry.createWriter(createWriterSuccess, failure);
}


function tCreateWriterSuccess(writer){

	// registrar evento de escritura para lo que querramos hacer
	writer.onwriteend = function(evt) {
		console.log("write success");

		// openfile
		cordova.plugins.fileOpener2.open(
		nativeURL,
		encontrados[trayIndex].mime,
		{
			error : function(e) {
				console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
			},
			success : function () {
				console.log('file opened successfully');
			}
		}
		);
	};


}

function tFailure(e){
	console.log(e);
}
