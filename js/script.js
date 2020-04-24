function toggleLong(id) {
    var x = document.getElementById("description-long");
    if(id=="more") {
        document.getElementById("less").style.display="block";
        x.style.display = "block";
    } else {
        document.getElementById("more").style.display="block";
        x.style.display = "none";
    }
    document.getElementById(id).style.display="none";
}