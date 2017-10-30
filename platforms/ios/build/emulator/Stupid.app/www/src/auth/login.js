
function Login (login, password) {
    
    this.login = login;
    this.password = password;
    
}

Login.prototype.start = function (cb) {
    
    var data = {
        login: this.login,
        password: this.password
    };
    
    console.log(data);

    $.ajax({
        
        url: StupidMessengerServer.url + "/auth/login",
        method: "get",
        data: data,
        success: function (data) {
            
            var parsedData = JSON.parse(data);
            
            if (parsedData.response === "error") {
                   
                switch (parsedData.message) {
                        
                    case "login or password is undefined":
                        
                        cb({ message: "loginDataUndefined" });
                        
                    break;
                        
                    case "account not found":
                        
                        cb({ message: "accountNotFound" });
                        
                    break;
                    
                    case "incorrect password":
                        
                        cb({ message: "incorrectPassword" });
                        
                    break;
                        
                }
                
            } else {
                
                cb({message: "ok", token: parsedData.token});
                
            }
            
        },
        error: function (error) {
            
            cb("serverError");
            
        }
        
    });
    
}
