let video = document.getElementById("video1")

function voltar(){
    video.currentTime -= 15;
}

function avancar(){
    video.currentTime += 15;
}

function menos(){
    video.playbackRate -= 0.1;
}

function mais(){
    video.playbackRate += 0.1
}

function play(){
    video.play();

}

function pause(){
    video.pause();

}

function stop(){
    video.pause();
    video.currentTime = 0;
    video.playbackRate = 1
}
