$(function(){

	// Слайдер категорий
	if ($('.categories .slider').length) {
		new Swiper('.categories .slider', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			speed: 500,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			on:{
				init: function (swiper){
					setTimeout(function(){
						observer.observe()
					}, 1000)
				}
			}
		})
	}

	if ($('.modal .slider').length) {
		new Swiper('.modal .slider', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			speed: 500,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: false,
		})
	}

	// Партнеры
	if ($('.partners .slider').length) {
		new Swiper('.partners .slider', {
			spaceBetween: 10,
			slidesPerView: 2,
			loop: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			loopAdditionalSlides: 1,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 20,
					slidesPerView: 2
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 3
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 4
				},
				'1300': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on:{
				init: function (swiper){
					setTimeout(function(){
						observer.observe()
					}, 1000)
				}
			}
		})
	}

	// Отзывы
	if ($('.reviews .slider').length) {
		new Swiper('.reviews .slider', {
			spaceBetween: 10,
			slidesPerView: 1,
			loop: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 16,
					slidesPerView: 1
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 2
				},
				'1025': {
					spaceBetween: 25,
					slidesPerView: 2
				}
			},
			on:{
				init: function (swiper){
					setTimeout(function(){
						observer.observe()
					}, 1000)
				}
			}
		})
	}

	if ($('.reviews--escort .slider').length) {
		new Swiper('.reviews--escort .slider', {
			loop: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {

				'320': {
					spaceBetween: 20,
					slidesPerView: 1,
					loop: true,
					watchOverflow: true,
					watchSlidesVisibility: true,
					loopAdditionalSlides: 1,
					centeredSlides: true
				},

				'424': {
					spaceBetween: 0,
					slidesPerView: 1.3,
					loop: true,
					watchOverflow: true,
					watchSlidesVisibility: true,
					loopAdditionalSlides: 1,
					centeredSlides: true
				},


				'550': {
					spaceBetween: 0,
					slidesPerView: 2,
					loop: true,
					watchOverflow: true,
					watchSlidesVisibility: true,
					loopAdditionalSlides: 1,
					centeredSlides: true
				},



				'767': {
					spaceBetween: 60,
					slidesPerView: 2.7,
					loop: true,
					watchOverflow: true,
					watchSlidesVisibility: true,
					loopAdditionalSlides: 1,
					centeredSlides: true
				},

				'1000': {
					spaceBetween: 60,
					slidesPerView: 3,
					loop: true,
					watchOverflow: true,
					watchSlidesVisibility: true,
					loopAdditionalSlides: 1,
				},

				'1200': {
					spaceBetween: 60,
					slidesPerView: 4,
					loop: true,
					watchOverflow: true,
					watchSlidesVisibility: true,
					loopAdditionalSlides: 1,
				},
				'1439': {
					spaceBetween: 100,
					slidesPerView: 4,
					loop: true,
					watchOverflow: true,
					watchSlidesVisibility: true,
					loopAdditionalSlides: 1,
				},
				
				'1800': {
					spaceBetween: 120,
					slidesPerView: 4,
					loop: true,
					watchOverflow: true,
					watchSlidesVisibility: true,
					loopAdditionalSlides: 1,
				},
			},
			on:{
				init: function (swiper){
					setTimeout(function(){
						observer.observe()
					}, 1000)
				}
			}
		})
	}

	

    // Валидация
    $('body').on('submit', '.form.ajax_submit', function(e) {
        e.preventDefault()

        var thisForm = $(this)

        let fieldTel = $(this).find('input[name="phone"]').val()
        let fieldEmail = $(this).find('input[name="email"]').val()

        let unformattedDate = Inputmask.unmask(fieldTel, { alias: "+799 (999) 999-99-99'"});

        let lenghtVal = unformattedDate.length

        if (lenghtVal < 10) {
            thisForm.find('input[name="phone"]').addClass('error')

            if (!thisForm.find('input[name="phone"]').closest('.line_form').find('.error_text').length) {
            	thisForm.find('input[name="phone"]').closest('.line_form').append('<div class="error_text">Заполните поле</div>')
            }
        } else if (!validateEmail(fieldEmail) && thisForm.find('input[name="email"]').length && fieldEmail.length > 0) {
            thisForm.find('input[name="email"]').addClass('error')
            if (!thisForm.find('input[name="email"]').closest('.line_form').find('.error_text').length) {
            	thisForm.find('input[name="email"]').closest('.line_form').append('<div class="error_text">Введите правильный email</div>')
            }
        } else{
            thisForm.find('input[name="phone"]').removeClass('error')
            thisForm.find('input[name="email"]').removeClass('error')
            thisForm.find('input[name="phone"]').closest('.line_form').find('.error_text').remove()
            thisForm.find('input[name="email"]').closest('.line_form').find('.error_text').remove()

            $.fancybox.close()

            $.fancybox.open({
                src  : $('#success_modal'),
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

            $("form").trigger('reset');
        }
    })

    $('input[name="phone"]').keyup(function(){
        checkInput(this)
    });

    $('input[name="email"]').keyup(function(){
    	let thisEl = $(this)

        if (validateEmail(thisEl.val())) {
        	thisEl.removeClass('error')
    		thisEl.closest('.line_form').find('.error_text').remove()
        }
    });
})

