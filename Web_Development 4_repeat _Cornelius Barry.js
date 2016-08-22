// JavaScript Document 
$(document).ready(function(){
//1
var angle=0;
setInterval(function(){
angle+=3;
 $("#Roate").rotate(angle);
},50);

//2
  var angle1=0;
setInterval(function(){
angle1+=3;
 $("#Roate1").rotate(angle1);
},50);

//3
var angle2=0;
setInterval(function(){
angle2+=3;
 $("#Roate2").rotate(angle2);
},50);

//4
  var angle3=0;
setInterval(function(){
angle3+=3;
 $("#Roate3").rotate(angle3);
},50);
//5
 var angle4=0;
setInterval(function(){
angle4+=3;
 $("#Roate4").rotate(angle4);
},50);

//6

  var angle5=0;
setInterval(function(){
angle5+=3;
 $("#Roate5").rotate(angle5);
},50);
//7
 var angle6=0;
setInterval(function(){
angle6+=3;
 $("#Roate6").rotate(angle6);
},50);

//8
  var angle7=0;
setInterval(function(){
angle7+=3;
 $("#Roate7").rotate(angle7);
},50);


//9

var angle8=0;
setInterval(function(){
angle8+=3;
 $("#Roate8").rotate(angle8);
},50);


//10
 var angle9=0;
setInterval(function(){
angle19+=3;
 $("#Roate9").rotate(angle9);
},50);

//11
 var angle10=0;
setInterval(function(){
angle10+=3;
 $("#Roate10").rotate(angle10);
},50);

//12
var angle11=0;
setInterval(function(){
angle11+=3;
 $("#Roate11").rotate(angle11);
},50);

//13
 var angle12=0;
setInterval(function(){
angle12+=3;
 $("#Roate12").rotate(angle12);
},50);


//14
  var angle13=0;
setInterval(function(){
angle13+=3;
 $("#Roate13").rotate(angle13);
},50);
//15

var angle14=0;
setInterval(function(){
angle14+=3;
 $("#Roate14").rotate(angle14);
},50);

//16

  var angle15=0;
setInterval(function(){
angle15+=3;
 $("#Roate15").rotate(angle15);
},50);


//17

 var angle16=0;
setInterval(function(){
angle16+=3;
 $("#Roate16").rotate(angle16);
},50);

//18

 var angle17=0;
setInterval(function(){
angle17+=3;
 $("#Roate17").rotate(angle17);
},50);

//19
 var angle18=0;
setInterval(function(){
angle18+=3;
 $("#Roate18").rotate(angle18);
},50);


//20
  var angle19=0;
setInterval(function(){
angle19+=3;
 $("#Roate19").rotate(angle19);
},50);
	
	




var documentEl = $(document),
                parallaxBg = $('div.parallax-bg');
            
            documentEl.on('scroll', function() {
                var currScrollPos = documentEl.scrollTop();
                parallaxBg.css('background-position', '0 ' + -currScrollPos/4 + 'px');
            });





            
          
  


 
 
  $(window).scroll(function () {  
    var one = 0;
	
    one = $(window).scrollTop();
	   if(one > 0)
	   
	{
$("#Factone").css('left', one*2+'px');
    	 
  		$("#effect").fadeOut(2000);
		$("#effect").fadeIn();
        $("#effect").fadeIn("slow");
        $("#effect").fadeIn(1000);
		 

   		
	}
  });
 
  $(window).scroll(function () {  
    var two = 0;
	
    two = $(window).scrollTop();
	   if(two > 200)
	   
	{
$("#Facttwo").css('right',two*.5+'px');
 
  		$("#effect2").hide(2000);
       
   		
	}
  });
  

 
 
 $(window).scroll(function () {  
    var three = 0;
	
    three = $(window).scrollTop();
	   if(three > 300)
	   
	{
$("#Factthree").css('right',three*.5+'px');
    	$("#effect3").show(2000);
  		$("#effect3").hide(1000);
       
   		
	}
  });
   
 
 
 $(window).scroll(function () {  
    var four = 0;
	
    four = $(window).scrollTop();
	   if(four > 800)
	   
	{
$("#Factfour").css('top',four*.5+'px');
    	$("#effect4").slideDown(1000);
  		$("#effect4").slideUp(800);
       
   		
	}
  });
   
 
 $(window).scroll(function () {  
    var five = 0;
	
    five = $(window).scrollTop();
	   if(five > 1000)
	   
	{

    	$("#Factfive").css('right',five*.5+'px');
  		$("#effect5").slideUp(800);
       
   		
	}
  });
 
 
$(window).scroll(function () {  
    var six = 0;
	
    six = $(window).scrollTop();
	   if(six > 1100)
	   
	{

    	
  		$("#Factsix").css('right',six*.5+'px');
     $("#effect6").hide(1000);
   		
	}
  });
  
 
 
 
 
 
 $(window).scroll(function () {  
    var seven = 0;
	
    seven = $(window).scrollTop();
	   if(seven > 1600)
	   
	{
$("#Factseven").css('left',seven*.5+'px');		
$("#effect7").fadeOut(2000);
    	
	}
  });







 $(window).scroll(function () {  
    var eight = 0;
	
    eight = $(window).scrollTop();
	   if(eight > 1800)
	   
	{
		$("#Facteight").css('left',eight*.5+'px');
$("#effect8").fadeOut(1000);
$("#effect8").fadeIn(2000); 	
	}
  });





 $(window).scroll(function () {  
    var nine = 0;
	
    nine = $(window).scrollTop();
	   if(nine > 2000)
	   
	{
		$("#Factnine").css('right',nine*.5+'px');
$("#effect9").slideUp(500);
$("#effect9").slideDown(300); 	
	}
  });



 $(window).scroll(function () {  
    var ten = 0;
	
    ten  = $(window).scrollTop();
	   if(ten  > 1800)
	   
	{
$("#Factten").css('right',ten*.5+'px');
$("#effect10").fadeOut(800); 	
	}
  });





});