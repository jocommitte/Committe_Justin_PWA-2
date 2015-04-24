/*  
	Committe_Justin_CascadaProject
	Author: Justin Committe
*/

(function($){

    $('.form').find('input, textarea').on('keyup blur focus', function (e) {

        var $this = $(this),
			label = $this.prev('label');

		if (e.type === 'keyup') {
			if ($this.val() === '') {
				label.removeClass('active highlight');
			} else {
				label.addClass('active highlight');
			}
		} else if (e.type === 'blur') {
			if( $this.val() === '' ) {
				label.removeClass('active highlight');
			} else {
				label.removeClass('highlight');
			}
		} else if (e.type === 'focus') {

			if( $this.val() === '' ) {
				label.removeClass('highlight');
			}
			else if( $this.val() !== '' ) {
				label.addClass('highlight');
			}
		}

	});

	$('.tab a').on('click', function (e) {

		e.preventDefault();

		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');

		target = $(this).attr('href');

		$('.tab-content > div').not(target).hide();

		$(target).fadeIn(600);

	});


	$(masterTooltip).hover(function(){
		var title = $(this).attr('title');
		$(this).data('tipText', title).removeAttr('title');
		$("<p class='toolTip'></p>")
			.text(title)
			.appendTo('body')
			.fadeIn('slow');
	},
		function(){
			$(this).attr('title', $(this).data('tipText'));
			$('.toolTip').remove();
		}).mousemove(function(e){
			var mouseX = e.pageX +20;
			var mouseY = e.pageY +10;
			$('.toolTip').css({
				top:mouseY,
				left:mouseX

			})
		})

	
})(jQuery); // end private scope




