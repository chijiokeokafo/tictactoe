$(document).ready(function(){
    var turn = 0;
    $("td").on('click', function() {
      var tile = $(this);
      if(turn==0){
        turn = 1;
        tile.css('background-image', 'url(images/O.png)');
    } else {
        turn = 0;
        tile.css('background-image', 'url(images/X.png)');
    }
    });

});