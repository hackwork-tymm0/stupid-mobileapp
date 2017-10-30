
function __Login () {}

__Login.prototype.button = function () {

    var login = $("#login-username").val();
    var password = $("#login-password").val();
    
    if (login !== "") {
        
        if (password !== "") {
            
            var authlogin = new Login(login, password);
            
            authlogin.start(function (data) {
                
                console.log(data);
                
                if (data.message === "ok") {
                    
                    localStorage.setItem("appToken", data.token);
                    localStorage.setItem("defaultPage", "#main-page");
                    
                    $.mobile.navigate("#main-page");
                    
                } else {
                    
                    switch (data.message) {
                            
                        case "loginDataUndefined":
                            
                            navigator.notification.alert(
                                "Не отправлен логин и пароль!",
                                function () {},
                                "Ошибка!",
                                "ОК"
                            );     
                            
                        break;
                            
                        case "accountNotFound":
                            
                            navigator.notification.alert(
                                "Аккаунт не найден!",
                                function () {},
                                "Ошибка!",
                                "ОК"
                            );
                            
                        break;
                            
                        case "incorrectPassword":
                            
                            navigator.notification.alert(
                                "Неправильный пароль!",
                                function () {},
                                "Ошибка!",
                                "ОК"
                            );
                            
                        break;
                            
                    }
                    
                }
                
            });
            
        } else {
            
            App.prototype.registerEmptyInput("Пароль");  
            
        }
        
    } else {
        
        App.prototype.registerEmptyInput("Имя пользователя");      
        
    }
    
}
