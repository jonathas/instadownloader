"use strict";

var buttonImage = "https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519672-178_Download-128.png";

var url = window.location.href.toString();
var instagramHome = "https://www.instagram.com/";

function instantiateDownloader() {
    //Check if it is a photo opened in the profile page
    if(url.indexOf("?taken-by=") > -1) {
        var profile = new ProfilePageDownloader();
    } else if (url.indexOf("/p/") > -1) {
        var photoPage = new PhotoPageDownloader();
    } else if(url == instagramHome) {
        var timeline = new TimelineDownloader();
    }
}

function checkUrlChange() {
    var urlCheck = window.location.href.toString();

    //Has to be checked constantly in case the user scrolls the homepage
    if(urlCheck == instagramHome) {
        url = urlCheck;
        var timeline = new TimelineDownloader();
    } else if(url !== urlCheck) {
        url = urlCheck;
        instantiateDownloader();
    }
}

instantiateDownloader();
window.setInterval(checkUrlChange, 500);
