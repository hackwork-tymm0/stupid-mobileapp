
function App () {}

App.prototype.registerEmptyInput = function (text) {
    
    navigator.notification.alert(
        "Поле \"" + text + "\" пустое!",
        function () {},
        "Ошибка!",
        "ОК"
    );
    
}

App.prototype.fadeInHome = function () {

    $("#home-title").fadeIn(200);
    
    setTimeout(function () {
        
        $("#home-buttons").fadeIn(200);
        
    }, 200);
    
}

App.prototype.onDeviceReady = function () {
    
    StatusBar.backgroundColorByHexString("#d37f19");
    
    App.prototype.fadeInHome();
    
    $("#register-button").click(Interface.Auth.Register.button);
    $("#confirm-button").click(Interface.Auth.Confirm.button);
    $("#login-button").click(Interface.Auth.Login.button);
    
    $("#button-messages").click(Interface.App.Messages.button);
    $("#button-friends").click(Interface.App.Friends.button);
    $("#button-settings").click(Interface.App.Settings.button);
    
    $("#open-token").click(function () {
        
        navigator.notification.alert(
            "Твой токен: \n" + localStorage.getItem("appToken"),
            function () {},
            "Ахтунг!",
            "Ну ладно)0"
        ); 
        
    });
    
    $("#quit-button").click(function () {
        
        localStorage.clear();
        
        $.mobile.navigate("#home-page");
        
    });
    
    let page = localStorage.getItem("defaultPage");
    
    if (page !== null) {
        
        $.mobile.navigate(page);
        
        $("#content-messages").fadeIn(250);
        
        localStorage.setItem("viewContent", "#content-messages");
        
    } else {
        
        $.mobile.navigate("#home-page");
        
    }
    
};