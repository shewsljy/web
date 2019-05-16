var managerData;
$(document).ready(function() {
    // queryAccount();
    // initPieChart();
    managerData = {
        accountId : $("#manageAcct_accountId").val(),
        subAccountId : $("#manageAcct_accountNo").val(),
        subAccountType : $("#manageAcct_accountType").val()
    };
});

function modifyPhone(cmd) {
    managerData["cmd"] = "2";
    $("#manageAcct_cmd").val(cmd);
};


function makeHtml() {
    var basePath = "www";
    var id = "123";
    $('#data').html('');
    var tr = $("<tr></tr>");
    //tr.append($("<td></td>").append((i+1)+ (PageNo-1)*10));
    tr.append($("<td></td>").append('id'));
    tr.append($("<td></td>").append('<a href="'+basePath + '/myElectronAccount/accountApplyEdit?applyId='+id+'" ' + 'target="_blank">修改</a>'
        + ' ' + '<a href="'+basePath + '/myElectronAccount/accountApplyEdit?applyId='+id+'" ' + 'target="_blank">修改</a>'
        + ' ' + '<a href="'+basePath + '/myElectronAccount/accountApplyEdit?applyId='+id+'" ' + 'target="_blank">修改</a>'
        )
    );
    $('#data').append(tr);

}
// function queryManagerAcctInfo() {
//
//     $.ajax({
//         url : basePath + "/myElectronAccount/queryManagerAcctInfo",
//         type : "post",
//         dataType : "json",
//         async : false,
//         data : managerData,
//         success : function (data) {
//             if (data["resultCode"] == "1"){
//                 $("#manageAcct_cmd").val(data["cmd"]);
//                 $("#manageAcct_returnUrl").val(data["returnUrl"]);
//                 $("#manageAcct_sign").val(data["sign"]);
//                 $("#manageAcctForm").attr('action',data["transitionUrl"]);
//             }else {
//                 WEB.msg.info("提示", "用户信息签名失败");
//             }
//         },
//         error : function () {
//             WEB.msg.info("提示", "用户信息签名失败");
//         }
//     });
// };