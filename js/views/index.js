var indexView = {
    init: function(){
        $('#start-button').click(function(){
            var username = window.localStorage.getItem("username",$('#username').val() );
            var group = window.localStorage.getItem("group",$('#group').val() );
            if(username && group){
                window.location.href = "contribuyentes.html";
            }
            else{
                window.location.href = "login.html";
            }
        });
    }
}
