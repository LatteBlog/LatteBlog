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

$("#login").click({
    $.post('/login', {name: firstname, password:inputPassword}, function(data, textStatus, xhr) {
        /*optional stuff to do after success */
        if(data.code=="1"){
            window.open("#");
            // token=data.token;
        }
    });
        