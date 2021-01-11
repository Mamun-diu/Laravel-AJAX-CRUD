$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content')
    }
})

$('#createTaskForm').submit(function(e){
    e.preventDefault();
    let formData = {
        name: $('#createTaskForm input[name="name"]').val()

    }
    if(formData.name==''){
        $('#validation-errors').append('<li class="alert alert-danger">The name field is Required</li');
        setTimeout(function(){
            $('#validation-errors').html('')
        },2000)
    }else{
        $.ajax({
            type: 'POST',
            url: '/task/store',
            data: formData,
            success: function(data){
                $('#validation-errors').html('');
                $("#createTaskMessage").html('<div class="alert alert-success">Data Inserted Successfully</div>')
                setTimeout(function(){
                    $("#createTaskMessage").html('');
                },2000)

                $('#createTaskForm input[name="name"]').val('');

                $('table tbody').prepend(
                    ' <tr>'+
                    '<td>'+data.id+'</td>'+
                    '<td>'+data.name+'</td>'+
                    '<td style="width:150px;">'+
                        '<a href="" class="btn btn-sm btn-primary">Edit</a>'+
                        '<a href="" class="btn btn-sm btn-danger">Delete</a>'+
                    '</td>'+
                '</tr>'
                );

            },
            error: function (xhr) {
                $('#validation-errors').html('');
                $.each(xhr.responseJSON.errors, function(key,value) {

                  $('#validation-errors').append('<li class="alert alert-danger">'+value+'</li');

              });

             }
            
        })
    }

})
