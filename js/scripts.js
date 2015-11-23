$(document).foundation();

$(document).ready(function() {

    function isMobileWidth() {
        return $('#mobile-indicator').is(':visible');
    }

    function stickyFooter() {
        $('.content').css('padding-bottom',$('.footer').outerHeight(true));
    }

    stickyFooter();

    $(window).on('resize',stickyFooter);

	$('.latest__list').slick({
		autoplay: false,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.slider__list').slick({
		autoplay: false,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.item__switcher').click(function(e) {

		$('.addresses__item').hide();
		$($(this).attr('href')).show();

		return false;
	});

	$('.manufacturers__item .item__list').each(function() {
		if ($(this).find('li').length > 5) {
			$(this).find('li:gt(4)').hide();
			$(this).append('<div class="item__more"><a href="#">показать все</a></div>');
		}
	});

	$('.manufacturers__item .item__list .item__more a').click(function(e) {
		e.preventDefault();

		$(this).parents('.item__list').find('li:gt(4)').show();
		$(this).hide();
	});

	$('#n-perSelect').selectmenu({
        appendTo: '.n-main__wrap__bucket__header__col--second__select',
    });

	$('.ioslider').ionRangeSlider({
	    type: 'double',
	    min: 0,
	    max: 10000,
	    to: 800,
	    min_interval: 800,
	    postfix: ' р.',
	    onChange: function (data){
	        $('#filter-before').prop('value',data.from);
	        $('#filter-after').prop('value',data.to);
	    }
	});

	$(".txtboxToFilter").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

	var ionslider = $('.ioslider').data('ionRangeSlider');

	$('#filter-before').blur(function(){
        var value = $(this).prop('value');
        ionslider.update({
            from: value,
        })
	});

	$('#filter-after').blur(function(){
        var value = $(this).prop('value');
        ionslider.update({
            to: value,
        })
    });

    $('.n-main__filter__block__more').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.n-main__filter__block__field--toggle').css('display') != 'none' ?
        $(this).parent().find('.n-main__filter__block__field--toggle').hide('fast'):
        $(this).parent().find('.n-main__filter__block__field--toggle').show('fast');
    });

    $('.header__search--mob').click(function(){
        $(this).addClass('header__search--mob--expand');
    });


    $('.one-of input').click(function(){
        $(this).parent().parent().parent().parent().find('.one-of input').prop('checked',false);
        $(this).prop('checked',true);
    });

    $('#n-filter').click(function(){
        $('.n-main__filter').show('fast');
    });

    $('.n-main__filter__close a').click(function(){
        $('.n-main__filter').hide('fast');
    });

    $('.n-main__wrap__bucket__history__wrap__cell--third').click(function(){
        $(this).parent().parent().find('.n-main__wrap__bucket__history__wrap__inside').toggle('fast');
        $(this).find('span').toggleClass('active');
    })

    $(window).resize(function(){
        if(!isMobileWidth()) {
          $('.n-main__filter').show();
        }
        if(isMobileWidth()) {
          $('.n-main__filter').hide();
        }
    });

    $('.n-main__wrap__bucket__buy__field').click(function(){
        $(this).parent().parent().find('input').prop('checked',false);
       $(this).find('input').prop('checked',true);
    });

    $(function () {
        $('.n-main__wrap__bucket__order').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,
            closeMarkup: '',
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',

            callbacks: {
                open: function() {
                    $('#select-street').selectmenu({
                        appendTo: '.n-pop-up-order__field__box--first',
                    });
                    $('#select-buy').selectmenu({
                        appendTo: '.n-pop-up-order__field__box--second',
                    });
                }
            }

        });
        $(document).on('click', '.n-close--bttn', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

    if ($('.n-pop-up-done').length) {

        setTimeout(function(){
           $.magnificPopup.open({
                items: {
                    src: '.n-pop-up-done'
                },
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,
                closeMarkup: '',
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
        },500);
    }

    if ($('#n-pop-up-calc').length) {

        setTimeout(function(){
           $.magnificPopup.open({
                items: {
                    src: '#n-pop-up-calc'
                },
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,
                closeMarkup: '',
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });
        },500);
    }

    document.body.onclick = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;

        if ( (" " + target.parentNode.parentNode.className + " ").replace(/[\n\t]/g, " ").indexOf(" header__search--mob--expand ") < 0 ) {
            $('.header__search--mob').removeClass('header__search--mob--expand');
        }
    }
});