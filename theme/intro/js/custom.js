$(window).load(function() {
	'use strict';
	$(".pageloader").delay(1000).fadeOut("slow");
	InitcssFix();
});
jQuery( document ).ready(function($) {
	'use strict';
	InitcssFix();
	
	/* ===================
	Animated Items
	=================== */	
	$('.animated').appear(function() {
		var elem = $(this);
		var animation = elem.data('animation');
		if ( !elem.hasClass('visible') ) {
			var animationDelay = elem.data('animation-delay');
			if ( animationDelay ) {
	
				setTimeout(function(){
					elem.addClass( animation + " visible" );
				}, animationDelay);
	
			} else {
				elem.addClass( animation + " visible" );
			}
		}
	});
	
	/* =============================
	Carousel Slider
	============================= */	
	$("#app-screenshot").owlCarousel({
		items : 3,
		lazyLoad : true,
		autoPlay: false,
		navigation : true,
		navigationText: ['<i class="fa fa-chevron-left color-grey"></i>','<i class="fa fa-chevron-right color-grey"></i>'],		
		pagination: false,
		itemsCustom : false,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [980, 3],
		itemsTablet : [768, 2],
		itemsTabletSmall : false,
		itemsMobile : [479, 1]
	});
	
	/* =============================
	Services Carousel Slider
	============================= */	
	$("#awesome-services").owlCarousel({
		items : 3,
		lazyLoad : true,
		autoPlay: true,
		navigation : false,
		pagination: false,
		itemsCustom : false,
		itemsDesktop : [1199, 3],
		itemsDesktopSmall : [980, 3],
		itemsTablet : [768, 2],
		itemsTabletSmall : false,
		itemsMobile : [480, 1]
	});
	
	/* =============================
	Banner Carousel Slider
	============================= */
	$("#banner-slider").owlCarousel({
		singleItem: true,
		lazyLoad: true,
		autoPlay: true,
		navigation: false,		
		pagination: false
	});
	
	/* ===================
	Scroll Navigation
	=================== */	
	$('.scroll').bind('click', function(event) {
		var $anchor = $(this);		
		
		$('html, body').stop().animate({					
			scrollTop : $($anchor.attr('href')).offset().top  + 2 + "px"
		}, 1200, 'easeInOutExpo');

		event.preventDefault();
		return false;
	});
	
	// Menus hide after click on mobile devices
	$('.nav li a').click(function () {
		 $('.navbar-collapse').removeClass('in');
		 return false;
	});
	
	/* ===================
	Fixed Menu on Scroll
	=================== */
	$("#sticky-menu").sticky({topSpacing:0});
	
	/* =============================
	Active Scrollspy Navigation
	============================= */	
	$('body').scrollspy({ 
	  target: '#topnav',
	  offset: 95
 	});
	
	/* =============================
	Contact Form Validation
	============================= */			
	$('#contactform').bootstrapValidator({
        message: '',
        feedbackIcons: {
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
        },
        fields: {            
			contact_name: {
                validators: {
                    notEmpty: {
                        message: ''
                    }
                }
            },
			contact_email: {
                validators: {
                    notEmpty: {
                        message: ''
                    },
                    emailAddress: {
                        message: ''
                    }
                }
            },			
			contact_message: {
                validators: {
                    notEmpty: {
                        message: ''
                    }                    
                }
            }
        },
		submitHandler: function(validator, form, submitButton) {
						
			var data = $('#contactform').serialize();
			
			$.ajax({
					type: "POST",
					url: "process.php",					
					data: $('#contactform').serialize(),
					success: function(msg){						
						$('.gk-form-message').html(msg);
						$('.gk-form-message').show();
						submitButton.removeAttr("disabled");
						resetForm($('#contactform'));						
					},
					error: function(msg){						
						$('.gk-form-message').html(msg);
						$('.gk-form-message').show();
						submitButton.removeAttr("disabled");
						resetForm($('#contactform'));
					}
             });
			 
			return false;
        },
    });
		$('#subscribe').bootstrapValidator({
        message: '',
        feedbackIcons: {
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
        },
        fields: {            
			subscribe_email: {
                validators: {
                    notEmpty: {
                        message: ''
                    }
                }
            }			
        },
		submitHandler: function(validator, form, submitButton) {
						
			var data = $('#subscribe').serialize();
			
			$.ajax({
					type: "POST",
					url: "subscribe.php",					
					data: $('#subscribe').serialize(),
					success: function(msg){						
						$('.gk-form-message-subscribe').html(msg);
						$('.gk-form-message-subscribe').show();
						submitButton.removeAttr("disabled");
						resetForm($('#subscribe'));						
					},
					error: function(msg){						
						$('.gk-form-message-subscribe').html(msg);
						$('.gk-form-message-subscribe').show();
						submitButton.removeAttr("disabled");
						resetForm($('#subscribe'));
					}
             });
			 
			return false;
        },
    });
	function resetForm($form) {
		$form.find('input:text, input:password, input, input:file, select, textarea').val('');
		$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');		
		$form.find('input:text, input:password, input, input:file, select, textarea, input:radio, input:checkbox').parent().find('.form-control-feedback').hide();
	}
	
	/* =============================
	Color Panel
	============================= */	
	// Theme Panel Open/Close
	$( "#theme-panel .panel-button" ).click(function(){
		$( "#theme-panel" ).toggleClass( "close-theme-panel", "open-theme-panel", 1000 );
		$( "#theme-panel" ).toggleClass( "open-theme-panel", "close-theme-panel", 1000 );
		return false;
	});
	
	/* =============================
	Count Section
	============================= */	
	$(".count-number").appear(function(){
		$(this).each(function(){
			var datacount = $(this).attr('data-count');
			$(this).find('.counter').delay(6000).countTo({
				from: 10,
				to: datacount,
				speed: 3000,
				refreshInterval: 50,
			});
		});
	});
	
	/* ===================
	Video Script
	=================== */
	//$(".player").mb_YTPlayer();
		
});
$(window).resize(function() {
	'use strict';
	InitcssFix();
});

