var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/87/06/15/19871623.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/a/af/Eternal_Sunshine_of_the_Spotless_Mind.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/b/be/8_Mile.jpg",
    "https://www.famdvd.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/v/dvd_carrie_a_estranha.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/a/a7/Toy_Story_1995.jpg"

    
]






// listaFilmes[0] =
//"https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg"
 
//listaFilmes[1] = 
//"https://br.web.img3.acsta.net/medias/nmedia/18/87/06/15/19871623.jpg";

//listaFilmes[2] = 
//"https://upload.wikimedia.org/wikipedia/pt/a/af/Eternal_Sunshine_of_the_Spotless_Mind.jpg"


for (var i = 0; i <listaFilmes.length; i++) {
    document.write('<img src=' + listaFilmes[i] + '>');
}


