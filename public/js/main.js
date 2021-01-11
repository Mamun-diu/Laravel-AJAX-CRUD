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
                        '<button data-edit="'+data.id+'" data-bs-toggle="modal" data-bs-target="#editTask" class="btn btn-sm btn-primary edit">Edit</button>'+
                        '<button data-del="'+data.id+'" class="delete btn btn-sm btn-danger">Delete</button>'+
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

$(document).on("click",".edit",function(){
    var id = $(this).data('edit');
    $.ajax({
        type: 'GET',
        url: 'task/edit/'+id,
        success: function(data){
            $("#editTaskForm").find('input[name="name"]').val(data.name);
            $("#editTaskForm").find('input[name="id"]').val(data.id);
        },
        error: function(error){
            console.log(error);
        }
    })
})

$('#editTaskForm').submit(function(e){
    e.preventDefault();
    var id = $("#editTaskForm").find('input[name="id"]').val();
    var name = $("#editTaskForm").find('input[name="name"]').val();
    $.ajax({
        type: "POST",
        url: "/task/update/"+id,
        data: {
            name: name,
        },
        success: function(data){
            var button = $('tbody').find('button[data-edit="'+id+'"');
            var tr = $(button).closest('tr');
            $(tr).html(
                '<td>'+data.id+'</td>'+
                '<td>'+data.name+'</td>'+
                '<td style="width:150px;">'+
                    '<button data-edit="'+data.id+'" data-bs-toggle="modal" data-bs-target="#editTask" class="btn btn-sm btn-primary me-1 edit">Edit</button>'+
                    '<button data-del="'+data.id+'" class="delete btn btn-sm btn-danger">Delete</button>'+
                '</td>'
            );
            $(".close").modal('hide');
        }
    })
})

$(document).on("click",".delete",function(){
    var id = $(this).data('del');
    var del = $(this).closest('tr');
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "GET",
                url: "task/delete/"+id,
                success: function(data){
                    $(del).slideUp();
                }
            })
          swal(" Your file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your file is safe!");
        }
      });
})
