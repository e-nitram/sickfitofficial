document.addEventListener("DOMContentLoaded", () => {
  (function($){
    console.log('read more button js');
    console.log('read more button js',$('.product__description'),$('.read-more-hover'));
    $('.read-more-hover').on('click',()=>{
      $('.product__description').addClass('full');
      $('.read-more-hover').hide();
    });
  })(jQuery);
});
