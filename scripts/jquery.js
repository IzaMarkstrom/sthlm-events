$(function() {
    $("button.submit").on("click", function(){
        alert("Tack för ditt meddelande. Vi återkopplar så fort vi kan!")
    })
})

$(function() {
    $("a.moreInfo").on("click", function(){
        $(this).prev().toggle()
        console.log($(this).prev())
    })
})

// This.siblings och ändra till en class ist. för ID 