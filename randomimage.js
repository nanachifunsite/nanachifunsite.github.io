var cunnyPictures =
[
{'file': '0.jpg', 'source': 'https://www.pixiv.net/en/artworks/66841061'}, 
{'file': '1.jpg', 'source': 'https://www.pixiv.net/en/artworks/99641029'}, 
{'file': '2.jpg', 'source': 'https://www.pixiv.net/en/artworks/99637081'}, 
{'file': '3.jpg', 'source': 'https://www.pixiv.net/en/artworks/99572769'}, 
{'file': '4.jpg', 'source': 'https://www.pixiv.net/en/artworks/99259452'}, 
{'file': '5.jpg', 'source': 'https://www.pixiv.net/en/artworks/99223599'}, 
{'file': '6.jpg', 'source': 'https://www.pixiv.net/en/artworks/99139270'}, 
{'file': '7.jpg', 'source': 'https://www.pixiv.net/en/artworks/99075642'}, 
{'file': '8.jpg', 'source': 'https://www.pixiv.net/en/artworks/99140860'}, 
{'file': '9.jpg', 'source': 'https://www.pixiv.net/en/artworks/99134575'}
] ;


var index = Math.floor(Math.random()*cunnyPictures.length)
var cunnyPicture = cunnyPictures[index].file;
var cunnySource = cunnyPictures[index].source;

document.onreadystatechange = function(e)
{
    if (document.readyState === 'complete')
    {
	var imgElement = document.getElementById("cunny-image");
	var aElement = imgElement.parentElement;
	imgElement.src = 'img/' + cunnyPicture;
	aElement.href = cunnySource;
    }
};
