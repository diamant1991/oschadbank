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
    $('.converter-toogle').css("text-decoration","none");
    $(".row-hidden").show();
  }
  else {
    $(".row-hidden").hide();
    $(this).css("background-image","url(images/arrow-bottom.png)");
    $(".exchange-rates table").css("border-right","0");
    $('.converter-toogle').css("text-decoration","underline");
    $(".row-hidden").attr("display","none");
  } 
  
  })
$('.converter-toogle').click(function(){
      
  if ($(".row-hidden").css("display") == "none") {
    $(".row-hidden").attr("display","block");
    $(this).css("text-decoration","none");
    $('.arrow').css("background-image","url(images/arrow-top.jpg)");
    $(".exchange-rates table").css("border-right","1px solid #fff");
    $(".row-hidden").show();
  }
  else {
    $(".row-hidden").hide();
    $(this).css("text-decoration","underline");
    $(".exchange-rates table").css("border-right","0");
    $('.arrow').css("background-image","url(images/arrow-bottom.png)");
    $(".row-hidden").attr("display","none");
  } 
  
  })








$('.view').click(function(){
      
  if ($("#content-block-hidden").css("display") == "none") {
    $("#content-block-hidden").attr("display","block");
    $(this).text('Згорнути')
    $(this).css("background-image","url(images/zg.jpg)")
    $("#content-block-hidden").slideDown(300);

  }
  else {
    $("#content-block-hidden").slideUp(300);
    $(this).text('Розгорнути');
    $(this).css("background-image","url(images/roz.jpg)")
    $("#content-block-hidden").attr("display","none");
  } 
  
  })
$('.view-small').click(function(){
      
  if ($("#services-hidden").css("display") == "none") {
    $("#services-hidden").attr("display","block");
    $(this).text('Згорнути');
    $(this).css("background-image","url(images/zg.jpg)")
    $("#services-hidden").slideDown(200);

  }
  else {
    $("#services-hidden").slideUp(200);
    $(this).text('Розгорнути');
    $(this).css("background-image","url(images/roz.jpg)")
    $("#services-hidden").attr("display","none");
  } 
  
  })
$('.currency-collapse').click(function(){
      
  if ($("#currency-collapse").css("display") == "none") {
    $("#currency-collapse").attr("display","block");
    $("#currency-collapse").slideDown(300);

  }
  else {
    $("#currency-collapse").slideUp(300);
    $("#currency-collapse").attr("display","none");
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