$(window).load(function(){
	$width_page = $(window).width()


	if ( $(window).width() > 1024 ) {
		setTimeout(function(){
			// Анимации
			AOS.init({
				offset: 150,
				delay: 100,
				duration: 1400,
				once: true
			})
		}, 300)
	}

	//Перекрацивоени шапке при достижении черных или белых боков
	$('.main > section').each(function(){
	 	if($(this).offset().top-$(window).height()/2 < $(window).scrollTop()){
	 		if ($(this).hasClass('sector_white')) {
	 			$('.wrapp_navigation').addClass('navBlack')
				$('.wrapp_navigation').removeClass('navWhite')
	 		}

	 		if ($(this).hasClass('sector_black')) {
	 			$('.wrapp_navigation').addClass('navWhite')
				$('.wrapp_navigation').removeClass('navBlack')
	 		}
	 	}
	})


	$(window).scroll(function(){

		//Перекрацивоени шапке при достижении черных или белых боков
		$('.main > section').each(function(){
		 	if($(this).offset().top-$(window).height()/2 < $(window).scrollTop()){
		 		if ($(this).hasClass('sector_white')) {
		 			$('.wrapp_navigation').addClass('navBlack')
					$('.wrapp_navigation').removeClass('navWhite')
		 		}

		 		if ($(this).hasClass('sector_black')) {
		 			$('.wrapp_navigation').addClass('navWhite')
					$('.wrapp_navigation').removeClass('navBlack')
		 		}
		 	}
		})

	})

	// Команда
	if ($('.team .slider').length) {
		new Swiper('.team .slider', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			loopAdditionalSlides: 1,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 15,
					slidesPerView: 2
				},
				'768': {
					spaceBetween: 16,
					slidesPerView: 2
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 4
				},
				'1300': {
					spaceBetween: 20,
					slidesPerView: 4
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.work_exp, .position, .name').height('auto')

					setTimeout(function(){
						setHeight( $(swiper.$el).find('.work_exp') )
						setHeight( $(swiper.$el).find('.position') )
						setHeight( $(swiper.$el).find('.name') )
					}, 200)

					setTimeout(function(){
						observer.observe()
					}, 1000)

					setTimeout(function(){
						let heightImg = $(swiper.$el).find('.wrapp_photo').innerHeight()

						$(swiper.$el).find('.slider-button-next, .slider-button-prev').css('top', heightImg/2)


					}, 100)


				},
				resize: function (swiper) {
					if ( $width_page < $(window).width() || $width_page > $(window).width() ) {
						$(swiper.$el).find('.work_exp, .position, .name').height('auto')

						setTimeout(function(){
							setHeight( $(swiper.$el).find('.work_exp') )
							setHeight( $(swiper.$el).find('.position') )
							setHeight( $(swiper.$el).find('.name') )
						}, 200)


						setTimeout(function(){
							let heightImg = $(swiper.$el).find('.wrapp_photo').innerHeight()

							$(swiper.$el).find('.slider-button-next, .slider-button-prev').css('top', heightImg/2)
						}, 100)
					}
				}
			}
		})
	}

	// Услуги
	if ($('.services .slider').length) {
		new Swiper('.services .slider', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: false,
			watchOverflow: true,
			watchSlidesVisibility: true,
			loopAdditionalSlides: 1,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1,
				},
				// '424': {
				// 	spaceBetween: 20,
				// 	slidesPerView: 3
				// },
				'480': {
					spaceBetween: 20,
					slidesPerView: 2
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 2.5,
					loopAdditionalSlides: 1
				},
				'1025': {
					spaceBetween: 20,
					slidesPerView: 3
				},
				'1200': {
					spaceBetween: 30,
					slidesPerView: 3
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.name, .desc').height('auto')

					setTimeout(function(){
						setHeight( $(swiper.$el).find('.name') )
						setHeight( $(swiper.$el).find('.desc') )
					}, 200)

					setTimeout(function(){
						observer.observe()
					}, 1000)
				},
				resize: function (swiper) {
					if ( $width_page < $(window).width() || $width_page > $(window).width() ) {

						$(swiper.$el).find('.name, .desc').height('auto')

						setTimeout(function(){
							setHeight( $(swiper.$el).find('.name') )
							setHeight( $(swiper.$el).find('.desc') )
						}, 200)
					}
				}
			}
		})
	}
	

	// Выравнивание элементов в сетке
	$('.advantages .grid').each(function() {
		advantagesHeight($(this), parseInt($(this).css('--advantages_count')))
	})

	if ($('.car_park .wrapp_grid').length) {
		slider()
	}

	if ($('.advantages .wrapp_grid').length) {
		slider2()
	}

	if ($('.section_steps .wrapp_grid').length) {
		slider3()
	}

	if ($('.views .wrapp_grid').length) {
		slider4()
	}

	if ($('.tariffs .wrapp_grid').length) {
		slider5()
	}

	if ($('.choice .wrapp_grid').length) {
		slider6()
	}

	if ($('.way .wrapp_grid').length) {
		slider7()
	}



})


