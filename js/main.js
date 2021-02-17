$(document).ready(function(){
    $(".bg-bubbles").hover(function(){ 
        $(".bg-bubbles").addClass('transition');
    } , function (){
        $(".bg-bubbles").removeClass('transition');
    })
    $(".right-sticky").click(function(){
       $(this).css("display","none")
        $("#contact-form").css({"right":"0%","trasition":"all .3s ease-in-out"});
    })
      $(".Close3").click(function(){
         $(".right-sticky").css("display","block");
      })
    // add & Remove class
    $(".List01").click(function () {
      if(!$(this).hasClass('List_active'))
      {    
          $(".List01.List_active").removeClass("List_active");
          $(this).addClass("List_active");        
      }
    });

    // ---end---here---//
   $(".chatbox-open").click(function(){
      $(".chatbox-popup").fadeToggle("slow");
   })
   $(".chatbox-maximize").click(function(){
     $(".chatbox-popup").css("display","none");
   })
// ------chat---move----//  child-wrp
   $( function() {
    $( "#chatbox-popup" ).draggable();
  } );

  // ---end----here--//
  //  -----mouse---movement-----

      //   $('.banner_wrapper ').mousemove(function(e) {
      //     var amountMovedX = (e.pageX * -0.53 / 6);
      //     var amountMovedY = (e.pageY * -0.53 / 6);
      //     $('.card').css('left', amountMovedX + 'px');
      //     $('.card').css('top', amountMovedY + 'px');
      // });


    //bar 

    jQuery('.main-bar').click(function(e) {
      jQuery(this).toggleClass('activefile');
      e.preventDefault();
      jQuery('.myHeader').slideToggle();
    });

// ---end---
    // ----slider-----section ---//

    $('.slider1').owlCarousel({
      loop: true,
      margin: 0,
   //   autoplay: true,
    //  nav: true,
      autoplayTimeout: 4000,
      smartSpeed: 1500,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 1
          }
      }
    });
    
})


// const el = document.querySelector("#chatbox-popup");

// el.addEventListener("mousemove", (e) => {
//   el.style.setProperty('--x', -e.offsetX + "px");
//   el.style.setProperty('--y', -e.offsetY + "px");
// });

// chat----sectiom---
// const chatbox = jQuery.noConflict();



// ---end----here---//




function openList(ListName) {
  var i;
  var x = document.getElementsByClassName("port_tab-content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(ListName).style.display = "block";  
}


// ---counter//
$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });


//--bottom--to--top--- and------stickyyy---on----header---//
//var mybutton = document.querySelector(".BT-top");
var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
window.onscroll = function() {
    matrixFunction() //or scroll function--
};
function matrixFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       // mybutton.style.display = "block";
        navbar.classList.add("sticky")
    } else {
    //    mybutton.style.display = "none";
        navbar.classList.remove("sticky");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
//end--here--//




// ----inspect ---disable------//

$(document).keydown(function(event){
  if(event.keyCode==123){
      return false;
  }
  else if (event.ctrlKey && event.shiftKey && event.keyCode==73){        
           return false;
  }
});

$(document).on("contextmenu",function(e){        
 e.preventDefault();
});


// ----disable ----ctrl----U---//
  document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 85 )) {
        return false;
    }
  };

  // ----disable ----ctrl----S---//
  $(document).bind('keydown', function(e) {
    if(e.ctrlKey && (e.which == 83)) {
      e.preventDefault();
      // alert('Ctrl+S');
      return false;
    }
  });

  // ----disable ----ctrl---C--//
  $(window).keydown(function(e){
    var keystroke = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey &&  (keystroke == 'c' || keystroke == 'v')) {
    // alert("let's see");
    event.returnValue = false; // disable Ctrl+C
    }
  })

 // ----disable ----ctrl--F--//
// ----end-----here----//
$(window).keydown(function(e){
  if ((e.ctrlKey || e.metaKey) && e.keyCode === 70) {
      e.preventDefault();
  }
});      