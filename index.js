const {
  app,
  BrowserWindow
} = require('electron');
const path = require('path');
const fs = require('fs');
const {
  url
} = require('url');
const {
  ipcMain
} = require('electron');

const https = require('https');

/*const Datastore = require('nedb');
let data_db = new Datastore({
    filename: `${__dirname}/dist/DB/data.db`,
    autoload: true
});*/
/**************************************界面设置start **********************************************/
//定义主界面
let loginWinmainWin = null;
//定义登录页面
let loginWin = null;
/**主界面 */
const createMainWindow = () => {
  mainWin = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false,
    frame: false
  });
  mainWin.loadURL(`file://${__dirname}/dist/index.html`);
  mainWin.webContents.openDevTools();
  mainWin.on('closed', () => mainWin = null)
  mainWin.on('ready-to-show', () => {
  })
}

// app.disableHardwareAcceleration();
// app.on('ready', _ => createMainWindow())
// app.on('window-all-closed', _ => process.platform !== 'darwin'&& app.quit())
// app.on('activate', _ => win === null&& createMainWindow())

/**限定只打开一个 */
const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window.
  if (mainWin) {
    if (mainWin.isMinimized()) {
      mainWin.restore();
      mainWin.focus();
    }
  }

  if (loginWin) {
    if (loginWin.isMinimized()) {
      loginWin.restore();
      loginWin.focus();
    }

  }
})

if (shouldQuit) {
  app.quit()
}


/**登录界面 */
const createLoginWindow = () => {
  loginWin = new BrowserWindow({
    width: 500,
    height: 424,
    show: false,
    frame: false
  });
  loginWin.loadURL(`file://${__dirname}/dist/assets/login/login.html`);
  loginWin.on('closed', () => win = null)
  loginWin.on('ready-to-show', () => {
    loginWin.show()
    loginWin.focus()
  })
}

app.disableHardwareAcceleration();
app.on('ready', _ => { createLoginWindow(); createMainWindow(); })
app.on('window-all-closed', _ => process.platform !== 'darwin' && app.quit())
app.on('activate', _ => win === null && createLoginWindow())


/**************************************界面设置end **********************************************/

/************************************** hot-update start **********************************************/
var getHttpsData = function (filepath, success, error) {
  // 回调缺省时候的处理
  success = success || function () { };
  error = error || function () { };

  var url = 'https://raw.githubusercontent.com/hyy5040/park-hotupdate/master/' + filepath;

  https.get(url, function (res) {
    var statusCode = res.statusCode;

    if (statusCode !== 200) {
      // 出错回调
      error();
      // 消耗响应数据以释放内存
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    var rawData = '';
    res.on('data', function (chunk) {
      rawData += chunk;
    });

    // 请求结束
    res.on('end', function () {
      // 成功回调
      success(rawData);
    }).on('error', function (e) {
      // 出错回调
      error();
    });
  });
};

var getVersionInfo = function () {
  let updateInfo = {
    version: "0.0.0",
    file: [],
    detail: []
  };
  fs.readFile(path.join(__dirname, '/package.json'), 'utf8', function (err, localdata) {
    if (err) {
      return console.log(err);
    } else {
      getHttpsData('package.json', function (clouddata) {
        updateInfo = JSON.parse(localdata).update;
        //如果当前版本号较小，则更新
        if (JSON.parse(clouddata).version > JSON.parse(localdata).version) {
          updateInfo.file.forEach((fileName) => {
            getHttpsData(fileName, function (data) {
              // 写入文件
              fs.writeFileSync(path.join(__dirname, fileName), data);
              // 然后下一个文件获取并写入...
            });
          });
          //完成之后，返回updateInfo
          return updateInfo;
        }
      });
    }
  });
}
/**************************************hot-update end **********************************************/


/**************************************IPC模块start **********************************************/
/**IPC模块，渲染进程与主进程之间进行通信 */
ipcMain.on('getAllPersons', (event, arg) => {
  var _path = path.join(__dirname, '/app/assets/json/user.json');
  fs.readFile(_path, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    } else {
      event.returnValue = data;
    }
  });
});

ipcMain.on('saveNewPersons', (event, arg) => {
  var _path = path.join(__dirname, '/app/assets/json/user.json');
  fs.writeFile(_path, arg, function (err) {
    if (!err) {
      event.returnValue = arg;
    }
  });
});

//关闭整个应用
ipcMain.on('app_close', () => {
  app.quit();
});

//最小化
ipcMain.on('hide-window', () => {
  // mainWin.minimize();
  getHttpsData('index.html', function (data) {
    // 写入文件
    fs.writeFileSync(path.join(__dirname, '/dist/index.html'), data);
    // 然后下一个文件获取并写入...
  });
});
//最大化
ipcMain.on('show-window', () => {
  mainWin.maximize();
});
//还原
ipcMain.on('orignal-window', () => {
  mainWin.unmaximize();
});
//打开
ipcMain.on('orignal-window', () => {
  mainWin.unmaximize();
});
//在线登录时存入json
ipcMain.on('login-inline', (event, arg) => {
  //发送登录之后的参数
  mainWin.webContents.send('login-reply', arg);
  loginWin.hide();
  mainWin.show();
  mainWin.focus();
});
//离线登录
ipcMain.on('login-outline', (event, arg) => {
  //发送登录之后的参数
  mainWin.webContents.send('login-reply-outline', arg);
  loginWin.hide();
  mainWin.show();
  mainWin.focus();
});

//存储用户信息到本地
ipcMain.on('userInfo-save', (event, arg) => {
  fs.writeFile(path.join(__dirname, '/dist/assets/user/user.json'), arg, function (err) {
    if (!err) {
      console.log("写入成功！");
    }
  });
});

//存储数据信息到本地_入场记录
ipcMain.on('save-db-inpark', (event, arg) => {
  fs.writeFile(path.join(__dirname, "/dist/assets/db/inparkList.json"), arg, function (err) {
    if (!err) {
      console.log("写入成功！");
    }
  });
});

//存储数据信息到本地_出场记录
ipcMain.on('save-db-outpark', (event, arg) => {
  fs.writeFile(path.join(__dirname, "/dist/assets/db/outparkList.json"), arg, function (err) {
    if (!err) {
      console.log("写入成功！");
    }
  });
});

//存储数据信息到本地_无卡放行记录
ipcMain.on('save-db-release', (event, arg) => {
  fs.writeFile(path.join(__dirname, "/dist/assets/db/releaseList.json"), arg, function (err) {
    if (!err) {
      console.log("写入成功！");
    }
  });
});
/**************************************IPC模块end **********************************************/

// function saveUserInfo(arg) {
//   var _path = path.join(__dirname, '/dist/assets/user/user.json');
//   fs.writeFile(_path, arg, function (err) {
//     if (!err){
//       console.log("写入成功！");
//     }
//   });
// }