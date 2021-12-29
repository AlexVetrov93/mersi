$(function(){
	$(".logo > a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 900);
	});

	// Проверка браузера
	if ( !supportsCssVars() ) {
		$('body').addClass('lock')
		$('.supports_error').addClass('show')
	}

	if ($(window).width() < 1025) {
		$('.dropdown > a,button').on('click', function (e) {
		  e.preventDefault();
		  var $this = $(this);
		  $this.toggleClass('is-open');
		  $this.next('.tabs__wrapper').slideToggle();
		})
	  } 

	setTimeout(function(){
		// Ленивая загрузка
		observer = lozad('.lozad:not(.loaded)', {
			rootMargin: '100px 0px',
			threshold: 0,
	        enableAutoReload: true,
			load: function(el) {
				el.src = el.getAttribute('data-src');

				if ( el.getAttribute('data-srcset') ) {
	            	el.srcset = el.getAttribute('data-srcset');
	            }

		        el.onload = function() {
		            el.classList.add('loaded')

		            if ( $(el).closest(".lozad_p").hasClass("lozad_p") ) {
		            	el.closest('.lozad_p').classList.add('loaded')
		            }
		        }
		    }
		})

		observer.observe()
	}, 100)


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() +'px')


	// Плавная прокрутка к якорю
	$('body').on('click', '.scroll_link', function(e) {
		e.preventDefault()

		let href = $(this).data('anchor')

		if($(window).width() > 1024) {
			var offTop = 100
		}else{
			var offTop = $('.mob_header').innerHeight()
		}

		$('html, body').stop().animate({
			scrollTop: $(href).offset().top - offTop
		}, 1000)
	})


     // Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function(e) {
		e.preventDefault()

	    if( !$(this).hasClass('active') ) {
	    	let parent = $(this).closest('.tabs_container')
		    let activeTab = $(this).data('content')
        	let level = $(this).data('level')

		    parent.find('.tabs:first').find('button').removeClass('active')
		    parent.find('.tab_content.' + level).removeClass('active')

		    $(this).addClass('active')
		    $(activeTab).addClass('active')

		    let textEl = $(this).find('.name').text()
		    let textSeats = $(this).find('.seats').text()
		    let img = $(this).find('.icon img').data('src')

		    $(this).closest('.tabs_box').find('.opet_tabs .name').text(textEl)
		    $(this).closest('.tabs_box').find('.opet_tabs .seats').text(textSeats)
		    $(this).closest('.tabs_box').find('.opet_tabs .icon img').attr('src', img)
	    }
	})

	if( locationHash && $('.tabs_container').length ) {
		let activeTab = $('.tabs button[data-content='+ locationHash +']')
		let parent = activeTab.closest('.tabs_container')
    	let level = activeTab.data('level')

		parent.find('.tabs:first').find('button').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		$(locationHash).addClass('active')

		let textEl = $(this).find('.name').text()
		let textSeats = $(this).find('.seats').text()
		let img = $(this).find('.icon img').data('src')

		$(this).closest('.tabs_box').find('.opet_tabs .name').text(textEl)
		$(this).closest('.tabs_box').find('.opet_tabs .seats').text(textSeats)
		$(this).closest('.tabs_box').find('.opet_tabs .icon img').attr('src', img)


		$('html, body').stop().animate({
		   	scrollTop: $(locationHash).offset().top - 430
		}, 1000)
	}


	$('body').on('click', '.opet_tabs', function(e) {
		e.preventDefault()

	    if( $(this).hasClass('active') ) {
	    	$(this).removeClass('active')
	    	$(this).next().fadeOut()

	    	$('.overlay_tabs').fadeOut()
	    } else {
	    	$(this).addClass('active')
	    	$(this).next().fadeIn()

	    	$('.overlay_tabs').fadeIn()
	    }
	})
	

	if ( $(window).width() < 768 ) {
		$('body').on('click', '.tabs button', function() {
			$(this).closest('.tabs').prev().removeClass('active')

			$(this).closest('.tabs').fadeOut()

			$('.overlay_tabs').fadeOut()
		})
	}


	$('body').on('click', '.overlay_tabs', function(e) {
    	e.preventDefault()

    	$('.opet_tabs').removeClass('active')

    	$('.tabs').fadeOut()

		$('.overlay_tabs').fadeOut()
	})


	// Меню
	inView.offset(250)

	if( $('#anchor1').length ) {
		inView('#anchor1')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(0) button').addClass('active') 
		    })
	}

	if( $('#anchor2').length ) {
		inView('#anchor2')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(1) button, header .item:eq(0) button').addClass('active')
		    })
	}

	if( $('#anchor3').length ) {
		inView('#anchor3')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(2) button').addClass('active')
		    })
	}

	if( $('#AboutUs').length ) {
		inView('#AboutUs')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(3) button, header .item:eq(1) button').addClass('active')
		    })
	}

	if( $('#Carpark').length ) {
		inView('#Carpark')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(4) button, header .item:eq(2) button').addClass('active')
		    })
	}

	if( $('#Advantages').length ) {
		inView('#Advantages')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(5) button, header .item:eq(4) button').addClass('active')
		    })
	}

	if( $('#anchor7').length ) {
		inView('#anchor7')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(6) button').addClass('active')
		    })
	}

	if( $('#Steps').length ) {
		inView('#Steps')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(7) button, header .item:eq(6) button').addClass('active')
		    })
	}

	if( $('#anchor9').length ) {
		inView('#anchor9')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(8) button').addClass('active')
		    })
	}

	if( $('#anchor10').length ) {
		inView('#anchor10')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(9) button').addClass('active')
		    })
	}

	if( $('#Security').length ) {
		inView('#Security')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(10) button, header .item:eq(3) button').addClass('active')
		    })
	}

	if( $('#Team').length ) {
		inView('#Team')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(11) button, header .item:eq(5) button').addClass('active')
		    })
	}

	if( $('#Reviews').length ) {
		inView('#Reviews')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(12) button, header .item:eq(7) button').addClass('active')
		    })
	}

	if( $('#anchor14').length ) {
		inView('#anchor14')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(13) button, header .item:eq(7) button').addClass('active')
		    })
	}

	if( $('#tariffs').length ) {
		inView('#tariffs')
		    .on('enter', function(el){
		    	$('.wrapp_navigation .item button, header .item button').removeClass('active')
		    	$('.wrapp_navigation .item:eq(14) button, header .item:eq(7) button').addClass('active')
		    })
	}


	// Моб. меню
	$('body').on('click', '.mob_menu_link', function(e) {
    	e.preventDefault()

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active')

			$('header').removeClass('show')

			$('body').removeClass('lock')

			$('.opet_tabs').removeClass('active')

	    	$('.tabs').fadeOut()

			$('.overlay_tabs').fadeOut()
		} else {
			$(this).addClass('active')

			$('header').addClass('show')

			$('body').addClass('lock')
		}
    })


    $('body').on('click', 'header .menu .item button', function() {
		$('.mob_menu_link').removeClass('active')

		$('header').removeClass('show')

		$('.mob_header').removeClass('active')

		$('body').removeClass('lock')
    })


	// Всплывающие окна
	$('.modal_link').click(function(e){
		e.preventDefault()

		$.fancybox.close()

		$.fancybox.open({
			src  : $(this).data('content'),
			type : 'inline',
			opts : {
				touch : false,
				speed : 300,
				backFocus : false,
				trapFocus : false,
				autoFocus : false,
				mobile : {
				    clickSlide: "close"
				}
			}
		})
	})


	// Увеличение картинки
	$('.fancy_img').fancybox({
		backFocus : false,
		loop: true,
		animationEffect: "fade",
		mobile : {
		    clickSlide: "close"
		}
	})

	// Маска ввода
	$('input[type=tel]').inputmask('+9 (999) 999-99-9999')
})

