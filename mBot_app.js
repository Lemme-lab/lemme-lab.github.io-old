$(document).ready(function() {
    $(".myvideos").on("mouseover", function(event) {
      this.play();
  
    }).on('mouseout', function(event) {
      this.pause();
  
    });
  })

  var slider_img = document.querySelector('.slider-img');
  var images = ['a.png', 'b.png', 'a.png', 'b.png', 'a.png'];
  var i = 0;
  
  function prev(){
      if(i <= 0) i = images.length;	
      i--;
      return setImg();			 
  }
  
  function next(){
      if(i >= images.length-1) i = -1;
      i++;
      return setImg();			 
  }
  
  function setImg(){
      return slider_img.setAttribute('src', "data/images/"+images[i]);
      
  }