/* ===============================
 CSS Fix for Background Shapes
=============================== */
function InitcssFix() {	
	var width = $(window).width();
	
	if( width >= 1480 && width < 1600 ) {
		$('.wrapper-class').addClass('after-1500');
		$('.wrapper-class').removeClass('after-1600');
	} else if( width >= 1600 && width < 1800 ) {
		$('.wrapper-class').addClass('after-1600');
		$('.wrapper-class').removeClass('after-1500');
		$('.wrapper-class').removeClass('after-2000');
	} else if( width >= 1800 && width < 2000 ) {
		$('.wrapper-class').addClass('after-1800');
		$('.wrapper-class').removeClass('after-1600');
		$('.wrapper-class').removeClass('after-2000');
	} else if( width >= 2000 && width < 2600 ) {
		$('.wrapper-class').addClass('after-2000');
		$('.wrapper-class').removeClass('after-1600');
		$('.wrapper-class').removeClass('after-1800');
		$('.wrapper-class').removeClass('after-2600');
	} else if( width >= 2600 && width < 3000 ) {
		$('.wrapper-class').addClass('after-2600');
		$('.wrapper-class').removeClass('after-2000');
		$('.wrapper-class').removeClass('after-3000');
	} else if( width >= 3000 ) {
		$('.wrapper-class').addClass('after-3000');
		$('.wrapper-class').removeClass('after-2600');
	} else if( width <= 1480 ) {
		$('.wrapper-class').removeClass('after-1500');		
	}
	
}


