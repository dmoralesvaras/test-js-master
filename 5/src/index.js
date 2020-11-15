
const target = document.getElementById('sunmedia');
/**
 *
 * @param {string} src The video media file url
 * @return {HTMLVideoElement}
 */
const videoElm = createVideoElement('https://vod.addevweb.com/sunmedia/demos/v/normal.mp4');

window.addEventListener('scroll',() => {
    if (!target.hasChildNodes()){
        if (isScrolledIntoView(target)){
            /**
            * @param {HTMLDivElement} targetElm
            * @param {HTMLVideoElement} videoElm
            */
            insertVideoWhenTargetIsVisible(target, videoElm);
        }
    }
});

videoElm.addEventListener('ended',() => {
    if (target.hasChildNodes()){
        target.removeChild(document.getElementById('videoplayer'));
    }
});

function createVideoElement(url){
    var video = document.createElement('video');
    var source = document.createElement('source');
    video.appendChild(source);
    video.setAttribute('id','videoplayer');    
    video.muted=true;
    video.autoplay=true;
    source.setAttribute('src',url);
    source.setAttribute('type','video/mp4');
    return video;
}

function insertVideoWhenTargetIsVisible(tar,videoElm){
    tar.appendChild(videoElm);
}

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}