$(window).resize(function () {
	// if ( $width_page < $(window).width() || $width_page > $(window).width() ) {
	// 	setTimeout(function(){
	// 		$width_page = $(window).width()
	// 	},10)

	// 	// Выравнивание элементов в сетке
	// 	$('.advantages .grid').each(function() {
	// 		advantagesHeight($(this), parseInt($(this).css('--advantages_count')))
	// 	})
	// }

	if ($('.car_park .wrapp_grid').length) {
		slider()
	}

	if ($('.advantages .wrapp_grid').length) {
		slider2()
	}

	if ($('.section_steps .wrapp_grid').length) {
		slider3()
	}

	if ($('.views .wrapp_grid').length) {
		slider4()
	}

	if ($('.tariffs .wrapp_grid').length) {
		slider5()
	}

	if ($('.choice .wrapp_grid').length) {
		slider6()
	}

	if ($('.way .wrapp_grid').length) {
		slider7()
	}


})

// Выравнивание
function advantagesHeight(context, step) {
	let start    = 0
	let finish   = step
	let advantages = context.find('.item')

	advantages.find('.name').height('auto')

	for (let i = 0; i < advantages.length; i++) {
		setHeight(advantages.slice(start, finish).find('.name'))

		start  = start + step
		finish = finish + step
	}
}

// Проверка поля email
function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

// Проверка поля телефона
function checkInput(el){
    let fieldTel = $(el).val()

    let unformattedDate = Inputmask.unmask(fieldTel, { alias: "+799 (999) 999-99-99'"});

    let lenghtVal = unformattedDate.length

    if (!lenghtVal < 10) {
        $(el).removeClass('error')
    	$(el).closest('.line_form').find('.error_text').remove()
    }
}

