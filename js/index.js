  var mydivs=new Array('.diagram','.table-wrapper');

function opcl(arr, e){
    if ($(e).css('display') == 'none'){
        for(var i in arr){   
           $(arr[i]).hide(200);
        }
        $(e).show(200);       
    }
}
 
    $( document ).ready(function() {
        $( window ).resize(function() {
        wnd_resize()
      
    });
    wnd_resize()
    $('.slct').click(function(){
  var dropBlock = $(this).parent().find('.drop');
  if( dropBlock.is(':hidden') ) {
    dropBlock.slideDown(300);

    $(this).addClass('active');

    $('.drop').find('li').click(function(){

      var selectResult = $(this).html();

      $(this).parent().parent().find('input').val(selectResult);

      $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

      dropBlock.slideUp(300);
    });

  } else {
    $(this).removeClass('active');
    dropBlock.slideUp(300);
  }

  return false;
});
    $('.switches a').click(function() {
    $('.switches a').removeClass('active');
    $(this).addClass('active');
  });
    $('.oschad .language').click(function() {
    $('.oschad .language').removeClass('active');
    $(this).addClass('active');
  });
    $('.exchange-rates table tr').click(function() {
    $('.exchange-rates table tr').removeClass('active');
    $(this).addClass('active');
  });

$('.arrow').click(function(){
      
  if ($(".row-hidden").css("display") == "none") {
    $(".row-hidden").attr("display","block");
    $(this).css("background-image","url(images/arrow-top.jpg)");
    $(".exchange-rates table").css("border-right","1px solid #fff");
    $(".row-hidden").show();

  }
  else {
    $(".row-hidden").hide();
    $(this).css("background-image","url(images/arrow-bottom.png)");
    $(".exchange-rates table").css("border-right","0");
    $(".row-hidden").attr("display","none");
  } 
  
  })



    });
    function wnd_resize(){
        if($(window).width()<752){
            $('.news,.main-indicators,.our-services').find('legend').attr('data-toggle', 'collapse');
            $('#oschad247').attr('data-toggle', 'collapse');

        }
        else{
            $('.news,.main-indicators, .our-services').find('legend').removeAttr('data-toggle');
            $('#oschad247').removeAttr('data-toggle');
        }
    }
