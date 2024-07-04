$(document).ready(function() {
    // banner background image src
    $('.isBGImg').each(function() {
        var imgURL = $(this).find('img').attr('src');
        $(this).css('background-image', 'url(' + imgURL + ')');
    });
});

$(function() {
    initScrollToTop();
});

function initScrollToTop() {
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop(),
            docHeight = $(document).height(),
            winHeight = $(window).height(),
            scrollPercent = (scrollTop) / (docHeight - winHeight),
            scrollPercentRounded = Math.round(scrollPercent * 100);
        if (scrollPercentRounded > 50) {
            $('.topTop').css({
                opacity: 1,
                transform: 'translateY(-50%)'
            });
        } else {
            $('.topTop').css({
                opacity: 0,
                transform: 'translateY(50%)'
            });
        }
    });

    // Click event to scroll to top
    $('.topTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
}


// category section
// Check active classes
var checkClass = function() {
    if ($('.content-item').hasClass('hide')) {
        $('.content-item').removeClass('hide');
    }
};

// Category filters
$('.trending').click(function() {
    checkClass();
    $('.content-item:not(.trending)').toggleClass('hide');
});
$('.new-on-disney').click(function() {
    checkClass();
    $('.content-item:not(.new-on-disney)').toggleClass('hide');
});
$('.coming-soon').click(function() {
    checkClass();
    $('.content-item:not(.coming-soon)').toggleClass('hide');
});

// Active tag
$('.button-cat').click(function() {
    $('.button-cat').removeClass('active');
    $(this).addClass('active');
});

// Trigger click on active button-cat to show content initially
$(document).ready(function() {
    $('.button-cat.active').click();
});


// swicth button
'use strict';

var switchButton 			= document.querySelector('.switch-button');
var switchBtnRight 			= document.querySelector('.switch-button-case.right');
var switchBtnLeft 			= document.querySelector('.switch-button-case.left');
var activeSwitch 			= document.querySelector('.span-active');

function switchLeft(){
	switchBtnRight.classList.remove('active-case');
	switchBtnLeft.classList.add('active-case');
	activeSwitch.style.left 						= '2%';
}

function switchRight(){
	switchBtnRight.classList.add('active-case');
	switchBtnLeft.classList.remove('active-case');
	activeSwitch.style.left 						= '50%';
}

switchBtnLeft.addEventListener('click', function(){
	switchLeft();
}, false);

switchBtnRight.addEventListener('click', function(){
	switchRight();
}, false);



// category section