function slider(){
	if ( $(window).width() < 769 && !$('.car_park .wrapp_grid').hasClass('swiper-container-initialized') ) {
		$('.car_park .wrapp_grid').addClass('swiper-container')

		$('.car_park .wrapp_grid .grid').addClass('swiper-wrapper').removeClass('grid flex')

		$('.car_park .wrapp_grid .item').addClass('swiper-slide')

		slidersCarpark = new Swiper('.car_park .wrapp_grid', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 20,
					slidesPerView: 2
				}
			},
			on: {
				init: function (swiper){
					setTimeout(function(){
						observer.observe()
					}, 1000)
				}
			}
		})
	} else if ( $(window).width() > 767 && $('.car_park .wrapp_grid').hasClass('swiper-container-initialized') ) {

		
		if("destroy" in slidersCarpark) {
			slidersCarpark.destroy(true, true)
			$('.car_park .wrapp_grid').removeClass('swiper-container')

			$('.car_park .wrapp_grid .swiper-wrapper').addClass('grid flex').removeClass('swiper-wrapper')

			$('.car_park .wrapp_grid .item').removeClass('swiper-slide')
		}
		
	}
}


function slider2(){
	if ( $(window).width() < 769 && !$('.advantages .wrapp_grid').hasClass('swiper-container-initialized') ) {
		$('.advantages .wrapp_grid').addClass('swiper-container')

		$('.advantages .wrapp_grid .grid').addClass('swiper-wrapper').removeClass('grid flex')

		$('.advantages .wrapp_grid .item').addClass('swiper-slide')

		slidersAdvantages = new Swiper('.advantages .wrapp_grid', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 20,
					slidesPerView: 2
				}
			},
			on: {
				init: function (swiper){
					setTimeout(function(){
						observer.observe()
					}, 1000)
				}
			}
		})
	} else if ( $(window).width() > 767 && $('.advantages .wrapp_grid').hasClass('swiper-container-initialized') ) {
		slidersAdvantages.destroy(true, true)

		$('.advantages .wrapp_grid').removeClass('swiper-container')

		$('.advantages .wrapp_grid .swiper-wrapper').addClass('grid flex').removeClass('swiper-wrapper')

		$('.advantages .wrapp_grid .item').removeClass('swiper-slide')
	}
}

function slider3(){
	if ( $(window).width() < 769 && !$('.section_steps .wrapp_grid').hasClass('swiper-container-initialized') ) {
		$('.section_steps .wrapp_grid').addClass('swiper-container')

		$('.section_steps .wrapp_grid .grid').addClass('swiper-wrapper').removeClass('grid flex')

		$('.section_steps .wrapp_grid .item').addClass('swiper-slide')

		sliderSteps = new Swiper('.section_steps .wrapp_grid', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 20,
					slidesPerView: 2
				}
			},
			on: {
				init: function (swiper){
					setTimeout(function(){
						observer.observe()
					}, 1000)
				}
			}
		})
	} else if ( $(window).width() > 767 && $('.section_steps .wrapp_grid').hasClass('swiper-container-initialized') ) {
		if("destroy" in sliderSteps) {
			sliderSteps.destroy(true, true)
			$('.section_steps .wrapp_grid').removeClass('swiper-container')

			$('.section_steps .wrapp_grid .swiper-wrapper').addClass('grid flex').removeClass('swiper-wrapper')

			$('.section_steps .wrapp_grid .item').removeClass('swiper-slide')
		}

		
	}
}


function slider4(){
	if ( $(window).width() < 769 && !$('.views .wrapp_grid').hasClass('swiper-container-initialized') ) {
		$('.views .wrapp_grid').addClass('swiper-container')

		$('.views .wrapp_grid .grid').addClass('swiper-wrapper').removeClass('grid flex')

		$('.views .wrapp_grid .item').addClass('swiper-slide')

		sliderSteps = new Swiper('.views .wrapp_grid', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 20,
					slidesPerView: 2
				}
			},
			on: {
				init: function (swiper){
					setTimeout(function(){
						observer.observe()
					}, 1000)
				}
			}
		})
	} else if ( $(window).width() > 767 && $('.views .wrapp_grid').hasClass('swiper-container-initialized') ) {
		sliderSteps.destroy(true, true)

		$('.views .wrapp_grid').removeClass('swiper-container')

		$('.views .wrapp_grid .swiper-wrapper').addClass('grid flex').removeClass('swiper-wrapper')

		$('.views .wrapp_grid .item').removeClass('swiper-slide')
	}
}

