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
    //if(mediaCodeUrl == "") {
        mediaCodeUrl = window.location.href.toString().split(window.location.host)[1].split("/")[2];
        console.log("Set mediaCodeUrl: ", mediaCodeUrl);
    //}

    //Had to get the link from the arrow because the new download link was being set before the URL would change
    if(e !== undefined) {
        setMediaCode(undefined, e.baseURI.split("/")[4]);
    }

    for(i = 0; i < mediaLinks.length;i++) {
        if(e === undefined) {
            setMediaCode(i);
        }

        console.log("Loop mediaCode == mediaCodeUrl: ", i, mediaCode == mediaCodeUrl,mediaCode, mediaCodeUrl, mediaLinks[i].getElementsByClassName('_icyx7')[0].getAttribute('src'));

        if(mediaCode == mediaCodeUrl) {
            media = mediaLinks[i].getElementsByClassName('_icyx7')[0].getAttribute('src')
        }
    }

    downloadBtn = '&nbsp;&nbsp;<a class="download-media" href="' + media + '" download="instagram.jpg"><img src="' + buttonImage + '" width="20"></a>';
    console.log("Download button: ", downloadBtn);
    console.log("Media: ", mediaCode);

    setDownloadButton();
};

function setMediaCode(e, code) {
    if(e !== undefined) {
        mediaCode = mediaLinks[e].getAttribute("href").split("/")[2];
    } else {
        console.log("Set by the link: ", code);
        mediaCode = code;
    }
};

function setDownloadButton() {

    if (document.getElementsByClassName('download-media').length > 0) {
      // exists.
      console.log("Button before changing", document.getElementsByClassName('download-media')[0].href);
      document.getElementsByClassName('download-media')[0].href = media;
      console.log("Button after changing", document.getElementsByClassName('download-media')[0].href);
    } else {
        document.getElementsByClassName('_s6yvg')[0].innerHTML = document.getElementsByClassName('_s6yvg')[0].innerHTML + downloadBtn;
    }
};

init();
