$(window).on('load', function () {
      setTimeout(function () {
    $("img1").css({	
      "display: inline-block"
      "vertical-align: middle"
      "box-shadow: 0 4px 8px -3px rgba(0,0,0,.20),0 5px 8px rgba(0,0,0,.32)",
    
      "-webkit-animation:spin 1s linear"
      "-moz-animation:spin 1s linear",
      "animation:spin 1s linear"
    
    
    "transform: rotateY(1deg)"
      
    }
    
    "@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg)",
    "@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg)",
    "@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg)",
      },2000);
