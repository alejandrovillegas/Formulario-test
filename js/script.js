$(document).ready(function(){


var contcontrol=0;
var widmo;


$('.selec').click(function(){
	if(contcontrol==0){

			$('.contcasill').animate({height: "0px"},300,'linear');

			$(this).next().animate({height: "160px"},300,'linear');
			contcontrol=1;
	}else{
			widmo= $(this).next().height();
			if(widmo==0){

				$('.contcasill').animate({height: "0px"},300,'linear');
				$(this).next().animate({height: "160px"},300,'linear');
				contcontrol=1;

			}else{
						$(this).next().animate({height: "0px"},300,'linear');

						contcontrol=0;
			}				
	}

});

});


