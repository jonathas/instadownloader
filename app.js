//Problema: Parou de funcionar para a tela de imagem unica

var mediaLinks = document.getElementsByClassName('_8mlbc');

var media = "";
var mediaCode = "";
var mediaCodeUrl = "";
var downloadBtn = "";
var buttonImage = "https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519672-178_Download-128.png";

function init() {
    setDownloadLink();

    //Attach listeners
    document.getElementsByClassName("coreSpriteLeftPaginationArrow")[0].addEventListener("click",
        function(e) {
            setDownloadLink(e.target);
        }
    );
    document.getElementsByClassName("coreSpriteRightPaginationArrow")[0].addEventListener("click",
        function(e) {
            setDownloadLink(e.target);
        }
    );
}

// Bug: The 1st time I click an arrow, it's keeping the same link
function setDownloadLink(e) {

    //Here we set the right download link if it's empty (first time)
    if(mediaCodeUrl == "") {
        mediaCodeUrl = window.location.href.toString().split(window.location.host)[1].split("/")[2];
    }

    //Had to get the link from the arrow because the new download link was being set before the URL would change
    if(e !== undefined) {
        mediaCodeUrl = e.getAttribute('href').split("/")[2];
    }

    for(i = 0; i < mediaLinks.length;i++) {
        setMediaCode(i);

        if(mediaCode == mediaCodeUrl) {
            media = mediaLinks[i].getElementsByClassName('_icyx7')[0].getAttribute('src');
            break;
        }
    }

    downloadBtn = '&nbsp;&nbsp;<a class="download-media" href="' + media + '" download="instagram.jpg"><img src="' + buttonImage + '" width="20"></a>';

    setDownloadButton();
};

function setMediaCode(e, code) {
    if(e !== undefined) {
        mediaCode = mediaLinks[e].getAttribute("href").split("/")[2];
    } else {
        mediaCode = code;
    }
};

function setDownloadButton() {
    if (document.getElementsByClassName('download-media').length > 0) {
      document.getElementsByClassName('download-media')[0].href = media;
    } else {
        document.getElementsByClassName('_s6yvg')[0].innerHTML = document.getElementsByClassName('_s6yvg')[0].innerHTML + downloadBtn;
    }
};

init();
