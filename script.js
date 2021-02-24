// Color change --------------------------------------------------
let activecolor = 0;
$(".colorchange").click(function(){
    if (activecolor==0){
        $(".bg").addClass("bgcolor");
        $(".bg").addClass("textcolor");
        $(".colorchange").addClass("textcolor");
        $(".sidebar").addClass("sidebarcolor");
        $(".sidebar p").addClass("textcolor");
        $(".sidebar nav a").addClass("textcolor");
        $("#contactme h1").addClass("textcolor");
        $("#contactme h2").addClass("textcolor");
        $(".footer a").addClass("sidebarcolor");
        activecolor = 1;
    }
    else {
        $(".bg").removeClass("bgcolor");
        $(".bg").removeClass("textcolor");
        $(".colorchange").removeClass("textcolor");
        $(".sidebar").removeClass("sidebarcolor");
        $(".sidebar p").removeClass("textcolor");
        $(".sidebar nav a").removeClass("textcolor");
        $("#contactme h1").removeClass("textcolor");
        $("#contactme h2").removeClass("textcolor");
        $(".footer a").removeClass("sidebarcolor");
        activecolor = 0;
    }
});

// sidebar effect -------------------------------------------------
$(".sidebar").addClass("sidebarwidth");
let flag = false;
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
    return true;

}
$(".menu").click(function(){
    if (flag == false){
        $(".sidebar").animate({height: "100%"}, 1000);
        $(".menu").addClass("menueffect");
        $(".closemenu").removeClass("menueffect");
        $(".closemenu").animate({opacity: 1}, 200);
        $(".menu").animate({opacity: 0}, 200);
        setTimeout(function(){
            $(".sidebar").removeClass("sidebarwidth");
            $(".sidebar").animate({width: "40vh"}, 1000);
            $("#about1").animate({opacity: 0.1}, 1000);
            $("#projects1").animate({opacity: 0.1}, 1000);
            $(".home").animate({opacity: 0.1}, 1000);
            $("#contactme").animate({opacity: 0.1}, 1000); 
            $(".footer").animate({opacity: 0.1}, 1000);
        }, 1000); 
        setTimeout(function(){
            flag = wait();
        }, 2000); 
    }    
});

function mouseL() { 
    $(".sidebar").animate({width: "15vh"}, 1000);
    $(".sidebar").animate({height: "10%"}, 1000);
    $("#about1").animate({opacity: 1}, 1000);
    $("#projects1").animate({opacity: 1}, 1000);
    $(".home").animate({opacity: 1}, 1000);
    $("#contactme").animate({opacity: 1}, 1000); 
    $(".footer").animate({opacity: 1}, 1000);
    return false;
}

$(".closemenu").click(function(){ 
    if (flag == true){
        $(".closemenu").animate({opacity: 0}, 200);
        $(".closemenu").addClass("menueffect");
        $(".menu").animate({opacity: 1}, 200);
        $(".menu").removeClass("menueffect");
        $(".sidebar").removeClass("sidebarwidth")
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
        setTimeout(function(){
            flag = mouseL();
        }, 200); 
    }
});

// Headers Effect ------------------------------------------------
var i = 0;
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
// Scrolling effects -----------------------------------------------------
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
     if ($(this).scrollTop() > 1800) {
        $(".c_circle").addClass("c_circle_anim");
        $(".c_info").addClass("c_info_anim");
     }
     else {
        $(".c_circle").removeClass("c_circle_anim");
        $(".c_info").removeClass("c_info_anim");
     }
});

// Disabling form submissions if there are invalid fields
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