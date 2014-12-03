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

       
        //adding attribute value
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
        //add marker
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello Myanmar!'
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});
