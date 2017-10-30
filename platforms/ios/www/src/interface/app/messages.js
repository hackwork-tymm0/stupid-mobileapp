
function Messages () {}

Messages.prototype.button = function () {
    
    $("#header-text").html("Переписки");
    
    $(localStorage.getItem("viewContent")).fadeOut(250);
    
    setTimeout(function () {
        
        $("#content-messages").fadeIn(250);
        
        localStorage.setItem("viewContent", "#content-messages");
        
    }, 250);
    
}
