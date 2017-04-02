$(document).ready(function(){
$('input').focus(function(){
$(this).css('outline-color', '#4d90fe');
});

$('.menu_square').hover(
function(){
$('.square').addClass('square_active');},
function(){
$('.square').removeClass('square_active');
});

$('.main_button').hover(
function(){
$(this).addClass('active');},
function(){
$(this).removeClass('active');
});

$('.menu_items').hover(
function(){
$(this).addClass('menu_items_active');},
function(){
$(this).removeClass('menu_items_active');
});
$('.menu').hide();

$('.menu_square').click(function(){
$('.menu').toggle();
});

/*$('.rot').hover(function(){
$(this).addClass('rotflip');
$('input').addClass('inpflip');},
if($('input').val()==0){
function(){
$(this).removeClass('rotflip');
$('input').removeClass('inpflip');}
});*/
});