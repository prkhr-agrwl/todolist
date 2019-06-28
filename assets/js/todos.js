//check out specific todos by clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("done");
});

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(250,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	// event.$("li").add();
	if(event.which === 13){
		var newli = $(this).val();
		$("ul").append("<li><span><i class='fas fa-minus-circle'></i></span> "+newli+"</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(100);
});