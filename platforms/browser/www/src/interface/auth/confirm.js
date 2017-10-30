
function __Confirm () {}

__Confirm.prototype.button = function () {
    
    var code = $("#confirm-code").val();
    
    if (code !== "") {
        
        var confirm = new Confirm(code);
        
        confirm.start(function (msg) {
            
            switch (msg) {
                    
                case "ok":
                
                    navigator.notification.alert(
                        "Регистрация завершена!",
                        function () {

                            $.mobile.navigate("#login-page");

                        },
                        "Поздравляем",
                        "Авторизация"
                    );                        
                    
                break;
                    
                case "codeNotFinded":
                    
                    navigator.notification.alert(
                        "Код не найден!",
                        function () {},
                        "Ошибка!",
                        "ОК"
                    );                        
                    
                break;
                    
            }
            
        });
        
    } else {
        
        navigator.notification.alert(
            "Введите код!",
            function () {},
            "Ошибка!",
            "ОК"
        );                               
        
    }
    
}
