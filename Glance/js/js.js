function onClickCopy() {
    let pTag = document.getElementById('copyTarget');
    let range = document.createRange();
    range.selectNodeContents(pTag);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    alert("IP Copied!")
}

function play() {
    const p1 = document.getElementById("play");
    var music = new Audio('images/glancebg.mp3');
    var v = document.getElementById('video');
    music.play();
    v.play();
    p1.style.display ="none";
}