import './components/renderHome';
import './components/dataSong';
import { list_song } from './components/dataSong';

// ===== variable of taskber music ===== //
var music_img = document.getElementById('music_img');
var music__name = document.getElementById('music__name');
var name_artist = document.getElementById('name_artist');

var btn_prevStep = document.getElementById("btn_prevStep");
var btn_prev = document.getElementById("btn_prev");
var btn_next = document.getElementById("btn_next");
var btn_nextStep = document.getElementById("btn_nextStep");

var btn_play = document.getElementById("btn_play");
var tag_audio = document.getElementById("tag_audio");

var range_time = document.getElementById("range_time");
var time_playing = document.getElementById("time_playing");
var time_total = document.getElementById("time_total");

var range_volume = document.getElementById("range_volume");
var btn_volume = document.getElementById("btn_volume");

var btn_random = document.getElementById("btn_random");
var btn_repeat = document.getElementById("btn_repeat");
var btn_wishlist = document.getElementById("btn_wishlist");
var btn_share = document.getElementById("btn_share");




let indexSong = 0;
let isplaying = true;


btn_play.addEventListener("click", playPause);

// ===== set information song ===== //
function songPlaying(index){
    tag_audio.setAttribute("src", list_song[index].url);
    music_img.setAttribute("src", list_song[index].avt);
    music__name.innerHTML = list_song[index].title;
    name_artist.innerHTML = list_song[index].artist;
}
songPlaying(indexSong);


// ===== button next song ===== //
btn_next.addEventListener("click", function(){
    changeSong(1);
});

// ===== button previous song ===== //
btn_prev.addEventListener("click", function(){
    changeSong(-1);
});

// ===== next song when end playing ===== //
tag_audio.addEventListener("ended", function(){
    changeSong(1);
});

// ===== change song ===== //
function changeSong(dir){
    if(dir === 1){
        // next song
        indexSong++;
        if(indexSong >= list_song.length){
            indexSong = 0;
        }
        isplaying = true;
    }else if(dir === -1) {
        // prev song
        indexSong--;
        if(indexSong < 0){
            indexSong = list_song.length -1;
        }
        isplaying = true;
    }
        
    songPlaying(indexSong);
    playPause();

}


// ===== play or pause music ===== //
function playPause(){
    if(isplaying){
        tag_audio.play();
        music_img.classList.add("is-playing");
        btn_play.innerHTML = `<i class='bx bx-pause-circle'></i>`;
        isplaying = false;

    }else{
        tag_audio.pause();
        music_img.classList.remove("is-playing");
        btn_play.innerHTML = `<i class='bx bx-play-circle'></i>`;
        isplaying = true;

    }
}


// ===== time of music ===== //
function displayTimer(){
    const { duration, currentTime } = tag_audio;

    time_playing.textContent = formatTime(currentTime);
    range_time.max = duration;
    range_time.value = currentTime;
    
    if(!duration){
        time_total.textContent = "00:00"
    }else(
        time_total.textContent = formatTime(duration)
    )
}

// ===== format time of music ===== //
function formatTime(time){
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

displayTimer();
setInterval(displayTimer, 500);

range_time.addEventListener("change", function(){
    tag_audio.currentTime = range_time.value;
});

// ===== step time of music ===== //
btn_prevStep.addEventListener("click", function(){
    tag_audio.currentTime -= 5;
});
btn_nextStep.addEventListener("click", function(){
    tag_audio.currentTime += 5;
});





// ===== setup button volume music ===== //
let isVolume = true;
btn_volume.addEventListener("click", function(){
    if(isVolume){
        btn_volume.innerHTML = `<i class='bx bx-volume'></i>`;
        isVolume = false;
        tag_audio.volume = 0;
    }else{
        btn_volume.innerHTML = `<i class='bx bx-volume-low'></i>`;
        isVolume = true;
        tag_audio.volume = range_volume.value/100;
    }
});

range_volume.addEventListener("change", function(){
    if(range_volume.value == 0){
        btn_volume.innerHTML = `<i class='bx bx-volume'></i>`;
    }else if(range_volume.value <= 70){
        btn_volume.innerHTML = `<i class='bx bx-volume-low'></i>`;
    }else{
        btn_volume.innerHTML = `<i class='bx bx-volume-full'></i>`;
    }

    tag_audio.volume = range_volume.value/100;
});



// ===== setup repeat music ===== //
let isRepeat = true;
btn_repeat.addEventListener("click", function(){
    if(isRepeat){
        tag_audio.loop = true;
        btn_repeat.classList.add("color-gradient");
        isRepeat = false;
    }else{
        tag_audio.loop = false;
        btn_repeat.classList.remove("color-gradient");
        isRepeat = true;
    }
    
    
});



// ===== setup random play music ===== //
btn_random.addEventListener("click", function(){
    alert("Chức năng đang phát triển");
});


// ===== setup add favorite music ===== //
btn_wishlist.addEventListener("click", function(){
    alert("Chức năng đang phát triển");
});



// ===== setup share music ===== //
btn_share.addEventListener("click", function(){
    alert("Chức năng đang phát triển");
});





console.log("vkmdcslmvl");