$(window).load(function(){
	// Шапка
	if( $(window).scrollTop() > 0 ) {
		$('.mob_header').addClass('fixed')
	} else{
		$('.mob_header').removeClass('fixed')
	}

	$(window).scroll(function(){
		if( $(window).scrollTop() > 0 ) {
			$('.mob_header').addClass('fixed')
		} else{
			$('.mob_header').removeClass('fixed')
		}
	})
})

$(window).load(function(){
	// Шапка
	if( $(window).scrollTop() > 0 ) {
		$('header').addClass('fixed')
	} else{
		$('header').removeClass('fixed')
	}

	$(window).scroll(function(){
		if( $(window).scrollTop() > 0 ) {
			$('header').addClass('fixed')
		} else{
			$('header').removeClass('fixed')
		}
	})
})

// Вспомогательные функции
function widthScroll() {
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)

    let scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return scrollWidth
}


var supportsCssVars = function() {
    var s = document.createElement('style'),
        support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}

function setHeight(className){
    let maxheight = 0

    className.each(function() {
    	let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
        	maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}

document.addEventListener('load', document.addEventListener('load', function(event) {
    $('body').on('click', '.scroll_lin', function(e) {
		// e.preventDefault()

		let href = $(this).data('anchor')

		if($(window).width() > 1024) {
			var offTop = 50
		}else{
			var offTop = $('.mob_header').innerHeight()
		}

		$('html, body').stop().animate({
			scrollTop: $(href).offset().top - offTop
		}, 2000)
	})
}));

const defaultSelect = () => {
	const element = document.querySelector('.eco');
 	const choices = new Choices(element, {
		searchEnabled: false,
	 });
}

defaultSelect();