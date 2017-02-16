$( document ).ready(function() {
    console.log( "ready!" );


$("option1").live("click", function(){
    $(this).after("<div class='option1'><p>Another paragraph!</p></div>");
});
});
