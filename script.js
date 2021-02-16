
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