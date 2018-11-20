//to getting kudos
const getKudos = function () {
    $.get(`/api/kudos`).then(function (data) {
        renderKudos(data);
    });
}
//to display all the kudos 
const renderKudos = function (dataList) {
    $('#kudosContent').empty();

    for (let i = 0; i < dataList.length; i++) {
        $('#kudosContent').append(
            `<div class='card kudosCard'>
          <h5 id = "from" >From: ${dataList[i].from[0].name}</h5> 
          <h5 id = "to">To: ${dataList[i].to[0].name}</h5>
          <h3>${dataList[i].title}</h3>
          <p>${dataList[i].body}</p>
        </div>`
        );
    }
}
//to get get all users 
const renderUsers = function () {
    $.get(`/api/users`).then(function (data) {
        for (let i = 0; i < data.length; i++) {
    $('#fromUser').append(`<option value='${data[i]._id}'> ${data[i].name} </option>`)
    $('#toUser').append(`<option value='${data[i]._id}'> ${data[i].name} </option>`) 
        }
    })
}
// to post kudos messages
const sendKudos = function (event) {
    event.preventDefault();

    if($('#fromUser').val() && $('#toUser').val()) {
        $('.userRow').empty();
    
    const newKudos = {
        title: $('#kudosTitle').val(),
        body: $('#kudosBody').val(),
        from: $('#fromUser').val(),
        to: $('#toUser').val()
    }
    if ($('#kudosTitle').val() && $('#kudosBody').val()) {
        $.post('/api/kudos', newKudos).then(function (data) {

            $('#kudosTitle').val('');
            $('#kudosBody').val('');
            $('#fromUser').val('');
            $('#toUser').val('');
            $('#kudosModal').modal('hide');
            $('.err').empty();
            getKudos();
        });
    } else {
       $('.err').text('Please enter title and message!').css({ "color": "red", "font-size": "100%" , "font-weight": "bold"});
    }

} else {
    $('.userRow').text('Please choose to and from').css({ "color": "red", "font-size": "100%", "font-weight": "bold" });
}
}

//to empty out the modal on close
$('.closeModal').on('click', function () {
    $('#kudosTitle').val('');
    $('#kudosBody').val('');
    $('#fromUser').val('');
    $('#toUser').val('');
    $('.err').empty();
    $('.userRow').empty();
});

//to run the functions
$('#sendKudos').on('click', sendKudos);
renderUsers();
getKudos();