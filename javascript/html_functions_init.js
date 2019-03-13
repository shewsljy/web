$(function () {
   $('#controlShow').click(function () {
       if ($('#showUrl').is(':hidden')){
           $('#showUrl').show();
           $(this).text('收起');
       }else {
           $('#showUrl').hide();
           $(this).text('查看');
       }
   });
});