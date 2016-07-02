// This works now only for the photos opened from the profile page

var mediaLinksList = document.getElementsByClassName('_8mlbc');
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
};

function setDownloadLink(e) {
    var mediaCodeUrl = setMediaCodeUrl(e);
    var mediaCode = "";
    var mediaLink = "";

    for(i = 0; i < mediaLinksList.length;i++) {
        mediaCode = mediaLinksList[i].getAttribute("href").split("/")[2];

        if(mediaCode == mediaCodeUrl) {
            mediaLink = mediaLinksList[i].getElementsByClassName('_icyx7')[0].getAttribute('src');
            break;
        }
    }

    setDownloadButton(mediaLink);
};

function setMediaCodeUrl(e) {
    //Had to get the link from the arrow because the new download link was being set before the URL would change
    if(e == undefined) {
        return window.location.href.toString().split(window.location.host)[1].split("/")[2];
    } else {
        //Here we set the right download link if it's not coming from a click event (first time)
        return e.getAttribute('href').split("/")[2];
    }
};

function setDownloadButton(mediaLink) {
    if (document.getElementsByClassName('download-media').length > 0) {
      document.getElementsByClassName('download-media')[0].href = mediaLink;
    } else {
        document.getElementsByClassName('_s6yvg')[0].innerHTML = document.getElementsByClassName('_s6yvg')[0].innerHTML + '&nbsp;&nbsp;<a class="download-media" href="' + mediaLink + '" download="instagram.jpg"><img src="' + buttonImage + '" width="20"></a>';
    }
};

init();
