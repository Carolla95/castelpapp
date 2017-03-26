/* global firebase, referiti */




$(function () {

    $("[data-role='footer']").toolbar();
    $(document).on("pagechange", function (e, data) {
        $("[data-role='footer'] li a[href='#itinerari'] img").attr("src", "img/itinerari.svg");
        $("[data-role='footer'] li a[href='#ristoro'] img").attr("src", "img/ristoro.svg");
        $("[data-role='footer'] li a[href='#menu'] img").attr("src", "img/menu.svg");
        $("[data-role='footer'] li a[href='#ospitalita'] img").attr("src", "img/ospitalita.svg");
        $("[data-role='footer'] li a").removeClass("active-f");
        var idPagina = data.toPage[0].id;
        $("[data-role='footer'] li a[href='#" + idPagina + "']").addClass("active-f");
        $(".active-f img").attr("src", "img/" + idPagina + "(1).svg");
    });
//    $.ajax("https://castelpagano-8cb2d.firebaseio.com/ristoro.json")
//            .done(function (data) {
//                $.map(data, function (riga, indice) {
//                    $("#salvaImpostazioni").click(function () {
//
//                        var titolo = riga.titolo;
//                        var categoria = riga.categoria;
//                        var image = riga.url;
//                        //console.log(nome);
//// Put the object into storage
//                        localStorage.setItem('id', JSON.stringify(indice));
//                        localStorage.setItem('titolo', JSON.stringify(titolo));
//                        localStorage.setItem('categoria', JSON.stringify(categoria));
//                        localStorage.setItem('image', JSON.stringify(image));
//
//// Retrieve the object from storage
//                        var retrievedData = localStorage.getItem("titolo");
//                        var prova = JSON.parse(retrievedData);
//                        alert(prova);
//                    });
//                });
//            });
    $("#ospitalita").on("pagecreate", function () {

        $.ajax("https://castelpagano-8cb2d.firebaseio.com/ospitalita.json")
                .done(function (data) {
                    var lista = $("#content-ospitalita");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idPagina = "contenutoPagina-" + indice;
                        var htmlStruttura = '<div id="col-page" class="col-xs-12 col-md-6 box-image" style="background-image: url(' + riga.url + ')">';
                        htmlStruttura += '<div class="box-titolo">';
                        htmlStruttura += '<div class="col-xs-9">';
                        htmlStruttura += '<h1>' + riga.titolo + '</h1>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '<div class="col-xs-3">';
                        htmlStruttura += '<a id="maggiori-info" href="#' + idPagina + '"><img src="img/morebutton.svg" width="40"></a>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '<p class="box-categoria box-categoria-ospitalita">' + riga.categoria + '</p>';
                        htmlStruttura += '</div>';
                        $("#content-ospitalita").append(htmlStruttura);
                        $('a[href="#' + idPagina + '"]').click(function () {
                            window.like = "";
                            var db = "https://castelpagano-8cb2d.firebaseio.com/ospitalita/";
                            window.like = db + indice + ".json";
                            var htmlPagina = "<div data-role='page' id='" + idPagina + "' class='page'>";
                            htmlPagina += "<div data-role='header' id='header' data-tap-toggle='false'>";
                            htmlPagina += "<h1 style='text-transform:uppercase;' >" + riga.titolo + "</h1>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div data-role='main' class='ui-content copertina'>";
                            htmlPagina += "<div class='profilo' style='background-image: url(" + riga.url + ")'>";
                            htmlPagina += "</div>";
                            htmlPagina += "<a onclick='salvaImpostazioni()'><img class='icona-preferito' width='40' src='img/iconap-ospitalita.png'></a>";
                            htmlPagina += "<div class='informazioni'>";
                            htmlPagina += "<div class='col-xs-12 info-dettagli info-dettagli-ospitalita'>";
                            htmlPagina += "<div class='col-xs-2'>";
                            htmlPagina += "<img width='30' src='img/orario.svg'>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div class='col-xs-10'><p><b>" + riga.orario + "</b></p></div>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div class='col-xs-12 info-dettagli info-dettagli-ospitalita'>";
                            htmlPagina += " <div class='col-xs-2'>";
                            htmlPagina += "<img width='30' src='img/indirizzo.svg'>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div class='col-xs-10'><p><b>" + riga.indirizzo + "</b></p></div>";
                            htmlPagina += "</div>";
                            htmlPagina += "<b>INFORMAZIONI</b><br><br>";
                            htmlPagina += "<p>" + riga.descrizione1 + "</p>";
                            htmlPagina += "<section id = 'exemple' class = 'container' >";
                            htmlPagina += "<div class = 'wrap small-width' >";
                            htmlPagina += "<div id = 'try' > </div>";
                            htmlPagina += "<ul id = 'box-container' >";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.galleria1 + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.galleria1 + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.galleria2 + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.galleria2 + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.galleria3 + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.galleria3 + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.url + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.url + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "</ul>";
                            htmlPagina += "</div>";
                            htmlPagina += "</section>";
                            htmlPagina += "<p>" + riga.descrizione2 + "</p>";
                            htmlPagina += riga.mappa;
                            htmlPagina += "</div>";
//                            htmlPagina += "<div data-role='footer' class='nav-glyphish-example' data-position='fixed' data-tap-toggle='false'>";
//                            htmlPagina += "<div data-role='navbar' class='nav-glyphish-example' data-grid='c'> ";
//                            htmlPagina += "<ul>";
//                            htmlPagina += "<li><a href='#itinerari'><img src='img/itinerari.svg' width='22'><br></a></li>";
//                            htmlPagina += "<li><a href='#ospitalita'><img src='img/ospitalita.svg' width='22'><br></a></li>";
//                            htmlPagina += "<li><a href='#ristoro'><img src='img/ristoro.svg' width='22'><br></a></li> ";
//                            htmlPagina += "<li><a href='#menu' ><img src='img/menu.svg' width='22'><br></a></li> ";
//                            htmlPagina += "</ul> ";
//                            htmlPagina += "</div>";
                            htmlPagina += "</div>";
                            $("body").append(htmlPagina);
                        });
                    });
                })
                .fail(function () {
                    alert("Errore! Prova a ricaricare la pagina...");
                });
    });
    $("#ristoro").on("pagecreate", function () {

        $.ajax("https://castelpagano-8cb2d.firebaseio.com/ristoro.json")
                .done(function (data) {
                    var lista = $("#content-ristoro");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idPagina = "contenutoPagina-" + indice;
                        var htmlStruttura = '<div id="col-page" class="col-xs-12 col-md-6 box-image" style="background-image: url(' + riga.url + ')">';
                        htmlStruttura += '<div class="box-titolo">';
                        htmlStruttura += '<div class="col-xs-9">';
                        htmlStruttura += '<h1>' + riga.titolo + '</h1>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '<div class="col-xs-3">';
                        htmlStruttura += '<a id="maggiori-info" href="#' + idPagina + '"><img src="img/moregiallo.svg" width="40"></a>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '<p class="box-categoria box-categoria-ristoro">' + riga.categoria + '</p>';
                        htmlStruttura += '</div>';
                        $("#content-ristoro").append(htmlStruttura);
                        $('a[href="#' + idPagina + '"]').click(function () {
                            window.like = "";
                            var db = "https://castelpagano-8cb2d.firebaseio.com/ristoro/";
                            window.like = db + indice + ".json";
                            var htmlPagina = "<div data-role='page' id='" + idPagina + "' class='page'>";
                            htmlPagina += "<div data-role='header' id='header' data-tap-toggle='false'>";
                            htmlPagina += "<h1 style='text-transform:uppercase;' >" + riga.titolo + "</h1>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div data-role='main' class='ui-content copertina'>";
                            htmlPagina += "<div class='profilo' style='background-image: url(" + riga.url + ")'>";
                            htmlPagina += "</div>";
                            htmlPagina += "<a onclick='salvaImpostazioni()'><img class='icona-preferito' width='40' src='img/iconap-ristoro.png'></a>";
                            htmlPagina += "<div class='informazioni'>";
                            htmlPagina += "<div class='col-xs-12 info-dettagli info-dettagli-ristoro'>";
                            htmlPagina += "<div class='col-xs-2'>";
                            htmlPagina += "<img width='30' src='img/orario.svg'>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div class='col-xs-10'><p><b>" + riga.orario + "</b></p></div>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div class='col-xs-12 info-dettagli info-dettagli-ristoro'>";
                            htmlPagina += " <div class='col-xs-2'>";
                            htmlPagina += "<img width='30' src='img/indirizzo.svg'>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div class='col-xs-10'><p><b>" + riga.indirizzo + "</b></p></div>";
                            htmlPagina += "</div>";
                            htmlPagina += "<b>INFORMAZIONI</b><br><br>";
                            htmlPagina += "<p>" + riga.descrizione1 + "</p>";
                            htmlPagina += "<section id = 'exemple' class = 'container' >";
                            htmlPagina += "<div class = 'wrap small-width' >";
                            htmlPagina += "<div id = 'try' > </div>";
                            htmlPagina += "<ul id = 'box-container' >";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.galleria1 + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.galleria1 + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.galleria2 + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.galleria2 + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.galleria3 + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.galleria3 + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.url + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.url + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "</ul>";
                            htmlPagina += "</div>";
                            htmlPagina += "</section>";
                            htmlPagina += "<p>" + riga.descrizione2 + "</p>";
                            htmlPagina += riga.mappa;
                            htmlPagina += "</div>";
//                            htmlPagina += "<div data-role='footer' class='nav-glyphish-example' data-position='fixed' data-tap-toggle='false'>";
//                            htmlPagina += "<div data-role='navbar' class='nav-glyphish-example' data-grid='c'> ";
//                            htmlPagina += "<ul>";
//                            htmlPagina += "<li><a href='#itinerari'><img src='img/itinerari.svg' width='22'><br></a></li>";
//                            htmlPagina += "<li><a href='#ospitalita'><img src='img/ospitalita.svg' width='22'><br></a></li>";
//                            htmlPagina += "<li><a href='#ristoro'><img src='img/ristoro.svg' width='22'><br></a></li> ";
//                            htmlPagina += "<li><a href='#menu' ><img src='img/menu.svg' width='22'><br></a></li> ";
//                            htmlPagina += "</ul> ";
//                            htmlPagina += "</div>";
                            htmlPagina += "</div>";
                            $("body").append(htmlPagina);
                        });
                    });
                })
                .fail(function () {
                    alert("Errore! Prova a ricaricare la pagina...");
                });
    });
    $("#itinerari").on("pagecreate", function () {

        $.ajax("https://castelpagano-8cb2d.firebaseio.com/itinerari.json")
                .done(function (data) {
                    var lista = $("#content-itinerari");
                    lista.empty();
                    $.map(data, function (riga, indice) {
                        var idPagina = "contenutoPagina-" + indice;
                        var htmlStruttura = '<div id="col-page" class="col-xs-12 col-md-6 box-image" style="background-image: url(' + riga.url + ')">';
                        htmlStruttura += '<div class="box-titolo">';
                        htmlStruttura += '<div class="col-xs-9">';
                        htmlStruttura += '<h1>' + riga.titolo + '</h1>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '<div class="col-xs-3">';
                        htmlStruttura += '<a id="maggiori-info" href="#' + idPagina + '"><img src="img/moreverde.svg" width="40"></a>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '</div>';
                        htmlStruttura += '<p class="box-categoria box-categoria-itinerari">' + riga.categoria + '</p>';
                        htmlStruttura += '</div>';
                        $("#content-itinerari").append(htmlStruttura);
                        $('a[href="#' + idPagina + '"]').click(function () {

                            window.like = "";
                            var db = "https://castelpagano-8cb2d.firebaseio.com/itinerari/";
                            window.like = db + indice + ".json";
                            var arrayPref = JSON.parse(window.localStorage.getItem("preferiti"));
                            if (arrayPref === null) {
                                arrayPref = [];
                            }
                            
                            var htmlPagina = "<div data-role='page' id='" + idPagina + "' class='page'>";
                            htmlPagina += "<div data-role='header' id='header' data-tap-toggle='false'>";
                            htmlPagina += "<h1 style='text-transform:uppercase;' >" + riga.titolo + "</h1>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div data-role='main' class='ui-content copertina'>";
                            htmlPagina += "<div class='profilo' style='background-image: url(" + riga.url + ")'>";
                            htmlPagina += "</div>";
                            htmlPagina += "<a onclick='salvaImpostazioni()'><img class='icona-preferito' width='40' src='img/iconap-itinerari.png'></a>";
                            htmlPagina += "<div class='informazioni'>";
                            htmlPagina += "<div class='col-xs-12 info-dettagli info-dettagli-itinerari'>";
                            htmlPagina += "<div class='col-xs-2'>";
                            htmlPagina += "<img width='30' src='img/indirizzo.svg'>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div class='col-xs-10'><p><b>" + riga.indirizzo + "</b></p></div>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div class='col-xs-12 info-dettagli info-dettagli-itinerari'>";
                            htmlPagina += " <div class='col-xs-2'>";
                            htmlPagina += "<img width='30' src='img/orario.svg'>";
                            htmlPagina += "</div>";
                            htmlPagina += "<div class='col-xs-10'><p><b>" + riga.orario + "</b></p></div>";
                            htmlPagina += "</div>";
                            htmlPagina += "<b>INFORMAZIONI</b><br><br>";
                            htmlPagina += "<p>" + riga.descrizione1 + "</p>";
                            htmlPagina += "<section id = 'exemple' class = 'container' >";
                            htmlPagina += "<div class = 'wrap small-width' >";
                            htmlPagina += "<div id = 'try' > </div>";
                            htmlPagina += "<ul id = 'box-container' >";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.galleria1 + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.galleria1 + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.galleria2 + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.galleria2 + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.galleria3 + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.galleria3 + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "<li class = 'box' >";
                            htmlPagina += "<a href = '" + riga.url + "' class = 'swipebox' title = 'Fog' >";
                            htmlPagina += "<img src = '" + riga.url + "' alt = 'image' >";
                            htmlPagina += "</a>";
                            htmlPagina += "</li>";
                            htmlPagina += "</ul>";
                            htmlPagina += "</div>";
                            htmlPagina += "</section>";
                            htmlPagina += "<p>" + riga.descrizione2 + "</p>";
                            htmlPagina += riga.mappa;
                            htmlPagina += "</div>";
//                            htmlPagina += "<div data-role='footer' class='nav-glyphish-example' data-position='fixed' data-tap-toggle='false'>";
//                            htmlPagina += "<div data-role='navbar' class='nav-glyphish-example' data-grid='c'> ";
//                            htmlPagina += "<ul>";
//                            htmlPagina += "<li><a href='#itinerari'><img src='img/itinerari.svg' width='22'><br></a></li>";
//                            htmlPagina += "<li><a href='#ospitalita'><img src='img/ospitalita.svg' width='22'><br></a></li>";
//                            htmlPagina += "<li><a href='#ristoro'><img src='img/ristoro.svg' width='22'><br></a></li> ";
//                            htmlPagina += "<li><a href='#menu' ><img src='img/menu.svg' width='22'><br></a></li> ";
//                            htmlPagina += "</ul> ";
//                            htmlPagina += "</div>";
                            htmlPagina += "</div>";
                            $("body").append(htmlPagina);

                        });
                    });
                })

                .fail(function () {
                    alert("Errore! Prova a ricaricare la pagina...");
                });

    });


    $("#preferiti").on("pageshow", function () {
        var contain = $("#content-preferiti");
        contain.empty();
        var arrayPref = JSON.parse(window.localStorage.getItem("preferiti"));
        if (arrayPref === null) {

            var html = '<p class="alert alert-danger">La tua lista è vuota!</p>';
            $("#content-preferiti").append(html);
        } else {
            $.each(arrayPref, function (index, value) {

                $.ajax({
                    url: value
                })
                        .done(function (data) {

                            var htmlStruttura = '<div id="pref_image' + index + '" class="box-image col-sm-6">';
                            htmlStruttura += '<div class="box-titolo">';
                            htmlStruttura += '<div class="col-xs-9">';
                            htmlStruttura += '<h1 id="pref_titolo' + index + '"></h1>';
                            htmlStruttura += '</div>';
                            htmlStruttura += '<div class="col-xs-3">';
                            htmlStruttura += '<a data-id="' + index + '"><img class="icona-delete" width="40" src="img/moreblu.svg"></a>';
                            htmlStruttura += '</div>';
                            htmlStruttura += '</div>';
                            htmlStruttura += '<p id="pref_cat' + index + '" class="box-categoria"></p>';
                            htmlStruttura += '</div>';
                            $(contain).append(htmlStruttura);


                            $("a[data-id='" + index + "']").click(function () {
                                window.like = value;

                                cancellaPreferiti();
                                location.reload();
                                /*window.value = value;
                                 window.remove = "";
                                 window.remove = window.value;
                                 console.log("remove: " + window.value)
                                 deletePreferiti();*/
                            });
                            $.map(data, function (riga, indice) {

                                if (indice === "titolo") {
                                    $("#pref_titolo" + index).html(riga);
                                } else if (indice === "url") {
                                    $("#pref_image" + index).css("background-image", "url(" + riga + ")");
                                } else if (indice === "categoria") {
                                    $("#pref_cat" + index).html(riga);
                                }

                            });
                        });
            });
        }
    }
    );
});
function salvaImpostazioni() {
    var arrayPref = JSON.parse(window.localStorage.getItem("preferiti"));
    console.log("array", arrayPref);
    if (arrayPref === null) {
        arrayPref = [];
    }
    var idPreferito = window.like;
    var posPreferito = $.inArray(idPreferito, arrayPref);
    if (posPreferito !== -1) {   // Se l'elemento non c'è, la funzione restituisce -1
        arrayPref.splice(posPreferito, 1);
        $(".icona-preferito").css("border-radius", 30);
        $(".icona-preferito").css("background-color", "white");
    } else {
        $(".icona-preferito").css("background-color", "#ff5954");
        $(".icona-preferito").css("border-radius", 30);
        arrayPref.push(idPreferito);
    }
    console.log("id", idPreferito);
    window.localStorage.setItem("preferiti", JSON.stringify(arrayPref));
    if (idPreferito === arrayPref[0]) {
        $(".icona-preferito").css("background-color", "white");
    }
}
function cancellaPreferiti() {
    var arrayPref = JSON.parse(window.localStorage.getItem("preferiti"));
    console.log(arrayPref);
    if (arrayPref === null) {
        arrayPref = [];
    }
    var idPreferito = window.like;

    var posPreferito = $.inArray(idPreferito, arrayPref);
    if (posPreferito != -1) {   // Se l'elemento non c'è, la funzione restituisce -1
        arrayPref.splice(posPreferito, 1);
        $(".icona-preferito").css("border-radius", 30);
        $(".icona-preferito").css("background-color", "#fff");
    } else {
        $(".icona-preferito").css("background-color", "white");
        $(".icona-preferito").css("border-radius", 30);
        arrayPref.push(idPreferito);
    }
    window.localStorage.setItem("preferiti", JSON.stringify(arrayPref));

}
