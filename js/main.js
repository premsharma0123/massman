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
    //  $(".chatbox-popup").css("height","100%");
   })


        $('.banner_wrapper ').mousemove(function(e) {
          var amountMovedX = (e.pageX * -0.53 / 6);
          var amountMovedY = (e.pageY * -0.53 / 6);
          $('.card').css('left', amountMovedX + 'px');
          $('.card').css('top', amountMovedY + 'px');
      });




    // ----slider-----section ---//

    $('.slider1').owlCarousel({
      loop: true,
      margin: 0,
      autoplay: true,
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


// const el = document.querySelector("#module");

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


  
  // ------drag-------box------//

// dragElement(document.getElementById("chatbox-popup"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

//--bottom--to--top--- and------stickyyy---on----header---//
//var mybutton = document.querySelector(".BT-top");
var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
window.onscroll = function() {
    matrixFunction() //or scroll function--
};
function matrixFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
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