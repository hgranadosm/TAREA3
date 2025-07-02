window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='img/reto4/perros.jpg' class='img-fluid rounded' alt='perro' />";

    document.getElementById("razas").onchange = function(e) {
        let n = e.target.value;
        let imagen = "<img src='img/reto4/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='estadio' />";
        let text = ["Labrador Retriever",
            "Pastor Alemán",
            "Golden Retriever",
            "Husky Siberiano",
            "Chihuahua",
        ];
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text[n-1];
    };
};


document.getElementById("btn-clean").onclick = function(){
    document.getElementById("output-img").innerHTML = "<img src='img/reto4/perros.jpg' class='img-fluid rounded' alt='perro' />";
     document.getElementById("output-txt").innerHTML = "";
     document.getElementById("razas").value = "";
}