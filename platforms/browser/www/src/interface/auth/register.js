
function __Register () {}

__Register.prototype.button = function () {
    
    var registerData = {
        email: $("#register-email").val(),
        login: $("#register-username").val(),
        password: $("#register-password").val(),
        ePassword: $("#register-enteredPassword").val()
    };
    
    console.log(registerData);
        
    if (registerData.login !== "") {
        
        if (registerData.email !== "") {
            
            if (registerData.password !== "") {
                
                if (registerData.ePassword !== "") {
                    
                    var register = new Register(registerData.email, registerData.login, registerData.password, registerData.ePassword);
                    
                    register.start(function (msg) {
                        
                        switch (msg) {
                                
                            case "serverError":
                                    
                                navigator.notification.alert(
                                    "Ошибка на сервере!",
                                    function () {},
                                    "Ошибка!",
                                    "ОК"
                                );
                                                        
                                
                            break;
                                
                            case "ok":
                            
                                navigator.notification.alert(
                                    "Осталось совсем немного...\n На твою почту пришел код.",
                                    function () {
                                        
                                        $.mobile.navigate("#confirm-page");
                                        
                                    },
                                    "Поздравляем",
                                    "Ввести код"
                                );                              
                                
                            break;
                                
                            case "emailNotUnique":
                                
                                navigator.notification.alert(
                                    "E-Mail занят!",
                                    function () {},
                                    "Ошибка!",
                                    "ОК"
                                );                
                                
                            break;
                                
                            case "loginNotUnique":
                                
                                navigator.notification.alert(
                                    "Имя пользователя занято!",
                                    function () {},
                                    "Ошибка!",
                                    "ОК"
                                );                            
                                
                            break;
                                
                            case "passwordsNotEqual":
                                
                                navigator.notification.alert(
                                    "Пароли не совпадают!",
                                    function () {},
                                    "Ошибка!",
                                    "ОК"
                                );
                                
                            break
                            
                            default:
                            
                                 navigator.notification.alert(
                                    "Неизвестная ошибка!",
                                    function () {},
                                    "Ошибка!",
                                    "ОК"
                                );                               
                            
                            break;
                                
                        }
                        
                    });
                    
                } else {
                    
                    App.prototype.registerEmptyInput("Повторите пароль");
                    
                }
                
            } else {
                
                
                App.prototype.registerEmptyInput("Пароль");
                
            }
            
        } else {
         
            App.prototype.registerEmptyInput("E-Mail");
            
        }
        
    } else {
        
        App.prototype.registerEmptyInput("Имя пользователя");
        
    }
    
}
