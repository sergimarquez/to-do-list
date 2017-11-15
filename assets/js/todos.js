// Check Off Specific Todos By Clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click X and delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Add new Todos
$("input[type='text']").keypress(function(event){
	//Grab text when enter is pressed
	if(event.which === 13){
		var newEntry = $(this).val();
		$(this).val("");
	//Add it to the list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newEntry + "</li>");
	}
});

	

	