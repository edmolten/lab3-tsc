var navbarView = {
    init: function(){
        $('#navbar-username').html(window.localStorage.getItem("username"));
        
        $('#logout-button').click(function(){
            window.localStorage.removeItem("username");
            window.localStorage.removeItem("group");
            window.location.href = 'index.html';
        });

        $('#reload-button').click(function(){
           window.location.reload();
        });
    }
}
