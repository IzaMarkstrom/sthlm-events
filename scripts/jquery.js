$(function() {
    $("button.submit").on("click", function(){
        alert("Tack för ditt meddelande. Vi återkopplar så fort vi kan!")
    })
})

$(function() {
    $("a.moreInfo").on("click", function(){
        var div = document.getElementById("infoBox")
        div.innerHTML = "Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff."
    })
})