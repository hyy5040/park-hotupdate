$(document).ready(function () {
    const ipcRenderer = require('electron').ipcRenderer;
    //关闭按钮
    $("#btn-close").click(function () {
        ipcRenderer.send('app_close');        
    });
    //登录按钮
    $("#btn-login").click(function () {
        /**
         * @param {object} user
         * @param {Function=} callBack
         */
        SERVER_PORTAL = "http://192.168.1.121:8080/rest/portal/";
        var user = { userAccount: $("#input-account").val(), userPassword: $("#input-password").val() };
        //发送请求
        $.ajax({
            type: 'POST',
            url: SERVER_PORTAL + 'user/login4DesktopApp',
            data: user,
            contentType: 'application/x-www-form-urlencoded',   // 发送信息至服务器时内容编码类型
            dataType: 'json',                                   // 预期服务器返回的数据类型
            //在线登录
            success: function (result) {
                //正确返回
                if (result.status == 0) {
                    $.ajax({
                        type: "GET", url: "../user/user.json", dataType: "json", success: function (data) {
                            let newInfoList = {
                                userList: []
                            };
                            let listItem = {
                                userAccount: md5($("#input-account").val()),
                                userPassword: md5($("#input-password").val()),
                                UserType: result.object.activeUserType,
                                token: result.object.token
                            }
                            let isExist = false;
                            newInfoList.userList = data.userList.map((item, index, array) => {
                                if (item.userAccount === listItem.userAccount && item.userPassword === listItem.userPassword) {
                                    isExist = true;
                                    return listItem;
                                }
                                else {
                                    return item;
                                }
                            });
                            if (isExist == false) {
                                newInfoList.userList.push(listItem);
                            }
                            ipcRenderer.send('userInfo-save', JSON.stringify(newInfoList));
                            ipcRenderer.send('login-inline', result);
                        },
                        error: function () {
                            let newInfoList = {
                                userList: [
                                    {
                                        userAccount: md5($("#input-account").val()),
                                        userPassword: md5($("#input-password").val()),
                                        UserType: result.object.activeUserType,
                                        token: result.object.token
                                    }
                                ]
                            };
                            ipcRenderer.send('userInfo-save', JSON.stringify(newInfoList));
                            ipcRenderer.send('login-inline', result);
                        }
                    });
                }
                //错误返回,通常为密码错误
                else {
                    alert(resp.json().message);
                }
            },
            //离线登录
            timeout: 5000,
            error: function (XMLHttpRequest) {
                $.ajax({
                    type: "GET", url: "../user/user.json", dataType: "json",
                    success: function (data) {
                        data.userList.forEach(item => {
                            if (item.userAccount === md5($("#input-account").val()) && item.userPassword === md5($("#input-password").val())) {
                                let listItem = {
                                    userAccount: $("#input-account").val(),
                                    userPassword: $("#input-password").val(),
                                    UserType: item.activeUserType,
                                    token: item.token
                                }
                                ipcRenderer.send('login-outline', listItem);
                            }
                        });

                    },
                    error: function () {
                        alert('没有数据');
                    }
                });
            }
        });
    });
});