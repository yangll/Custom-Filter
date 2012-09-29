var CustomFilter = {};

if(Drupal.jsEnabled) {
   $(document).ready(function(){

      $("button#apply").click(function(){
	  $.post(Drupal.settings.custom_filter.post_url , {"type_id":$("input[name='filter']:checked").val()} ,function(data) {
           var $resultData = Drupal.parseJson(data);
	   result ="";
	   for( var $i = 0 ; $i < $resultData.num; $i++ ){
	      tmp =  "<div class='type-title'><a class='author-title' href='"+$resultData['url'][$i]+"'</a>"+$resultData['title'][$i]+"</div>";
	      result = result+tmp;
	   }
 	//    $("#philquotes-text").html(resultData);
            $("#philquotes-text").html(result);

          });
	
      });

  });
}


