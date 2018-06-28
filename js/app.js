const navlist = $('.main-header');
navlist.hide();

//$('.foldButton').click(function(){
   // navlist.slideToggle();
    
//});
$('.foldButton').click(function(){

    if(navlist.css('display') === 'none') {
        navlist.slideDown();
        $('.foldButton').transition({ rotate: '90deg' })
    } else {
        navlist.slideUp();
        $('.foldButton').transition({ rotate: '0deg' })
    }
});