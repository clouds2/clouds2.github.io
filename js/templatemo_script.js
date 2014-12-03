/* Credit: http://www.templatemo.com */

jQuery(document).ready(function()
{
    //scroll to top
    jQuery(window).scroll(function(){
        if(jQuery(this).scrollTop() > 100){
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
        }
    });
    jQuery('.scrollup').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
    
