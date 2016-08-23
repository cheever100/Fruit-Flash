var answers = {q1:"raspberries"}

$(document).ready(function(){
        $("input[type='button']").click(function(){
        	var radioValue = $("input[name='berry']:checked").val();
            
            if( radioValue == answers.q1 ) {
    
            	$("#answer_box").html("Good job!");
            } else {
            	
            	$("#answer_box").html("Sorry, try again!");
            }
        });
        
    });


