function copy() {
    var copyText = document.getElementById("ipInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the ip!");
}