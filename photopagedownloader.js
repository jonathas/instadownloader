class PhotoPageDownloader {
    constructor() {
        this.setDownloadLink();
    }

    setDownloadLink() {
        this.setDownloadButton(document.getElementsByClassName('_icyx7')[0].getAttribute('src'));
    }

    setDownloadButton(mediaLink) {
        if (document.getElementsByClassName('download-media').length > 0) {
          document.getElementsByClassName('download-media')[0].href = mediaLink;
        } else {
            document.getElementsByClassName('_s6yvg')[0].innerHTML += '&nbsp;&nbsp;<a class="download-media" href="' + mediaLink + '" download="instagram.jpg"><img src="' + buttonImage + '" width="20"></a>';
        }
    }
}
