//修改密码
$('#passedit form').formValidation({
    locale:'zh_CN',
    framework: "bootstrap"
});
$(document).on('click', '.passedit', function(e) {
    var url = $(this).data('url');
    var id = $(this).data('id');
    //模态框生成
    var mdid='modal_passedit',
        html = gentmodal_header({title:'修改密码'});
    if($('#'+mdid).length>0){
        $('#'+mdid).remove();
    }
    html+= '<div class="modal-body">'+
        '<form method="POST" action="'+url+'">'+
        '<div class="form-group">'+
        '<input type="password" class="form-control" placeholder="请输入当前密码" name="password" data-fv-notempty="true">'+
        '</div>'+
        '<div class="form-group">'+
        '<input type="password" class="form-control" placeholder="请输入新密码（6-16位）" name="newPassword" maxlength="16" minlength="6" data-fv-notempty="true">'+
        '</div>'+
        '<div class="form-group">'+
        '<input type="password" class="form-control" placeholder="再输一次新密码" name="password_new_re" data-fv-identical-field="newPassword" data-fv-notempty="true">'+
        '</div>'+
        '<div class="form-group">'+
        '<input type="hidden" class="form-control"  name="id" value="'+id+'">'+
        '</div>'+
        '<div class="form-group margin-bottom-0">'+
        '<button type="submit" class="btn btn-primary btn-block">确认</button>'+
        '</div>'+
        '</form>'+
        '</div>';
    gentmodal({
        id:mdid,
        size:'modal-sm',
        content:html
    });
    $('#'+mdid+' form').formValidation({
        locale:'zh_CN',
        framework: 'bootstrap'
    });
    $('#'+mdid).modal('show');
})