var modal = document.getElementById("myModal");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var imagenes = [];
var span = [];


for (var i = 0; i < 9; i++){
 imagenes[i]=document.getElementsByClassName("mostrar")[i];
 imagenes[i].addEventListener("click", desplegar);
}


function desplegar(){
 modal.style.display = "block";
 modalImg.src = this.src;
 captionText.innerHTML = this.alt;
}

for (var i = 0; i < 9; i++){
 span[i]=document.getElementsByClassName("close")[i];
 span[i].addEventListener("click",cerrar);
}


function cerrar() {
 modal.style.display = "none";
}
