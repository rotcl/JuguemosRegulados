// jQuery
$(document).ready(function(){ 
    
    $('#ver1').toggle( 
        function(e){
            $('.1').slideDown();
            $(this).text('Ver menos');
            e.preventDefault();
        },
        function(e){
            $('.1').slideUp();
            $(this).text('Ver más');
            e.preventDefault();
            
        }
    );
    $('#ver2').toggle( 
        function(e){
            $('.2').slideDown();
            $(this).text('Ver menos');
            e.preventDefault();
        },
        function(e){
            $('.2').slideUp();
            $(this).text('Ver más');
            e.preventDefault();
            
        }
    );
    $('#ver3').toggle( 
        function(e){
            $('.3').slideDown();
            $(this).text('Ver menos');
            e.preventDefault();
        },
        function(e){
            $('.3').slideUp();
            $(this).text('Ver más');
            e.preventDefault();
            
        }
    );
    $('#ver4').toggle( 
        function(e){
            $('.4').slideDown();
            $(this).text('Ver menos');
            e.preventDefault();
        },
        function(e){
            $('.4').slideUp();
            $(this).text('Ver más');
            e.preventDefault();
            
        }
    )
});