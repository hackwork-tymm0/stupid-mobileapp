
function Register (email, login, password, ePassword) {
    
    this.email = email; 
    this.login = login; 
    this.password = password;
    this.ePassword = ePassword;
    
}

Register.prototype.start = function (cb) {
    
    console.log(this.password === this.ePassword);
    
    if (this.password === this.ePassword) {
        
        let registrationData = {
            email: this.email, 
            login: this.login,
            password: this.password
        };
        
        $.ajax({
            method: 'get',
            url: StupidMessengerServer.url + "/auth/register",
            data: registrationData,
            success: function (data) {
                
                parsedData = JSON.parse(data);
                
                if (parsedData.response !== "error") {
                    
                    cb("ok");
                    
                } else {
                    
                    switch (parsedData.message) {
                            
                        case "login is not unique":
                        
                            cb("loginNotUnique");
                            
                        break;
                            
                        case "email is not unique":
                            
                            cb("emailNotUnique");
                            
                        break;
                            
                    }
                    
                }
                
            },
            error: function (error) {
                
                cb("serverError");
                
            }
        });
        
    } else {
        
        cb("passwordsNotEqual");
        
    }
    
}
