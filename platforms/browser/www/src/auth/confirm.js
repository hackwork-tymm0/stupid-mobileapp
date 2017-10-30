
function Confirm (code) {
    
    this.confirmCode = code;
    
}

Confirm.prototype.start = function (cb) {
    
    var confirmData = {
        code: this.confirmCode
    };
    
    $.ajax({
        method: 'get',
        url: StupidMessengerServer.url + "/auth/confirm",
        data: confirmData,
        success: function (data) {
            
            var parsedData = JSON.parse(data);
            
            if (parsedData.response !== "error") {
                
                cb("ok");
                
            } else {
                
                switch (parsedData.message) {
                        
                    case "code not finded":
                        
                        cb("codeNotFinded");
                        
                    break;
                        
                }
                
            }
            
        },
        error: function (err) {
            
            cb("serverError");
            
        }
    });
    
}
