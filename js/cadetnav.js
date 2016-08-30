$(document).ready(function(){
      
    $("openclose").click(function(){
        $(this).toggleClass("open");
        $("links").slideToggle();
    });
        
});  