var showCaptions = function () {
  var caption;
  $('img').each(function () {
    caption = $(this).attr('alt');
    if (caption !== '')
      // use .before to insert the caption before the image
      $(this).after('<caption">' + caption + '</caption>');
  });
}

showCaptions();