/*code-block-fullscreen*/
$("figcaption").click(function(){
  if(window.CodeBlockFullscreen){
	  $("#post").removeClass("code-block-fullscreen");
      $(this).parent().removeClass("code-block-fullscreen");
      $(this).parent().removeClass("code-block-fullscreen-overflow-auto");
      $("html").removeClass("code-block-fullscreen-html-scroll");
      $(".highlight>table .gutter").removeClass("code-block-fullscreen-gutter");
	  window.CodeBlockFullscreen=false
  }else{
	  $("#post").addClass("code-block-fullscreen");
      $(this).parent().addClass("code-block-fullscreen");
      $(this).parent().addClass("code-block-fullscreen-overflow-auto");
      $("html").addClass("code-block-fullscreen-html-scroll");
      $(".highlight>table .gutter").addClass("code-block-fullscreen-gutter");
	  window.CodeBlockFullscreen=true
  }
});