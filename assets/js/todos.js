// Check Off Specific Todos By Clicking

$("li").click(function(){
	$(this).toggleClass("completed");
});

//Click X and delete Todo

$("span").click(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});