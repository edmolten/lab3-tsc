var navbarView = {
    init: function(){
        $('#navbar-username').html("Anonimo");
        $('#logout-button').click(function(){
            /*implementar logout*/
            alert("implementar funcionalidad, redireccionar a la vista login.html");
        });

        $('#reload-button').click(function(){
           window.location.reload();
        });
    }
}
