class TimelineDownloader {

    constructor() {
        this.mediaLinksList = document.getElementsByClassName('_jjzlb');
        this.headerList = document.getElementsByClassName('_s6yvg');
        this.setDownloadLinks();
    }

    setDownloadLinks() {
        var mediaLink = "";
        var i = 0;
        var headerCount = 0;

        while(headerCount < this.headerList.length) {
            //It's a video, the class for it in the timeline is not the same as the one for the photos
            if(document.getElementsByClassName("_s6yvg")[headerCount].nextSibling.innerHTML.indexOf('_c8hkj') > -1) {
                headerCount++;
                continue;
            }

            if(this.mediaLinksList[i].getElementsByClassName('_icyx7')[0] == undefined) {
                continue;
            }
            
            mediaLink = this.mediaLinksList[i].getElementsByClassName('_icyx7')[0].getAttribute('src');
            this.setDownloadButton(mediaLink, headerCount);

            headerCount++;
            i++;
        }
    }

    setDownloadButton(mediaLink, e) {
        //If the download button is now found, add it.
        if(document.getElementsByClassName('_s6yvg')[e].innerHTML.indexOf('download-media') == -1) {
            document.getElementsByClassName('_s6yvg')[e].innerHTML += '&nbsp;&nbsp;<a class="download-media" href="' + mediaLink + '" download="instagram.jpg"><img src="' + buttonImage + '" width="20"></a>';
        }
    }
}
