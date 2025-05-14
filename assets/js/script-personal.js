console.log('funciona jquery')
 $('document').ready(function(){
    //solo el evento
    $('#agregar-comentario').click(function(){
        $('#formulario').show()
    })
    $('#agregar').click(function(){
        const filas = $('#lista');
        $('#nombre').val();
        $('#texto').val();
        
         filas.append(
        '<div class="comentarios">' +
            '<div class="row">' +
                '<p class="usuario-nuevo"><strong>' + $("#nombre").val() + '</strong></p>' +
                '<p class="comentarioDeUsuario">'+$("#texto").val() +'</p>' + 
            '</div>' +
        '</div>' +
         '<hr>');
        
         $('#nombre').val('');
         $('#texto').val('');
    })
    $('#agregar').click(function(){
        $('#formulario').hide()
    })
}) 

