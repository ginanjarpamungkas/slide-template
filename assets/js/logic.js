var myElement = document.getElementById('me');
var mc = new Hammer(myElement);
var max = $('.slide').length;
var prev = 0;
var now = 1;
var next = 2;
// listen to events...
mc.on("swipeleft swiperight tap", function(ev) {
    if (now != max) {
        if (ev.type == 'swipeleft') {
            $('#right').click()
        }
    }
    if (now != 1) {
        if (ev.type == 'swiperight') {
            $('#left').click()
        }
    }
});
$(document).ready(function() {
    $('.left').css('display','none');
});

$(function() {
    $('#caption-btn').click(function() {
        var id = $('#btn-caption').data('id');
        if (id == 1) {
            $('#caption-desc').attr('class','show');
            $('#btn-caption').html('CAPTION <i class="fa fa-times-circle"></i>')
            $('#btn-caption').data('id','0')
        } else {
            $('#caption-desc').attr('class','hide');
            $('#btn-caption').html('CAPTION <i class="fa fa-plus-circle"></i>')
            $('#btn-caption').data('id','1')
        }
    })
    $('#mulai').click(function() {
        $('#slide'+now).attr('class','slide hide-left');
        $('#slide'+next).attr('class','slide show-right');
        $('.left').css('display','block');
        now = now+1;
        next = next+1;
        prev = prev+1;

        var role = $('#slide'+now).data('role');
        var roleSplit = role.split("|");
        var thumbnail = $('#slide'+now).data('thumbnail');
        $('#caption-desc').html($('.caption'+thumbnail).html());

        for (let ind = 0; ind < roleSplit.length; ind++) {
            switch (roleSplit[ind]) {
                case 'show-caption':
                    $('#caption').attr('class','caption show');
                    $('#caption-desc').fadeIn('slow');
                break
                case 'hide-caption':
                    $('#caption').attr('class','caption hide');
                    $('#caption-desc').hide();
                break
                case 'change-images':
                    $('img[name="thumbnail'+(thumbnail-1)+'"]').attr('id','hide-left');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','show-right');
                break;
                case 'right-change-images':
                    $('img[name="thumbnail'+(thumbnail-1)+'"]').attr('id','hide-left');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','show-right');
                break;
                case 'zoomIn-images':
                    $('img[name="thumbnail'+thumbnail+'"]').attr('class','thumbnail zoomIn');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','');
                break;
                case 'zoomOut-images':
                    $('img[name="thumbnail'+thumbnail+'"]').attr('class','thumbnail zoomOut');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','');
                break;
                case 'no-background':
                    $('#slide'+now).css('background-color','unset')
                break;
                default:
                break;
            }
        }
    })

    $('#left').click(function() {
        $('#slide'+now).attr('class','slide hide-right');
        $('#slide'+prev).attr('class','slide show-left');
        $('.right').css('display','block');
        now = now-1;
        next = next-1;
        prev = prev-1;

        if (now == 1) {$('.left').css('display','none');}
        var role = $('#slide'+now).data('role');
        var roleSplit = role.split("|");
        var thumbnail = $('#slide'+now).data('thumbnail');
        var thumbnail = $('#slide'+now).data('thumbnail');
        $('#caption-desc').html($('.caption'+thumbnail).html());

        for (let ind = 0; ind < roleSplit.length; ind++) {
            switch (roleSplit[ind]) {
                case 'show-caption':
                    $('#caption').attr('class','caption show');
                    $('#caption-desc').fadeIn('slow');
                break
                case 'hide-caption':
                    $('#caption').attr('class','caption hide');
                    $('#caption-desc').hide();
                break
                case 'change-images':
                    $('img[name="thumbnail'+(thumbnail+1)+'"]').attr('id','hide-right');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','show-left');
                break;
                case 'left-change-images':
                    $('img[name="thumbnail'+(thumbnail+1)+'"]').attr('id','hide-right');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','show-left');
                break;
                case 'zoomIn-images':
                    $('img[name="thumbnail'+thumbnail+'"]').attr('class','thumbnail zoomIn');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','');
                break;
                case 'zoomOut-images':
                    $('img[name="thumbnail'+thumbnail+'"]').attr('class','thumbnail zoomOut');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','');
                break;
                case 'no-background':
                    $('#slide'+now).css('background-color','unset')
                break;
                default:
                    console.log('gagal');
                break;
            }
        }
    })

    $('#right').click(function() {
        $('#slide'+now).attr('class','slide hide-left');
        $('#slide'+next).attr('class','slide show-right');
        $('.left').css('display','block');
        now = now+1;
        next = next+1;
        prev = prev+1;

        if (now == max) {$('.right').css('display','none');}
        var role = $('#slide'+now).data('role');
        var roleSplit = role.split("|");
        var thumbnail = $('#slide'+now).data('thumbnail');
        var thumbnail = $('#slide'+now).data('thumbnail');
        $('#caption-desc').html($('.caption'+thumbnail).html());

        for (let ind = 0; ind < roleSplit.length; ind++) {
            switch (roleSplit[ind]) {
                case 'show-caption':
                    $('#caption').attr('class','caption show');
                    $('#caption-desc').fadeIn('slow');
                break
                case 'hide-caption':
                    $('#caption-desc').hide();
                    $('#caption').attr('class','caption hide');
                break
                case 'change-images':
                    $('img[name="thumbnail'+(thumbnail-1)+'"]').attr('id','hide-left');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','show-right');
                break;
                case 'right-change-images':
                    $('img[name="thumbnail'+(thumbnail-1)+'"]').attr('id','hide-left');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','show-right');
                break;
                case 'zoomIn-images':
                    $('img[name="thumbnail'+thumbnail+'"]').attr('class','thumbnail zoomIn');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','');
                break;
                case 'zoomOut-images':
                    $('img[name="thumbnail'+thumbnail+'"]').attr('class','thumbnail zoomOut');
                    $('img[name="thumbnail'+thumbnail+'"]').attr('id','');
                break;
                case 'no-background':
                    $('#slide'+now).css('background-color','unset')
                break;
                default:
                    console.log('gagal');
                break;
            }
        }
    })
});
// // start click
// if (role == 'caption') {
//     $('.thumbnail-resize.active').attr('class','thumbnail');
//     $('#caption').attr('class','caption show');
// }else if(role == 'caption-imageResize'){
//     $('#slide'+now).css('background-color','unset')
//     $('#caption').attr('class','caption show');
//     $('.thumbnail').attr('class','thumbnail-resize hide');
//     $('#thumbnail'+thumbnail).attr('class','thumbnail-resize active');
// }else if(role == 'caption-imageChange'){
//     $('#slide'+now).css('background-color','unset')
//     $('#caption').attr('class','caption show');
//     $('.thumbnail').attr('class','thumbnail-resize hide');
//     $('#thumbnail'+imgNow).attr('class','thumbnail-resize active hide-left');
//     $('#thumbnail'+imgNext).attr('class','thumbnail-resize active show-right');
//     imgNow = imgNow+1;
//     imgNext = imgNext+1;
//     imgPrev = imgPrev+1;
// }else{
//     $('.thumbnail-resize.active').attr('class','thumbnail');
//     $('#caption').attr('class','caption hide');
// }
// // left click
// if (role == 'caption') {
//     $('.thumbnail-resize.active').attr('class','thumbnail');
//     $('#caption').attr('class','caption show');
// }else if(role == 'caption-imageResize'){
//     $('#slide'+now).css('background-color','unset')
//     $('#caption').attr('class','caption show');
//     $('.thumbnail').attr('class','thumbnail-resize hide');
//     $('#thumbnail'+thumbnail).attr('class','thumbnail-resize active');
// }else if(role == 'caption-imageChange'){
//     $('#slide'+now).css('background-color','unset')
//     $('#caption').attr('class','caption show');
//     $('.thumbnail').attr('class','thumbnail-resize hide');
//     $('#thumbnail'+imgNow).attr('class','thumbnail-resize active hide-right');
//     $('#thumbnail'+imgPrev).attr('class','thumbnail-resize active show-left');
//     imgNow = imgNow-1;
//     imgNext = imgNext-1;
//     imgPrev = imgPrev-1;
// }else{
//     $('.thumbnail-resize.active').attr('class','thumbnail');
//     $('#caption').attr('class','caption hide');
// }
// // right click
// if (role == 'caption') {
//     $('.thumbnail-resize.active').attr('class','thumbnail');
//     $('#caption').attr('class','caption show');
// }else if(role == 'caption-imageResize'){
//     $('#slide'+now).css('background-color','unset')
//     $('#caption').attr('class','caption show');
//     $('.thumbnail').attr('class','thumbnail-resize hide');
//     $('#thumbnail'+thumbnail).attr('class','thumbnail-resize active');
// }else if(role == 'caption-imageChange'){
//     $('#slide'+now).css('background-color','unset')
//     $('#slide'+prev).data('role','caption-imageChange')
//     $('#caption').attr('class','caption show');
//     $('.thumbnail').attr('class','thumbnail-resize hide');
//     $('#thumbnail'+imgNow).attr('class','thumbnail-resize active hide-left');
//     $('#thumbnail'+imgNext).attr('class','thumbnail-resize active show-right');
//     imgNow = imgNow+1;
//     imgNext = imgNext+1;
//     imgPrev = imgPrev+1;
// }else if(role == 'slide-imageChange'){
//     $('#caption').attr('class','caption hide');
//     $('.thumbnail').attr('class','thumbnail-resize hide');
//     $('#thumbnail'+imgNow).attr('class','thumbnail-resize active hide-left');
//     $('#thumbnail'+imgNext).attr('class','thumbnail-resize active show-right');
//     imgNow = imgNow+1;
//     imgNext = imgNext+1;
//     imgPrev = imgPrev+1;
// }else{
//     $('.thumbnail-resize.active').attr('class','thumbnail');
//     $('#caption').attr('class','caption hide');
// }