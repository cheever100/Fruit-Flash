$(document).ready(function(){
        $("input[type='button']").click(function(){
        	var radioValue = $("input[name='berry']:checked").val();
            if(radioValue){
                alert("Your are " + radioValue);
            }
        });
        
    });