function slider5(){
	if ( $(window).width() < 769 && !$('.tariffs .wrapp_grid').hasClass('swiper-container-initialized') ) {
		$('.tariffs .wrapp_grid').addClass('swiper-container')

		$('.tariffs .wrapp_grid .grid').addClass('swiper-wrapper').removeClass('grid flex')

		$('.tariffs .wrapp_grid .item').addClass('swiper-slide')

		sliderTariffs = new Swiper('.tariffs .wrapp_grid', {
			spaceBetween: 0,
			slidesPerView: 1.2,
			slidesPerColumn:3,
			autoHeight: false,

			breakpoints: {
				'320': {
					spaceBetween: 30,
					slidesPerView: 1,
					slidesPerColumn:3,
					autoHeight: false,
				},


				'600': {
					spaceBetween: 30,
					slidesPerView: 1,
					slidesPerColumn:3,
					autoHeight: false,
				},

				'680': {
					spaceBetween: 20,
					slidesPerView: 1,
					slidesPerColumn:3,
					autoHeight: false,
				},

			},

			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			}
		})
	} else if ( $(window).width() > 767 && $('.tariffs .wrapp_grid').hasClass('swiper-container-initialized') ) {
		sliderSteps.destroy(true, true)

		$('.tariffs .wrapp_grid').removeClass('swiper-container')

		$('.tariffs .wrapp_grid .swiper-wrapper').addClass('grid flex').removeClass('swiper-wrapper')

		$('.tariffs .wrapp_grid .item').removeClass('swiper-slide')
	}
}

function slider6(){
	if ( $(window).width() < 1025 && !$('.choice .wrapp_grid').hasClass('swiper-container-initialized') ) {
		$('.choice .wrapp_grid').addClass('swiper-container')

		$('.choice .wrapp_grid .grid').addClass('swiper-wrapper').removeClass('grid flex')

		$('.choice .wrapp_grid .item').addClass('swiper-slide')

		sliderChoice = new Swiper('.choice .wrapp_grid', {
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn:3,
			autoHeight: false,
			centeredSlides: true,

			breakpoints: {
				'320': {
					spaceBetween: 30,
					slidesPerView: 1,
					slidesPerColumn:3,
					autoHeight: false
				},

				'600': {
					spaceBetween: 20,
					slidesPerView: 1,
					slidesPerColumn:3,
					autoHeight: false
				},

				'767': {
					spaceBetween: 20,
					slidesPerView: 1,
					slidesPerColumn:3,
					autoHeight: false
				}
			},

			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			}
			
			
		})
	} 
}

function slider7(){
	if ( $(window).width() < 1025 && !$('.way .wrapp_grid').hasClass('swiper-container-initialized') ) {
		$('.way .wrapp_grid').addClass('swiper-container')

		$('.way .wrapp_grid .grid').addClass('swiper-wrapper').removeClass('grid flex')

		$('.way .wrapp_grid .item').addClass('swiper-slide')

		sliderSteps = new Swiper('.way .wrapp_grid', {
			spaceBetween: 0,
			slidesPerView: 3,
			loop: true,

			
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1,
					centeredSlides: true
				},
				'340': {
					slidesPerView: 1.1,
					centeredSlides: true
				},

				'424': {
					slidesPerView: 1.2,
					centeredSlides: true
				},
				'480': {

					slidesPerView: 1.5,
					centeredSlides: true
				},

				'550': {

					slidesPerView: 1.7,
					centeredSlides: true
				},

				'720': {

					slidesPerView: 2,
					centeredSlides: true
				},
				'767': {

					slidesPerView: 2.2,
					centeredSlides: true
				},
				'900': {

					slidesPerView: 2.5,
					centeredSlides: true
				},
				'1023': {
					slidesPerView: 2.6,
				}


				
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true
			}
			
			
		})
	} else if ( $(window).width() > 1023 && $('.way .wrapp_grid').hasClass('swiper-container-initialized') ) {
		sliderSteps.destroy(true, true)

		$('.way .wrapp_grid').removeClass('swiper-container')

		$('.way .wrapp_grid .swiper-wrapper').addClass('grid flex').removeClass('swiper-wrapper')

		$('.way .wrapp_grid .item').removeClass('swiper-slide')
	
	} 
}

const element = document.querySelector('.eco');
 	const choices = new Choices(element, {
		searchEnabled: false,
	 });


