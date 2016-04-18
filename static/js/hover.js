
$(".fa-wechat").hover(function() {
    var wechat = $("#ho-wechat").show();


}, function() {
    /* Stuff to do when the mouse leaves the element */
     var wechat = $("#ho-wechat").hide();

});

$(".work_nav").hover(function() {
    var wechat = $("#ho-wechat").show();


}, function() {
    /* Stuff to do when the mouse leaves the element */
     var wechat = $("#ho-wechat").hide();

});

// drag
drag = false , left = 0;
header.$element.mousedown(function(event){
    if(event.which === 1){
        drag = true;
        position_x = header.$element.css('background-position-x').replace('px' , '').replace('%' , '');
        left = event.clientX - parseInt(position_x);
        image_hide_width = parseInt('-' + (1980 - header.$element.width() - 90));
        $('.wrapper').addClass('not-user'); 
        $(this).css({cursor : '-webkit-grabbing'});
    }
}).mouseup(function(event){
    if(event.which === 1){
        drag = false
        $('.wrapper').removeClass('not-user')
        $(this).css({cursor : '-webkit-grab'});
    }
}).mousemove(function(event){
    if(drag){
        position = event.clientX - left;
        if(position < 124 && position > image_hide_width){
            header.$element.css({
                'background-position-x' : position+ 'px'
            })
            setCookie('blog-header-position' , position);
        }
    }
});