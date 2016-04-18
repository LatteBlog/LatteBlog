function register(){
    var firstname = $("#firstname").val();
   
    var inputEmail = $("#inputEmail").val();

    
}

var email=false,
    confirm=false,
    firstname=false;


function fname() {
    /* Act on the event */
    var firsname = $("#firstname").val();
    if(firsname.length>0) {
        firstname=true;
        $("#noname").html("");
    }
    else {
        $("#noname").html("用户名为空");
        firstname=false;
    }

}



function pwd() {
    /* Act on the event */
    var inputPassword = $("#inputPassword").val();
    var confirmPassword = $("#confirmPassword").val();
    if(inputPassword!=confirmPassword){
        $("#differ").html("密码不一致");
        confirm=false;
        
    }

    else if(confirmPassword.length>0) {
        confirm=true;
$("#differ").html("");
    }

}

function mail() {
    /* Act on the event */
    var inputEmail=$("#inputEmail").val();
    var check = new RegExp(".+@.+\..+");
    if(check.test(inputEmail)) {
        email=true;
        $("#mail").html("");

        
    }
    else  {
        $("#mail").html("邮箱格式有误");
        email=false;
}
// if(email&&confirm&&firstname){
//         $("#register").attr({
//             class: "btn btn-info col-md-10"
//         });

//     }
}

$("input").change(function(event) {
    fname();mail();pwd();
    /* Act on the event */
    if(email&&confirm&&firstname){
        $("#register").attr({
            class: "btn btn-info col-md-10"
        });

    }
    else $("#register").attr({
            class: "btn btn-info col-md-10 disabled"
        });
});





















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