


$(document).ready(function(){
	
	$(document).submit(function(e){
		e.preventDefault();
		
		if($("input[type='radio'].berryClass").is(':checked')) {
    	var card_type = $("input[type='radio'].berryClass:checked").val();
    	alert(card_type);
		}

		// if( $(this).hasClass("yes")) {
		// 	alert("You are correct!");
		// } else {
		// 	alert("Sorry, try again.");
		// }
	});

 });



// $(document).ready(function(){
//     $("form").click(function(){
//         alert($("p").hasClass("yes"));
//     });
// });

// //from StackOverFlow 
// <input type="radio" class="radioBtnClass" name="numbers" value="1" />1<br/>
// <input type="radio" class="radioBtnClass" name="numbers" value="2" />2<br/>
// <input type="radio" class="radioBtnClass" name="numbers" value="3" />3<br/>
// //This will return, checked radio button value.

// if($("input[type='radio'].radioBtnClass").is(':checked')) {
//     var card_type = $("input[type='radio'].radioBtnClass:checked").val();
//     alert(card_type);
// }