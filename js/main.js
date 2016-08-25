var answers = {l1q1:"raspberries", l1q2:"papaya", l1q3:"pomegranates", l2q1:"rambutan"}

$(document).ready(function(){

// slide bar for helpful hints
    $(".flip").click(function(){
        $("#panel[name='"+this.getAttribute('name')+"']").slideDown("slow");
        console.log(this.getAttribute('name'));
    });

    // selecting answers
    $("input[type='button']").click(function(){ 
        var radio_selector = "input[name='"+this.id+"']:checked";
        var radioValue = $(radio_selector).val();
        var answer_box_selector = "#answer_box[name='"+this.id+"']";
            
        if( radioValue == answers[this.id] ) {
           
            $(answer_box_selector).html("Good job!");
               
        } else {	
            	
            $(answer_box_selector).html("Sorry, try again!");    
        }
    });  
});


