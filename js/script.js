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

// $(document).ready(function(){
//     $("#face").mouseover(function () {
//         $(this).attr("src", "./assets/me.png");
//     });
//     $("#face").mouseout(function () {
//         $(this).attr("src", "./assets/serious me.jpg");
//     });
// })