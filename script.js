(function ($) {
  
    $(window).on('load hashchange', function(){
      
        $('.content-region').hide();
      
        $('.main-menu a').removeClass('active');
        var region = location.hash.toString() || $('.main-menu a:first').attr('href');

        $(region).show();
      
        $('.main-menu a[href="'+ region +'"]').addClass('active'); 
        $('.main-menu a').on('click', function(e){
            e.preventDefault();
            var region = $(this).attr('href');
            location.hash = region;
            $(region).show().siblings('.content-region').hide();
            $('.main-menu a').removeClass('active');
            $(this).addClass('active');
        });
    });
    
})(jQuery);