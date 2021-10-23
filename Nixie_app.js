

  var slider_img = document.querySelector('.slider-img');
  var image = ['a.png', 'b.png', 'a.png', 'b.png', 'a.png'];
  var i = 0;
  
  function prev(){
      if(i <= 0) i = image.length;	
      i--;
      return setImg();			 
  }
  
  function next(){
      if(i >= image.length-1) i = -1;
      i++;
      return setImg();			 
  }
  
  function setImg(){
      return slider_img.setAttribute('src', "data/image/"+image[i]);
      
  }