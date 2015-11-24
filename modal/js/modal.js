(function(){
	
	$(function(){
		
		$('.btnshow').click(function(){
			showModal();
		});
		
		
		function showModal(){
			$('.modal').css({
				"display": "block",
				"top": "25%"
			});
			
			$('.btnReset').click(function(){
				$('.modal').css({
					"display": "none",
			    });
			});
		};
	});
	
})(jQuery)
