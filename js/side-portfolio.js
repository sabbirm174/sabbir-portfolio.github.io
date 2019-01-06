jQuery(document).ready(function($) {
	
	(function() {
    
  function controls() {
    $(this).addClass('').siblings('button').removeClass('');
    $('.slideDiv').animate({
      top: -$('.slidecontainer').height() * $(this).index()
    }, 450);
  }
  
  /***Event Listeners***/
  const runCode = () => {
    const button = document.querySelectorAll('.button');
    if ( button ) {
      for ( var i = 0; i < button.length; i++ ) {
        button[i].addEventListener('click', controls, false);
      }
    }
  }
  
  runCode();
  
})();
});