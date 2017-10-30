
function Settings () {}

Settings.prototype.button = function () {
    
    $("#header-text").html("Настройки");
    
    $(localStorage.getItem("viewContent")).fadeOut(250);
    
    setTimeout(function () {
        
        $("#content-settings").fadeIn(250);
        
        localStorage.setItem("viewContent", "#content-settings");
        
    }, 250);
    
}
