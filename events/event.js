//function invokeEvent(event){
//    $("item").removeClass("active").addClass("dark");
//    $(event).removeClass("dark").addClass("active");
//    department=$(event).parent().parent().attr("department");
//    eventno=$(event).attr("eventno");
//    $.getJSON("json/"+department+".json",function(data){
//        temp="<h2><i class='fa fa-fa'></i>"+data[eventno].title+'</h2><p>'+data[eventno].description+"</p><h3><i class='fa fa-home'></i>Venue</h3>"+data[eventno].venue+"<h3><i class='fa fa-hourglass-half'></i>Timings</h3>";
//        
//        for(var i=0;i<data[eventno].timings.length;i++)
//            temp+=data[eventno].timings[i]+"<br>";
//        temp+="<h3><i class='fa fa-bullhorn'></i>Rules</h3><ul>";
//        for(var i=0;i<data[eventno].rules.length;i++)
//            temp+="<li>"+data[eventno].rules[i];
//        temp+="</ul>";
//        temp+="<h3><i class='fa fa-drupal'></i>Heads<span></h3><span class=dialer>Click on the contact card to Dialling screen</span><flexrow>";
//        for(var i=0;i<data[eventno].heads.length;i++)
//            temp+="<a href='tel:"+data[eventno].heads[i].contacts+"'class='contact'><img src='drawable/img_avatar.png'><contactname>"+data[eventno].heads[i].name+"</contactname><phone>"+data[eventno].heads[i].contacts+"</phone></contact>";
//        temp+="</flexrow>";
//        $("#about-event").hide().html(temp).slideDown();
//        
//    });
//}


//function invokeDepartment(department){
//       $.getJSON("json/"+department+".json",function(data){
//           
//           temp="<tabbed-content department="+department+" id="+department+"><div class='eventList'>";
//           for(i=0;i<data.length;i++){
//               temp+="<item onclick='invokeEvent(this)' id='asdf' eventno="+i+">"+data[i].title+"</item>";
//           }
//            temp+="</div>";
//            temp+="<collapser data-href='#about-event'><p>About Event</p><collapse><hor/><ver/></collapse></collapser>";
//            temp+="<div id='about-event'>";
//           temp+="</div></tabbed-content>";
//           $("accord").hide().html(temp).slideDown();
//           
//           invokeEvent($("[eventno=0]"));
//           $("[data-href='#about-event'] collapse").click(function(){
//        $(this).toggleClass("active");
//        $($(this).parent().attr("data-href")).slideToggle();
//    });
//          
//       });
//}
//  
$(document).ready(function(){
//    $("[data-href='.eventList']").hide();
//    var isPc=$("openclose").css("display");
//    $("letter").click(function(){
//        $("tabbed-content").hide();
//        $("letter").removeClass("active");
//        $("card").addClass("dark");
//        $(this).addClass("active");
//        $(this).parent().removeClass("dark");
//         invokeDepartment($(this).attr("data-href"));
//         if(!isPc)
//        $("[data-href='.eventList']").show();
//    });
    
//    $("openclose").click(function(){
//        $(this).toggleClass("open");
//        $("links").slideToggle();
//    });
    
//    $("collapse").click(function(){
//        $(this).toggleClass("active");
//        $($(this).parent().attr("data-href")).slideToggle();
//    });
});  