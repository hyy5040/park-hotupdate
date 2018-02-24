$(document).ready(function() { 
	//登录按钮的功能
	$("#btn-login").click(function() { 
		// //两层嵌套，第一层判断是否连接，第二层判断输入是否正确
		// //---------------------------------------在线登录，访问云端数据库登录--------------------------------
		// if(status == "true"){
		// 	//表单字符串拼接
		// 	var json = {
		// 		"list": [{
		// 			"account": "",
		// 			"password": ""
		// 		}]
		// 	};
		// 	json.list[0].account = $("#input-account").val();
		// 	json.list[0].password = $("#input-password").val();
		// 	var Str_json = JSON.stringify(json);
		// 	//向服务器发送验证
		// 	ws.send(Str_json); 
		// 	console.log(status);
		// }
		// //---------------------------------------离线登录，调用本地的json文件记录--------------------------------
		// else if(status == "false"){
		// 	console.log(status);
		// 	//设置一个json框架
		// 	var json = {
		// 		"list": [{
		// 			"account": "",
		// 			"password": ""
		// 		}]
		// 	};
		// 	var input_account = md5($("#input-account").val());
		// 	var input_password = md5($("#input-password").val());
		// 	json.list[0].account = input_account;
		// 	json.list[0].password = input_password;
		// 	var Str_json = JSON.stringify(json);	
		// 	//从本地调取数据验证账号密码
		// 	$.ajax({
		// 		//请求方式为get
		// 		type: "GET",
		// 		//json文件位置
		// 		url: "./../app/json/user.json",
		// 		//返回数据格式为json
		// 		dataType: "json",
		// 		//请求成功完成后要执行的方法
		// 		success: function(data) {
		// 			for(var i=0;i<data.list.length;i++){
		// 				if(data.list[i].account===input_account&&data.list[i].password===input_password){
		// 					console.log("验证通过");
		// 					//让主进程消掉这个窗口，打开主窗口						
		// 					ipcRenderer.send('outline-login-message');
		// 					break;
		// 				}
		// 				else{
		// 					console.log("验证不通过");
		// 				}
					
		// 			console.log(data.list.length.account);
		// 			console.log(data.list.length.password); 
		// 			}
		// 		}
		// 	});					
		// }					
	});
});