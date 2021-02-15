$("a").hover(function(){
    $(this).addClass("orange");
    $(this).addClass("scale");
});
$("a").mouseout(function(){
    $(this).removeClass("orange");
    $(this).removeClass("scale");
});
$("a").click(function(){
    $(this).animate({opacity: 0.5}, 2000);
});
$("a").click(function(){
    $(".loading").addClass("fas fa-cog fa-spin");
});

$("i").hover(function(){
    $(this).addClass("orange");
    $(this).addClass("scale");
    $(this).addClass("shadow");
});
$("i").mouseout(function(){
    $(this).removeClass("orange");
    $(this).removeClass("scale");
    $(this).removeClass("shadow");
});

// sidebar effect
$(".sidebar").addClass("sidebarwidth");
var flag = false;
$(".sidebar").mouseover(function(){
    $(".sidebar").removeClass("sidebarwidth");
    if (flag == false){
        $(".sidebar").animate({width: "40vh"}, 1000);
        $("#about1").animate({opacity: 0.4}, 1000);
        $("#projects1").animate({opacity: 0.4}, 1000);
        setTimeout(function(){
            wait();
        }, 1000); 
        function wait(){
            var g1 = "Gerardo "        
            document.getElementById("g1").innerHTML = g1;
            var m1 = "Montero"        
            document.getElementById("m1").innerHTML = m1;
            var home = " Home"        
            document.getElementById("home").innerHTML = home;
            var about = " About Me"        
            document.getElementById("about").innerHTML = about;  
            var projects = " Projects"        
            document.getElementById("projects").innerHTML = projects; 
            var contact = " Contact Me"        
            document.getElementById("contact").innerHTML = contact;
            var github = " My Github"        
            document.getElementById("github").innerHTML = github;  
            var facebook = " My Facebook"        
            document.getElementById("facebook").innerHTML = facebook; 
            var linkedin = " My LinkedIn"        
            document.getElementById("linkedin").innerHTML = linkedin;
            $(".sidebar a").addClass("sidebareffect");
            flag = true;  
        }
         
    }
    
});
$(".sidebar").mouseleave(function(){ 
    $(".sidebar").removeClass("sidebarwidth");
    if (flag == true){
        var g1 = "G"        
        document.getElementById("g1").innerHTML = g1;
        var m1 = "M"        
        document.getElementById("m1").innerHTML = m1;
        var home = ""        
        document.getElementById("home").innerHTML = home;
        var about = ""        
        document.getElementById("about").innerHTML = about;  
        var projects = ""        
        document.getElementById("projects").innerHTML = projects; 
        var contact = ""        
        document.getElementById("contact").innerHTML = contact;
        var github = ""        
        document.getElementById("github").innerHTML = github;  
        var facebook = ""        
        document.getElementById("facebook").innerHTML = facebook; 
        var linkedin = ""        
        document.getElementById("linkedin").innerHTML = linkedin;
        $(".sidebar a").removeClass("sidebareffect");   
        $(".sidebar").animate({width: "15vh"}, 1000);
        $("#about1").animate({opacity: 1}, 1000);
        $("#projects1").animate({opacity: 1}, 1000);
        flag = false; 
    }
});

// Header effect
// $("h2").mouseover(function(){  
//     var letter1 = ["e","r","a","r","d","o"," "]
//     var letter2 = ["o","n","t","e","r","o"," "]
//     var i = 0;                 
//     var g = document.getElementById("g");
//     var m = document.getElementById("m");
//     function myLoop() {       
//         setTimeout(function() {   
//             g.append(letter1[i]); 
//             m.append(letter2[i]);  
//             i++;                   
//             if (i < letter1.length) {        
//                 myLoop();             
//             }               
//         }, 100)
//     }
//     myLoop();
// });
// //     var g = "Gerardo "        
// //     document.getElementById("g").innerHTML = g;
// //     var m = "Montero"        
// //     document.getElementById("m").innerHTML = m;
// //     $(this).addClass("shadow");
// // });
// $("h2").mouseout(function(){ 
//     var g = "G"        
//     document.getElementById("g").innerHTML = g;
//     var m = "M"        
//     document.getElementById("m").innerHTML = m;
//     $(this).removeClass("shadow");
// });


var i = 0;
var x = 0; 
function myLoop2() { 
    var disp1 = ["H","i",","," ","m","y"," ","n","a","m","e"," ","i","s"," ","G","e","r","a","r","d","o"," ","a","n","d"," ","I"," ","a","m"," ","a"," ","F","r","o","n","t","-","E","n","d"," ","D","e","v","e","l","o","p","e","r"]                   
    var hi = document.getElementById("hi");      
    setTimeout(function() {   
        hi.append(disp1[i]); 
        i++;                   
        if (i < disp1.length) {        
            myLoop2();  
            if (i==(disp1.length-1)) {
                myLoop3()
                // $(".welcome").animate({opacity: 1}, 2000);   
                // $(".scrolld").animate({opacity: 1}, 2000);
                // $(".arrowd").animate({opacity: 1}, 2000);
            }        
        }                 
    }, 80) 

}
myLoop2();

var j = 0;
function myLoop3() {    
    setTimeout(function() {  
        var disp2 = ["W","e","l","c","o","m","e"," ","t","o"," ","m","y"," ","W","e","b","s","i","t","e"]                   
        var wc = document.getElementById("wc");  
        wc.append(disp2[j]); 
        j++;                   
        if (j < disp2.length) {        
            myLoop3();
        }  
        else {
            // $(".welcome").animate({opacity: 1}, 2000);   
            $(".scrolldn").animate({opacity: 0.8}, 3000);
            $(".sidebar").animate({opacity: 1}, 3000);
        }        
                       
    }, 100)
}
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $(".scrolldn").addClass("opac")
    }
    else {
        $(".scrolldn").removeClass("opac");
    }
    if ($(this).scrollTop() > 300 && $(this).scrollTop() < 2000) {
        $("#about1 h1").addClass("headerseffect");
    }
    else {
        $("#about1 h1").removeClass("headerseffect");
    }
    if ($(this).scrollTop() > 700) {
    //    $(".bg").addClass("bgcolor");
    //    $(".sidebar").addClass("sidebarcolor");
    //    $(".sidebar p").addClass("textcolor");
    //    $(".sidebar nav a").addClass("textcolor");
       
    }
    if ($(this).scrollTop() < 700 || $(this).scrollTop() > 2200) {
        $(".bg").removeClass("bgcolor");
        $(".sidebar").removeClass("sidebarcolor");
        $(".sidebar p").removeClass("textcolor");
        $(".sidebar nav a").removeClass("textcolor");
        
     }
     if ($(this).scrollTop() > 1800) {
        $(".c_circle").addClass("c_circle_anim");
        $(".c_info").addClass("c_info_anim");
     }
     else {
        $(".c_circle").removeClass("c_circle_anim");
        $(".c_info").removeClass("c_info_anim");
     }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()