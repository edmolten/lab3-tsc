var revocaciones = {
    post: function(boleta, data){
        $.ajax(
            {
                url : "http://67.205.134.51/revocaciones/",
                data : JSON.stringify(data),
                contentType : "application/json; charset=UTF-8",
                dataType : "json",
                type : "POST",
                processData : false,
                timeout : 30000,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('Authorization', global.authorization);
                },
                success : function(json) {
                    console.log(json);
                    alert("Boleta revocada con éxito");
                    location.reload();
                },
                error : function(xhr) {
                    alert("Error en la consulta, ver consola para más detalles");
                    console.log(xhr);
                },
                complete : function(xhr, status) {

                }
            }
        );

    }
}