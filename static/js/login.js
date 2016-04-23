
var email=false,
    confirm=false,
    firstname=false,
    firname,inputPassword,
    token;

function fname() {
    /* Act on the event */
    firsname = $("#firstname").val();
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
    inputPassword = $("#inputPassword").val();
    

    if(inputPassword.length>0) {
        confirm=true;
    }
    else confirm=false;

}

$("input").change(function(event) {
    fname();pwd();
    /* Act on the event */
    if(confirm&&firstname){
        $("#login").attr({
            class: "btn btn-info col-md-10"
        });

    }
    else $("#login").attr({
            class: "btn btn-info col-md-10 disabled"
        });
});

$("#modalconfirm").click(function(){
    $("#modalinfo").html("");
    $("#latteModal").modal('hide');
});

function showModal(){
  $("#latteModal").modal('show');
}

$("#loginform").submit(function(e){
    username = $("#firstname").val();
    password = $("#inputPassword").val();
    showModal();
    $.post('/login', {username: username, password: password}, function(data) {
         /*optional stuff to do after success */
         if(data.code=="1"){
             $("#modalinfo").html("<h4>您已经登陆成功，hello，<strong style='color:red;'>" + data.message + "</strong></h4>");
         }
         else{
             $("#modalinfo").html("<p class='text-warning'> 登录失败，原因：" + data.message + "</p>");
         }
         showModal();
      })
    e.preventDefault();
   });
        