function sendContactUs() {
    var email = $('#txtEmailCu').val();
    var name = $('#txtNameCu').val();;
    var msg = $('#txtMsgCu').val();;
    if (email == '') {
        //alert('ایمیل را وارد بفرمایید');
        $('#txtEmail').focus();
        return;
    }
    $('.pageloader').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/pages/WebMethods.aspx/SendContactUs",
        data: "{'email':'" + email + "','name':'" + name + "','msg':'" + msg + "'}",
        dataType: "json",
        success: function (Result) {
            $('.pageloader').hide();
            if (Result.d == 0) {
                $('#cuMsg').text('خطایی در ارسال پیام رخ داده است!');
            }
            if (Result.d == 1) {
                $('#cuMsg').text('پیام شما با موفقیت ارسال شد. از شما متشکریم.');
                $('#cuMsg').focus();
                $('#wrpContact').hide();
                $('#txtEmail').val('');
            }
        },
        error: function (Result) {
            $('.pageloader').hide();
            $('#nlMsg').text('خطا در ارسال پیام!!! مجددا سعی بفرمایید');
        }
    });
}

function addNewsLetter() {
    var email = $('#txtEmail').val();
    var name = '';
    var tel = '';
    if (email == '') {
        //alert('ایمیل را وارد بفرمایید');
        $('#txtEmail').focus();
        return;
    }
    $('.pageloader').show();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/pages/WebMethods.aspx/AddNewsLetter",
        data: "{'email':'" + email + "','name':'" + name + "','tel':'" + tel + "'}",
        dataType: "json",
        success: function (Result) {
            $('.pageloader').hide();
            if (Result.d == 0) {
                $('#nlMsg').text('ایمیل معتبر نمی باشد!');
            }
            if (Result.d == 1) {
                $('#nlMsg').text('ثبت نام شما با موفقیت انجام شد');
                $('#nlMsg2').text('از شما متشکریم');
                $('#wrpNl').hide();
                $('#txtEmail').val('');
            }
        },
        error: function (Result) {
            $('.pageloader').hide();
            $('#nlMsg').text('خطا در ثبت نام!!! مجددا سعی بفرمایید');
        }
    });
}


function recoveryPassword() {
    var userName = $('#txtUsernameForget').val();
    if (userName == '' || userName == undefined) {
        $('#forgetMsg').html('شماره همراه را وارد بفرمایید!')
        return;
    }
    $('.pageloader').show();
    $.ajax(
        {
            type: 'POST',
            url: '/pages/WebMethods.aspx/RecoveryPassword',
            data: "{'userName':'" + userName + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (result) {
                $('#forgetMsg').html(result.d)
                if (result.d = 'رمز عبور جدیدی به شماره همراه شما ارسال شد.') {
                    $('#btnForget').hide();
                }
                $('.pageloader').hide();

            }, error: function () {
                $('.pageloader').hide();
                $('#forgetMsg').html('خطا در بارگذاری ');
            }
        });
}


function getLogin() {
    $('#txtUsername').removeClass('invalid');
    $('#txtPass').removeClass('invalid');
    var userName = $('#txtUsername').val();
    if (userName == '' || userName == undefined) {
        $('#txtUsername').addClass('invalid');
        $('#txtUsername').focus();
        return;
    }
    var pass = $('#txtPass').val();
    if (pass == '' || pass == undefined) {
        $('#txtPass').addClass('invalid');
        $('#txtPass').focus();
        return;
    }
    var remember = $('#chkRem').prop('checked');
    $('.pageloader').show();
    $.ajax(
        {
            type: 'POST',
            url: '/pages/WebMethods.aspx/GetLogin',
            data: "{'userName':'" + userName + "','pass':'" + pass + "','remember':'" + remember + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (result) {
                if (result.d == "1") {
                    window.location.href = "/club/profile.html";
                    $('#loginMsg').html("در حال هدایت به صفحه پروفایل ...")
                    return;
                }
                if (result.d == "Customer") {
                    window.location.href = "/customer/profile.html";
                    $('#loginMsg').html("در حال هدایت به صفحه پروفایل ...")
                    return;
                }
                $('#loginMsg').html(result.d)
                $('.pageloader').hide();

            }, error: function () {
                $('.pageloader').hide();
                $('#loginMsg').html('خطا در بارگذاری ');
            }
        });
}