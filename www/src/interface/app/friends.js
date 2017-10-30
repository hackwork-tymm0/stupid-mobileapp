
function Friends () {}

Friends.prototype.button = function () {
    
    $("#header-text").html("Кореши");
    
    $(localStorage.getItem("viewContent")).fadeOut(250);
    
    setTimeout(function () {
        
        $("#content-friends").fadeIn(250);
        
        localStorage.setItem("viewContent", "#content-friends");
        
    }, 250);

}
