function copy() {
    var copyText = document.getElementById("ipInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the ip!");
}

function play() {
    const p1 = document.getElementById("play");
    var music = new Audio('images/glancebg.mp3');
    var v = document.getElementById('video');
    music.play();
    v.play();
    p1.style.display ="none";
}