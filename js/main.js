$(document).ready(function(){
    $(".bg-bubbles").hover(function(){ 
        $(".bg-bubbles").addClass('transition');
    } , function (){
        $(".bg-bubbles").removeClass('transition');
    })

    // add & Remove class
    $(".List01").click(function () {
      if(!$(this).hasClass('List_active'))
      {    
          $(".List01.List_active").removeClass("List_active");
          $(this).addClass("List_active");        
      }
    });

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


  