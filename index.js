$(document).ready(function(){

var app = $('.app');
var appselector;    

    
$('.socials a').attr('target','_blank'); 
    
$(document).on('click','.projbtn, .backl1', function() {
    app.fadeOut(30);
    setTimeout(function() {
        $('.projects').fadeIn(200);
    },50)    
});            
     
$(document).on('click','.appbtn', function() {
    app.fadeOut(30);
    setTimeout(function() {
        $('.apps').fadeIn(200);
    },50)
});
    
$(document).on('click','.webbtn', function() {
    app.fadeOut(30);
    setTimeout(function() {
        $('.webs').fadeIn(200); 
    },50)
});  
    
$(document).on('click','.graphicbtn', function() {
    app.fadeOut(30);
    setTimeout(function() {
        $('.graphics').fadeIn(200); 
    },50)
});     
     
$(document).on('click','.showpage .backlink, .showpage .backfloat', function() {
    $('.showpage').fadeOut(30);
    setTimeout(function() { $('.appbtn').trigger('click'); },50)
});    
     
        
$(document).on('click','[app]', function() {
    appselector = $(this).attr('app');
    app.fadeOut(30);
    setTimeout(function() {
        $('.showpage').fadeIn(200);
        $('.showpage [showcase]').fadeOut(30);
        $('.showpage [showcase='+appselector+']').fadeIn(210);
    },50)
}); 
 
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('.backfloat').fadeIn(200);
   }
    else {
        $('.backfloat').fadeOut(200);
    }
});      
     
var navclick = false;
$('.mobbtn').on('click', function() {
    if(navclick == false) {
        $('.webnav nav').css('top','0');
        navclick = true;
    }
    else {
        $('.webnav nav').css('top','');
        navclick = false;
    }
});      
     
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
        $('.webnav nav').css('top','');
        navclick = false;
   } 
   lastScrollTop = st;
});    
     
 
$(document).on('click','.backtop',function() {
    window.scrollTo(0,0);
});     
     
     
    
      
     
     
     
     
     
     
     
     
     
     
     

});

