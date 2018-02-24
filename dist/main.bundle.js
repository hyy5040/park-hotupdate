webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main class=\"mainBox\"></app-main>\r\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainBox {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// import { RouterModule,Routes } from '@angular/router';
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var http_2 = __webpack_require__("../../../common/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_routing_1 = __webpack_require__("../../../../../src/app/app.routing.ts");
// import { PipeModule } from './pipe/pipe.module';
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
// import { MenuPageModule } from './menupages/menu-page.module';
// import { ComponentModule } from './components/component.module';
/**popover */
var login_component_1 = __webpack_require__("../../../../../src/app/popover/login/login.component.ts");
var changePassword_component_1 = __webpack_require__("../../../../../src/app/popover/changePassword/changePassword.component.ts");
var setCard_component_1 = __webpack_require__("../../../../../src/app/popover/setCard/setCard.component.ts");
var checkCard_component_1 = __webpack_require__("../../../../../src/app/popover/checkCard/checkCard.component.ts");
var searchCar_component_1 = __webpack_require__("../../../../../src/app/popover/searchCar/searchCar.component.ts");
var searchCard_component_1 = __webpack_require__("../../../../../src/app/popover/searchCard/searchCard.component.ts");
var searchRecord_component_1 = __webpack_require__("../../../../../src/app/popover/searchRecord/searchRecord.component.ts");
var interceptor_component_1 = __webpack_require__("../../../../../src/app/popover/interceptor/interceptor.component.ts");
var releaseWithoutCard_component_1 = __webpack_require__("../../../../../src/app/popover/releaseWithoutCard/releaseWithoutCard.component.ts");
/**pages */
var main_component_1 = __webpack_require__("../../../../../src/app/pages/main/main.component.ts");
var main_carinfo_component_1 = __webpack_require__("../../../../../src/app/pages/main-carinfo/main-carinfo.component.ts");
var main_carviews_component_1 = __webpack_require__("../../../../../src/app/pages/main-carviews/main-carviews.component.ts");
var main_parkinfo_component_1 = __webpack_require__("../../../../../src/app/pages/main-parkinfo/main-parkinfo.component.ts");
var main_controller_component_1 = __webpack_require__("../../../../../src/app/pages/main-controller/main-controller.component.ts");
var main_navbar_component_1 = __webpack_require__("../../../../../src/app/pages/main-navbar/main-navbar.component.ts");
var main_menu_component_1 = __webpack_require__("../../../../../src/app/pages/main-menu/main-menu.component.ts");
/**components */
var controller_button_component_1 = __webpack_require__("../../../../../src/app/components/controller-button/controller-button.component.ts");
var modal_component_1 = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
var close_button_component_1 = __webpack_require__("../../../../../src/app/components/close-button/close-button.component.ts");
var pagination_component_1 = __webpack_require__("../../../../../src/app/components/pagination/pagination.component.ts");
/**services */
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var controller_service_1 = __webpack_require__("../../../../../src/app/services/controller/controller.service.ts");
var common_service_1 = __webpack_require__("../../../../../src/app/services/common.service.ts");
var render_service_1 = __webpack_require__("../../../../../src/app/services/render/render.service.ts");
var navbutton_service_1 = __webpack_require__("../../../../../src/app/services/navbutton/navbutton.service.ts");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var sysConfigs_1 = __webpack_require__("../../../../../src/app/services/constants/sysConfigs.ts");
var parkingDictionary_1 = __webpack_require__("../../../../../src/app/services/constants/parkingDictionary.ts");
var ctrlbutton_service_1 = __webpack_require__("../../../../../src/app/services/ctrlbutton/ctrlbutton.service.ts");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var Permission_directive_1 = __webpack_require__("../../../../../src/app/directive/Permission.directive.ts");
// import { InparkdbService } from './services/inParkList/inparkdb.service';
// import { OutparkdbService } from './services/outParkList/outparkdb.service';
// import { ReleasedbService } from './services/releaseList/releasedb.service';
var menu_service_1 = __webpack_require__("../../../../../src/app/services/menu/menu.service.ts");
var cardManage_service_1 = __webpack_require__("../../../../../src/app/services/cardManage/cardManage.service.ts");
var road_service_1 = __webpack_require__("../../../../../src/app/services/road/road.service.ts");
var loginGuard_service_1 = __webpack_require__("../../../../../src/app/services/loginGuard/loginGuard.service.ts");
var parkLot_service_1 = __webpack_require__("../../../../../src/app/services/parkLot/parkLot.service.ts");
var privilege_service_1 = __webpack_require__("../../../../../src/app/services/privilege/privilege.service.ts");
var cloud_service_1 = __webpack_require__("../../../../../src/app/services/cloud/cloud.service.ts");
/**DB */
var inparkListDB_1 = __webpack_require__("../../../../../src/app/services/DB/inparkListDB.ts");
var outparkListDB_1 = __webpack_require__("../../../../../src/app/services/DB/outparkListDB.ts");
var releaseListDB_1 = __webpack_require__("../../../../../src/app/services/DB/releaseListDB.ts");
var cardListDB_1 = __webpack_require__("../../../../../src/app/services/DB/cardListDB.ts");
var roadListDB_1 = __webpack_require__("../../../../../src/app/services/DB/roadListDB.ts");
var privilegeListDB_1 = __webpack_require__("../../../../../src/app/services/DB/privilegeListDB.ts");
/**menu */
var menu_setBaseInfo_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-setBaseInfo/menu-setBaseInfo.component.ts");
var menu_setRoad_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-setRoad/menu-setRoad.component.ts");
var menu_setController_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-setController/menu-setController.component.ts");
var menu_setFeeStandard_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-setFeeStandard/menu-setFeeStandard.component.ts");
var menu_setDeviceNo_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-setDeviceNo/menu-setDeviceNo.component.ts");
var menu_recordIn_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-recordIn/menu-recordIn.component.ts");
var menu_recordOut_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-recordOut/menu-recordOut.component.ts");
var menu_recordRelease_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-recordRelease/menu-recordRelease.component.ts");
// import { MenuRecordCarComponent } from './menupages/menu-recordCar/menu-recordCar.component';
var menu_cardDownload_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-cardDownload/menu-cardDownload.component.ts");
// import { MenuCardQueryComponent } from './menupages/menu-cardQuery/menu-cardQuery.component';
var menu_updateInParking_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updateInParking/menu-updateInParking.component.ts");
var menu_updateOutParking_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updateOutParking/menu-updateOutParking.component.ts");
var menu_updateRelease_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updateRelease/menu-updateRelease.component.ts");
var menu_updateCardInfo_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updateCardInfo/menu-updateCardInfo.component.ts");
var menu_updateRoadInfo_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updateRoadInfo/menu-updateRoadInfo.component.ts");
var menu_updatePrivilege_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updatePrivilege/menu-updatePrivilege.component.ts");
/**pipe */
var dateformat_pipe_1 = __webpack_require__("../../../../../src/app/pipe/dateformat/dateformat.pipe.ts");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                /**pop */
                login_component_1.LoginComponent,
                changePassword_component_1.ChangePasswordComponent,
                setCard_component_1.SetCardComponent,
                checkCard_component_1.CheckCardComponent,
                searchCar_component_1.SearchCarComponent,
                searchCard_component_1.SearchCardComponent,
                searchRecord_component_1.SearchRecordComponent,
                interceptor_component_1.InterceptorComponent,
                releaseWithoutCard_component_1.ReleaseWithoutCardComponent,
                /**main */
                main_component_1.MainComponent,
                main_carinfo_component_1.MainCarinfoComponent,
                main_carviews_component_1.MainCarviewsComponent,
                main_parkinfo_component_1.MainParkinfoComponent,
                main_controller_component_1.MainControllerComponent,
                main_navbar_component_1.MainNavbarComponent,
                main_menu_component_1.MainMenuComponent,
                /**component */
                controller_button_component_1.ControllerButtonComponent,
                modal_component_1.ModalComponent,
                close_button_component_1.CloseButtonComponent,
                pagination_component_1.PaginationComponent,
                /**directive */
                Permission_directive_1.PermissionDirective,
                /**menu */
                menu_setRoad_component_1.MenuSetRoadComponent,
                menu_setFeeStandard_component_1.MenuSetFeeStandardComponent,
                menu_setDeviceNo_component_1.MenuSetDeviceNoComponent,
                menu_recordIn_component_1.MenuRecordInComponent,
                menu_recordOut_component_1.MenuRecordOutComponent,
                menu_recordRelease_component_1.MenuRecordReleaseComponent,
                menu_updateCardInfo_component_1.MenuUpdateCardInfoComponent,
                menu_updateRoadInfo_component_1.MenuUpdateRoadInfoComponent,
                menu_updateInParking_component_1.MenuUpdateInParkingComponent,
                menu_updateOutParking_component_1.MenuUpdateOutParkingComponent,
                menu_updateRelease_component_1.MenuUpdateReleaseComponent,
                menu_setController_component_1.MenuSetControllerComponent,
                menu_cardDownload_component_1.MenuCardDownloadComponent,
                menu_updatePrivilege_component_1.MenuUpdatePrivilegeComponent,
                menu_setBaseInfo_component_1.MenuSetBaseInfoComponent,
                /**pipe */
                dateformat_pipe_1.DateformatPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.AppRoutingModule,
                // RouterModule.forRoot(routers),
                http_1.HttpModule,
                // PipeModule,
                forms_1.FormsModule,
                http_2.HttpClientModule,
            ],
            // exports: [MatTableModule],
            providers: [
                loginGuard_service_1.LoginGuardService,
                user_service_1.UserService,
                controller_service_1.ControllerService,
                common_service_1.CommonService,
                common_service_1.RenderedService, common_service_1.WebsocketService,
                render_service_1.RenderService,
                modal_service_1.ModalService,
                navbutton_service_1.NavbuttonService,
                sysConfigs_1.SysConfigs,
                ctrlbutton_service_1.CtrlbuttonService,
                parking_service_1.ParkingService,
                device_service_1.DeviceService,
                inparkListDB_1.InparkdbService,
                outparkListDB_1.OutparkdbService,
                releaseListDB_1.ReleasedbService,
                menu_service_1.MenuService,
                cardManage_service_1.CardManageService,
                road_service_1.RoadService,
                parkingDictionary_1.ParkingDictionary,
                cardListDB_1.CardListDBService,
                roadListDB_1.RoadListDBService,
                parkLot_service_1.ParkLotService,
                privilege_service_1.PrivilegeService,
                privilegeListDB_1.PrivilegedbService,
                cloud_service_1.CloudService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var loginGuard_service_1 = __webpack_require__("../../../../../src/app/services/loginGuard/loginGuard.service.ts");
/**左侧按钮 */
var login_component_1 = __webpack_require__("../../../../../src/app/popover/login/login.component.ts");
var changePassword_component_1 = __webpack_require__("../../../../../src/app/popover/changePassword/changePassword.component.ts");
var setCard_component_1 = __webpack_require__("../../../../../src/app/popover/setCard/setCard.component.ts");
var checkCard_component_1 = __webpack_require__("../../../../../src/app/popover/checkCard/checkCard.component.ts");
var searchCar_component_1 = __webpack_require__("../../../../../src/app/popover/searchCar/searchCar.component.ts");
var searchCard_component_1 = __webpack_require__("../../../../../src/app/popover/searchCard/searchCard.component.ts");
var searchRecord_component_1 = __webpack_require__("../../../../../src/app/popover/searchRecord/searchRecord.component.ts");
var releaseWithoutCard_component_1 = __webpack_require__("../../../../../src/app/popover/releaseWithoutCard/releaseWithoutCard.component.ts");
/**菜单 */
var interceptor_component_1 = __webpack_require__("../../../../../src/app/popover/interceptor/interceptor.component.ts");
var menu_setRoad_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-setRoad/menu-setRoad.component.ts");
var menu_setController_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-setController/menu-setController.component.ts");
var menu_setBaseInfo_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-setBaseInfo/menu-setBaseInfo.component.ts");
var menu_recordIn_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-recordIn/menu-recordIn.component.ts");
var menu_recordOut_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-recordOut/menu-recordOut.component.ts");
var menu_recordRelease_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-recordRelease/menu-recordRelease.component.ts");
// import { MenuRecordCarComponent } from './menupages/menu-recordCar/menu-recordCar.component';
var menu_cardDownload_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-cardDownload/menu-cardDownload.component.ts");
// import { MenuCardQueryComponent } from './menupages/menu-cardQuery/menu-cardQuery.component';
var menu_updateInParking_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updateInParking/menu-updateInParking.component.ts");
var menu_updateOutParking_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updateOutParking/menu-updateOutParking.component.ts");
var menu_updateRelease_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updateRelease/menu-updateRelease.component.ts");
var menu_updateCardInfo_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updateCardInfo/menu-updateCardInfo.component.ts");
var menu_updateRoadInfo_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updateRoadInfo/menu-updateRoadInfo.component.ts");
var menu_updatePrivilege_component_1 = __webpack_require__("../../../../../src/app/menupages/menu-updatePrivilege/menu-updatePrivilege.component.ts");
/**第二层路由 */
// const modalChildRouters: Routes = [
//     { path: "login", component: LoginComponent },
//     // {path: "two", component: ListTwoComponent},
//     // 如果地址栏中输入没有定义的路由就跳转到one路由界面
//     { path: '**', redirectTo: "login" },
//     { path: '', redirectTo: 'login', pathMatch: 'full' },
// ];
/**第一层路由 */
// const routers: Routes = [
//     { path: 'main', component: MainComponent },
//     { path: 'modal', component: ModalComponent, children: modalChildRouters },
//     // {path:'login',component:LoginComponent},
//     { path: '', redirectTo: 'main', pathMatch: 'full' },
//     { path: '**', redirectTo: 'main' },
// ];
var routers = [
    /**左侧按钮 */
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'changePassword', component: changePassword_component_1.ChangePasswordComponent },
    { path: 'setCard', component: setCard_component_1.SetCardComponent },
    { path: 'checkCard', component: checkCard_component_1.CheckCardComponent },
    { path: 'searchCar', component: searchCar_component_1.SearchCarComponent },
    { path: 'searchCard', component: searchCard_component_1.SearchCardComponent },
    { path: 'searchRecord', component: searchRecord_component_1.SearchRecordComponent },
    { path: 'release', component: releaseWithoutCard_component_1.ReleaseWithoutCardComponent },
    /**菜单  */
    { path: 'setController', component: menu_setController_component_1.MenuSetControllerComponent, canActivate: [loginGuard_service_1.LoginGuardService] },
    { path: 'setRoad', component: menu_setRoad_component_1.MenuSetRoadComponent, canActivate: [loginGuard_service_1.LoginGuardService] },
    { path: 'setBaseInfo', component: menu_setBaseInfo_component_1.MenuSetBaseInfoComponent, canActivate: [loginGuard_service_1.LoginGuardService] },
    // { path: 'setFeeStandard',component:MenuSetFeeStandardComponent },
    // { path: 'setDeviceNo',component:MenuSetDeviceNoComponent },
    { path: 'interceptor', component: interceptor_component_1.InterceptorComponent },
    { path: 'recordIn', component: menu_recordIn_component_1.MenuRecordInComponent },
    { path: 'recordOut', component: menu_recordOut_component_1.MenuRecordOutComponent },
    { path: 'recordRelease', component: menu_recordRelease_component_1.MenuRecordReleaseComponent },
    { path: 'recordCar', redirectTo: 'searchCar', pathMatch: 'full' },
    { path: 'cardQuery', redirectTo: 'searchCard', pathMatch: 'full' },
    { path: 'cardDownload', component: menu_cardDownload_component_1.MenuCardDownloadComponent },
    { path: 'updateInParking', component: menu_updateInParking_component_1.MenuUpdateInParkingComponent },
    { path: 'updateOutParking', component: menu_updateOutParking_component_1.MenuUpdateOutParkingComponent },
    { path: 'updateRelease', component: menu_updateRelease_component_1.MenuUpdateReleaseComponent },
    { path: 'updateCardInfo', component: menu_updateCardInfo_component_1.MenuUpdateCardInfoComponent },
    { path: 'updateRoadInfo', component: menu_updateRoadInfo_component_1.MenuUpdateRoadInfoComponent },
    { path: 'updatePrivilege', component: menu_updatePrivilege_component_1.MenuUpdatePrivilegeComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routers, { enableTracing: true })
                // RouterModule.for(routers,{ enableTracing: true })
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/components/close-button/close-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"closeModal()\" class=\"imgbox row_center_center\">\n  <img src=\"assets/img/close.png\"/>\n  <!-- <img src=\"assets/img/关闭.svg\"/> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/close-button/close-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imgbox {\n  width: 40px;\n  height: 40px; }\n\nimg {\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s; }\n\nimg:hover {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/close-button/close-button.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var CloseButtonComponent = (function () {
    function CloseButtonComponent(modal) {
        this.modal = modal;
    }
    CloseButtonComponent.prototype.ngOnInit = function () {
    };
    CloseButtonComponent.prototype.closeModal = function () {
        this.modal.closeModal();
    };
    CloseButtonComponent = __decorate([
        core_1.Component({
            selector: 'close-button',
            template: __webpack_require__("../../../../../src/app/components/close-button/close-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/close-button/close-button.component.scss")]
        }),
        __metadata("design:paramtypes", [modal_service_1.ModalService])
    ], CloseButtonComponent);
    return CloseButtonComponent;
}());
exports.CloseButtonComponent = CloseButtonComponent;


/***/ }),

/***/ "../../../../../src/app/components/controller-button/controller-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"controller-unit\" (click)=\"runFunction()\" *permission=\"permiss\">{{label}}</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/controller-button/controller-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  font-size: 14px;\n  color: #354052;\n  border-style: none;\n  width: 100px;\n  height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #e3e5ec;\n  background-color: #EFF1F7; }\n\nbutton:active {\n  outline: none;\n  background-color: #e3e5ec; }\n\nbutton:focus {\n  outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/controller-button/controller-button.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ctrlbutton_service_1 = __webpack_require__("../../../../../src/app/services/ctrlbutton/ctrlbutton.service.ts");
var ControllerButtonComponent = (function () {
    function ControllerButtonComponent(ctrl) {
        this.ctrl = ctrl;
        this.permiss = [];
    }
    ControllerButtonComponent.prototype.ngOnInit = function () {
    };
    ControllerButtonComponent.prototype.runFunction = function () {
        this.ctrl.handle(this.buttonName);
    };
    ControllerButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-controller-button',
            template: __webpack_require__("../../../../../src/app/components/controller-button/controller-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/controller-button/controller-button.component.scss")],
            inputs: ['label', 'buttonName', 'permiss']
        }),
        __metadata("design:paramtypes", [ctrlbutton_service_1.CtrlbuttonService])
    ], ControllerButtonComponent);
    return ControllerButtonComponent;
}());
exports.ControllerButtonComponent = ControllerButtonComponent;


/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back\" (click)=\"closeModal()\">\n        <div (click)=\"$event.stopPropagation()\">\n                <router-outlet>\n                </router-outlet>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back {\n  width: 100%;\n  height: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var ModalComponent = (function () {
    function ModalComponent(modal) {
        this.modal = modal;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.closeModal = function () {
        this.modal.closeModal();
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            template: __webpack_require__("../../../../../src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [modal_service_1.ModalService])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;


/***/ }),

/***/ "../../../../../src/app/components/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footBox\" *ngIf=\"totalSize\">\n    <div>第{{currentIndex}}页，共{{maxPage}}页/共找到{{totalSize}}条数据</div>\n    <ul class=\"pagination pagination-sm\">\n        <li class=\"page-item page-link hand\" (click)=\"indexNav(1)\" *ngIf=\"maxPage>len\">1</li>        \n        <li class=\"page-item page-link hand\" (click)=\"back()\">←</li>\n        <ng-container *ngIf=\"maxPage\">\n            <li class=\"page-item page-link hand\" [ngClass]=\"{active:currentIndex==i}\" (click)=\"indexNav(i)\" *ngFor=\"let i of pageIndex\" >{{i}}</li>\n        </ng-container>\n        <li class=\"page-item page-link hand\" (click)=\"next()\">→</li>\n        <li class=\"page-item page-link hand\" (click)=\"indexNav(maxPage)\" *ngIf=\"maxPage>len\">{{maxPage}}</li>                \n      </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pagination/pagination.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PaginationComponent = (function () {
    function PaginationComponent() {
        /**当前的页数 */
        this.currentIndex = 1;
        /**列表的长度，默认是6 */
        this.len = 6;
        /**分页数组 */
        this.pageIndex = [];
        /**初始化事件 */
        this.onInit = new core_1.EventEmitter();
        this.len = Number(this.maxPage) > this.len ? this.len : Number(this.maxPage);
        this.initPageIndex(this.len);
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.onInit.emit();
    };
    /**初始化 */
    PaginationComponent.prototype.initPageIndex = function (len, index) {
        if (index === void 0) { index = 1; }
        index = index < 1 ? 1 : index;
        this.minIndex = index;
        for (var i = 0; i < len; i++) {
            this.pageIndex[i] = index++;
            this.maxIndex = this.pageIndex[i];
        }
    };
    /**点击导航按钮 */
    PaginationComponent.prototype.indexNav = function (i) {
        this.currentIndex = i;
        // this.parking.getOutParkList(i, { cardNo: '123456' });
        // this.parking.getOutParkList(i);    
        if (i == this.maxIndex + 1) {
            this.initPageIndex(this.len, i);
        }
        else if (i == this.minIndex - 1) {
            this.initPageIndex(this.len, i - this.len + 1);
        }
    };
    /**当选到最右边的导航 */
    PaginationComponent.prototype.next = function () {
        if (this.currentIndex + 1 <= this.maxPage) {
            this.currentIndex += 1;
            // this.parking.getOutParkList(this.currentIndex, { cardNo: '123456' });
            // this.parking.getOutParkList(this.currentIndex);  
            if (this.currentIndex == this.maxIndex + 1) {
                this.initPageIndex(this.len, this.currentIndex);
            }
            else if (this.currentIndex == this.minIndex - 1) {
                this.initPageIndex(this.len, this.currentIndex - this.len + 1);
            }
        }
    };
    /**当选到最左边的导航 */
    PaginationComponent.prototype.back = function () {
        this.currentIndex -= 1;
        this.currentIndex = this.currentIndex < 1 ? 1 : this.currentIndex;
        // this.parking.getOutParkList(this.currentIndex, { cardNo: '123456' });
        // this.parking.getOutParkList(this.currentIndex);  
        if (this.currentIndex == this.maxIndex + 1) {
            this.initPageIndex(this.len, this.currentIndex);
        }
        else if (this.currentIndex == this.minIndex - 1) {
            this.initPageIndex(this.len, this.currentIndex - this.len + 1);
        }
    };
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            template: __webpack_require__("../../../../../src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pagination/pagination.component.scss")],
            inputs: ['maxPage', 'totalSize', 'pageIndex'],
            outputs: ['onInit']
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;


/***/ }),

/***/ "../../../../../src/app/directive/Permission.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var PermissionDirective = (function () {
    function PermissionDirective(templateRef, viewContainer, user) {
        var _this = this;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.user = user;
        this.perArr = ['all'];
        this.condition = [];
        this.user.permission$.subscribe(function (permission) {
            _this.perArr = permission.slice();
            _this.construct();
        });
    }
    Object.defineProperty(PermissionDirective.prototype, "permission", {
        set: function (condition) {
            this.condition = condition;
            this.construct();
        },
        enumerable: true,
        configurable: true
    });
    PermissionDirective.prototype.construct = function () {
        this.viewContainer.clear();
        var isCreate = false;
        for (var j = 0; j < this.perArr.length; j++) {
            for (var i = 0; i < this.condition.length; i++) {
                if (this.condition[i] == this.perArr[j] && isCreate == false) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                    isCreate = true;
                    break;
                }
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PermissionDirective.prototype, "permission", null);
    PermissionDirective = __decorate([
        core_1.Directive({
            selector: '[permission]'
        }),
        __metadata("design:paramtypes", [core_1.TemplateRef, core_1.ViewContainerRef, user_service_1.UserService])
    ], PermissionDirective);
    return PermissionDirective;
}());
exports.PermissionDirective = PermissionDirective;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-cardDownload/menu-cardDownload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>卡号下载</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"mainBox\">\r\n        <div class=\"container\">\r\n            <p *ngIf=\"total\">\r\n                <ng-container *ngIf=\"download != total\">\r\n                    正在下载  {{download}}/{{total}}\r\n                </ng-container>\r\n                <ng-container *ngIf=\"download == total\">\r\n                    下载完成  {{download}}/{{total}}\r\n                </ng-container>\r\n            </p>\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped progress-bar-animated\" [style.width]=\"proportion\"></div>\r\n            </div>\r\n        </div>\r\n        <button class=\"btn btn-primary\" (click)=\"downLoad()\">下载卡号</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-cardDownload/menu-cardDownload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 351px;\n  height: 325px; }\n\n.mainBox {\n  width: 200px;\n  height: 200px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .mainBox .container {\n    padding-right: 0; }\n    .mainBox .container p {\n      text-align: center; }\n  .mainBox button {\n    margin-top: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-cardDownload/menu-cardDownload.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var cardManage_service_1 = __webpack_require__("../../../../../src/app/services/cardManage/cardManage.service.ts");
var cardListDB_1 = __webpack_require__("../../../../../src/app/services/DB/cardListDB.ts");
var MenuCardDownloadComponent = (function () {
    function MenuCardDownloadComponent(card, cardDB) {
        // let a = setInterval(() => {
        //   if (this.download < this.total) {
        //     ++this.download;
        //     this.proportion = (this.download / this.total * 100) + "%";
        //   }
        //   else {
        //     clearInterval(a);
        //   }
        // }, 100);
        var _this = this;
        this.card = card;
        this.cardDB = cardDB;
        this.i = 1;
        this.currentPage = 1;
        this.card.cardInfoDownLoad$.subscribe(function (data) {
            var body = data.collection;
            _this.total = data.totalSize;
            var totalPage = data.totalPage;
            if (_this.currentPage <= totalPage) {
                _this.currentPage += 1;
                _this.card.getCardInfo(_this.currentPage);
                body.forEach(function (element) {
                    _this.i;
                    _this.cardDB.addData(element);
                    _this.download = _this.i++;
                    _this.transPer(_this.download, _this.total);
                });
            }
        });
    }
    MenuCardDownloadComponent.prototype.ngOnInit = function () {
    };
    /**转化百分比 */
    MenuCardDownloadComponent.prototype.transPer = function (download, total) {
        this.proportion = (this.download / this.total * 100) + "%";
    };
    /**查找 */
    MenuCardDownloadComponent.prototype.downLoad = function () {
        this.i = 1;
        this.currentPage = 1;
        this.cardDB.clearDB();
        this.card.getCardInfo(1);
    };
    MenuCardDownloadComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-cardDownload',
            template: __webpack_require__("../../../../../src/app/menupages/menu-cardDownload/menu-cardDownload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-cardDownload/menu-cardDownload.component.scss")]
        }),
        __metadata("design:paramtypes", [cardManage_service_1.CardManageService, cardListDB_1.CardListDBService])
    ], MenuCardDownloadComponent);
    return MenuCardDownloadComponent;
}());
exports.MenuCardDownloadComponent = MenuCardDownloadComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-recordIn/menu-recordIn.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>入场纪录</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"searchBox\">\r\n        <div class=\"tabel-title\">查询条件</div>\r\n        <div class=\"searchPanel\">\r\n            <div>\r\n                <span>卡号</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.cardNo\">\r\n            </div>\r\n\r\n            <div>\r\n                <span>车牌号码</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.carNumber\">\r\n            </div>\r\n\r\n            <div>\r\n                <span>卡类</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.cardType\">\r\n            </div>\r\n            <div class=\"\">\r\n                <button type=\"button\" (click)=\"search()\" class=\"searchbutton\">查询</button>\r\n                <button type=\"button\" (click)=\"reset()\" class=\"resetbutton\">重置</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"tabel-title\">查询结果</div>\r\n\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body,let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.gateNumber}}</td>\r\n                    <td>{{item.comeTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <pagination [maxPage]=\"maxPage\" [totalSize]=\"totalSize\" [pageIndex]=\"pageIndex\"></pagination> -->\r\n    <div class=\"footBox\" *ngIf=\"totalSize\">\r\n        <div>第{{currentIndex}}页，共{{maxPage}}页/共找到{{totalSize}}条数据</div>\r\n        <ul class=\"pagination pagination-sm\">\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1)\" *ngIf=\"maxPage>len\">1</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'back')\">←</li>\r\n            <ng-container *ngIf=\"maxPage\">\r\n                <li class=\"page-item page-link hand\" [ngClass]=\"{active:currentIndex==i}\" (click)=\"indexNav(i)\" *ngFor=\"let i of pageIndex\">{{i}}</li>\r\n            </ng-container>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'next')\">→</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(maxPage)\" *ngIf=\"maxPage>len\">{{maxPage}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-recordIn/menu-recordIn.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-recordIn/menu-recordIn.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var MenuRecordInComponent = (function () {
    function MenuRecordInComponent(parking) {
        this.parking = parking;
        /**入场记录输入对象 */
        this.map = {
            cardNo: "",
            carNumber: "",
            cardType: ""
        };
        /**当前的页数 */
        this.currentIndex = 1;
        /**列表的长度，默认是6 */
        this.len = 6;
        /**分页数组 */
        this.pageIndex = [];
    }
    MenuRecordInComponent.prototype.search = function () {
        this.parking.getInParkList(1, this.map);
    };
    MenuRecordInComponent.prototype.reset = function () {
        this.map = {
            cardNo: "",
            carNumber: "",
            cardType: ""
        };
    };
    MenuRecordInComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.head = ['序号', '卡号', '车牌', '类型', '入场车道', '出场车道', '入场时间', '停车时间', '应收', '实收', '免费原因'];
        this.head = ['序号', '卡号', '车牌号码', '卡类', '入场车道', '入场时间',];
        this.parking.inParkList$.subscribe(function (data) {
            _this.body = data.collection;
            _this.maxPage = Number(data.totalPage);
            _this.totalSize = data.totalSize;
            _this.len = Number(data.totalPage) > _this.len ? _this.len : Number(data.totalPage);
            _this.currentIndex == 1 ? _this.initPageIndex(_this.len, 1) : false;
        });
    };
    /**初始化 */
    MenuRecordInComponent.prototype.initPageIndex = function (len, index) {
        index = index < 1 ? 1 : index;
        this.minIndex = index;
        for (var i = 0; i < len; i++) {
            this.pageIndex[i] = index++;
            this.maxIndex = this.pageIndex[i];
        }
    };
    /**点击导航按钮 */
    MenuRecordInComponent.prototype.indexNav = function (i, mode) {
        if (mode === void 0) { mode = ""; }
        if (mode == "") {
            this.currentIndex = i;
        }
        else if (mode == "back") {
            this.currentIndex - 1 >= 1 ? this.currentIndex -= 1 : this.currentIndex = 1;
        }
        else if (mode == "next") {
            this.currentIndex + 1 <= this.maxPage ? this.currentIndex += 1 : this.currentIndex = this.maxPage;
        }
        this.parking.getInParkList(this.currentIndex, this.map);
        //如果点击的数大于了当前最大的索引值
        if (this.currentIndex >= this.maxIndex) {
            this.initPageIndex(this.len, this.currentIndex);
        }
        else if (this.currentIndex <= this.minIndex) {
            this.initPageIndex(this.len, this.currentIndex - this.len + 1);
        }
        //如果生成的索引数组小于规定的索引数组长度
        if (this.currentIndex + this.len > this.maxPage) {
            this.initPageIndex(this.len, this.maxPage - this.len + 1);
        }
    };
    MenuRecordInComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-recordIn',
            template: __webpack_require__("../../../../../src/app/menupages/menu-recordIn/menu-recordIn.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-recordIn/menu-recordIn.component.scss")]
        }),
        __metadata("design:paramtypes", [parking_service_1.ParkingService])
    ], MenuRecordInComponent);
    return MenuRecordInComponent;
}());
exports.MenuRecordInComponent = MenuRecordInComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-recordOut/menu-recordOut.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>出场纪录</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"searchBox\">\r\n        <div class=\"tabel-title\">查询条件</div>\r\n        <div class=\"searchPanel\">\r\n            <div>\r\n                <span>卡号</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.cardNo\">\r\n            </div>\r\n\r\n            <div>\r\n                <span>车牌号码</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.carNumber\">\r\n            </div>\r\n\r\n            <div>\r\n                <span>卡类</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.cardType\">\r\n            </div>\r\n            <div class=\"\">\r\n                <button type=\"button\" (click)=\"search()\" class=\"searchbutton\">查询</button>\r\n                <button type=\"button\" (click)=\"reset()\" class=\"resetbutton\">重置</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"tabel-title\">查询结果</div>\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body,let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.gateNumber}}</td>\r\n                    <td>{{item.outGateNumber}}</td>\r\n                    <td>{{item.comeTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                    <td>{{item.outTime-item.comeTime | parkingTime }}</td>                    \r\n                    <td>{{item.outTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                    <td>{{item.feeMoney}}</td>\r\n                    <td>{{item.amountReceive}}</td>\r\n                    <td>{{item.freeReason}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <pagination [maxPage]=\"maxPage\" [totalSize]=\"totalSize\" [pageIndex]=\"pageIndex\"></pagination> -->\r\n    <div class=\"footBox\" *ngIf=\"totalSize\">\r\n        <div>第{{currentIndex}}页，共{{maxPage}}页/共找到{{totalSize}}条数据</div>\r\n        <ul class=\"pagination pagination-sm\">\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1)\" *ngIf=\"maxPage>len\">1</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'back')\">←</li>\r\n            <ng-container *ngIf=\"maxPage\">\r\n                <li class=\"page-item page-link hand\" [ngClass]=\"{active:currentIndex==i}\" (click)=\"indexNav(i)\" *ngFor=\"let i of pageIndex\">{{i}}</li>\r\n            </ng-container>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'next')\">→</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(maxPage)\" *ngIf=\"maxPage>len\">{{maxPage}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-recordOut/menu-recordOut.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px; }\n\n.tabel-width {\n  width: 1500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-recordOut/menu-recordOut.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var MenuRecordOutComponent = (function () {
    function MenuRecordOutComponent(parking) {
        this.parking = parking;
        this.map = {
            cardNo: "",
            carNumber: "",
            cardType: ""
        };
        /**当前的页数 */
        this.currentIndex = 1;
        /**列表的长度，默认是6 */
        this.len = 6;
        /**分页数组 */
        this.pageIndex = [];
    }
    MenuRecordOutComponent.prototype.search = function () {
        this.parking.getOutParkList(1, this.map);
    };
    MenuRecordOutComponent.prototype.reset = function () {
        this.map = {
            cardNo: "",
            carNumber: "",
            cardType: ""
        };
    };
    MenuRecordOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.head = ['序号', '卡号', '车牌号码', '卡类', '入场车道', '出场车道', '入场时间', '停车时间', '出场时间', '应收', '实收', '优惠原因'];
        this.parking.outParkList$.subscribe(function (data) {
            _this.body = data.collection;
            _this.maxPage = Number(data.totalPage);
            _this.totalSize = data.totalSize;
            _this.len = Number(data.totalPage) > _this.len ? _this.len : Number(data.totalPage);
            _this.currentIndex == 1 ? _this.initPageIndex(_this.len, 1) : false;
        });
    };
    /**初始化 */
    MenuRecordOutComponent.prototype.initPageIndex = function (len, index) {
        if (index === void 0) { index = 1; }
        index = index < 1 ? 1 : index;
        this.minIndex = index;
        for (var i = 0; i < len; i++) {
            this.pageIndex[i] = index++;
            this.maxIndex = this.pageIndex[i];
        }
    };
    /**点击导航按钮 */
    MenuRecordOutComponent.prototype.indexNav = function (i, mode) {
        if (mode === void 0) { mode = ""; }
        if (mode == "") {
            this.currentIndex = i;
        }
        else if (mode == "back") {
            this.currentIndex - 1 >= 1 ? this.currentIndex -= 1 : this.currentIndex = 1;
        }
        else if (mode == "next") {
            this.currentIndex + 1 <= this.maxPage ? this.currentIndex += 1 : this.currentIndex = this.maxPage;
        }
        this.parking.getOutParkList(this.currentIndex, this.map);
        //如果点击的数大于了当前最大的索引值
        if (this.currentIndex >= this.maxIndex) {
            this.initPageIndex(this.len, this.currentIndex);
        }
        else if (this.currentIndex <= this.minIndex) {
            this.initPageIndex(this.len, this.currentIndex - this.len + 1);
        }
        //如果生成的索引数组小于规定的索引数组长度
        if (this.currentIndex + this.len > this.maxPage) {
            this.initPageIndex(this.len, this.maxPage - this.len + 1);
        }
    };
    MenuRecordOutComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-recordOut',
            template: __webpack_require__("../../../../../src/app/menupages/menu-recordOut/menu-recordOut.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-recordOut/menu-recordOut.component.scss")]
        }),
        __metadata("design:paramtypes", [parking_service_1.ParkingService])
    ], MenuRecordOutComponent);
    return MenuRecordOutComponent;
}());
exports.MenuRecordOutComponent = MenuRecordOutComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-recordRelease/menu-recordRelease.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>无卡放行纪录</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"searchBox\">\r\n        <div class=\"tabel-title\">查询条件</div>\r\n        <div class=\"searchPanel\">\r\n            <div>\r\n                <span>车牌</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.carNumber\">\r\n            </div>\r\n            <div class=\"\">\r\n                <button type=\"button\" (click)=\"search()\" class=\"searchbutton\">查询</button>\r\n                <button type=\"button\" (click)=\"reset()\" class=\"resetbutton\">重置</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"tabel-title\">查询结果</div>\r\n\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body,let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.gateNumber}}</td>\r\n                    <td>{{item.comeTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>                    \r\n                    <td>{{item.outGateNumber}}</td>\r\n                    <td>{{item.outTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                    <td>{{item.createName}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <pagination [maxPage]=\"maxPage\" [totalSize]=\"totalSize\" [pageIndex]=\"pageIndex\"></pagination> -->\r\n    <div class=\"footBox\" *ngIf=\"totalSize\">\r\n        <div>第{{currentIndex}}页，共{{maxPage}}页/共找到{{totalSize}}条数据</div>\r\n        <ul class=\"pagination pagination-sm\">\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1)\" *ngIf=\"maxPage>len\">1</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'back')\">←</li>\r\n            <ng-container *ngIf=\"maxPage\">\r\n                <li class=\"page-item page-link hand\" [ngClass]=\"{active:currentIndex==i}\" (click)=\"indexNav(i)\" *ngFor=\"let i of pageIndex\">{{i}}</li>\r\n            </ng-container>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'next')\">→</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(maxPage)\" *ngIf=\"maxPage>len\">{{maxPage}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-recordRelease/menu-recordRelease.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-recordRelease/menu-recordRelease.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var MenuRecordReleaseComponent = (function () {
    function MenuRecordReleaseComponent(parking) {
        this.parking = parking;
        this.map = {
            carNumber: ""
        };
        /**当前的页数 */
        this.currentIndex = 1;
        /**列表的长度，默认是6 */
        this.len = 6;
        /**分页数组 */
        this.pageIndex = [];
    }
    MenuRecordReleaseComponent.prototype.search = function () {
        this.parking.getReleaseList(1, this.map);
    };
    MenuRecordReleaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.head = ['序号', '车牌', '入场车道', '入场时间', '出场车道', '出场时间', '操作员'];
        this.parking.releaseList$.subscribe(function (data) {
            _this.body = data.collection;
            _this.maxPage = Number(data.totalPage);
            _this.totalSize = data.totalSize;
            _this.len = Number(data.totalPage) > _this.len ? _this.len : Number(data.totalPage);
            _this.currentIndex == 1 ? _this.initPageIndex(_this.len, 1) : false;
        });
    };
    MenuRecordReleaseComponent.prototype.reset = function () {
        this.map = {
            carNumber: ""
        };
    };
    /**初始化 */
    MenuRecordReleaseComponent.prototype.initPageIndex = function (len, index) {
        if (index === void 0) { index = 1; }
        index = index < 1 ? 1 : index;
        this.minIndex = index;
        for (var i = 0; i < len; i++) {
            this.pageIndex[i] = index++;
            this.maxIndex = this.pageIndex[i];
        }
    };
    /**点击导航按钮 */
    MenuRecordReleaseComponent.prototype.indexNav = function (i, mode) {
        if (mode === void 0) { mode = ""; }
        if (mode == "") {
            this.currentIndex = i;
        }
        else if (mode == "back") {
            this.currentIndex - 1 >= 1 ? this.currentIndex -= 1 : this.currentIndex = 1;
        }
        else if (mode == "next") {
            this.currentIndex + 1 <= this.maxPage ? this.currentIndex += 1 : this.currentIndex = this.maxPage;
        }
        this.parking.getReleaseList(this.currentIndex, this.map);
        //如果点击的数大于了当前最大的索引值
        if (this.currentIndex >= this.maxIndex) {
            this.initPageIndex(this.len, this.currentIndex);
        }
        else if (this.currentIndex <= this.minIndex) {
            this.initPageIndex(this.len, this.currentIndex - this.len + 1);
        }
        //如果生成的索引数组小于规定的索引数组长度
        if (this.currentIndex + this.len > this.maxPage) {
            this.initPageIndex(this.len, this.maxPage - this.len + 1);
        }
    };
    MenuRecordReleaseComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-recordRelease',
            template: __webpack_require__("../../../../../src/app/menupages/menu-recordRelease/menu-recordRelease.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-recordRelease/menu-recordRelease.component.scss")]
        }),
        __metadata("design:paramtypes", [parking_service_1.ParkingService])
    ], MenuRecordReleaseComponent);
    return MenuRecordReleaseComponent;
}());
exports.MenuRecordReleaseComponent = MenuRecordReleaseComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-setBaseInfo/menu-setBaseInfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n          <b>基本设置</b>\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"mt20\">\r\n        <div class=\"mt20\">\r\n            <span class=\"inputDesc\">电脑名称</span>\r\n            <input class=\"globalinput\" type=\"text\" [(ngModel)]=\"info.computerName\">\r\n        </div>\r\n        <div class=\"mt20\">\r\n            <span class=\"inputDesc\">MAC地址</span>\r\n            <input class=\"globalinput\" type=\"text\" disabled=\"disabled\" value=\"{{info.macAddress}}\">\r\n        </div>\r\n        <div class=\"mt20\">\r\n            <span class=\"inputDesc\">密码</span>\r\n            <input class=\"globalinput\" type=\"password\" [(ngModel)]=\"info.passWord\">\r\n        </div>\r\n    </div>\r\n    <div class=\"mt20\">\r\n        <button class=\"btn btn-primary globalbutton\" (click)=\"updateBaseInfo()\">保存</button>\r\n        <!-- <button class=\"btn btn-primary globalbutton\" (click)=\"updateBaseInfo()\">更新</button> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-setBaseInfo/menu-setBaseInfo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 500px;\n  height: 400px; }\n\n.inputDesc {\n  display: inline-block;\n  width: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-setBaseInfo/menu-setBaseInfo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var MenuSetBaseInfoComponent = (function () {
    function MenuSetBaseInfoComponent(device, user) {
        var _this = this;
        this.device = device;
        this.user = user;
        this.info = {
            computerName: "",
            macAddress: "",
            passWord: ""
        };
        /*获取控制机信息*/
        this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op == "ret-hb"; }).subscribe(function (data) {
            _this.info.macAddress = data.id_mac;
        });
        // this.user.baseInfo$.subscribe((data)=>{
        //   this.info.PCName = JSON.parse(localStorage.baseInfo).PCName;
        //   this.info.password = JSON.parse(localStorage.baseInfo).password;
        // });
        /**读取本地信息*/
        this.getLocalInfo();
    }
    MenuSetBaseInfoComponent.prototype.ngOnInit = function () {
    };
    MenuSetBaseInfoComponent.prototype.getLocalInfo = function () {
        if (localStorage.baseInfo) {
            this.info.computerName = JSON.parse(localStorage.baseInfo).PCName;
            this.info.passWord = JSON.parse(localStorage.baseInfo).password;
        }
    };
    //同步数据
    MenuSetBaseInfoComponent.prototype.updateBaseInfo = function () {
        localStorage.baseInfo = JSON.stringify(this.info);
        this.user.getBaseInfo(this.info);
    };
    MenuSetBaseInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-setBaseInfo',
            template: __webpack_require__("../../../../../src/app/menupages/menu-setBaseInfo/menu-setBaseInfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-setBaseInfo/menu-setBaseInfo.component.scss")]
        }),
        __metadata("design:paramtypes", [device_service_1.DeviceService, user_service_1.UserService])
    ], MenuSetBaseInfoComponent);
    return MenuSetBaseInfoComponent;
}());
exports.MenuSetBaseInfoComponent = MenuSetBaseInfoComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-setController/menu-setController.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>控制机设置</b>\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"mainBox\">\r\n        <div class=\"listBox\">\r\n            <div *ngFor=\"let controller of controllers\">\r\n                <div class=\"flex_alignItem_center-justifyContent_center\">\r\n                    <p class=\"pr20 fontsize18\">控制机{{controller.hw_id}}</p>\r\n                    <input type=\"checkbox\" [checked]=\"controller.controllerSelect\" (change)=\"controller.controllerSelect=!controller.controllerSelect;toControllerSelect(controller)\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"infoBox\">\r\n            <ul class=\"nav\">\r\n                <li [ngClass]=\"{active:time_panel.isShow}\" (click)=\"changeTabs('time_panel')\">\r\n                    <span>加载时间</span>\r\n                </li>\r\n                <li [ngClass]=\"{active:standard_panel.isShow}\" (click)=\"changeTabs('standard_panel')\">\r\n                    <span>收费标准设置</span>\r\n                </li>\r\n                <!-- <li [ngClass]=\"{active:clear_panel.isShow}\" (click)=\"changeTabs('clear_panel')\">\r\n                    <span>控制机清空</span>\r\n\r\n                </li>\r\n                <li [ngClass]=\"{active:display_panel.isShow}\" (click)=\"changeTabs('display_panel')\">\r\n                    <span>控制机显示屏</span>\r\n                </li> -->\r\n            </ul>\r\n            <div class=\"panel\">\r\n                <div class=\"tabs\" [ngClass]=\"{display:time_panel.isShow}\" style=\"height:620px;\">\r\n                    <div class=\"flex_alignItem_center-justifyContent_center\" style=\"margin-top:38px;\">\r\n                        <p class=\"mr30 width120 fontsize18\">控制机时间</p>\r\n                        <p class=\"borderradius8 textaligncenter lineheight40 height40 borde1 width240\">{{controllertimer}}</p>\r\n                    </div>\r\n                    <div class=\"flex_alignItem_center-justifyContent_center mt20\">\r\n                        <p class=\"mr30 width120 fontsize18\">当前系统时间:</p>\r\n                        <p class=\"borderradius8 textaligncenter lineheight40 height40 borde1 width240\"> {{systemTime|date:\"yyyy-MM-dd HH:mm:ss\"}}</p>\r\n                    </div>\r\n                    <div class=\"mt20\">\r\n                        <button class=\"btn btn-primary\" (click)=\"toReadControllerTime()\">读取时间</button>\r\n                        <button class=\"btn btn-primary\" (click)=\"loadTime()\">加载时间</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tabs\" [ngClass]=\"{display:standard_panel.isShow}\">\r\n                    <!--收费标准部分-->\r\n                    <div class=\"mainBox2\">\r\n                        <div>\r\n                            <div class=\"flex mt10\">\r\n                                <div class=\"flex_alignItem_center width300\">\r\n                                    <div class=\"pr20\">车场卡类</div>\r\n                                    <select required [(ngModel)]=\"chargeObj.cardType\">\r\n                                        <option  [value]=\"36\">临时卡</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"flex_alignItem_center width350\">\r\n                                    <div class=\"pr20\">每日最高收费限额</div>\r\n                                    <input type=\"text\" class=\"borderradius4 pl6 borde1\" [(ngModel)]=\"chargeObj.maxDayFee\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"flex mt10\">\r\n                                <div class=\"flex_alignItem_center width300\">\r\n                                    <div class=\"pr20\">免费分钟</div>\r\n                                    <input type=\"text\" class=\"borderradius4 pl6 borde1\" [(ngModel)]=\"chargeObj.freeMinutes\">\r\n                                </div>\r\n                                <div class=\"flex_alignItem_center width350\">\r\n                                    <div class=\"pr20\">免费分钟是否计费</div>\r\n                                    <input type=\"checkbox\" [(ngModel)]=\"chargeObj.chargeInFreeMinu\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"chargeTitle\"><span style=\"color:red;\">{{chargeTitle}}</span>收费标准</div>\r\n                    <div class=\"container tableBox\">\r\n\r\n                        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n                            <thead class=\"thead-light\">\r\n                                <tr>\r\n                                    <th>序号</th>\r\n                                    <th>小时</th>\r\n                                    <th>收费</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of body;let i = index; trackBy:trackByIndex\">\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>{{i+1}}</td>\r\n                                    <td>\r\n                                        <!-- {{item}} -->\r\n                                        <div style=\"width: 100px;\r\n                                        display: block;\r\n                                        margin: 0 auto;\r\n                                        border-bottom: 1px solid #b0b9c7;\">\r\n                                            <input type=\"text\" [(ngModel)]=\"body[i]\" class=\"chargeInput pl6\">\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"mb50\">\r\n                        <button class=\"btn btn-primary globalbutton\" (click)=\"readControllerCharge()\">读取控制机</button>\r\n                        <button class=\"btn btn-primary globalbutton\" (click)=\"getDataFromCloud()\">读取云端</button>\r\n                        <button class=\"btn btn-primary globalbutton\" (click)=\"sendDataToController()\">下发控制机</button>\r\n                        \r\n                        \r\n                    </div>\r\n                    <!--收费标准部分结束-->\r\n                </div>\r\n                <!-- <div class=\"tabs\" [ngClass]=\"{display:clear_panel.isShow}\">\r\n                    <p>iOS</p>\r\n                </div>\r\n                <div class=\"tabs\" [ngClass]=\"{display:display_panel.isShow}\">\r\n                    <p>iOS</p>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-setController/menu-setController.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title {\n  width: 100%;\n  font-size: 18px;\n  font-family: \"SimHei\";\n  color: #E03612;\n  border-bottom: 1px #E03612 solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title span {\n    padding-top: 12.5px;\n    padding-bottom: 5px; }\n\n.mainBox {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .mainBox .listBox {\n    width: 20%;\n    border-right: 1px #E03612 solid; }\n  .mainBox .infoBox.display {\n    display: none; }\n  .mainBox .infoBox {\n    width: 80%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n    .mainBox .infoBox .nav {\n      width: 100%;\n      height: 30px;\n      font-size: 17px;\n      border-bottom: 1px #E03612 solid; }\n      .mainBox .infoBox .nav li {\n        margin-right: 10px;\n        padding-left: 20px;\n        padding-right: 20px;\n        height: 30px; }\n      .mainBox .infoBox .nav .active {\n        background-color: #E03612;\n        border: 1px #E03612 solid;\n        border-bottom: 1px #FFF solid;\n        color: #ffffff; }\n    .mainBox .infoBox .panel {\n      width: 100%;\n      height: calc(100% - 30px); }\n      .mainBox .infoBox .panel .tabs {\n        width: 100%;\n        height: 628px;\n        display: none; }\n      .mainBox .infoBox .panel .display {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column nowrap;\n                flex-flow: column nowrap;\n        margin-top: 4px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n\n.mainBox2 {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.show {\n  display: block; }\n\n.infoBox {\n  display: none; }\n\n.chargeInput {\n  width: 100px;\n  height: 25px;\n  border: none;\n  text-align: center; }\n\n.chargeTitle {\n  text-align: center;\n  margin: 0 auto;\n  height: 40px;\n  line-height: 40px;\n  font-size: 18px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-setController/menu-setController.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var controller_service_1 = __webpack_require__("../../../../../src/app/services/controller/controller.service.ts");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var MenuSetControllerComponent = (function () {
    function MenuSetControllerComponent(controllerService, deviceService, user) {
        var _this = this;
        this.controllerService = controllerService;
        this.deviceService = deviceService;
        this.user = user;
        this.controllerSelect = false;
        /*选择控制机数组*/
        this.controllerSelectArray = [];
        this.controllers = [];
        /*控制机时间*/
        this.controllerTimeparamsArray = [];
        //tab转化
        this.time_panel = {
            isShow: false
        };
        this.standard_panel = {
            isShow: false
        };
        this.clear_panel = {
            isShow: false
        };
        this.display_panel = {
            isShow: false
        };
        this.deviceTime = new Date().getTime();
        this.systemTime = new Date().getTime();
        /*小时数据数组*/
        this.body = [];
        /*收费标准标题数据*/
        this.chargeTitle = '';
        /**收费页面 */
        this.chargeObj = {
            //卡类
            cardType: "36",
            //收费限额
            maxDayFee: "",
            //免费分钟
            freeMinutes: "",
            //免费分钟是否计费
            chargeInFreeMinu: 0
        };
        this.body.length = 24;
        /*获取控制机信息*/
        this.deviceService.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op === "ret-hb"; }).subscribe(function (data) {
            var checkState = _this.controllers;
            _this.controllers = data.hw;
            var _loop_1 = function (i) {
                checkState.forEach(function (element) {
                    if (element.hw_id == _this.controllers[i].hw_id) {
                        _this.controllers[i]["controllerSelect"] = element.controllerSelect ? element.controllerSelect : false;
                    }
                });
                _this.controllerTimeparamsArray.push(data.hw_id);
            };
            for (var i = 0; i < _this.controllers.length; i++) {
                _loop_1(i);
            }
        });
        /*获取控制机时间*/
        this.deviceService.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op === "ret-get-hw-time"; }).subscribe(function (data) {
            _this.controllertimer = data.ftime;
            var controlertimerSecond = _this.deviceService.timeStringToNumber(_this.controllertimer);
            _this.controllerTimer = window.setInterval(function () {
                /*这里的1000代表一秒*/
                controlertimerSecond = Number(controlertimerSecond + 1000);
                _this.controllertimer = _this.deviceService.timeNumberToString(controlertimerSecond);
            }, 1000);
            // let myNum=Number(22);
        });
        /*得到控制机收费标准数据*/
        this.deviceService.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op === "ret-price-get"; }).subscribe(function (data) {
            if (data.price != null) {
                _this.body = data.price;
                _this.chargeObj = {
                    cardType: "36",
                    maxDayFee: data.day_limit,
                    freeMinutes: data.free_m,
                    chargeInFreeMinu: Number(data.free_m_no_charge)
                };
            }
        });
        /*下发到控制机*/
        this.deviceService.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op === "ret-price-set"; }).subscribe(function (data) {
            console.log("下发数据是");
            console.log(JSON.stringify(data));
        });
        /**订阅云端的数据 */
        this.controllerService.controller$.subscribe(function (data) {
            _this.chargeObj = {
                cardType: "36",
                maxDayFee: data.maxDayFee,
                freeMinutes: data.freeMinutes,
                chargeInFreeMinu: data.chargeInFreeMinu
            };
            if (data.feestandardItems && data.feestandardItems.length > 0) {
                _this.chargeTitle = "云端";
                data.feestandardItems.forEach(function (element) {
                    /*先新建一个数组，将得到的数据数组中的对象的键和值赋值给新建数组的键*/
                    _this.body[element.parkHour - 1] = element.parkMoney;
                });
            }
            localStorage.feeStandard = JSON.stringify(_this.chargeObj);
        });
        /*通过sendHb方法得到订阅的数据*/
        this.deviceService.sendHb();
    }
    MenuSetControllerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.time_panel.isShow = true;
        /*请求控制机数据*/
        // this.controllerService.sendRequestToGetTime("1");
        this.user.isLogin = false;
        /*更新当前系统时间*/
        setInterval(function () {
            _this.systemTime = new Date().getTime();
        }, 1000);
    };
    /*加载时间选项卡*/
    MenuSetControllerComponent.prototype.toControllerSelect = function (ctrlObject) {
        if (ctrlObject.controllerSelect) {
            this.controllerSelectArray.push(ctrlObject);
        }
        else {
            if (this.controllerSelectArray.length > 0) {
                for (var i = 0; i < this.controllerSelectArray.length; i++) {
                    if (this.controllerSelectArray[i] == ctrlObject) {
                        this.controllerSelectArray.splice(i, 1);
                    }
                }
            }
        }
        this.controllerSelectArray.sort(this.sortType);
    };
    /*数组根据type进行排序排序*/
    MenuSetControllerComponent.prototype.sortType = function (a, b) {
        return parseInt(a.type) - parseInt(b.type);
    };
    MenuSetControllerComponent.prototype.toReadControllerTime = function () {
        if (this.controllerSelectArray.length > 0) {
            this.deviceService.sendGetTime(this.controllerSelectArray[0].hw_id);
            /*请求完数据，清除定时器和清空值*/
            if (this.controllerTimer != null) {
                window.clearInterval(this.controllerTimer);
                this.controllertimer = null;
            }
        }
    };
    /*加载时间*/
    MenuSetControllerComponent.prototype.loadTime = function () {
    };
    /*点击切换选项卡*/
    MenuSetControllerComponent.prototype.changeTabs = function (labelName) {
        this.closeAllTabs();
        switch (labelName) {
            case 'time_panel':
                this.time_panel.isShow = true;
                return;
            case 'standard_panel':
                this.standard_panel.isShow = true;
                return;
            case 'clear_panel':
                this.clear_panel.isShow = true;
                return;
            case 'display_panel':
                this.display_panel.isShow = true;
                return;
            default:
                this.time_panel.isShow = true;
                return;
        }
    };
    MenuSetControllerComponent.prototype.closeAllTabs = function () {
        this.time_panel.isShow = false;
        this.standard_panel.isShow = false;
        this.clear_panel.isShow = false;
        this.display_panel.isShow = false;
    };
    MenuSetControllerComponent.prototype.selectControllerNumber = function (i) {
        console.log("i=" + i);
        /*<li *ngFor="let controller of controllers; let i=index" (click)="selectControllerNumber(i)">{{controller.name}}</li> */
        this.controllers[i].isShow = true;
    };
    /*获取云端数据*/
    MenuSetControllerComponent.prototype.getDataFromCloud = function () {
        /*请求服务数据*/
        this.controllerService.getControllerData();
    };
    MenuSetControllerComponent.prototype.readControllerCharge = function () {
        /*用户没勾选项控制机*/
        if (this.controllerSelectArray.length > 0) {
            console.log("控制机");
            this.chargeTitle = "控制机";
            this.deviceService.sendGetFeeRules(this.controllerSelectArray[0].hw_id);
        }
        else {
            alert("请勾选控制机");
        }
    };
    MenuSetControllerComponent.prototype.sendDataToController = function () {
        if (this.controllerSelectArray.length > 0) {
            var controllerParams = {
                priceArray: this.body,
                free_time: this.chargeObj.freeMinutes,
                day_limit: this.chargeObj.maxDayFee,
                free_m_no_charge: String(this.chargeObj.chargeInFreeMinu),
            };
            localStorage.feeStandard = JSON.stringify({
                cardType: "36",
                maxDayFee: Number(this.chargeObj.maxDayFee),
                freeMinutes: Number(this.chargeObj.freeMinutes),
                chargeInFreeMinu: String(this.chargeObj.chargeInFreeMinu)
            });
            for (var i = 0; i < this.controllerSelectArray.length; i++) {
                this.deviceService.sendSetFeeRules(this.controllerSelectArray[i].hw_id, controllerParams);
            }
        }
        else {
            alert("请勾选控制机");
        }
    };
    MenuSetControllerComponent.prototype.trackByIndex = function (index, value) {
        // return index;
    };
    MenuSetControllerComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-setController',
            template: __webpack_require__("../../../../../src/app/menupages/menu-setController/menu-setController.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-setController/menu-setController.component.scss")]
        }),
        __metadata("design:paramtypes", [controller_service_1.ControllerService, device_service_1.DeviceService, user_service_1.UserService])
    ], MenuSetControllerComponent);
    return MenuSetControllerComponent;
}());
exports.MenuSetControllerComponent = MenuSetControllerComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-setDeviceNo/menu-setDeviceNo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  menu-setDeviceNo works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-setDeviceNo/menu-setDeviceNo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-setDeviceNo/menu-setDeviceNo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MenuSetDeviceNoComponent = (function () {
    function MenuSetDeviceNoComponent() {
    }
    MenuSetDeviceNoComponent.prototype.ngOnInit = function () {
    };
    MenuSetDeviceNoComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-setDeviceNo',
            template: __webpack_require__("../../../../../src/app/menupages/menu-setDeviceNo/menu-setDeviceNo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-setDeviceNo/menu-setDeviceNo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuSetDeviceNoComponent);
    return MenuSetDeviceNoComponent;
}());
exports.MenuSetDeviceNoComponent = MenuSetDeviceNoComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-setFeeStandard/menu-setFeeStandard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\n  <close-button class=\"close-button\"></close-button>\n\n  <div class=\"title\">\n    <span>\n      <b>收费设置</b>\n    </span>\n  </div>\n\n  <div class=\"mainBox\">\n    <div>\n      <div>收费标准</div>\n      <div>\n        <div>\n          <div>车场卡类</div>\n          <select required [(ngModel)]=\"standard.type\">\n            <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n          </select>\n        </div>\n        <div>\n          <div>每日最高收费限额</div>\n          <input type=\"text\" [(ngModel)]=\"standard.topFee\">\n        </div>\n        <div>\n          <div>免费分钟</div>\n          <input type=\"text\" [(ngModel)]=\"standard.freeTime_min\">\n        </div>\n        <div>\n          <div>免费分钟是否计费</div>\n          <input type=\"checkbox\" [(ngModel)]=\"standard.isFeeInFree\">\n        </div>\n      </div>\n      <button>保存</button>\n    </div>\n  </div>\n\n  <div class=\"container tableBox\">\n      <table class=\"table table-striped tabel-width table-bordered table-hover\">\n          <thead class=\"thead-light\">\n              <tr>\n                  <th>小时</th>\n                  <th>收费</th>\n              </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor=\"let item of body\">\n                  <td>{{item.hour}}</td>\n                  <td>{{item.fee}}</td>\n              </tr>\n          </tbody>\n      </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-setFeeStandard/menu-setFeeStandard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title {\n  width: 100%;\n  font-size: 18px;\n  font-family: \"SimHei\";\n  color: #E03612;\n  border-bottom: 1px #E03612 solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title span {\n    padding-top: 12.5px;\n    padding-bottom: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-setFeeStandard/menu-setFeeStandard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MenuSetFeeStandardComponent = (function () {
    function MenuSetFeeStandardComponent() {
        this.standard = {
            type: '临时卡',
            topFee: 10000,
            freeTime_min: 60,
            isFeeInFree: false
        };
        this.types = [
            '临时卡', '月卡'
        ];
        this.body = [];
    }
    MenuSetFeeStandardComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 24; i++) {
            var item = {
                hour: i + 1,
                fee: ""
            };
            this.body.push(item);
        }
    };
    MenuSetFeeStandardComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-setFeeStandard',
            template: __webpack_require__("../../../../../src/app/menupages/menu-setFeeStandard/menu-setFeeStandard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-setFeeStandard/menu-setFeeStandard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuSetFeeStandardComponent);
    return MenuSetFeeStandardComponent;
}());
exports.MenuSetFeeStandardComponent = MenuSetFeeStandardComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-setRoad/menu-setRoad.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>车道设置</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"infoBox\">\r\n        <ul class=\"nav\">\r\n            <li [ngClass]=\"{active:parking_panel.isShow}\" (click)=\"changeTabs('parking_panel')\">\r\n                <span>车场设置</span>\r\n            </li>\r\n            <li [ngClass]=\"{active:road_panel.isShow}\" (click)=\"changeTabs('road_panel')\">\r\n                <span>车道设置</span>\r\n            </li>\r\n            <!-- <div style=\"height:1px;width:100%;background-color:red;\"></div> -->\r\n        </ul>\r\n        <div class=\"panel\">\r\n            <div class=\"tabs\" [ngClass]=\"{display:parking_panel.isShow}\" style=\"margin-top:5px\">\r\n                <div class=\"parking-panel\">\r\n                    <div style=\"margin-top:10px;\" class=\"searchBox\">\r\n                        <div class=\"tabel-title\">收费设置</div>\r\n                        <div class=\"searchPanel\">\r\n                            <div class=\"col-md-3\">\r\n                                <p class=\"\">收费方式</p>\r\n                                <select required [(ngModel)]=\"parking_panel.parkingOpt.rechargeType\">\r\n                                    <option *ngFor=\"let flags of parking_panel.feeMethods\" [value]=\"flags.value\">{{flags.label}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"searchPanel\">\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否允许折扣</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.discountAllow\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p class=\"\">折扣方式</p>\r\n                                <select required [(ngModel)]=\"parking_panel.parkingOpt.discountType\">\r\n                                    <option *ngFor=\"let flags of parking_panel.discountMethods\" [value]=\"flags.value\">{{flags.label}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>收费是否有小数</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.chargeDecimal\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"searchPanel\">\r\n                            <div class=\"col-md-3\">\r\n                                <p>月卡过期是否收费</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.monthlyOverFee\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>临时车是否允许免费放行</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.isFreeTemporaryCard\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否禁止无卡放行</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.noCardRelease\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"searchBox\">\r\n                        <div class=\"tabel-title\">IC/ID卡设置</div>\r\n                        <div class=\"searchPanel\">\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否ID控制进出</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.IDControlInOrOut\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否ID卡不压地感读卡</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.IDNoGetRead\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否ID临时卡出场可以取消</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.temporaryCardOutCancelled\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否实时下载有效卡号</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.realTimeDownloadValidCard\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"searchBox\">\r\n                        <div class=\"tabel-title\">语音</div>\r\n                        <div class=\"searchPanel\">\r\n                            <div class=\"col-md-3\" style=\"width:324px;\">\r\n                                <p>月卡到期提示天数</p>\r\n                                <input type=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.monthCardExpireTipNum\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否显示停车时间</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.showShopTime\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否播报车牌</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.broadcastCardNum\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"searchBox\">\r\n                        <div class=\"tabel-title\">其它</div>\r\n                        <div class=\"searchPanel\">\r\n                            <div class=\"col-md-3\" style=\"width:197px;\">\r\n                                <p>时间加载方式</p>\r\n                                <select required [(ngModel)]=\"parking_panel.parkingOpt.timeLoadingType\">\r\n                                    <option *ngFor=\"let flags of parking_panel.loadTimeMethods\" [value]=\"flags.value\">{{flags.label}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-md-3\" style=\"width:300px;\">\r\n                                <p>时间加载间隔(s)</p>\r\n                                <input type=\"text\" class=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.timeInterval\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>中心收费超时(s)</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.centerFeeTimeout\">\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"searchBox\">\r\n                        <div class=\"searchPanel\">\r\n                            <div class=\"col-md-3\" style=\"width:288px;\">\r\n                                <p>中心超时金额</p>\r\n                                <input type=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.centerTimeoutFee\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>满位灯箱</p>\r\n                                <input type=\"text\" [(ngModel)]=\"road.entryName\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>满位机号</p>\r\n                                <input type=\"text\" [(ngModel)]=\"road.entryName\">\r\n                            </div>\r\n                            <div class=\"col-md-3\" style=\"width:288px;\">\r\n                                <p>中心超时金额</p>\r\n                                <input type=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.centerTimeoutFee\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"searchBox\">\r\n                        <div class=\"searchPanel\">\r\n\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否显示道闸状态</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.showGateStatus\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否显示卡机状态</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.showCardMachineStatus\">\r\n\r\n                            </div>\r\n                            <div class=\"col-md-3\" style=\"width:288px;\">\r\n                                <p>进出时间间隔</p>\r\n                                <input type=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.inOrOutTimeInterval\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否可进出免费车</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.isCanFreeCars\">\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"searchBox\">\r\n                        <div class=\"searchPanel\">\r\n\r\n                            <div class=\"col-md-3\">\r\n                                <p>满位灯箱</p>\r\n                                <input type=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.fullLightBox\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>满位机号</p>\r\n                                <input type=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.fullDeviceNum\">\r\n                            </div>\r\n                            <div class=\"col-md-3\" style=\"width:288px;\">\r\n                                <p>满位串口</p>\r\n                                <input type=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.fullPort\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>是否满位禁止读卡</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.fullBanCardRead\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"searchBox\">\r\n                        <div class=\"searchPanel\">\r\n                            <div class=\"col-md-3\" style=\"width:288px;\">\r\n                                <p>总车位数</p>\r\n                                <input type=\"text\" class=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.totalTruckSpaceNum\">\r\n                            </div>\r\n                            <div class=\"col-md-3\" style=\"width:288px;\">\r\n                                <p>临时车位数</p>\r\n                                <input type=\"text\" class=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.temporaryTruckSpaceNum\">\r\n                            </div>\r\n                            <div class=\"col-md-3\" style=\"width:288px;\">\r\n                                <p>固定车位数</p>\r\n                                <input type=\"text\" class=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.fixationTruckSpaceNum\">\r\n                            </div>\r\n                            <div class=\"col-md-3\" style=\"width:288px;\">\r\n                                <p>控制机是否显示剩余车位</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.showRemainingTruckSpaceNum\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"searchBox\">\r\n                        <div class=\"searchPanel\">\r\n                            <div class=\"col-md-3\" style=\"width:288px;\">\r\n                                <p style=\"width:288px;\">收费显屏</p>\r\n                                <input type=\"text\" class=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.rechargeScreen\">\r\n                            </div>\r\n                            <div class=\"col-md-3\" style=\"width:288px;\">\r\n                                <p style=\"width:288px;\">收屏串口</p>\r\n                                <input type=\"text\" class=\"text\" [(ngModel)]=\"parking_panel.parkingOpt.closedScreenPort\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>控制机是否显示发布信息</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.showReleaseInformation\">\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                <p>控制机显示星期</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.controlShowWeek\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"searchBox\">\r\n                        <div class=\"searchPanel\">\r\n                            <div class=\"col-md-3\">\r\n                                <p>收费票据是否打印</p>\r\n                                <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"parking_panel.parkingOpt.billPrinting\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"searchBox row_center_center\" style=\"height:220px;\">\r\n                        <button class=\"btn btn-primary globalbutton\" style=\"height:auto;margin-right:100px\" (click)=\"submit()\">设置</button>\r\n                        <button class=\"btn btn-primary globalbutton\" style=\"height:auto;\" (click)=\"getList()\">获取数据</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tabs\" [ngClass]=\"{display:road_panel.isShow}\" style=\"margin-top:25px;\">\r\n                <div class=\"container tableBox\">\r\n                    <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n                        <thead class=\"thead-light\">\r\n                            <th>车道编号</th>\r\n                            <th>出入标记</th>\r\n                            <th>出入口名称</th>\r\n                            <th>控制机号</th>\r\n                            <!-- <th>开闸机号</th> -->\r\n                            <th>开闸方式</th>\r\n                            <!-- <th>视频卡编号</th> -->\r\n                            <!-- <th>大小车场</th> -->\r\n                            <th>出卡机</th>\r\n                            <th>是否监控</th>\r\n                            <th>检测卡口</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let road of road_panel.roadArray\">\r\n                                <td>{{road.laneMarking}}</td>\r\n                                <td>\r\n                                    <select required [(ngModel)]=\"road.entryMarking\">\r\n                                        <option *ngFor=\"let flags of road_panel.gateFlags\" [value]=\"flags.value\">{{flags.label}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <td>\r\n                                    <input type=\"text\" [(ngModel)]=\"road.entryName\">\r\n                                </td>\r\n                                <td>\r\n                                    <select required [(ngModel)]=\"road.controlNum\" style=\"width: 50px;\">\r\n                                        <option *ngFor=\"let cotroller of road_panel.cotrollers\" [value]=\"cotroller\">{{cotroller}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <!-- <td>\r\n                        <select required [(ngModel)]=\"road.openedNum\">\r\n                        <option *ngFor=\"let gate of gates\" [value]=\"gate\">{{gate}}</option></select>\r\n                        </td> -->\r\n                                <td>\r\n                                    <select required [(ngModel)]=\"road.openedType\">\r\n                                        <option *ngFor=\"let method of road_panel.openMethods\" [value]=\"method.value\">{{method.label}}</option>\r\n                                    </select>\r\n                                </td>\r\n                                <!-- <td>\r\n                        <select required [(ngModel)]=\"road.videoCardNum\">\r\n                        <option *ngFor=\"let video of videos\" [value]=\"video.value\">{{video.label}}</option></select>\r\n                        </td>\r\n                        <td>\r\n                        <select required [(ngModel)]=\"road.garageMarking\">\r\n                        <option *ngFor=\"let parking of parkings\" [value]=\"parking.value\">{{parking.label}}</option></select>\r\n                        </td> -->\r\n                                <td>\r\n                                    <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"road.isCardMachine\">\r\n                                </td>\r\n                                <td>\r\n                                    <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"road.isMonitoring\">\r\n                                </td>\r\n                                <td>\r\n                                    <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"road.inspectionMarking\">\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div style=\"margin:0 auto;\">\r\n                    <button class=\"btn btn-primary globalbutton\" style=\"height:auto;\" (click)=\"coverShow=true;\">新增</button>\r\n                    <button class=\"btn btn-primary globalbutton\" style=\"height:auto;\" (click)=\"submit()\">设置</button>\r\n                    <button class=\"btn btn-primary globalbutton\" style=\"height:auto;\" (click)=\"getList()\">获取数据</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<!--新增弹出框-->\r\n<div style=\"position:fixed;top:30px;left:0;bottom:0;right:0;z-index:1;\" *ngIf=\"coverShow\">\r\n    <div class=\"point\">\r\n        <div class=\"pop\">\r\n            <div class=\"searchBox\">\r\n                <div class=\"tabel-title\">新增</div>\r\n                <div class=\"searchPanel\">\r\n                    <div class=\"col-md-3\" style=\"width:197px;margin-right:38px;\">\r\n                        <p>车道编号</p>\r\n                        <input type=\"text\" [(ngModel)]=\"addObject.addRoadNumber\" class=\"text\" style=\"width:165px;\">\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <p>出入标识</p>\r\n                        <select required [(ngModel)]=\"addObject.entranceAndExit_Identification\">\r\n                                <option *ngFor=\"let flags of road_panel.gateFlags\" [value]=\"flags.value\">{{flags.label}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-3\" style=\"width:300px;\">\r\n                        <p>出入口名称</p>\r\n                        <input type=\"text\" [(ngModel)]=\"addObject.entranceAndExit\" class=\"text\" style=\"width:165px;\">\r\n                    </div>\r\n                    <div class=\"col-md-3\" style=\"margin-left:45px;\">\r\n                        <p>出卡机</p>\r\n                        <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"addObject.getCard\">\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"searchBox\">\r\n\r\n                <div class=\"searchPanel\">\r\n                    <!-- <div class=\"col-md-3\" style=\"width:300px;\">\r\n                        <p>是否监控</p>\r\n                        <input type=\"text\" class=\"text\" style=\"width:165px;\">\r\n                    </div> -->\r\n                    <div class=\"col-md-3\" style=\"\">\r\n                        <p>是否监控</p>\r\n                        <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"addObject.Monitor\">\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <p>检查卡口</p>\r\n                        <input type=\"checkbox\" [(ngModel)]=\"addObject.checkCard\" class=\"checkbox\">\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <p>控制机号</p>\r\n                        <select required [(ngModel)]=\"addObject.addcontroller\">\r\n                            <option *ngFor=\"let controller of addObject.addControllerArray\" [value]=\"controller.value\">{{controller.label}}</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <p>开闸方式</p>\r\n                        <select required [(ngModel)]=\"addObject.openWay\">\r\n                            <option *ngFor=\"let openMethodsArray of parkdic.openMethods\"  [value]=\"openMethodsArray.value\">{{openMethodsArray.label}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex_justifyContent_center\" style=\"margin-top:25px;\">\r\n                <button class=\"btn btn-primary globalbutton\" style=\"height:auto;margin-right:20px;\" (click)=\"coverShow=false;add()\">确定</button>\r\n                <button class=\"btn btn-primary globalbutton\" style=\"height:auto;\" (click)=\"coverShow=false;toCancel()\">取消</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-setRoad/menu-setRoad.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.wrapBox {\n  width: 1000px;\n  height: 700px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title {\n  width: 100%;\n  font-size: 18px;\n  font-family: \"SimHei\";\n  color: #E03612;\n  border-bottom: 1px #E03612 solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title span {\n    padding-top: 12.5px;\n    padding-bottom: 5px; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  height: 30px; }\n\n.checkbox {\n  width: 20px;\n  height: 20px; }\n\n.tabel-width {\n  text-align: center; }\n\n.select {\n  scrollbar-face-color: #FFFFFF;\n  scrollbar-shadow-color: #C1C1BB;\n  scrollbar-highlight-color: #C1C1BB;\n  scrollbar-3dlight-color: #EBEBE4;\n  scrollbar-darkshadow-color: #EBEBE4;\n  scrollbar-track-color: #F4F4F0;\n  scrollbar-arrow-color: #CACAB7;\n  position: absolute;\n  display: none;\n  width: 75px;\n  height: 80px;\n  overflow: scroll;\n  overflow-x: hidden;\n  border: #333333 1px solid;\n  border-top: none;\n  cursor: default; }\n\n.infoBox {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .infoBox .nav {\n    width: 100%;\n    height: 35px;\n    font-size: 17px;\n    border-bottom: 1px #E03612 solid; }\n    .infoBox .nav li {\n      margin-right: 10px;\n      padding-left: 20px;\n      padding-right: 20px;\n      line-height: 40px; }\n    .infoBox .nav .active {\n      background-color: #E03612;\n      color: #ffffff;\n      line-height: 40px;\n      z-index: 2; }\n  .infoBox .panel {\n    width: 100%;\n    height: calc(100% - 40px);\n    z-index: 1; }\n    .infoBox .panel .tabs {\n      width: 100%;\n      height: 100%;\n      display: none; }\n      .infoBox .panel .tabs .parking-panel {\n        height: 100%;\n        overflow-x: hidden;\n        overflow-y: scroll; }\n    .infoBox .panel .display {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column nowrap;\n              flex-flow: column nowrap; }\n\n.show {\n  display: block; }\n\n.searchPanel div {\n  width: 200px; }\n\n.searchPanel .chargeP {\n  font-size: 16px;\n  width: 203px; }\n\n.searchBox .searchPanel {\n  margin-top: 13px;\n  color: #333333; }\n\n.searchPanel div .checkbox {\n  width: 20px;\n  height: 20px; }\n\n.searchPanel div .text {\n  width: 200px;\n  height: 30px; }\n\n.searchBox .searchPanel div {\n  margin-right: 0;\n  /* margin-right: 25px; */ }\n\n.width250 {\n  width: 250px !important; }\n\n.width280 {\n  width: 280px !important; }\n\n.checkbox11 {\n  width: 120px;\n  height: 40px;\n  background-color: #333333;\n  margin: 20px 60px;\n  border-radius: 50px;\n  position: relative; }\n\n.checkbox11::before {\n  content: \"\\662F\";\n  position: absolute;\n  top: 12px;\n  left: 13px;\n  height: 2px;\n  color: #26CA28;\n  font-size: 16px; }\n\n.checkbox11::after {\n  content: \"\\5426\";\n  position: absolute;\n  top: 12px;\n  left: 84px;\n  height: 2px;\n  color: #ddd;\n  font-size: 16px; }\n\n.point {\n  position: fixed;\n  left: 80px;\n  top: 200px;\n  background-color: black;\n  z-index: 100;\n  bottom: 270px;\n  right: 80px; }\n\n.pop {\n  width: 100%;\n  height: 100%;\n  border: 2px solid red;\n  background-color: #e5e5e5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-setRoad/menu-setRoad.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var road_service_1 = __webpack_require__("../../../../../src/app/services/road/road.service.ts");
var roadListDB_1 = __webpack_require__("../../../../../src/app/services/DB/roadListDB.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var parkingDictionary_1 = __webpack_require__("../../../../../src/app/services/constants/parkingDictionary.ts");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var MenuSetRoadComponent = (function () {
    // addcontroller:any;
    // openWay:any;
    // addRoadNumber:any;
    // entranceAndExit:any;
    // Monitor:any;
    // checkCard:any;
    // getCard:any;
    // addControllerArray=[
    //   {
    //     label: '控制机1',
    //     value: '1'
    //   },
    //   {
    //     label: '控制机2',
    //     value: '2'
    //   }
    // ];
    // addController
    function MenuSetRoadComponent(road, roadDB, user, parkdic, device) {
        var _this = this;
        this.road = road;
        this.roadDB = roadDB;
        this.user = user;
        this.parkdic = parkdic;
        this.device = device;
        /**tab */
        this.parking_panel = {
            isShow: false,
            parkingOpt: {},
            //折扣方式选项
            discountMethods: this.parkdic.discountMethods,
            //收费方式选项
            feeMethods: this.parkdic.feeMethods,
            //加载时间方式选项      
            loadTimeMethods: this.parkdic.loadTimeMethods,
            /*模态框显示和隐藏*/
            coverShow: false
        };
        this.road_panel = {
            isShow: false,
            roadArray: [],
            gateFlags: this.parkdic.gateFlags,
            cotrollers: [],
            gates: [],
            openMethods: this.parkdic.openMethods,
        };
        // roadArray;
        // /**出入标记 */
        // flags;
        // /**控制机号 */
        // cotrollers;
        // /**开闸机号 */
        // gates;
        // /**开闸方式 */
        // methods;
        /*新增数据*/
        this.addObject = {
            addcontroller: "",
            openWay: "",
            addRoadNumber: "",
            entranceAndExit_Identification: "",
            entranceAndExit: "",
            Monitor: false,
            checkCard: false,
            getCard: false,
            addControllerArray: [
                {
                    label: '控制机1',
                    value: '1'
                },
                {
                    label: '控制机2',
                    value: '2'
                }
            ]
        };
        // this.road_panel.roadArray = [];
        //当车道信息更新时，覆盖本地数据库
        this.road.roadList$.subscribe(function (roadObj) {
            _this.road_panel.roadArray = roadObj.collection;
            //覆盖数据
            _this.roadDB.clearDB();
            roadObj.collection.forEach(function (element) {
                _this.roadDB.addData(element);
            });
        });
        //当车场信息更新时，覆盖本地数据库
        this.road.parkOptList$.subscribe(function (parkOptList) {
            _this.parking_panel.parkingOpt = parkOptList;
        });
        /*获取控制机信息*/
        this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op === "ret-hb"; }).subscribe(function (data) {
            _this.road_panel.cotrollers = [];
            data.hw.forEach(function (element) {
                _this.road_panel.cotrollers.push(element.hw_id);
            });
        });
        // this.device.cotrollers
    }
    MenuSetRoadComponent.prototype.ngOnInit = function () {
        this.user.isLogin = false;
        this.parking_panel.isShow = true;
        this.road.getParkingOptList();
        this.road.getRoadList(1);
    };
    MenuSetRoadComponent.prototype.add = function () {
        console.log(this.addObject);
        this.road.getParksettingAddData(this.addObject);
    };
    MenuSetRoadComponent.prototype.submit = function () {
        console.log(this.road_panel.roadArray);
    };
    MenuSetRoadComponent.prototype.getList = function () {
        this.road.getRoadList(1);
        console.log(1221);
    };
    /*加载时间选项卡结束*/
    MenuSetRoadComponent.prototype.changeTabs = function (labelName) {
        this.closeAllTabs();
        switch (labelName) {
            case 'parking_panel':
                this.parking_panel.isShow = true;
                return;
            case 'road_panel':
                this.road_panel.isShow = true;
                return;
            default:
                this.parking_panel.isShow = true;
                return;
        }
    };
    MenuSetRoadComponent.prototype.closeAllTabs = function () {
        this.parking_panel.isShow = false;
        this.road_panel.isShow = false;
    };
    MenuSetRoadComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-setRoad',
            template: __webpack_require__("../../../../../src/app/menupages/menu-setRoad/menu-setRoad.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-setRoad/menu-setRoad.component.scss")]
        }),
        __metadata("design:paramtypes", [road_service_1.RoadService, roadListDB_1.RoadListDBService, user_service_1.UserService, parkingDictionary_1.ParkingDictionary, device_service_1.DeviceService])
    ], MenuSetRoadComponent);
    return MenuSetRoadComponent;
}());
exports.MenuSetRoadComponent = MenuSetRoadComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateCardInfo/menu-updateCardInfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>卡片信息</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body,let i = index\">\r\n                        <td>{{i+1}}</td>\r\n                        <td>{{item.cardNo}}</td>\r\n                        <td>{{item.carNumber}}</td>\r\n                        <td>{{item.cardType}}</td>\r\n                        <td>{{item.ownerName}}</td>\r\n                        <td>{{item.phoneNo}}</td>\r\n                        <td>{{item.endDate | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateCardInfo/menu-updateCardInfo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title {\n  width: 100%;\n  font-size: 18px;\n  font-family: \"SimHei\";\n  color: #E03612;\n  border-bottom: 1px #E03612 solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title span {\n    padding-top: 12.5px;\n    padding-bottom: 5px; }\n\n.searchPanel {\n  width: 329px;\n  color: #E03612;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .searchPanel div {\n    margin-right: 5px; }\n    .searchPanel div input {\n      width: 100px; }\n\n.resetbutton {\n  font-size: 14px;\n  color: #354052;\n  border-style: none;\n  min-width: 50px;\n  min-height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #e3e5ec;\n  background-color: #EFF1F7; }\n\n.resetbutton:active {\n  outline: none;\n  background-color: #e3e5ec; }\n\n.resetbutton:focus {\n  outline: none; }\n\n.searchbutton {\n  font-size: 14px;\n  border-style: none;\n  min-width: 50px;\n  min-height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #FF6003;\n  background-color: #E03612;\n  color: #EFF1F7;\n  margin-right: 5px;\n  background-color: #FF6003; }\n\n.searchbutton:active {\n  outline: none;\n  background-color: #FF6003; }\n\n.searchbutton:focus {\n  outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateCardInfo/menu-updateCardInfo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var cardListDB_1 = __webpack_require__("../../../../../src/app/services/DB/cardListDB.ts");
var MenuUpdateCardInfoComponent = (function () {
    function MenuUpdateCardInfoComponent(cardDB) {
        var _this = this;
        this.cardDB = cardDB;
        this.head = ['序号', '卡号', '车牌号码', '类型', '车主姓名', '手机号码', '有效截至日期'];
        this.iiii = 0;
        this.cardDB.cardList$.subscribe(function (cardList) {
            _this.body = cardList;
        });
    }
    MenuUpdateCardInfoComponent.prototype.ngOnInit = function () {
        this.cardDB.getList();
    };
    MenuUpdateCardInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-updateCardInfo',
            template: __webpack_require__("../../../../../src/app/menupages/menu-updateCardInfo/menu-updateCardInfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-updateCardInfo/menu-updateCardInfo.component.scss")]
        }),
        __metadata("design:paramtypes", [cardListDB_1.CardListDBService])
    ], MenuUpdateCardInfoComponent);
    return MenuUpdateCardInfoComponent;
}());
exports.MenuUpdateCardInfoComponent = MenuUpdateCardInfoComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateInParking/menu-updateInParking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>同步入场记录</b>\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"container tableBox\" style=\"height: 80%;\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body,let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.gateNumber}}</td>\r\n                    <td>{{item.comeTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n    <!-- <button (click)=\"addData()\">增添一条数据</button> -->\r\n    <button class=\"btn btn-primary globalbutton\" (click)=\"sendData()\">同步到云端</button>\r\n    <!-- <button (click)=\"clear()\">删除所有数据</button>\r\n    <button (click)=\"delete()\">删除一条数据</button> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateInParking/menu-updateInParking.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateInParking/menu-updateInParking.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var roadListDB_1 = __webpack_require__("../../../../../src/app/services/DB/roadListDB.ts");
var inparkListDB_1 = __webpack_require__("../../../../../src/app/services/DB/inparkListDB.ts");
var MenuUpdateInParkingComponent = (function () {
    function MenuUpdateInParkingComponent(inpark, parking, device, road) {
        var _this = this;
        this.inpark = inpark;
        this.parking = parking;
        this.device = device;
        this.road = road;
        this.head = ['序号', '卡号', '车牌', '类型', '入场车道', '入场时间'];
        this.inpark.inParkList$.subscribe(function (inList) {
            _this.body = inList;
        });
    }
    MenuUpdateInParkingComponent.prototype.ngOnInit = function () {
        this.inpark.getList();
    };
    MenuUpdateInParkingComponent.prototype.addData = function () {
        var adminUser = JSON.parse(localStorage.adminUser);
        var comm = new Date().getTime();
        var data = {
            adminUserId: adminUser.adminUserId,
            parkId: adminUser.parkId,
            createId: adminUser.createId,
            createName: adminUser.createName,
            createTime: adminUser.createTime,
            updateTime: adminUser.updateTime,
            updateId: adminUser.updateId,
            updateName: adminUser.updateName,
            cardID: "1001",
            cardNo: "2002",
            cardType: "月卡",
            carNumber: "100010",
            ownerName: "hello",
            comeTime: comm,
            comePark: "1",
            gateNumber: "11s",
            comePhoto: "muyou",
            certificatePhoto: "muyou",
            cardBalance: 1234,
            remark: "weibizhi",
            recordId: "10010",
        };
        this.inpark.addData(data);
    };
    MenuUpdateInParkingComponent.prototype.clear = function () {
        this.inpark.clearDB();
    };
    MenuUpdateInParkingComponent.prototype.sendData = function (newData) {
        //如果此时有网
        if (newData) {
            this.parking.addInParkList(this.body);
        }
        else {
            this.parking.addInParkList(this.body);
        }
    };
    MenuUpdateInParkingComponent.prototype.delete = function () {
        this.inpark.deleteDatas("2002");
    };
    MenuUpdateInParkingComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-updateInParking',
            template: __webpack_require__("../../../../../src/app/menupages/menu-updateInParking/menu-updateInParking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-updateInParking/menu-updateInParking.component.scss")]
        }),
        __metadata("design:paramtypes", [inparkListDB_1.InparkdbService, parking_service_1.ParkingService, device_service_1.DeviceService, roadListDB_1.RoadListDBService])
    ], MenuUpdateInParkingComponent);
    return MenuUpdateInParkingComponent;
}());
exports.MenuUpdateInParkingComponent = MenuUpdateInParkingComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateOutParking/menu-updateOutParking.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n        <b>同步出场记录</b>\r\n    </span>\r\n    </div>\r\n    <div class=\"container tableBox\" style=\"height: 80%;\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body,let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.gateNumber}}</td>\r\n                    <td>{{item.outGateNumber}}</td>\r\n                    <td>{{item.comeTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                    <td>{{item.outTime-item.comeTime | parkingTime }}</td>\r\n                    <td>{{item.outTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                    <td>{{item.feeMoney}}</td>\r\n                    <td>{{item.amountReceive}}</td>\r\n                    <td>{{item.freeReason}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <button (click)=\"addData()\">增添一条数据</button> -->\r\n    <button class=\"btn btn-primary globalbutton\" (click)=\"sendData()\">同步到云端</button>\r\n    <!-- <button (click)=\"clear()\">删除</button> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateOutParking/menu-updateOutParking.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px; }\n\n.tabel-width {\n  width: 1200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateOutParking/menu-updateOutParking.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var outparkListDB_1 = __webpack_require__("../../../../../src/app/services/DB/outparkListDB.ts");
var MenuUpdateOutParkingComponent = (function () {
    function MenuUpdateOutParkingComponent(outpark, parking) {
        var _this = this;
        this.outpark = outpark;
        this.parking = parking;
        this.head = ['序号', '卡号', '车牌号码', '卡类', '入场车道', '出场车道', '入场时间', '停车时间', '出场时间', '应收', '实收', '优惠原因'];
        this.outpark.outParkList$.subscribe(function (outlist) {
            _this.body = outlist;
        });
    }
    MenuUpdateOutParkingComponent.prototype.ngOnInit = function () {
        this.outpark.getList();
    };
    MenuUpdateOutParkingComponent.prototype.addData = function () {
        var adminUser = JSON.parse(localStorage.adminUser);
        var comm = new Date().getTime();
        var data = {
            adminUserId: adminUser.adminUserId,
            parkId: adminUser.parkId,
            createId: adminUser.createId,
            createName: adminUser.createName,
            createTime: adminUser.createTime,
            updateTime: adminUser.updateTime,
            updateId: adminUser.updateId,
            updateName: adminUser.updateName,
            cardID: "1001",
            cardNo: "2002",
            cardType: "月卡",
            carNumber: "100010",
            ownerName: "hello",
            comeTime: comm,
            comePark: "1",
            gateNumber: "11s",
            comePhoto: "result.comePhoto",
            certificatePhoto: "result.certificatePhoto",
            cardBalance: 42355,
            outTime: comm,
            outPark: "result.outPark",
            outGateNumber: "result.outGateNumber",
            outPhoto: "result.outPhoto",
            feeMoney: 2234,
            amountReceive: 42355.32,
            timeoutFlag: 1,
            timeoutHour: comm,
            timeoutMoney: 42355,
            freeReason: "result.freeReason",
            freeReasonId: "result.freeReasonId",
            remark: "result.remark",
            recordId: "100110"
        };
        this.outpark.addData(data);
    };
    MenuUpdateOutParkingComponent.prototype.sendData = function () {
        this.parking.addOutParkList(this.body);
    };
    MenuUpdateOutParkingComponent.prototype.clear = function () {
        this.outpark.clearDB();
    };
    MenuUpdateOutParkingComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-updateOutParking',
            template: __webpack_require__("../../../../../src/app/menupages/menu-updateOutParking/menu-updateOutParking.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-updateOutParking/menu-updateOutParking.component.scss")]
        }),
        __metadata("design:paramtypes", [outparkListDB_1.OutparkdbService, parking_service_1.ParkingService])
    ], MenuUpdateOutParkingComponent);
    return MenuUpdateOutParkingComponent;
}());
exports.MenuUpdateOutParkingComponent = MenuUpdateOutParkingComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-updatePrivilege/menu-updatePrivilege.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n        <b>更新优惠规则</b>\r\n    </span>\r\n    </div>\r\n    <div class=\"container tableBox\" style=\"height: 80%;\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of privilegeList,let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.freeName}}</td>\r\n                    <td>{{item.freeTime}}</td>\r\n                    <td>{{item.singleUseMax}}</td>\r\n                    <td>{{item.superpositionType}}</td>\r\n                    <!-- <td>{{item.unitPrice}}元/{{item.unit}}</td> -->\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <button (click)=\"addData()\">增添一条数据</button> -->\r\n    <button class=\"btn btn-primary globalbutton\" (click)=\"sendData()\">同步数据</button>\r\n    <!-- <button (click)=\"clear()\">删除</button> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updatePrivilege/menu-updatePrivilege.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updatePrivilege/menu-updatePrivilege.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var privilege_service_1 = __webpack_require__("../../../../../src/app/services/privilege/privilege.service.ts");
var privilegeListDB_1 = __webpack_require__("../../../../../src/app/services/DB/privilegeListDB.ts");
var MenuUpdatePrivilegeComponent = (function () {
    // privilegeListDB = [];
    function MenuUpdatePrivilegeComponent(privilege, DB) {
        var _this = this;
        this.privilege = privilege;
        this.DB = DB;
        this.head = ['序号', '票名', '减免时间(分钟)', '单次使用上限', '可叠加类型'];
        this.privilegeList = [];
        //当数据更新时下载到数据库
        this.privilege.privilegeList$.filter(function (list) { return list.length > 0; }).subscribe(function (list) {
            // this.privilegeList = list;
            if (list[0].parkId == JSON.parse(localStorage.adminUser).parkId) {
                _this.DB.clearDB();
                _this.DB.addDatas(list);
            }
            else {
                alert("账户错误");
            }
        });
        //显示数据库里面的信息
        this.DB.privilegeList$.subscribe(function (list) {
            _this.privilegeList = list;
        });
    }
    MenuUpdatePrivilegeComponent.prototype.ngOnInit = function () {
        this.privilege.getPrivilegeList();
        this.DB.getList();
    };
    MenuUpdatePrivilegeComponent.prototype.addData = function () {
        this.privilege.getPrivilegeList();
    };
    MenuUpdatePrivilegeComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-updatePrivilege',
            template: __webpack_require__("../../../../../src/app/menupages/menu-updatePrivilege/menu-updatePrivilege.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-updatePrivilege/menu-updatePrivilege.component.scss")]
        }),
        __metadata("design:paramtypes", [privilege_service_1.PrivilegeService, privilegeListDB_1.PrivilegedbService])
    ], MenuUpdatePrivilegeComponent);
    return MenuUpdatePrivilegeComponent;
}());
exports.MenuUpdatePrivilegeComponent = MenuUpdatePrivilegeComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateRelease/menu-updateRelease.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>同步无卡放行记录</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body,let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.gateNumber}}</td>\r\n                    <td>{{item.comeTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                    <td>{{item.outGateNumber}}</td>\r\n                    <td>{{item.outTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                    <td>{{item.createName}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n    <!-- <button (click)=\"addData()\">增添一条数据</button> -->\r\n    <button class=\"btn btn-primary globalbutton\" (click)=\"sendData()\">同步至云端</button>\r\n    <!-- <button (click)=\"clear()\">删除</button> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateRelease/menu-updateRelease.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title {\n  width: 100%;\n  font-size: 18px;\n  font-family: \"SimHei\";\n  color: #E03612;\n  border-bottom: 1px #E03612 solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title span {\n    padding-top: 12.5px;\n    padding-bottom: 5px; }\n\n.searchPanel {\n  width: 329px;\n  color: #E03612;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .searchPanel div {\n    margin-right: 5px; }\n    .searchPanel div input {\n      width: 100px; }\n\n.resetbutton {\n  font-size: 14px;\n  color: #354052;\n  border-style: none;\n  min-width: 50px;\n  min-height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #e3e5ec;\n  background-color: #EFF1F7; }\n\n.resetbutton:active {\n  outline: none;\n  background-color: #e3e5ec; }\n\n.resetbutton:focus {\n  outline: none; }\n\n.searchbutton {\n  font-size: 14px;\n  border-style: none;\n  min-width: 50px;\n  min-height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #FF6003;\n  background-color: #E03612;\n  color: #EFF1F7;\n  margin-right: 5px;\n  background-color: #FF6003; }\n\n.searchbutton:active {\n  outline: none;\n  background-color: #FF6003; }\n\n.searchbutton:focus {\n  outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateRelease/menu-updateRelease.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var releaseListDB_1 = __webpack_require__("../../../../../src/app/services/DB/releaseListDB.ts");
var render_service_1 = __webpack_require__("../../../../../src/app/services/render/render.service.ts");
var MenuUpdateReleaseComponent = (function () {
    function MenuUpdateReleaseComponent(release, parking, render) {
        var _this = this;
        this.release = release;
        this.parking = parking;
        this.render = render;
        this.head = ['序号', '车牌', '入场车道', '入场时间', '出场车道', '出场时间', '操作员'];
        this.release.releaseList$.subscribe(function (release) {
            _this.body = release;
            _this.exportData(release);
        });
    }
    /**导出数据 */
    MenuUpdateReleaseComponent.prototype.exportData = function (datas) {
        var data = {
            list: datas
        };
        this.render.send('save-db-release', JSON.stringify(data));
    };
    MenuUpdateReleaseComponent.prototype.ngOnInit = function () {
        this.release.getList();
    };
    MenuUpdateReleaseComponent.prototype.addData = function () {
        var adminUser = JSON.parse(localStorage.adminUser);
        var comm = new Date().getTime();
        var data = {
            adminUserId: adminUser.adminUserId,
            parkId: adminUser.parkId,
            createId: adminUser.createId,
            createName: adminUser.createName,
            createTime: adminUser.createTime,
            updateTime: adminUser.updateTime,
            updateId: adminUser.updateId,
            updateName: adminUser.updateName,
            cardID: "1001",
            cardNo: "2002",
            cardType: "月卡",
            carNumber: "100010",
            ownerName: "hello",
            comeTime: comm,
            comePark: "1",
            gateNumber: "11s",
            comePhoto: "result.comePhoto",
            certificatePhoto: "result.certificatePhoto",
            cardBalance: 42355,
            remark: "result.remark",
            recordId: "11s" + "+" + comm // 备注
        };
        this.release.addData(data);
    };
    MenuUpdateReleaseComponent.prototype.sendData = function () {
        this.parking.addReleaseList(this.body);
    };
    MenuUpdateReleaseComponent.prototype.clear = function () {
        this.release.clearDB();
    };
    MenuUpdateReleaseComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-updateRelease',
            template: __webpack_require__("../../../../../src/app/menupages/menu-updateRelease/menu-updateRelease.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-updateRelease/menu-updateRelease.component.scss")]
        }),
        __metadata("design:paramtypes", [releaseListDB_1.ReleasedbService, parking_service_1.ParkingService, render_service_1.RenderService])
    ], MenuUpdateReleaseComponent);
    return MenuUpdateReleaseComponent;
}());
exports.MenuUpdateReleaseComponent = MenuUpdateReleaseComponent;


/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateRoadInfo/menu-updateRoadInfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>车道信息</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"searchPanel\">\r\n        <div>\r\n            <span>卡片号码</span>\r\n            <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"cardNo\">\r\n        </div>\r\n\r\n        <div>\r\n            <span>车牌号码</span>\r\n            <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"carNumber\">\r\n        </div>\r\n\r\n        <button type=\"button\" (click)=\"getParkingCarList()\" class=\"searchbutton\">查询</button>\r\n        <button type=\"button\" (click)=\"reset()\" class=\"resetbutton\">重置</button>\r\n    </div>\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <th>车道编号</th>\r\n                <th>出入标记</th>\r\n                <th>出入口名称</th>\r\n                <th>控制机号</th>\r\n                <th>开闸方式</th>\r\n                <th>出卡机</th>\r\n                <th>是否监控</th>\r\n                <th>检测卡口</th>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body\">\r\n                    <td>{{item.laneMarking}}</td>\r\n                    <td>{{item.entryMarking}}</td>\r\n                    <td>{{item.entryName}}</td>\r\n                    <td>{{item.controlNum}}</td>\r\n                    <td>{{item.openedType}}</td>\r\n                    <td>{{item.isCardMachine}}</td>\r\n                    <td>{{item.isMonitoring}}</td>\r\n                    <td>{{item.inspectionMarking}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n    <button (click)=\"addData()\">增加一条数据</button>\r\n    <button (click)=\"sendData()\">同步到云端</button>\r\n    <button (click)=\"clear()\">删除</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateRoadInfo/menu-updateRoadInfo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title {\n  width: 100%;\n  font-size: 18px;\n  font-family: \"SimHei\";\n  color: #E03612;\n  border-bottom: 1px #E03612 solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title span {\n    padding-top: 12.5px;\n    padding-bottom: 5px; }\n\n.searchPanel {\n  width: 329px;\n  color: #E03612;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .searchPanel div {\n    margin-right: 5px; }\n    .searchPanel div input {\n      width: 100px; }\n\n.resetbutton {\n  font-size: 14px;\n  color: #354052;\n  border-style: none;\n  min-width: 50px;\n  min-height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #e3e5ec;\n  background-color: #EFF1F7; }\n\n.resetbutton:active {\n  outline: none;\n  background-color: #e3e5ec; }\n\n.resetbutton:focus {\n  outline: none; }\n\n.searchbutton {\n  font-size: 14px;\n  border-style: none;\n  min-width: 50px;\n  min-height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #FF6003;\n  background-color: #E03612;\n  color: #EFF1F7;\n  margin-right: 5px;\n  background-color: #FF6003; }\n\n.searchbutton:active {\n  outline: none;\n  background-color: #FF6003; }\n\n.searchbutton:focus {\n  outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menupages/menu-updateRoadInfo/menu-updateRoadInfo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var roadListDB_1 = __webpack_require__("../../../../../src/app/services/DB/roadListDB.ts");
// import { InparkdbService,inParkItem } from '../../services/inParkList/inparkdb.service';
// import { ParkingService } from '../../services/parking/parking.service';
var MenuUpdateRoadInfoComponent = (function () {
    function MenuUpdateRoadInfoComponent(roadDB) {
        var _this = this;
        this.roadDB = roadDB;
        this.head = ["ID", "号码", "类型", "时间"];
        this.roadDB.roadList$.subscribe(function (list) {
            _this.body = list;
        });
    }
    MenuUpdateRoadInfoComponent.prototype.ngOnInit = function () {
        this.roadDB.getList();
    };
    MenuUpdateRoadInfoComponent.prototype.addData = function () {
        // let adminUser = JSON.parse(localStorage.adminUser);
        // let comm = new Date().getTime();
        // let data:any = {      
        //   adminUserId:adminUser.adminUserId,
        //   parkId:adminUser.parkId,
        //   createId:adminUser.createId,
        //   createName:adminUser.createName,
        //   createTime:adminUser.createTime, //+adminUser.createTime,
        //   updateTime:adminUser.updateTime, //+adminUser.updateTime,
        //   updateId:adminUser.updateId,
        //   updateName:adminUser.updateName,
        //   cardID:"1001", // 卡片ID
        //   cardNo:"2002", // 卡片号码
        //   cardType:"月卡", // 卡片类型
        //   carNumber:"100010", // 车牌号码
        //   ownerName:"hello", // 车主姓名
        //   comeTime: comm, // 入场时间,number
        //   comePark:"1", // 入场车场
        //   gateNumber:"11s", // 道闸机号
        //   comePhoto:"muyou", // 入场图片
        //   certificatePhoto:"muyou", // 证件图片
        //   cardBalance:1234, // 卡上余额
        //   remark:"weibizhi", // 备注
        // }
        // this.inpark.addData(data);
    };
    MenuUpdateRoadInfoComponent.prototype.sendData = function () {
        // this.parking.addInParkList(this.body);
    };
    MenuUpdateRoadInfoComponent.prototype.clear = function () {
        this.roadDB.clearDB();
    };
    MenuUpdateRoadInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-updateRoadInfo',
            template: __webpack_require__("../../../../../src/app/menupages/menu-updateRoadInfo/menu-updateRoadInfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menupages/menu-updateRoadInfo/menu-updateRoadInfo.component.scss")]
        }),
        __metadata("design:paramtypes", [roadListDB_1.RoadListDBService])
    ], MenuUpdateRoadInfoComponent);
    return MenuUpdateRoadInfoComponent;
}());
exports.MenuUpdateRoadInfoComponent = MenuUpdateRoadInfoComponent;


/***/ }),

/***/ "../../../../../src/app/pages/main-carinfo/main-carinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n  <!--车辆信息模块-->\r\n  <div class=\"mainBody-carInfo font\">\r\n    <div class=\"row2\">\r\n      <!-- <span>账号：</span>\r\n            <span>{{carInfo.account}}</span> -->\r\n      <span>姓名：</span>\r\n      <span>{{carInfo.ownerName}}</span>\r\n    </div>\r\n    <div class=\"row2\">\r\n      <span>卡号：</span>\r\n      <span>{{carInfo.cardNo}}</span>\r\n      <!-- <span>房间：</span>\r\n            <span>{{carInfo.companyName}}</span> -->\r\n    </div>\r\n    <div class=\"row1\">\r\n      <span>卡类：</span>\r\n      <span>{{carInfo.cardType}}</span>\r\n\r\n    </div>\r\n    <div class=\"row2\">\r\n      <span>车牌号码：</span>\r\n      <span>{{carInfo.carNumber}}</span>\r\n    </div>\r\n    <div class=\"row2\">\r\n      <span>入场车道：</span>\r\n      <span>{{carInfo.gateNumber}}</span>\r\n    </div>\r\n    <div class=\"row2\">\r\n      <span>出场车道：</span>\r\n      <span>{{carInfo.outGateNumber}}</span>\r\n    </div>\r\n    <div class=\"row2\">\r\n      <span>入场时间：</span>\r\n      <span>{{carInfo.comeTime}}</span>\r\n    </div>\r\n    <div class=\"row2\">\r\n      <span>出场时间：</span>\r\n      <span>{{carInfo.outTime}}</span>\r\n    </div>\r\n    <div class=\"row2\">\r\n      <span>识别车牌：</span>\r\n      <span>{{carInfo.nothing}}</span>\r\n    </div>\r\n    <!-- <div class=\"row2\">\r\n            <span>车牌颜色：</span>\r\n            <span>{{carInfo.nothing}}</span>\r\n        </div> -->\r\n    <!-- <div class=\"row2\">\r\n      <span>卡上余额：</span>\r\n      <span>{{balance}}</span>\r\n    </div> -->\r\n    <!--收费信息模块-->\r\n    <div class=\"mainBody-bill\">\r\n      <span class=\"bill-key\">应收金额：</span>\r\n      <ng-container *ngIf=\"carInfo.feeMoney>=0&&carInfo.feeMoney!==''\">\r\n        <span class=\"bill-value\">￥{{carInfo.feeMoney}}</span>\r\n        <!-- <input type=\"text\" id=\"bill-amount\" value=\"\"> -->\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <!--刷卡模态框-->\r\n  <div class=\"temporaryCardChargeBox\" *ngIf=\"templateCardArray.length==0\">\r\n    <div class=\"Modal-title\">\r\n      <p>临时卡收费确认</p>\r\n      <img src=\"assets/img/关闭.svg\" (click)=\"toRemoveTemplateItem()\">\r\n    </div>\r\n    <div class=\"Modal-main\">\r\n      <div class=\"main-display\">\r\n        <div class=\"amount-box\">\r\n          <p>实收费用</p>\r\n          <p  *ngIf=\"templateCardItem.feeMoney>=0\">￥{{templateCardItem.feeMoney}}</p>\r\n        </div>\r\n        <div class=\"number-box\">\r\n          <p>卡片号码</p>\r\n          <p> {{templateCardItem.cardNo}} </p>\r\n        </div>\r\n        <div class=\"number-box\">\r\n          <p>车牌号码</p>\r\n          <p> {{templateCardItem.carNumber}} </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"main-list\">\r\n        <div class=\"privilege-box\">\r\n          <p>优惠原因:</p>\r\n          <div>\r\n            <select [(ngModel)]=\"templateCardItem.privilege_1\" (ngModelChange)=\"recount($event,1,1)\" class=\"select-ticket\">\r\n              <option *ngFor=\"let item1 of privilegeNameList_1\" value=\"{{item1.freeName}}\" >{{item1.freeName}}</option>\r\n            </select>\r\n            <ng-container *ngIf=\"templateCardItem.freeTime_1>0\">\r\n              <select [(ngModel)]=\"templateCardItem.useUnit_1\" (ngModelChange)=\"recount($event,1,2)\" class=\"select-number\">\r\n                <option *ngFor=\"let iiii of privilegeNumberList_1,let i = index\" value=\"{{i}}\">{{i}}</option>\r\n              </select>\r\n              <span>张</span>\r\n            </ng-container>\r\n          </div>\r\n\r\n          <div>\r\n            <select [(ngModel)]=\"templateCardItem.privilege_2\" (ngModelChange)=\"recount($event,2,1)\" *ngIf=\"privilegeNameList_2.length>0\"  class=\"select-ticket\">\r\n              <option *ngFor=\"let item2 of privilegeNameList_2\" value=\"{{item2}}\">{{item2}}</option>\r\n            </select>\r\n            <ng-container *ngIf=\"templateCardItem.freeTime_2>0\">\r\n              <select [(ngModel)]=\"templateCardItem.useUnit_2\" (ngModelChange)=\"recount($event,2,2)\" *ngIf=\"privilegeNameList_2.length>0\"  class=\"select-number\">\r\n                <option *ngFor=\"let iiii of privilegeNumberList_2,let i = index\" value=\"{{i}}\">{{i}}</option>\r\n              </select>\r\n              <span *ngIf=\"privilegeNameList_2.length>0\">张</span>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"info-box\">\r\n          <div>\r\n            <span>入场时间:</span>\r\n            <span>{{templateCardItem.comeTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</span>\r\n          </div>\r\n          <div>\r\n            <span>出场时间:</span>\r\n            <span>{{templateCardItem.outTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</span>\r\n          </div>\r\n          <div>\r\n            <span>停留时间:</span>\r\n            <span>{{templateCardItem.outTime-templateCardItem.comeTime | parkingTime}}</span>\r\n          </div>\r\n          <div>\r\n            <span>应收金额:</span>\r\n            <span  style=\"color:#E03612\" *ngIf=\"templateCardItem.amountReceive>=0\">￥{{templateCardItem.amountReceive}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"Modal-buttons\">\r\n      <button class=\"hand\" (click)=\"playVoice()\">\r\n        <img src=\"assets/img/modal/voice.png\">语音报价</button>\r\n      <button class=\"hand\" (click)=\"openTheGate(templateCardItem.outGateNumber)\">\r\n        <img src=\"assets/img/modal/open.png\">开闸放行</button>\r\n      <button class=\"hand\">\r\n        <img src=\"assets/img/modal/stop.png\">放弃开闸</button>\r\n      <button class=\"hand\">\r\n        <img src=\"assets/img/modal/release.png\">免费放行</button>\r\n    </div>\r\n    <!-- <div class=\"Modal-title\">\r\n            <p>临时卡收费确认</p>\r\n            <img src=\"assets/img/关闭.svg\" (click)=\"toRemoveTemplateItem()\">\r\n        </div>\r\n        <div>\r\n            <div>\r\n                <div class=\"flex p-top\">\r\n                    <p>卡片号码　{{templateCardItem.cardNo}}</p>\r\n                    <p>{{templateCardItem.cardType}}</p>\r\n                </div>\r\n                <p>车牌号码　{{templateCardItem.carNumber}}</p>\r\n                <p>入场时间　{{templateCardItem.comeTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</p>\r\n                <p>出场时间　{{templateCardItem.outTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</p>\r\n                <p *ngIf=\"templateCardItem.comeTime>0&&templateCardItem.outTime>0\">停留时间　{{templateCardItem.outTime-templateCardItem.comeTime | parkingTime}}</p>\r\n                <div class=\"flex p-top\">\r\n                    <p>出场车道　{{templateCardItem.outGateNumber}}</p>\r\n                </div>\r\n                <div class=\"flex p\">\r\n                    <div>应收金额\r\n                        <span class=\"amount\" *ngIf=\"templateCardItem.amountReceive>=0\">￥{{templateCardItem.amountReceive}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"flex p\">\r\n                    <div>实收费用\r\n                        <span class=\"amount\" *ngIf=\"templateCardItem.feeMoney>=0\">￥{{templateCardItem.feeMoney}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"flex p-top\">\r\n                    <p>优惠原因　</p>\r\n                    <select [(ngModel)]=\"templateCardItem.privilege_1\" (ngModelChange)=\"recount($event,1,1)\">\r\n                        <option *ngFor=\"let item1 of privilegeNameList_1\" value=\"{{item1.freeName}}\">{{item1.freeName}}</option>\r\n                    </select>\r\n                    <ng-container *ngIf=\"templateCardItem.freeTime_1>0\">\r\n                        <select [(ngModel)]=\"templateCardItem.useUnit_1\" (ngModelChange)=\"recount($event,1,2)\">\r\n                            <option *ngFor=\"let iiii of privilegeNumberList_1,let i = index\" value=\"{{i}}\">{{i}}</option>\r\n                        </select>\r\n                        <span>张</span>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"flex p-top\">\r\n                    <p>　　　　　</p>\r\n                    <select [(ngModel)]=\"templateCardItem.privilege_2\" (ngModelChange)=\"recount($event,2,1)\" *ngIf=\"privilegeNameList_2.length>0\">\r\n                        <option *ngFor=\"let item2 of privilegeNameList_2\" value=\"{{item2}}\">{{item2}}</option>\r\n                    </select>\r\n                    <ng-container *ngIf=\"templateCardItem.freeTime_2>0\">\r\n                        <select [(ngModel)]=\"templateCardItem.useUnit_2\" (ngModelChange)=\"recount($event,2,2)\" *ngIf=\"privilegeNameList_2.length>0\">\r\n                            <option *ngFor=\"let iiii of privilegeNumberList_2,let i = index\" value=\"{{i}}\">{{i}}</option>\r\n                        </select>\r\n                        <span *ngIf=\"privilegeNameList_2.length>0\">张</span>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"button-group\">\r\n            <button class=\"hand\" (click)=\"playVoice()\">语音报价</button>\r\n            <button class=\"hand\" (click)=\"openTheGate(templateCardItem.outGateNumber)\">开闸放行</button>\r\n            <button class=\"hand\">放弃开闸</button>\r\n            <button class=\"hand\">免费放行</button>\r\n        </div> -->\r\n  </div>\r\n  <!--刷卡模态框结束-->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/main-carinfo/main-carinfo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap {\n  height: 80%; }\n\n.font {\n  font-size: 14px; }\n\n.mainBody-carInfo {\n  background-color: #FFFFFF;\n  width: 248px;\n  height: 350px;\n  margin-top: 20px;\n  margin-left: 10px;\n  border: 1px solid #CCCCCC;\n  border-bottom: none;\n  padding-top: 20px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: space-between;\n      -ms-flex-align: space-between;\n          align-items: space-between; }\n  .mainBody-carInfo .row1 {\n    width: calc(100% - 20px);\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin-left: 20px; }\n    .mainBody-carInfo .row1 span:nth-child(2n+1) {\n      display: block;\n      overflow: hidden;\n      width: 19%; }\n    .mainBody-carInfo .row1 span:nth-child(2n) {\n      display: block;\n      width: 31%;\n      overflow: hidden; }\n  .mainBody-carInfo .row2 {\n    width: 100%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin-left: 20px; }\n    .mainBody-carInfo .row2 span:nth-child(2n+1) {\n      display: block;\n      overflow: hidden;\n      width: 32%; }\n    .mainBody-carInfo .row2 span:nth-child(2n) {\n      display: block;\n      width: 68%;\n      overflow: hidden; }\n\n.mainBody-bill {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  background-color: #FFFFFF;\n  width: 100%;\n  height: 50px;\n  border: 1px solid #CCCCCC;\n  border-left: none;\n  border-right: none;\n  border-bottom: 3px solid #CCCCCC;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .mainBody-bill .bill-key {\n    font-size: 16px;\n    margin-left: 16px;\n    margin-right: 26px;\n    color: #4D4D4D;\n    font-weight: 500; }\n  .mainBody-bill .bill-value {\n    font-size: 20px;\n    color: #E03612;\n    font-weight: 700; }\n\n.temporaryCardMessage {\n  margin: 0 10px;\n  background-color: #e5e5e5;\n  border-radius: 6px;\n  border: 4px solid #545151;\n  padding: 10px; }\n\n.temporaryCardChargeBox {\n  position: fixed;\n  letter-spacing: 1px;\n  bottom: 0;\n  right: 0;\n  width: 500px;\n  height: 422px;\n  z-index: 999;\n  background-color: #FFFFFF; }\n  .temporaryCardChargeBox .Modal-title {\n    background-color: #E03612;\n    height: 40px;\n    font-size: 16px;\n    color: #ffffff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .temporaryCardChargeBox .Modal-title p {\n      margin-left: 20px; }\n    .temporaryCardChargeBox .Modal-title img {\n      background-color: rgba(0, 0, 0, 0.08);\n      margin-right: 10px;\n      padding: 4px;\n      border-radius: 16px; }\n  .temporaryCardChargeBox .Modal-main {\n    height: calc(100% - 100px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .temporaryCardChargeBox .Modal-main .main-display {\n      height: 100%;\n      width: 140px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding-top: 18px;\n      padding-bottom: 18px;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: column nowrap;\n              flex-flow: column nowrap;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n      .temporaryCardChargeBox .Modal-main .main-display .amount-box {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column nowrap;\n                flex-flow: column nowrap;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        width: 122px;\n        height: 96px;\n        background-color: #F5F5F5;\n        border: 1px solid #CCCCCC;\n        border-bottom: 3px solid #CCCCCC; }\n        .temporaryCardChargeBox .Modal-main .main-display .amount-box p:nth-child(1) {\n          font-size: 14px;\n          color: #404040; }\n        .temporaryCardChargeBox .Modal-main .main-display .amount-box p:nth-child(2) {\n          font-size: 28px;\n          color: #E03612; }\n      .temporaryCardChargeBox .Modal-main .main-display .number-box {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column nowrap;\n                flex-flow: column nowrap;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        width: 122px;\n        height: 71px;\n        background-color: #F5F5F5;\n        border: 1px solid #CCCCCC;\n        border-bottom: 3px solid #CCCCCC; }\n        .temporaryCardChargeBox .Modal-main .main-display .number-box p:nth-child(1) {\n          font-size: 14px;\n          color: #404040; }\n        .temporaryCardChargeBox .Modal-main .main-display .number-box p:nth-child(2) {\n          font-size: 18px;\n          color: #333333; }\n    .temporaryCardChargeBox .Modal-main .main-list {\n      height: 100%;\n      width: calc(100% - 140px);\n      padding-left: 10px;\n      padding-right: 20px; }\n      .temporaryCardChargeBox .Modal-main .main-list .privilege-box {\n        width: 100%;\n        height: 96px;\n        margin: 18px 0 10px 0; }\n        .temporaryCardChargeBox .Modal-main .main-list .privilege-box p {\n          font-size: 16px;\n          color: #404040;\n          padding-left: 16px;\n          margin-bottom: 10px; }\n        .temporaryCardChargeBox .Modal-main .main-list .privilege-box .select-ticket {\n          height: 34px;\n          width: 220px; }\n        .temporaryCardChargeBox .Modal-main .main-list .privilege-box .select-number {\n          height: 34px;\n          width: 90px; }\n      .temporaryCardChargeBox .Modal-main .main-list .info-box {\n        width: 328px;\n        height: 180px; }\n        .temporaryCardChargeBox .Modal-main .main-list .info-box div {\n          width: 100%;\n          height: calc(180px / 4);\n          border: 1px solid #CCC;\n          border-bottom: none;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-flow: row nowrap;\n                  flex-flow: row nowrap;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 16px;\n          color: #404040; }\n          .temporaryCardChargeBox .Modal-main .main-list .info-box div span:nth-child(1) {\n            background-color: #F7F8FC;\n            width: 100px;\n            height: 100%;\n            border-right: 1px solid #CCC;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-flow: row nowrap;\n                    flex-flow: row nowrap;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\n          .temporaryCardChargeBox .Modal-main .main-list .info-box div span:nth-child(2) {\n            background-color: #FFF;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-flow: row nowrap;\n                    flex-flow: row nowrap;\n            -webkit-box-pack: start;\n                -ms-flex-pack: start;\n                    justify-content: flex-start;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            padding-left: 20px;\n            height: 100%;\n            width: calc(100% - 100px); }\n        .temporaryCardChargeBox .Modal-main .main-list .info-box div:last-of-type {\n          border-bottom: 1px solid #CCC; }\n  .temporaryCardChargeBox .Modal-buttons {\n    height: 60px;\n    width: 100%;\n    padding: 0 20px 0 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-top: 1px solid #BBB; }\n    .temporaryCardChargeBox .Modal-buttons button {\n      padding: 3px 0px 3px 0px;\n      width: 100px;\n      height: 34px;\n      background-color: #DfE5F7;\n      border-bottom: 2px solid #CCC;\n      color: #000;\n      border: none;\n      border-radius: 4px; }\n      .temporaryCardChargeBox .Modal-buttons button img {\n        margin: 0px 8px 3px 0px; }\n    .temporaryCardChargeBox .Modal-buttons button:active {\n      outline: none;\n      background-color: #CCC; }\n    .temporaryCardChargeBox .Modal-buttons button:focus {\n      outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-carinfo/main-carinfo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var roadListDB_1 = __webpack_require__("../../../../../src/app/services/DB/roadListDB.ts");
var cardListDB_1 = __webpack_require__("../../../../../src/app/services/DB/cardListDB.ts");
var parkingDictionary_1 = __webpack_require__("../../../../../src/app/services/constants/parkingDictionary.ts");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var parkLot_service_1 = __webpack_require__("../../../../../src/app/services/parkLot/parkLot.service.ts");
var inparkListDB_1 = __webpack_require__("../../../../../src/app/services/DB/inparkListDB.ts");
var outparkListDB_1 = __webpack_require__("../../../../../src/app/services/DB/outparkListDB.ts");
var privilegeListDB_1 = __webpack_require__("../../../../../src/app/services/DB/privilegeListDB.ts");
var privilege_service_1 = __webpack_require__("../../../../../src/app/services/privilege/privilege.service.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var common_service_1 = __webpack_require__("../../../../../src/app/services/common.service.ts");
var MainCarinfoComponent = (function () {
    function MainCarinfoComponent(device, roadDB, cardDB, parkingDictionary, parkLot, inpark, outpark, parking, privilegeDB, privilege, common) {
        var _this = this;
        this.device = device;
        this.roadDB = roadDB;
        this.cardDB = cardDB;
        this.parkingDictionary = parkingDictionary;
        this.parkLot = parkLot;
        this.inpark = inpark;
        this.outpark = outpark;
        this.parking = parking;
        this.privilegeDB = privilegeDB;
        this.privilege = privilege;
        this.common = common;
        /**底部弹出框的数据存储 */
        this.templateCardArray = [];
        /**右侧弹出框当前显示的信息 */
        this.templateCardItem = {
            cardNo: "",
            cardType: "",
            comeTime: "",
            outTime: "",
            outPark: "",
            outGateNumber: "",
            feeMoney: null,
            amountReceive: null,
            carNumber: "",
            privilege_1: "",
            privilege_2: "",
            freeTime_1: 0,
            freeName_1: "",
            useUnit_1: 1,
            freeTime_2: 0,
            freeName_2: "",
            useUnit_2: 1,
            controllerNo: "",
            freeReason: "",
        };
        /**优惠数组 */
        this.privilegeNameList_1 = [];
        this.privilegeNumberList_1 = [];
        this.privilegeNameList_2 = [];
        this.privilegeNumberList_2 = [];
        /**更新左侧车辆信息栏 */
        this.carInfo = {
            account: "",
            ownerName: "",
            cardNo: "",
            companyName: "",
            cardType: "",
            carNumber: "",
            gateNumber: "",
            outGateNumber: "",
            comeTime: "",
            outTime: "",
            feeMoney: "",
            nothing: "",
            controllerNo: "",
            record_id: ""
        };
        /**订阅优惠规则信息 */
        this.privilegeDB.privilegeList$.subscribe(function (list) {
            _this.privilegeNameList_1 = list;
        });
        /**订阅减免后的时间 */
        this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op == "ret-time-to-money"; }).subscribe(function (data) {
            _this.templateCardItem.feeMoney = data.money;
            _this.templateCardItem.amountReceive = data.money;
        });
        /**订阅出入场打卡信息 */
        this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op == "report-card-record"; }).debounceTime(500).subscribe(function (data) {
            //如果是入场信息 
            if (data.hw_type == 1) {
                //补全信息
                _this.roadDB.getEntryNameByEntryMarking(data.hw_id).subscribe(function (name) {
                    //补全车辆信息栏里面的信息
                    _this.clearCarInfo();
                    _this.trans(data.card_id);
                    _this.carInfo.cardNo = data.card_id;
                    _this.carInfo.comeTime = data.time_in;
                    _this.carInfo.controllerNo = data.hw_id;
                    _this.carInfo.record_id = data.record_id;
                    //查询车道数据库将控制机号转化为车道
                    if (name.isExist == true) {
                        _this.carInfo.outGateNumber = name.result;
                    }
                    else {
                        _this.carInfo.outGateNumber = data.hw_id;
                    }
                    //当信息补全完整入场信息之后
                    _this.dataFormatToInparkList(data, _this.carInfo.outGateNumber).subscribe(function (fulldata) {
                        _this.inpark.query(fulldata.record_id).subscribe(function (isExist) {
                            //如果存在，则返回数据
                            if (isExist == true) {
                                _this.device.sendBackRecord(_this.carInfo.record_id);
                            }
                            else if (isExist == false) {
                                _this.inpark.addData(fulldata);
                                _this.device.sendBackRecord(_this.carInfo.record_id);
                            }
                            //最后发送到云端
                            _this.parking.addInParkList([fulldata]);
                            //更新停车场信息        
                            _this.inParkUpdadeInfo(_this.carInfo.cardType);
                        });
                    });
                });
            }
            else if (data.hw_type == 2) {
                //查询优惠信息，更新列表        
                _this.privilegeDB.getList();
                //补全信息
                _this.roadDB.getEntryNameByEntryMarking(data.hw_id).subscribe(function (name) {
                    //补全车辆信息栏里面的信息
                    _this.clearCarInfo();
                    _this.trans(data.card_id);
                    _this.carInfo.cardNo = data.card_id;
                    _this.carInfo.comeTime = data.time_in;
                    _this.carInfo.outTime = data.time_out;
                    _this.carInfo.feeMoney = data.cost;
                    _this.carInfo.controllerNo = data.hw_id;
                    _this.carInfo.record_id = data.record_id;
                    //查询车道数据库将控制机号转化为车道
                    if (name.isExist == true) {
                        _this.carInfo.outGateNumber = name.result;
                    }
                    else {
                        _this.carInfo.outGateNumber = data.hw_id;
                    }
                    //当信息补全完整出场信息之后
                    _this.dataFormatToOutparkList(data, _this.carInfo.outGateNumber).subscribe(function (fulldata) {
                        _this.outpark.query(fulldata.recordId).subscribe(function (isExist) {
                            //如果存在，则返回数据
                            if (isExist == true) {
                                _this.device.sendBackRecord(_this.carInfo.record_id);
                            }
                            else {
                                _this.outpark.addData(fulldata);
                                _this.device.sendBackRecord(_this.carInfo.record_id);
                            }
                            //最后发送到云端
                            // this.parking.addOutParkList([fulldata]);
                            //弹出对话框
                            // let temp = this.templateCardItem;
                            // Object.assign(temp,fulldata);
                            fulldata.carNumber = _this.carInfo.carNumber;
                            _this.templateCardArray.push(fulldata);
                            _this.refreshTemplateCardArray();
                            //更新停车场信息        
                            _this.outParkUpdadeInfo(_this.carInfo.cardType);
                        });
                    });
                });
            }
            else {
                _this.clearCarInfo();
                alert('未识别卡');
            }
        });
        //收到云端的入场纪录反馈
        this.parking.inParkListBack$.subscribe(function (data) {
            //如果收到数据，则删除数据库里面相对应的数据
            if (data.isConnect == true) {
                data.data.forEach(function (element) {
                    _this.inpark.deleteDatas(element.recordId);
                });
                _this.inpark.inParkList$.next([]);
                //如果此时有数据，则上传到云端
                _this.inpark.inParkList$.filter(function (data) { return data.length > 0; }).subscribe(function (inParkList) {
                    // this.parking.addInParkList(inParkList);
                });
                _this.inpark.getList();
            }
            else {
            }
            // data
        });
        //收到云端的出场纪录反馈
        this.parking.outParkListBack$.subscribe(function (data) {
            //如果收到数据，则删除数据库里面相对应的数据
            if (data.isConnect == true) {
                data.data.forEach(function (element) {
                    _this.outpark.deleteDatas(element.recordId);
                });
                _this.outpark.outParkList$.next([]);
                //如果此时有数据，则上传到云端
                _this.outpark.outParkList$.filter(function (data) { return data.length > 0; }).subscribe(function (outParkList) {
                    // this.parking.addOutParkList(outParkList);
                });
                _this.outpark.getList();
            }
            else {
            }
            // data
        });
    }
    MainCarinfoComponent.prototype.clearPrivilege = function () {
        this.templateCardItem.privilege_1 = "";
        this.templateCardItem.privilege_2 = "";
        this.templateCardItem.freeTime_1 = 0;
        this.templateCardItem.freeName_1 = "";
        this.templateCardItem.useUnit_1 = 1;
        this.templateCardItem.freeTime_2 = 0;
        this.templateCardItem.freeName_2 = "";
        this.templateCardItem.useUnit_2 = 1;
        this.privilegeNameList_2 = [];
        this.privilegeNumberList_2 = [];
    };
    MainCarinfoComponent.prototype.ngOnInit = function () {
    };
    /**清空车辆信息栏 */
    MainCarinfoComponent.prototype.clearCarInfo = function () {
        this.carInfo = {
            account: "",
            ownerName: "",
            cardNo: "",
            companyName: "",
            cardType: "",
            carNumber: "",
            gateNumber: "",
            outGateNumber: "",
            comeTime: "",
            outTime: "",
            feeMoney: "",
            nothing: "",
            controllerNo: "",
            record_id: ""
        };
    };
    MainCarinfoComponent.prototype.trans = function (CardNo) {
        var _this = this;
        // this.roadDB.getEntryNameByEntryMarking("1").subscribe((name) => {
        //   console.log(name);
        // });
        this.cardDB.getCardInfoByCardNo(CardNo).subscribe(function (info) {
            _this.carInfo.account = info.account;
            _this.carInfo.ownerName = info.ownerName;
            _this.carInfo.companyName = info.companyName;
            _this.carInfo.cardType = info.cardType;
            _this.carInfo.carNumber = info.carNumber;
        });
    };
    /*删除临时卡*/
    MainCarinfoComponent.prototype.toRemoveTemplateItem = function () {
        if (this.templateCardArray.length > 0) {
            this.templateCardArray.pop();
            // this.templateCardArray.splice(this.templateCardArray.length-1,1);
            this.refreshTemplateCardArray();
        }
    };
    /*更新临时卡数组*/
    MainCarinfoComponent.prototype.refreshTemplateCardArray = function () {
        /**获得数据 */
        this.clearPrivilege();
        this.privilegeDB.getList();
        if (this.templateCardArray.length >= 1) {
            this.templateCardItem = this.templateCardArray[this.templateCardArray.length - 1];
        }
        console.log(this.templateCardItem);
        console.log(this.templateCardArray);
    };
    /**开闸放行 */
    MainCarinfoComponent.prototype.openTheGate = function (hw_id) {
        this.device.sendOpenGate(hw_id);
        this.parking.addOutParkList([this.templateCardItem]);
        this.toRemoveTemplateItem();
        // this.playVoice();
    };
    /**重新计费 */
    MainCarinfoComponent.prototype.recount = function (event, mode, index) {
        var _this = this;
        if (mode == 1) {
            //如果点的是优惠票数种类
            if (index == 1) {
                this.privilegeNameList_1.forEach(function (item) {
                    //确定该票的最大使用数
                    if (item.freeName == event) {
                        _this.privilegeNumberList_1.length = item.singleUseMax + 1;
                        _this.templateCardItem.freeTime_1 = Number(item.freeTime);
                        _this.templateCardItem.freeName_1 = item.freeName;
                        _this.templateCardItem.useUnit_1 = 1;
                        //清楚第二栏
                        _this.templateCardItem.privilege_2 = "";
                        _this.templateCardItem.freeTime_2 = 0;
                        _this.templateCardItem.freeName_2 = "";
                        _this.templateCardItem.useUnit_2 = 1;
                        _this.privilegeNameList_2 = [];
                        _this.privilegeNumberList_2 = [];
                        //如果可以叠加则启用叠加模式
                        if (item.superpositionType) {
                            _this.privilegeNameList_2.length = 0;
                            _this.privilegeNameList_2 = [item.superpositionType];
                        }
                        else {
                            _this.privilegeNameList_2.length = 0;
                        }
                    }
                });
            }
            else if (index == 2) {
                this.templateCardItem.useUnit_1 = Number(event);
            }
        }
        else if (mode == 2) {
            if (index == 1) {
                this.privilegeNameList_1.forEach(function (item) {
                    //确定该票的最大使用数
                    if (item.freeName == event) {
                        _this.privilegeNumberList_2.length = item.singleUseMax + 1;
                        _this.templateCardItem.freeTime_2 = Number(item.freeTime);
                        _this.templateCardItem.freeName_2 = item.freeName;
                        _this.templateCardItem.useUnit_2 = 1;
                    }
                });
            }
            else if (index == 2) {
                // console.log("颠倒了："+event);
                this.templateCardItem.useUnit_2 = Number(event);
            }
        }
        // JSON.parse(localStorage.feeStandard).freeMinutes
        //如果停车时间大于30分钟
        this.templateCardItem.freeReason = this.getFreeReason(this.templateCardItem.freeName_1, this.templateCardItem.useUnit_1, this.templateCardItem.freeName_2, this.templateCardItem.useUnit_2);
        //如果停车时间超过免费分钟
        if (this.device.msToMin(Number(this.templateCardItem.outTime) - Number(this.templateCardItem.comeTime)) > Number(JSON.parse(localStorage.feeStandard).freeMinutes)) {
            var a = this.templateCardItem.freeTime_1 ? this.templateCardItem.freeTime_1 : 0;
            var b = this.templateCardItem.useUnit_1 && Number(this.templateCardItem.useUnit_1) ? this.templateCardItem.useUnit_1 : 0;
            var c = this.templateCardItem.freeTime_2 ? this.templateCardItem.freeTime_2 : 0;
            var d = this.templateCardItem.useUnit_2 && Number(this.templateCardItem.useUnit_2) > 0 ? this.templateCardItem.useUnit_2 : 0;
            var PrivilegeTime = a * b + c * d;
            // console.log(PrivilegeTime);
            this.device.sendGetRealFee(this.device.msToMin(Number(this.templateCardItem.outTime) - Number(this.templateCardItem.comeTime)) - PrivilegeTime);
            // console.log(this.device.msToMin(Number(this.templateCardItem.outTime) - Number(this.templateCardItem.comeTime)) - PrivilegeTime);
        }
    };
    /**上传到云端 */
    MainCarinfoComponent.prototype.sendDataToCloud = function (data) {
        var _this = this;
        //当信息补全完整出场信息之后
        this.dataFormatToOutparkList(data, this.carInfo.outGateNumber).subscribe(function (fulldata) {
            _this.outpark.query(fulldata.recordId).subscribe(function (isExist) {
                //如果存在，则返回数据
                if (isExist == true) {
                    _this.device.sendBackRecord(_this.carInfo.record_id);
                }
                else {
                    _this.outpark.addData(fulldata);
                    _this.device.sendBackRecord(_this.carInfo.record_id);
                }
                //最后发送到云端
                _this.parking.addOutParkList([fulldata]);
            });
        });
    };
    /**入场更新停车场信息 */
    MainCarinfoComponent.prototype.inParkUpdadeInfo = function (cardType) {
        if (cardType == "临时卡") {
            this.parkLot.addTemporaryCard();
        }
        else if (cardType == "月卡") {
            this.parkLot.addMonthCardNum();
        }
        this.parkLot.decRemaining();
    };
    /**入场更新停车场信息 */
    MainCarinfoComponent.prototype.outParkUpdadeInfo = function (cardType) {
        if (cardType == "临时卡") {
            this.parkLot.decTemporaryCard();
        }
        else if (cardType == "月卡") {
            this.parkLot.decMonthCardNum();
        }
        this.parkLot.decRemaining();
    };
    /**转化为入场纪录 */
    MainCarinfoComponent.prototype.dataFormatToInparkList = function (oldData, roadName) {
        var _this = this;
        var adminUser = JSON.parse(localStorage.adminUser);
        var nowTime = new Date().getTime();
        return Observable_1.Observable.create(function (ob) {
            var newData = {
                adminUserId: adminUser.adminUserId,
                parkId: adminUser.parkId,
                createId: adminUser.createId,
                createName: adminUser.createName,
                createTime: nowTime,
                updateTime: nowTime,
                updateId: adminUser.updateId,
                updateName: adminUser.updateName,
                cardNo: oldData.card_id,
                cardType: _this.device.parkdic.getLabelByKey(oldData.card_type),
                comeTime: _this.device.timeStringToNumber(oldData.time_in),
                comePark: roadName,
                gateNumber: oldData.hw_id,
                recordId: oldData.record_id
            };
            ob.next(newData);
        });
    };
    //转为出场纪录
    MainCarinfoComponent.prototype.dataFormatToOutparkList = function (oldData, roadName) {
        var _this = this;
        var adminUser = JSON.parse(localStorage.adminUser);
        var nowTime = new Date().getTime();
        return Observable_1.Observable.create(function (ob) {
            var newData = {
                adminUserId: adminUser.adminUserId,
                parkId: adminUser.parkId,
                createId: adminUser.createId,
                createName: adminUser.createName,
                createTime: nowTime,
                updateTime: nowTime,
                updateId: adminUser.updateId,
                updateName: adminUser.updateName,
                cardNo: oldData.card_id,
                cardType: _this.device.parkdic.getLabelByKey(oldData.card_type),
                comeTime: _this.device.timeStringToNumber(oldData.time_in),
                outTime: _this.device.timeStringToNumber(oldData.time_out),
                outPark: roadName,
                outGateNumber: oldData.hw_id,
                feeMoney: oldData.cost,
                amountReceive: oldData.cost,
                freeReason: "",
                recordId: oldData.record_id
            };
            ob.next(newData);
        });
    };
    /**
     * 补充应收金额
     * @param outparkItem 原先的数据
     * @param feeMoney 重新计算后的费用
     */
    MainCarinfoComponent.prototype.discountCost = function (outparkItem, feeMoney) {
        return Observable_1.Observable.create(function (ob) {
            // let data = outparkItem;
            outparkItem.feeMoney = feeMoney;
            outparkItem.amountReceive = feeMoney;
            ob.next(outparkItem);
        });
    };
    /**组合成为免费原因字符串 */
    MainCarinfoComponent.prototype.getFreeReason = function (ticket_1, number_1, ticket_2, number_2) {
        if (ticket_1 && number_1) {
            if (ticket_2 && number_2) {
                console.log("" + ticket_1 + number_1 + "\u5F20\uFF0C" + ticket_2 + number_2 + "\u5F20");
                return "" + ticket_1 + number_1 + "\u5F20\uFF0C" + ticket_2 + number_2 + "\u5F20";
            }
            else {
                console.log("" + ticket_1 + number_1 + "\u5F20");
                return "" + ticket_1 + number_1 + "\u5F20";
            }
        }
        else {
            return "";
        }
    };
    /**播报语音 */
    MainCarinfoComponent.prototype.playVoice = function () {
        var dayOpt = this.common.timeTransform(Number(this.templateCardItem.outTime) - Number(this.templateCardItem.comeTime));
        // console.log(dayOpt);
        // if(data.feeMoney){
        // if(data.outGateNumber){
        this.device.sendRequestVoice(this.templateCardItem.outGateNumber, this.templateCardItem.feeMoney, dayOpt);
        // }
        // }
    };
    MainCarinfoComponent = __decorate([
        core_1.Component({
            selector: 'app-main-carinfo',
            template: __webpack_require__("../../../../../src/app/pages/main-carinfo/main-carinfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main-carinfo/main-carinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [device_service_1.DeviceService, roadListDB_1.RoadListDBService,
            cardListDB_1.CardListDBService, parkingDictionary_1.ParkingDictionary,
            parkLot_service_1.ParkLotService, inparkListDB_1.InparkdbService, outparkListDB_1.OutparkdbService,
            parking_service_1.ParkingService, privilegeListDB_1.PrivilegedbService, privilege_service_1.PrivilegeService,
            common_service_1.CommonService])
    ], MainCarinfoComponent);
    return MainCarinfoComponent;
}());
exports.MainCarinfoComponent = MainCarinfoComponent;


/***/ }),

/***/ "../../../../../src/app/pages/main-carviews/main-carviews.component.html":
/***/ (function(module, exports) {

module.exports = "<!--监视器录像模块-->\r\n<div class=\"containerBox\" style=\"\">\r\n    <!-- <div class=\"font-white title\">照片</div> -->\r\n    <!-- <ng-container *ngFor=\"let img of images,let i = index\"> -->\r\n    <!-- <span><img src={{img.src}} alt=\"\" (click)=\"goToPhotoViewer(images,i)\" class=\"photo\"></span> -->\r\n    <!-- </ng-container> -->\r\n    <!-- <div class=\"carViews-unit\"><img src=\"assets/img/carView.png\" /></div>\r\n    <div class=\"carViews-unit\"><img src=\"assets/img/carView.png\" /></div>\r\n    <div class=\"carViews-unit\"><img src=\"assets/img/carView.png\" /></div>\r\n    <div class=\"carViews-unit\"><img src=\"assets/img/carView.png\" /></div> -->\r\n    <div class=\"flex height100andwidth100\" style=\"flex:1;margin-top:20px;\">\r\n        <div class=\"flex_1 pr20\">\r\n            <div class=\"height100andwidth100 flex_alignItem_center-justifyContent_center\">\r\n                <img src=\"assets/img/carView.png\" class=\"height100andwidth100\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"flex_1 pr20\">\r\n            <div class=\"height100andwidth100 flex_alignItem_center-justifyContent_center\">\r\n                <img src=\"assets/img/carView.png\" class=\"height100andwidth100\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"flex height100andwidth100\" style=\"flex:1;margin-top:20px;\">\r\n        <div class=\"flex_1 pr20\">\r\n            <div class=\"height100andwidth100 flex_alignItem_center-justifyContent_center\">\r\n                <img src=\"assets/img/carView.png\" class=\"height100andwidth100\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"flex_1 pr20\">\r\n            <div class=\"height100andwidth100 flex_alignItem_center-justifyContent_center\">\r\n                <img src=\"assets/img/carView.png\" class=\"height100andwidth100\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/main-carviews/main-carviews.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".containerBox {\n  overflow: hidden;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-carviews/main-carviews.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var MainCarviewsComponent = (function () {
    function MainCarviewsComponent() {
    }
    MainCarviewsComponent.prototype.ngOnInit = function () {
    };
    MainCarviewsComponent = __decorate([
        core_1.Component({
            selector: 'app-main-carviews',
            template: __webpack_require__("../../../../../src/app/pages/main-carviews/main-carviews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main-carviews/main-carviews.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainCarviewsComponent);
    return MainCarviewsComponent;
}());
exports.MainCarviewsComponent = MainCarviewsComponent;


/***/ }),

/***/ "../../../../../src/app/pages/main-controller/main-controller.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!--按钮模块-->\t\t\n\t<div class=\"mainBody-controller\">\n\t\t<div class=\"functionBox\">\n\t\t\t<app-controller-button *ngFor=\"let button of functionList\" [label]=\"button.label\" [buttonName]=\"button.buttonName\" [permiss]=\"button.permiss\" class=\"button\"></app-controller-button>\n\t\t</div>\n\t\t<div class=\"userBox\">\n\t\t\t<app-controller-button *ngFor=\"let button of userList\" [label]=\"button.label\" [buttonName]=\"button.buttonName\" [permiss]=\"button.permiss\" class=\"button\"></app-controller-button>\n\t\t\t<!-- <app-controller-button [label]=\"'啊啊'\" [buttonName]=\"'button'\" [permission]=\"'lessor'\" class=\"button\"></app-controller-button> -->\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/pages/main-controller/main-controller.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainBody-controller {\n  background-color: #FFFFFF;\n  width: 248px;\n  height: 277px;\n  margin-top: 10px;\n  margin-left: 10px;\n  border: 1px solid #CCCCCC;\n  border-bottom: 3px solid #CCCCCC; }\n  .mainBody-controller .functionBox {\n    width: 100%;\n    height: 70%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n  .mainBody-controller .userBox {\n    width: 100%;\n    height: 25%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n    .mainBody-controller .userBox .button {\n      color: #8888A0; }\n    .mainBody-controller .userBox .controller-unit {\n      width: 90%;\n      background-color: #E03612; }\n  .mainBody-controller .button:nth-child(2n+0) {\n    margin-left: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-controller/main-controller.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// import { WebsocketService } from '../../services/common.service';
// import { CommonService } from '../../services/common.service';
var MainControllerComponent = (function () {
    function MainControllerComponent() {
        this.functionList = [
            // {label:'车牌预置-F3',buttonName:"setCard"},
            // {label:'取消配置-F4',buttonName:"removeCard"},
            { label: '无卡放行', buttonName: "release", permiss: ['lessor'] },
            { label: '卡机出卡', buttonName: "outCard", permiss: ['lessor'] },
            // {label:'转到六画面',buttonName:"transform",permiss:['lessor']},
            { label: '卡片检测', buttonName: "checkCard", permiss: ['lessor'] },
            { label: '月卡期限查询', buttonName: "searchCard", permiss: ['property', 'lessor'] },
            { label: '场内车辆查询', buttonName: "searchCar", permiss: ['lessor'] },
            { label: '收费记录查询', buttonName: "searchRecord", permiss: ['lessor'] },
        ];
        this.userList = [
            { label: '修改密码', buttonName: "changePassword", permiss: ['lessor'] },
            { label: '换班登录', buttonName: "login", permiss: ['lessor', 'all'] }
        ];
    }
    MainControllerComponent.prototype.ngOnInit = function () {
    };
    MainControllerComponent = __decorate([
        core_1.Component({
            selector: 'app-main-controller',
            template: __webpack_require__("../../../../../src/app/pages/main-controller/main-controller.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main-controller/main-controller.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainControllerComponent);
    return MainControllerComponent;
}());
exports.MainControllerComponent = MainControllerComponent;


/***/ }),

/***/ "../../../../../src/app/pages/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap row_start_start\">\r\n  <!-- 文件菜单栏 -->\r\n  <div class=\"menu\" [style.overflow]=\"file.isVisible?'visible':'hidden'\">\r\n    <div (click)=\"toggleMenuCover($event,'file')\" class=\"menu-label row_center_center\">账户</div>\r\n    <div class=\"menu-panel\">\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('changePassword')\">修改密码</div>\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('login')\">换班登录</div>  \r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('setBaseInfo')\">基本设置</div>\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('quit')\">退出</div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 车场管理菜单栏 -->\r\n  <div class=\"menu\" [style.overflow]=\"parkingManage.isVisible?'visible':'hidden'\">\r\n    <div (click)=\"toggleMenuCover($event,'parkingManage')\" class=\"menu-label row_center_center\">车场管理</div>\r\n    <div class=\"menu-panel\">\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('setController')\">控制机设置</div>\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('setRoad')\">车道设置</div>\r\n      <!-- <div class=\"menu-item\" (click)=\"clickMenuHandle('setFeeStandard')\">收费标准</div> -->\r\n      <!-- <div class=\"menu-item\" (click)=\"clickMenuHandle('setDeviceNo')\">机号设置</div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 停车管理菜单栏 -->\r\n  <div class=\"menu\" [style.overflow]=\"recordManage.isVisible?'visible':'hidden'\">\r\n    <div (click)=\"toggleMenuCover($event,'recordManage')\" class=\"menu-label row_center_center\">停车管理</div>\r\n    <div class=\"menu-panel\">\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('recordOut')\">出场纪录</div>\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('recordIn')\">入场纪录</div>\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('recordRelease')\">无卡放行纪录</div>\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('recordCar')\">场内车辆查询</div>\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('recordCarCharge')\">车辆收费查询</div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 卡片管理菜单栏 -->\r\n  <div class=\"menu\" [style.overflow]=\"cardManage.isVisible?'visible':'hidden'\">\r\n    <div (click)=\"toggleMenuCover($event,'cardManage')\" class=\"menu-label row_center_center\">卡片管理</div>\r\n    <div class=\"menu-panel\">\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('cardDownload')\">卡号下载</div>\r\n      <div class=\"menu-item\" (click)=\"clickMenuHandle('cardQuery')\">月卡期限查询</div>\r\n    </div>\r\n  </div>\r\n\r\n    <!-- 数据同步菜单栏 -->\r\n    <div class=\"menu\" [style.overflow]=\"update.isVisible?'visible':'hidden'\">\r\n      <div (click)=\"toggleMenuCover($event,'update')\" class=\"menu-label row_center_center\">数据同步</div>\r\n      <div class=\"menu-panel\">\r\n        <div class=\"menu-item\" (click)=\"clickMenuHandle('updateInParking')\">入场纪录</div>\r\n        <div class=\"menu-item\" (click)=\"clickMenuHandle('UpdateOutParking')\">出场纪录</div>\r\n        <div class=\"menu-item\" (click)=\"clickMenuHandle('updateRelease')\">无卡放行记录</div>\r\n        <div class=\"menu-item\" (click)=\"clickMenuHandle('updateCardInfo')\">月卡信息</div>  \r\n        <!-- <div class=\"menu-item\" (click)=\"clickMenuHandle('updateRoadInfo')\">车道信息</div>               -->\r\n        <div class=\"menu-item\" (click)=\"clickMenuHandle('updatePrivilege')\">优惠规则</div>        \r\n      </div>\r\n    </div>\r\n  <!-- 关于菜单栏 -->\r\n  <!-- <div class=\"menu\" [style.overflow]=\"about.isVisible?'visible':'hidden'\">\r\n    <div (click)=\"toggleMenuCover($event,'about')\" class=\"menu-label row_center_center\">关于</div>\r\n    <div class=\"menu-panel\">\r\n      <div class=\"menu-item\">暂无条目</div>\r\n      <div class=\"menu-item\">暂无条目</div>\r\n      <div class=\"menu-item\">暂无条目</div>\r\n      <div class=\"menu-item\">暂无条目</div>\r\n    </div>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/main-menu/main-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*设置头部的位置*/\n.wrap {\n  width: 100%;\n  background-color: #EFF1F7;\n  height: 30px; }\n\n.menu {\n  background-color: #FEFEFE;\n  width: 100px;\n  height: 30px;\n  z-index: 11;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-size: 14px;\n  color: #666666; }\n  .menu .menu-panel {\n    width: 120px;\n    background-color: white; }\n  .menu .menu-label {\n    font-size: 14px;\n    color: #354052;\n    border-style: none;\n    width: 100px;\n    height: 29px;\n    border-radius: 4px;\n    border-bottom: 3px solid #e3e5ec;\n    background-color: #EFF1F7;\n    text-align: center; }\n  .menu .menu-item {\n    border-bottom: 1px solid #E1E1E1;\n    padding: 8px 0 8px 10px;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .menu .menu-item:nth-last-child() {\n    border-bottom: none; }\n  .menu .menu-item:hover {\n    background-color: #e3e5ec; }\n  .menu .menu-label:active {\n    outline: none;\n    background-color: #e3e5ec; }\n  .menu .menu-label:focus {\n    outline: none; }\n  .menu .menu-visibel {\n    overflow: visible; }\n  .menu .menu-hidden {\n    overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-menu/main-menu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var menu_service_1 = __webpack_require__("../../../../../src/app/services/menu/menu.service.ts");
var MainMenuComponent = (function () {
    function MainMenuComponent(menu) {
        this.menu = menu;
        /**文件菜单栏 */
        this.file = {
            isVisible: false
        };
        /**车场管理 */
        this.parkingManage = {
            isVisible: false
        };
        /**停车管理 */
        this.recordManage = {
            isVisible: false
        };
        /**卡片管理 */
        this.cardManage = {
            isVisible: false
        };
        /**数据同步 */
        this.update = {
            isVisible: false
        };
        /**关于 */
        this.about = {
            isVisible: false
        };
        this.isShowMenuCover = false;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.isShowMenu$.subscribe(function (isShow) {
            if (isShow === false) {
                _this.hiddenMenuCover();
            }
        });
    };
    /**菜单按钮功能 */
    MainMenuComponent.prototype.clickMenuHandle = function (menuName) {
        this.menu.handle(menuName);
    };
    /**显示菜单 */
    MainMenuComponent.prototype.toggleMenuCover = function ($event, menuLabel) {
        if (menuLabel == 'file') {
            var isVisible = this.file.isVisible;
            this.hiddenMenuCover();
            this.file.isVisible = !isVisible;
        }
        else if (menuLabel == 'parkingManage') {
            var isVisible = this.parkingManage.isVisible;
            this.hiddenMenuCover();
            this.parkingManage.isVisible = !isVisible;
        }
        else if (menuLabel == 'recordManage') {
            var isVisible = this.recordManage.isVisible;
            this.hiddenMenuCover();
            this.recordManage.isVisible = !isVisible;
        }
        else if (menuLabel == 'cardManage') {
            var isVisible = this.cardManage.isVisible;
            this.hiddenMenuCover();
            this.cardManage.isVisible = !isVisible;
        }
        else if (menuLabel == 'update') {
            var isVisible = this.update.isVisible;
            this.hiddenMenuCover();
            this.update.isVisible = !isVisible;
        }
        else if (menuLabel == 'about') {
            var isVisible = this.about.isVisible;
            this.hiddenMenuCover();
            this.about.isVisible = !isVisible;
        }
        this.menu.isShowMenu$.next(true);
        $event.stopPropagation();
    };
    /**隐藏菜单 */
    MainMenuComponent.prototype.hiddenMenuCover = function () {
        this.file.isVisible = false;
        this.parkingManage.isVisible = false;
        this.about.isVisible = false;
        this.recordManage.isVisible = false;
        this.cardManage.isVisible = false;
        this.update.isVisible = false;
    };
    MainMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-main-menu',
            template: __webpack_require__("../../../../../src/app/pages/main-menu/main-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main-menu/main-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [menu_service_1.MenuService])
    ], MainMenuComponent);
    return MainMenuComponent;
}());
exports.MainMenuComponent = MainMenuComponent;


/***/ }),

/***/ "../../../../../src/app/pages/main-navbar/main-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row_between_center header word\" [ngClass]=\"{'no-drag':no_drag}\">\r\n  <!-- 时钟 -->\r\n  <div class=\"row_center_center clockBox\">\r\n    <img src=\"assets/img/clock.svg\" class=\"icon-clock\" />\r\n    <span>{{time | date:\"yyyy-MM-dd HH:mm:ss\"}}</span>\r\n  </div>\r\n\r\n  <!-- 操作员信息 -->\r\n  <div class=\"row_start_start infoBox\">\r\n    <!-- <div *ngIf=\"cardNum\">\r\n      <span>操作卡：</span>\r\n      <span>{{cardNum}}</span>\r\n    </div> -->\r\n    <!-- <div class=\"divider\" *ngIf=\"operator\"></div>\r\n    <div *ngIf=\"operator\">\r\n      <span>操作员：</span>\r\n      <span>{{operator}}</span>\r\n    </div> -->\r\n    <!-- <div class=\"divider\" *ngIf=\"operator\"></div> -->\r\n    <div>\r\n      <span>操作员：</span>\r\n      <span>{{operator?operator:'　　　'}}</span>\r\n    </div>\r\n    <!-- <div class=\"divider\"  *ngIf=\"total\"></div>\r\n    <div *ngIf=\"total\">\r\n      <span>累计金额：</span>\r\n      <span>{{total}}</span>\r\n    </div>\r\n    <div class=\"divider\" *ngIf=\"freeTotal\"></div>\r\n    <div *ngIf=\"freeTotal\">\r\n      <span>免费金额：</span>\r\n      <span>{{freeTotal}}</span>\r\n    </div> -->\r\n  </div>\r\n\r\n  <!-- 按钮 -->\r\n  <div class=\"row_around_center buttonBox\">\r\n    <div class=\"header-minimize icon\" (click)=\"min()\">\r\n      <img src=\"assets/img/减号.svg\" />\r\n    </div>\r\n    <div class=\"header-max icon\" (click)=\"max()\">\r\n      <img src=\"assets/img/方形未选中.svg\"/>\r\n    </div>\r\n    <div class=\"header-close icon\" (click)=\"close()\">\r\n      <img src=\"assets/img/关闭.svg\"/>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/main-navbar/main-navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*设置头部的位置*/\n.header {\n  -webkit-app-region: drag;\n  background-color: #E03612;\n  position: relative;\n  width: 100%;\n  height: 40px;\n  overflow: hidden;\n  font-size: 14px;\n  color: #FEFEFE; }\n  .header .clockBox {\n    width: 270px;\n    height: 100%; }\n    .header .clockBox span {\n      margin-left: 6px; }\n  .header .infoBox {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    height: 100%;\n    margin-right: 40px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .header .buttonBox {\n    width: 100px;\n    height: 100%; }\n  .header .divider {\n    height: 35%;\n    width: 1px;\n    background-color: #b32b0e; }\n  .header .word {\n    font-size: 14px;\n    color: #FEFEFE; }\n\n/*设置三个功能按键*/\n.icon {\n  -webkit-app-region: no-drag; }\n\n.icon:hover {\n  background-color: rgba(224, 54, 18, 0.7); }\n\n.no-drag {\n  -webkit-app-region: no-drag; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-navbar/main-navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var navbutton_service_1 = __webpack_require__("../../../../../src/app/services/navbutton/navbutton.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var MainNavbarComponent = (function () {
    function MainNavbarComponent(nav, user, modal) {
        var _this = this;
        this.nav = nav;
        this.user = user;
        this.modal = modal;
        /**当前时间 */
        this.time = new Date();
        /**窗口状态.真为最大化，假为原始化 */
        this.win_state = false;
        /**no-drag */
        this.no_drag = false;
        this.cardNum = '80001';
        this.total = '23520';
        this.freeTotal = '80001';
        this.modal.isShowModal$.subscribe(function (isShow) {
            _this.no_drag = isShow;
        });
    }
    MainNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //更新时间
        setInterval(function () {
            _this.time = new Date();
        }, 1000);
        //订阅用户信息流
        this.user.userInfo$.subscribe(function (info) {
            _this.operator = info;
        });
    };
    MainNavbarComponent.prototype.close = function () {
        this.nav.app_close();
    };
    MainNavbarComponent.prototype.min = function () {
        this.nav.window_hide();
    };
    MainNavbarComponent.prototype.max = function () {
        if (this.win_state) {
            this.nav.window_orignal();
        }
        else {
            this.nav.window_show();
        }
        this.win_state = !this.win_state;
    };
    MainNavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-main-navbar',
            template: __webpack_require__("../../../../../src/app/pages/main-navbar/main-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main-navbar/main-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [navbutton_service_1.NavbuttonService, user_service_1.UserService, modal_service_1.ModalService])
    ], MainNavbarComponent);
    return MainNavbarComponent;
}());
exports.MainNavbarComponent = MainNavbarComponent;


/***/ }),

/***/ "../../../../../src/app/pages/main-parkinfo/main-parkinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<!--停车场信息模块-->\r\n<div class=\"mainBody-parkingLotInfo\">\r\n\t<div class=\"row1\">\r\n\t\t<div>\r\n\t\t\t<span>月　卡：</span>\r\n\t\t\t<span>{{parkInfoObj.monthCardNum}}</span>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<span>临时卡：</span>\r\n\t\t\t<span>{{parkInfoObj.temporaryCard}}</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- <div class=\"row1\">\r\n\t\t<span>免费卡：</span>\r\n\t\t<span>{{cardNum}}</span>\r\n\t\t<span>储值卡：</span>\r\n\t\t<span>{{dep}}</span>\r\n\t</div> -->\r\n\t<div class=\"row1\">\r\n\t\t<div>\r\n\t\t\t<span class=\"long\">手动放入：</span>\r\n\t\t\t<span>{{parkInfoObj.inWithHand}}</span>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<span class=\"long\">手动放出：</span>\r\n\t\t\t<span>{{parkInfoObj.outWithHand}}</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row1\">\r\n\t\t<div>\r\n\t\t\t<span>余　位：</span>\r\n\t\t\t<span>{{parkInfoObj.remaining}}</span>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div>\r\n\t\t\t<span>总车位：</span>\r\n\t\t\t<span>{{parkInfoObj.total}}</span>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/main-parkinfo/main-parkinfo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.mainBody-parkingLotInfo {\n  background-color: #FFFFFF;\n  width: 744px;\n  height: 59px;\n  margin-top: 10px;\n  border: 1px solid #CCCCCC;\n  border-bottom: 3px solid #CCCCCC;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n  .mainBody-parkingLotInfo .row1 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 50%;\n    height: 100%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column wrap;\n            flex-flow: column wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin-left: 20px; }\n    .mainBody-parkingLotInfo .row1 span:nth-child(2n+1) {\n      overflow: hidden;\n      width: 50%; }\n    .mainBody-parkingLotInfo .row1 span:nth-child(2n) {\n      width: 50%;\n      overflow: hidden; }\n  .mainBody-parkingLotInfo .row1:nth-child(3) .long {\n    width: 70%; }\n\n.parkingLotInfo-unit {\n  color: #999999;\n  font-size: 14px;\n  position: relative;\n  display: block;\n  margin-top: -3px;\n  margin-bottom: -3px;\n  border-style: none;\n  width: 150px;\n  height: 25px;\n  float: left; }\n\n.parkingLotInfo-unit > input {\n  /*margin-top: -3px;*/\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n  width: 50px;\n  outline: none;\n  border: none;\n  background-color: #FFFFFF;\n  color: #354052; }\n\n.key {\n  color: #999999; }\n\n.value {\n  color: #354052; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main-parkinfo/main-parkinfo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parkLot_service_1 = __webpack_require__("../../../../../src/app/services/parkLot/parkLot.service.ts");
var MainParkinfoComponent = (function () {
    function MainParkinfoComponent(parkInfo) {
        var _this = this;
        this.parkInfo = parkInfo;
        this.parkInfoObj = {
            monthCardNum: 0,
            temporaryCard: 0,
            inWithHand: 0,
            outWithHand: 0,
            remaining: 0,
            total: 0
        };
        // console.log('hello');
        this.parkInfo.parkLotObj$.subscribe(function (info) {
            _this.parkInfoObj = info;
        });
        this.parkInfo.setTotal(360);
        this.parkInfo.setRemaining(60);
    }
    MainParkinfoComponent.prototype.ngOnInit = function () {
    };
    MainParkinfoComponent = __decorate([
        core_1.Component({
            selector: 'app-main-parkinfo',
            template: __webpack_require__("../../../../../src/app/pages/main-parkinfo/main-parkinfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main-parkinfo/main-parkinfo.component.scss")]
        }),
        __metadata("design:paramtypes", [parkLot_service_1.ParkLotService])
    ], MainParkinfoComponent);
    return MainParkinfoComponent;
}());
exports.MainParkinfoComponent = MainParkinfoComponent;


/***/ }),

/***/ "../../../../../src/app/pages/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainBox\" (click)=\"clickMain()\">\r\n    <div>\r\n        <app-main-navbar></app-main-navbar>\r\n    </div>\r\n    <div>\r\n        <app-main-menu></app-main-menu>\r\n    </div>\r\n    <div class=\"flex_justifyContent_center mainBox\">\r\n        <div class=\"\" style=\"width:280px;\">\r\n            <app-main-controller></app-main-controller>\r\n            <app-main-carinfo></app-main-carinfo>\r\n        </div>\r\n        <div class=\"flex_1\" style=\"margin-bottom:166px;\">\r\n            <app-main-parkinfo></app-main-parkinfo>\r\n            <app-main-carviews></app-main-carviews>\r\n        </div>\r\n        <!-- <app-main-controller></app-main-controller> -->\r\n        <!-- <app-main-carinfo></app-main-carinfo> -->\r\n        <!-- <app-main-parkinfo></app-main-parkinfo> -->\r\n        <!-- <app-main-carviews></app-main-carviews> -->\r\n    </div>\r\n</div>\r\n\r\n<app-modal class=\"modalBox\" [ngClass]=\"{'block':isShow}\"></app-modal>\r\n\r\n\r\n\r\n<!--\r\n<div>\r\n    <div class=\"height100andwidth100\" style=\"background-color:#E03612;\">\r\n        <app-main-navbar></app-main-navbar>\r\n    </div>\r\n    <div class=\"height100andwidth100\">\r\n        <app-main-menu></app-main-menu>\r\n    </div>\r\n    <div class=\"flex_justifyContent_center\">\r\n        <div style=\"width:280px;\">\r\n            <app-main-controller></app-main-controller>\r\n            <app-main-carinfo></app-main-carinfo>\r\n        </div>\r\n        <div class=\"flex_1\">\r\n            <app-main-parkinfo></app-main-parkinfo>\r\n            <app-main-carviews></app-main-carviews>\r\n        </div>\r\n    </div>\r\n</div>\r\n-->"

/***/ }),

/***/ "../../../../../src/app/pages/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".layout_stc {\n  width: 280px; }\n\n.mainBox {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 10; }\n\n.modalBox {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: none; }\n\n.block {\n  display: block; }\n\n/*\r\n<div>\r\n    <div class=\"height100andwidth100\" style=\"background-color:#E03612;\">\r\n        <app-main-navbar></app-main-navbar>\r\n    </div>\r\n    <div class=\"height100andwidth100\">\r\n        <app-main-menu></app-main-menu>\r\n    </div>\r\n    <div class=\"flex_justifyContent_center\">\r\n        <div style=\"width:280px;\">\r\n            <app-main-controller></app-main-controller>\r\n            <app-main-carinfo></app-main-carinfo>\r\n        </div>\r\n        <div class=\"flex_1\">\r\n            <app-main-parkinfo></app-main-parkinfo>\r\n            <app-main-carviews></app-main-carviews>\r\n        </div>\r\n    </div>\r\n</div>\r\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/main/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var menu_service_1 = __webpack_require__("../../../../../src/app/services/menu/menu.service.ts");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
// import { InparkdbService } from '../../services/inParkList/inparkdb.service';
// import { OutparkdbService } from '../../services/outParkList/outparkdb.service';
// import { ReleasedbService } from '../../services/releaseList/releasedb.service';
var roadListDB_1 = __webpack_require__("../../../../../src/app/services/DB/roadListDB.ts");
var cardListDB_1 = __webpack_require__("../../../../../src/app/services/DB/cardListDB.ts");
var inparkListDB_1 = __webpack_require__("../../../../../src/app/services/DB/inparkListDB.ts");
var outparkListDB_1 = __webpack_require__("../../../../../src/app/services/DB/outparkListDB.ts");
var releaseListDB_1 = __webpack_require__("../../../../../src/app/services/DB/releaseListDB.ts");
var privilegeListDB_1 = __webpack_require__("../../../../../src/app/services/DB/privilegeListDB.ts");
var cloud_service_1 = __webpack_require__("../../../../../src/app/services/cloud/cloud.service.ts");
var MainComponent = (function () {
    function MainComponent(modal, device, inpark, menu, outpark, release, road, card, pri, cloud) {
        this.modal = modal;
        this.device = device;
        this.inpark = inpark;
        this.menu = menu;
        this.outpark = outpark;
        this.release = release;
        this.road = road;
        this.card = card;
        this.pri = pri;
        this.cloud = cloud;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modal.isShowModal$.subscribe(function (isShow) {
            _this.isShow = isShow;
        });
        // this.
        var a = {
            "name": "12315454"
        };
        console.log(JSON.parse(JSON.stringify(a)));
    };
    /**点击全局功能 */
    MainComponent.prototype.clickMain = function () {
        this.menu.isShowMenu$.next(false);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/pages/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [modal_service_1.ModalService, device_service_1.DeviceService, inparkListDB_1.InparkdbService, menu_service_1.MenuService,
            outparkListDB_1.OutparkdbService, releaseListDB_1.ReleasedbService,
            roadListDB_1.RoadListDBService, cardListDB_1.CardListDBService, privilegeListDB_1.PrivilegedbService,
            cloud_service_1.CloudService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;


/***/ }),

/***/ "../../../../../src/app/pipe/dateformat/dateformat.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DateformatPipe = (function () {
    function DateformatPipe() {
    }
    DateformatPipe.prototype.transform = function (date) {
        var days;
        var hours;
        var minutes;
        var seconds;
        if (date >= 86400000) {
            var temp = 0;
            days = Math.floor((date - temp) / 86400000);
            temp += days * 86400000;
            hours = Math.floor((date - temp) / 3600000);
            temp += hours * 3600000;
            minutes = Math.floor((date - temp) / 60000);
            temp += minutes * 60000;
            seconds = Math.floor((date - temp) / 1000);
            return days + "\u5929" + hours + "\u5C0F\u65F6" + minutes + "\u5206" + seconds + "\u79D2";
        }
        else if (date < 86400000 && date >= 3600000) {
            var temp = 0;
            hours = Math.floor((date - temp) / 3600000);
            temp += hours * 3600000;
            minutes = Math.floor((date - temp) / 60000);
            temp += minutes * 60000;
            seconds = Math.floor((date - temp) / 1000);
            return hours + "\u5C0F\u65F6" + minutes + "\u5206" + seconds + "\u79D2";
        }
        else if (date < 3600000 && date >= 60000) {
            var temp = 0;
            minutes = Math.floor((date - temp) / 60000);
            temp += minutes * 60000;
            seconds = Math.floor((date - temp) / 1000);
            return minutes + "\u5206" + seconds + "\u79D2";
        }
        else if (date < 60000 && date >= 1000) {
            var temp = 0;
            seconds = Math.floor((date - temp) / 1000);
            return seconds + "\u79D2";
        }
        else {
            return "0\u79D2";
        }
        // return `${date.getFullYear()}-${date.getMonth()<10?"0"+date.getMonth():date.getMonth()}-${date.getDate()<10?"0"+date.getDate():date.getDate()}　${date.getHours()<10?"0"+date.getHours():date.getHours()}:${date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()}:${date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds()}`;
    };
    DateformatPipe = __decorate([
        core_1.Pipe({
            name: 'parkingTime'
        })
    ], DateformatPipe);
    return DateformatPipe;
}());
exports.DateformatPipe = DateformatPipe;


/***/ }),

/***/ "../../../../../src/app/popover/changePassword/changePassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\n    <close-button class=\"close-button\"></close-button>\n    <div class=\"title\">\n        <span><b>修改密码</b></span>\n    </div>\n    <div class=\"logPanel\">\n        <input type=\"text\" class=\"logPanel-account\" placeholder=\"请输入原密码\"  (blur)=\"checkPassword()\" [(ngModel)]=\"password\"/>\n        <input type=\"password\" class=\"logPanel-password\" placeholder=\"请输入新密码\"  [(ngModel)]=\"newPassword\"/>\n        <input type=\"password\" class=\"logPanel-password\" placeholder=\"请再输入新密码\" (blur)=\"samePassword()\" [(ngModel)]=\"confirmPassword\"/>\n        <button type=\"button\" class=\"logPanel-login\" (click)=\"changeNewPassword()\" [ngClass]=\"{'logPanel-login-true':isTruePassword&&isSamePassword}\">提交</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/popover/changePassword/changePassword.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 500px;\n  height: 500px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title {\n  width: 332px;\n  height: 98px;\n  font-size: 18px;\n  font-family: \"SimHei\";\n  color: #E03612;\n  border-bottom: 1px #E03612 solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title span {\n    padding-top: 25px; }\n\n.logPanel {\n  width: 329px;\n  color: #E03612; }\n\n.logPanel-account,\n.logPanel-password {\n  position: relative;\n  width: 100%;\n  height: 40px;\n  font-size: 18px;\n  color: #999999;\n  margin-top: 34px;\n  border-radius: 3px;\n  border: solid 1px; }\n\n.logPanel-account:active, .logPanel-account:focus,\n.logPanel-password:active, .logPanel-password:focus {\n  border-style: solid;\n  outline: none; }\n\n.logPanel-login {\n  position: relative;\n  width: 100%;\n  height: 40px;\n  font-family: \"SimHei\";\n  font-size: 20px;\n  color: #FFFFFF;\n  background-color: #E03612;\n  margin-top: 64px;\n  border-radius: 3px;\n  border: solid #E03612; }\n\n.logPanel-login:active, .logPanel-login:focus, .logPanel-login:hover {\n  border-style: solid;\n  outline: none;\n  background-color: #E03612; }\n\n.logPanel-login-true {\n  background-color: #E03612; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popover/changePassword/changePassword.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(user, modal) {
        this.user = user;
        this.modal = modal;
        /**密码是否正确，密码是否相同 */
        this.isTruePassword = false;
        this.isSamePassword = false;
        this.password = '';
        this.newPassword = "";
        this.confirmPassword = "";
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.isTruePassword$.subscribe(function (isTrue) {
            _this.isTruePassword = isTrue;
        });
        this.user.isSuccessChange$.subscribe(function (isSuccess) {
            if (isSuccess == true) {
                _this.modal.isOperable$.next(true);
                _this.modal.closeModal();
                _this.clearData();
                _this.user.clearStream();
            }
        });
    };
    /**检查密码是否正确 */
    ChangePasswordComponent.prototype.checkPassword = function () {
        this.user.checkPassword(this.password);
        // alert(112);
    };
    /**检查密码是否相同 */
    ChangePasswordComponent.prototype.samePassword = function () {
        this.isSamePassword = this.newPassword == this.confirmPassword ? true : false;
    };
    /**如果验证通过则修改密码 */
    ChangePasswordComponent.prototype.changeNewPassword = function () {
        if (this.isTruePassword == true && this.isSamePassword == true) {
            this.user.changePassword(this.newPassword);
            this.modal.isOperable$.next(false);
        }
    };
    ChangePasswordComponent.prototype.clearData = function () {
        this.password = '';
        this.newPassword = "";
        this.confirmPassword = "";
    };
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-changePassword',
            template: __webpack_require__("../../../../../src/app/popover/changePassword/changePassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popover/changePassword/changePassword.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, modal_service_1.ModalService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;


/***/ }),

/***/ "../../../../../src/app/popover/checkCard/checkCard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n        <b>场内车辆查询</b>\r\n    </span>\r\n    </div>\r\n    <div class=\"searchBox\">\r\n        <div class=\"tabel-title\">查询条件</div>\r\n        <div class=\"searchPanel\" style=\"margin-left:90px;\">\r\n            <div class=\"flex_alignItem_center-justifyContent_center\">\r\n                <span class=\"recordDesc\">卡片号码</span>\r\n                <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"cardNo\" class=\"recordInput\">\r\n            </div>\r\n\r\n            <div class=\"flex_alignItem_center-justifyContent_center\">\r\n                <span class=\"recordDesc\">车牌号码</span>\r\n                <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"carNumber\" class=\"recordInput\">\r\n            </div>\r\n\r\n            <button type=\"button\" (click)=\"getParkingCarList()\" class=\"searchbutton\">查询</button>\r\n            <button type=\"button\" (click)=\"reset()\" class=\"resetbutton\">重置</button>\r\n        </div>\r\n    </div>\r\n    <!--\r\n        \r\n    -->\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of inaa\">\r\n                    <td>{{item.cardID}}</td>\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.comeTime | date:\"HH:mm:ss\"}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of outaa\">\r\n                    <td>{{item.cardID}}</td>\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.comeTime | date:\"HH:mm:ss\"}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <button (click)=\"send()\">hb</button>\r\n    <button (click)=\"send1()\">查时间</button>\r\n    <button (click)=\"send2()\">设时间</button>\r\n    <button (click)=\"send3()\">开</button>\r\n    <button (click)=\"send4()\">关</button>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popover/checkCard/checkCard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title {\n  font-size: 18px;\n  font-family: \"SimHei\";\n  color: #E03612;\n  border-bottom: 1px #E03612 solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title span {\n    padding-top: 25px; }\n\n.searchPanel {\n  width: 329px;\n  color: #E03612;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .searchPanel div {\n    margin-right: 5px; }\n    .searchPanel div input {\n      width: 100px; }\n\n.resetbutton {\n  font-size: 14px;\n  color: #354052;\n  border-style: none;\n  min-width: 50px;\n  min-height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #e3e5ec;\n  background-color: #EFF1F7; }\n\n.resetbutton:active {\n  outline: none;\n  background-color: #e3e5ec; }\n\n.resetbutton:focus {\n  outline: none; }\n\n.searchbutton {\n  font-size: 14px;\n  border-style: none;\n  min-width: 50px;\n  min-height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #FF6003;\n  background-color: #E03612;\n  color: #EFF1F7;\n  margin-right: 5px;\n  background-color: #FF6003; }\n\n.searchbutton:active {\n  outline: none;\n  background-color: #FF6003; }\n\n.searchbutton:focus {\n  outline: none; }\n\n.recordDesc {\n  font-size: 14px;\n  padding-right: 10px;\n  display: inline-block;\n  width: 73px; }\n\n.recordInput {\n  width: 150px;\n  height: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popover/checkCard/checkCard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// import { InparkdbService,inParkItem } from '../../services/inParkList/inparkdb.service';
// import { OutparkdbService,outParkItem } from '../../services/outParkList/outparkdb.service';
// import { ParkingService } from '../../services/parking/parking.service';
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var CheckCardComponent = (function () {
    function CheckCardComponent(device) {
        this.device = device;
        this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op === "ret-hb"; }).subscribe(function (data) {
            console.log("hb");
            console.log(data);
        });
    }
    CheckCardComponent.prototype.ngOnInit = function () {
    };
    CheckCardComponent.prototype.send = function () {
        // let a;
        // this.device.sendHb(a);
        this.device.sendHb();
    };
    CheckCardComponent.prototype.send1 = function () {
        // let a;
        // this.device.sendHb(a);
        this.device.sendGetTime(1);
    };
    CheckCardComponent.prototype.send2 = function () {
        // let a;
        // this.device.sendHb(a);
        this.device.sendSetHwTime(1);
    };
    CheckCardComponent.prototype.send3 = function () {
        // let a;
        // this.device.sendHb(a);
        this.device.sendOpenGate(1);
        this.device.sendOpenGate(2);
    };
    CheckCardComponent.prototype.send4 = function () {
        // let a;
        // this.device.sendHb(a);
        this.device.sendCloseGate(1);
    };
    CheckCardComponent = __decorate([
        core_1.Component({
            selector: 'app-checkCard',
            template: __webpack_require__("../../../../../src/app/popover/checkCard/checkCard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popover/checkCard/checkCard.component.scss")]
        }),
        __metadata("design:paramtypes", [device_service_1.DeviceService])
    ], CheckCardComponent);
    return CheckCardComponent;
}());
exports.CheckCardComponent = CheckCardComponent;


/***/ }),

/***/ "../../../../../src/app/popover/interceptor/interceptor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n          <b>输入密码</b>\r\n      </span>\r\n    </div>\r\n    <div class=\"logPanel\">\r\n        <input type=\"password\" class=\"logPanel-password\" placeholder=\"请输入验证密码\" value=\"\" #password/>\r\n        <button type=\"button\" class=\"logPanel-login\" (click)=\"login(password)\">{{buttonWord}}</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popover/interceptor/interceptor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 500px;\n  height: 300px; }\n\n.logPanel {\n  width: 329px;\n  color: #E03612; }\n\n.logPanel-account,\n.logPanel-password {\n  position: relative;\n  width: 100%;\n  height: 40px;\n  font-size: 18px;\n  color: #999999;\n  margin-top: 34px;\n  border-radius: 3px;\n  border: solid 1px; }\n\n.logPanel-account:active, .logPanel-account:focus,\n.logPanel-password:active, .logPanel-password:focus {\n  border-style: solid;\n  outline: none; }\n\n.logPanel-login {\n  position: relative;\n  width: 100%;\n  height: 40px;\n  font-family: \"SimHei\";\n  font-size: 20px;\n  color: #FFFFFF;\n  background-color: #E03612;\n  margin-top: 64px;\n  border-radius: 3px;\n  border: solid #E03612; }\n\n.logPanel-login:active, .logPanel-login:focus, .logPanel-login:hover {\n  border-style: solid;\n  outline: none;\n  background-color: #D82A1A; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popover/interceptor/interceptor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var InterceptorComponent = (function () {
    function InterceptorComponent(modal, user) {
        this.modal = modal;
        this.user = user;
        /**按钮字 */
        this.buttonWord = "登录";
        this.isOperable = true;
    }
    InterceptorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modal.isOperable$.subscribe(function (isAble) {
            if (isAble == true) {
                _this.buttonWord = "登录";
                _this.isOperable = true;
            }
            else {
                _this.buttonWord = "\u767B\u5F55\u4E2D....";
                _this.isOperable = false;
            }
        });
    };
    InterceptorComponent.prototype.login = function (password) {
        var _this = this;
        this.modal.isOperable$.next(false);
        this.user.interceptorLogin(password.value);
        setTimeout(function () {
            if (_this.isOperable == false) {
                _this.modal.isOperable$.next(true);
                alert("登录超时");
            }
        }, 5000);
    };
    InterceptorComponent = __decorate([
        core_1.Component({
            selector: 'app-interceptor',
            template: __webpack_require__("../../../../../src/app/popover/interceptor/interceptor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popover/interceptor/interceptor.component.scss")]
        }),
        __metadata("design:paramtypes", [modal_service_1.ModalService, user_service_1.UserService])
    ], InterceptorComponent);
    return InterceptorComponent;
}());
exports.InterceptorComponent = InterceptorComponent;


/***/ }),

/***/ "../../../../../src/app/popover/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span><b>登录</b></span>\r\n    </div>\r\n    <div class=\"logPanel\">\r\n        <input type=\"text\" class=\"logPanel-account\" placeholder=\"用户账号/密码\" value=\"13022222225\" #account/>\r\n        <input type=\"password\" class=\"logPanel-password\" placeholder=\"请输入登录密码\" value=\"123456\" #password/>\r\n        <button type=\"button\" class=\"logPanel-login\" (click)=\"login(account,password)\">{{buttonWord}}</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popover/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 500px;\n  height: 420px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title {\n  width: 332px;\n  height: 98px;\n  font-size: 18px;\n  font-family: \"SimHei\";\n  color: #E03612;\n  border-bottom: 1px #E03612 solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title span {\n    padding-top: 25px; }\n\n.logPanel {\n  width: 329px;\n  color: #E03612; }\n\n.logPanel-account,\n.logPanel-password {\n  position: relative;\n  width: 100%;\n  height: 40px;\n  font-size: 18px;\n  color: #999999;\n  margin-top: 34px;\n  border-radius: 3px;\n  border: solid 1px; }\n\n.logPanel-account:active, .logPanel-account:focus,\n.logPanel-password:active, .logPanel-password:focus {\n  border-style: solid;\n  outline: none; }\n\n.logPanel-login {\n  position: relative;\n  width: 100%;\n  height: 40px;\n  font-family: \"SimHei\";\n  font-size: 20px;\n  color: #FFFFFF;\n  background-color: #E03612;\n  margin-top: 64px;\n  border-radius: 3px;\n  border: solid #E03612; }\n\n.logPanel-login:active, .logPanel-login:focus, .logPanel-login:hover {\n  border-style: solid;\n  outline: none;\n  background-color: #D82A1A; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popover/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var LoginComponent = (function () {
    function LoginComponent(user, modal) {
        this.user = user;
        this.modal = modal;
        /**按钮字 */
        this.buttonWord = "登录";
        this.isOperable = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modal.isOperable$.subscribe(function (isAble) {
            if (isAble == true) {
                _this.buttonWord = "登录";
                _this.isOperable = true;
            }
            else {
                _this.buttonWord = "\u767B\u5F55\u4E2D....";
                _this.isOperable = false;
            }
        });
    };
    LoginComponent.prototype.login = function (account, password) {
        var _this = this;
        this.modal.isOperable$.next(false);
        this.user.login(account.value, password.value);
        setTimeout(function () {
            if (_this.isOperable == false) {
                _this.modal.isOperable$.next(true);
                alert("登录超时");
            }
        }, 5000);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/popover/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popover/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, modal_service_1.ModalService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/popover/releaseWithoutCard/releaseWithoutCard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>无卡放行</b>\r\n        </span>\r\n    </div>\r\n    <ul>\r\n        <li class=\"flex mt50\" *ngFor=\"let controllerTimeparamsItem of controllerTimeparamsArray\">\r\n            <div class=\"controllerDevice\">{{controllerTimeparamsItem.name}} </div>\r\n            <div class=\"flex\">\r\n                <p class=\"toPass\" (click)=\"open(controllerTimeparamsItem)\">开闸</p>\r\n                <p class=\"noToPass\" (click)=\"close(controllerTimeparamsItem)\">关闸</p>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popover/releaseWithoutCard/releaseWithoutCard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 500px;\n  height: 500px; }\n\n.controllerDevice {\n  font-size: 14px;\n  height: 30px;\n  line-height: 30px;\n  margin-right: 30px; }\n\n.toPass {\n  font-size: 14px;\n  border-style: none;\n  min-width: 50px;\n  height: 30px;\n  border-radius: 4px;\n  border-bottom: 3px solid #FF6003;\n  background-color: #E03612;\n  color: #EFF1F7;\n  margin-right: 20px;\n  background-color: #FF6003;\n  text-align: center;\n  line-height: 30px;\n  cursor: pointer; }\n\n.noToPass {\n  font-size: 14px;\n  color: #354052;\n  border-style: none;\n  min-width: 50px;\n  height: 30px;\n  border-radius: 4px;\n  border-bottom: 3px solid #e3e5ec;\n  background-color: #EFF1F7;\n  text-align: center;\n  line-height: 30px;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popover/releaseWithoutCard/releaseWithoutCard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var roadListDB_1 = __webpack_require__("../../../../../src/app/services/DB/roadListDB.ts");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var releaseListDB_1 = __webpack_require__("../../../../../src/app/services/DB/releaseListDB.ts");
var ReleaseWithoutCardComponent = (function () {
    function ReleaseWithoutCardComponent(device, roadDB, parking, releaseDB) {
        var _this = this;
        this.device = device;
        this.roadDB = roadDB;
        this.parking = parking;
        this.releaseDB = releaseDB;
        this.controllerTimeparamsArray = [];
        //接收到心跳回馈
        this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op === "ret-hb"; }).subscribe(function (data) {
            if (data.hw && data.hw.length > 0) {
                _this.controllerTimeparamsArray = [];
                data.hw.forEach(function (element) {
                    _this.roadDB.getEntryNameByEntryMarking(element.hw_id).subscribe(function (name) {
                        if (name.isExist == true) {
                            element.name = name.result;
                        }
                        else {
                            element.name = element.hw_id;
                        }
                    });
                    _this.controllerTimeparamsArray.push(element);
                });
            }
        });
        //接收到开闸回馈
        this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op === "ret-z"; }).subscribe(function (data) {
            if (data.v == 1) {
                //查询车道数据库将控制机号转化为车道        
                _this.roadDB.getEntryNameByEntryMarking(data.hw_id).subscribe(function (name) {
                    if (name.isExist == true) {
                        _this.dataFormatToReleaseList(data, name.result);
                    }
                    else {
                        _this.dataFormatToReleaseList(data, data.hw_id);
                    }
                });
            }
        });
        //接收到同步数据回馈
        this.parking.releaseListBack$.subscribe(function (back) {
            //如果收到数据，则删除数据库里面相对应的数据
            if (back.isConnect == true) {
                back.data.forEach(function (element) {
                    _this.releaseDB.deleteDatas(element.recordId);
                });
                _this.releaseDB.releaseList$.next([]);
                //如果此时有数据，则上传到云端
                _this.releaseDB.releaseList$.filter(function (list) { return list.length > 0; }).subscribe(function (list) {
                    // this.parking.addReleaseList(list);
                });
                _this.releaseDB.getList();
            }
            else {
            }
        });
    }
    ReleaseWithoutCardComponent.prototype.ngOnInit = function () {
        /*通过sendHb方法得到订阅的数据*/
        this.device.sendHb();
    };
    ReleaseWithoutCardComponent.prototype.open = function (item) {
        this.device.sendOpenGate(item.hw_id);
    };
    ReleaseWithoutCardComponent.prototype.close = function (item) {
        this.device.sendCloseGate(item.hw_id);
    };
    /**转化为无卡放行纪录 */
    ReleaseWithoutCardComponent.prototype.dataFormatToReleaseList = function (oldData, roadName) {
        var adminUser = JSON.parse(localStorage.adminUser);
        var nowTime = new Date().getTime();
        var newData = {
            adminUserId: adminUser.adminUserId,
            parkId: adminUser.parkId,
            createId: adminUser.createId,
            createName: adminUser.createName,
            createTime: nowTime,
            updateTime: nowTime,
            updateId: adminUser.updateId,
            updateName: adminUser.updateName,
            comeTime: nowTime,
            comePark: roadName,
            gateNumber: oldData.hw_id,
            recordId: oldData.hw_id + "+" + nowTime
        };
        this.parking.addReleaseList([newData]);
    };
    ReleaseWithoutCardComponent = __decorate([
        core_1.Component({
            selector: 'app-releaseWithoutCard',
            template: __webpack_require__("../../../../../src/app/popover/releaseWithoutCard/releaseWithoutCard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popover/releaseWithoutCard/releaseWithoutCard.component.scss")]
        }),
        __metadata("design:paramtypes", [device_service_1.DeviceService, roadListDB_1.RoadListDBService, parking_service_1.ParkingService, releaseListDB_1.ReleasedbService])
    ], ReleaseWithoutCardComponent);
    return ReleaseWithoutCardComponent;
}());
exports.ReleaseWithoutCardComponent = ReleaseWithoutCardComponent;


/***/ }),

/***/ "../../../../../src/app/popover/searchCar/searchCar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>场内车辆查询</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"searchBox\">\r\n        <div class=\"tabel-title\">查询条件</div>\r\n\r\n        <div class=\"searchPanel\">\r\n            <div>\r\n                <span>卡号</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.cardNo\">\r\n            </div>\r\n\r\n            <div>\r\n                <span>车牌号码</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.carNumber\">\r\n            </div>\r\n            <div class=\"\">\r\n                <button type=\"button\" (click)=\"search()\" class=\"searchbutton\">查询</button>\r\n                <button type=\"button\" (click)=\"reset()\" class=\"resetbutton\">重置</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"tabel-title\">查询结果</div>\r\n\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped table-bordered table-hover tabel-width\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of filterBody\">\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.comeTime}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.comePark}}</td>\r\n                    <td>{{item.ownerName}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"footBox\" *ngIf=\"totalSize\">\r\n        <div>第{{currentIndex}}页，共{{maxPage}}页/共找到{{totalSize}}条数据</div>\r\n        <ul class=\"pagination pagination-sm\">\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1)\" *ngIf=\"maxPage>len\">1</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'back')\">←</li>\r\n            <ng-container *ngIf=\"maxPage\">\r\n                <li class=\"page-item page-link hand\" [ngClass]=\"{active:currentIndex==i}\" (click)=\"indexNav(i)\" *ngFor=\"let i of pageIndex\">\r\n                    <ng-container *ngIf=\"i!=null&&i!=undefined\">\r\n                        {{i}}\r\n                    </ng-container>\r\n                </li>\r\n            </ng-container>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'next')\">→</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(maxPage)\" *ngIf=\"maxPage>len\">{{maxPage}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popover/searchCar/searchCar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popover/searchCar/searchCar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var SearchCarComponent = (function () {
    function SearchCarComponent(parking) {
        this.parking = parking;
        // head;
        // body;
        // cardNo:string;
        // carNumber:string;
        // constructor(private parking: ParkingService) { }
        // ngOnInit() {
        //   this.head = ['卡片号码','卡片种类','入场时间','车牌号码','入场名称','入场操作员'];
        //   this.parking.parkingList$.subscribe((obj)=>{
        //     this.body = obj.collection;
        //     console.log(obj);
        //   });
        // }
        // getParkingCarList(){
        //   this.parking.getParkingCarList({
        //     cardNo: this.cardNo,
        //     carNumber: this.carNumber
        // });
        // }
        //   reset(){
        //     this.cardNo = "";
        //     this.carNumber = "";
        //   }
        /**搜索字段 */
        this.map = {
            cardNo: "",
            carNumber: ""
        };
        /**分页功能 */
        /**当前的页数 */
        this.currentIndex = 1;
        /**列表的长度，默认是6 */
        this.len = 6;
        /**每页的条数 */
        this.itemNumber = 10;
        /**分页数组 */
        this.pageIndex = [];
    }
    SearchCarComponent.prototype.search = function () {
        this.parking.getParkingCarList(this.map);
    };
    SearchCarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.head = ['卡号', '卡片种类', '入场时间', '车牌号码', '入场车道', '入场操作员'];
        this.parking.parkingList$.subscribe(function (data) {
            _this.body = data.collection;
            _this.maxPage = Math.ceil(data.collection.length / _this.itemNumber);
            _this.totalSize = data.collection.length;
            _this.len = Number(data.totalPage) > _this.len ? _this.len : Number(data.totalPage);
            _this.currentIndex == 1 ? _this.initPageIndex(_this.len, 1) : false;
            _this.filterArray(_this.body, _this.itemNumber, 1);
        });
    };
    SearchCarComponent.prototype.reset = function () {
        this.map = {
            cardNo: "",
            carNumber: ""
        };
    };
    /**格式化数组，接收参数是数组,每页的条数,输出的是第几页 */
    SearchCarComponent.prototype.filterArray = function (array, itmes, page) {
        //返回可能的最大的索引号
        if (page > Math.ceil(array.length / itmes)) {
            page = Math.ceil(array.length / itmes);
        }
        this.filterBody = array.filter(function (value, index, array) {
            if (index >= (page - 1) * itmes && index < page * itmes) {
                return array[index];
            }
        });
    };
    /**初始化 */
    SearchCarComponent.prototype.initPageIndex = function (len, index) {
        if (index === void 0) { index = 1; }
        index = index < 1 ? 1 : index;
        this.minIndex = index;
        for (var i = 0; i < len; i++) {
            this.pageIndex[i] = index++;
            this.maxIndex = this.pageIndex[i];
        }
    };
    /**点击导航按钮 */
    SearchCarComponent.prototype.indexNav = function (i, mode) {
        if (mode === void 0) { mode = ""; }
        if (mode == "") {
            this.currentIndex = i;
        }
        else if (mode == "back") {
            this.currentIndex - 1 >= 1 ? this.currentIndex -= 1 : this.currentIndex = 1;
        }
        else if (mode == "next") {
            this.currentIndex + 1 <= this.maxPage ? this.currentIndex += 1 : this.currentIndex = this.maxPage;
        }
        //根据点击的按钮显示数据
        this.filterArray(this.body, this.itemNumber, this.currentIndex);
        //如果点击的数大于了当前最大的索引值
        if (this.currentIndex >= this.maxIndex) {
            this.initPageIndex(this.len, this.currentIndex);
        }
        else if (this.currentIndex <= this.minIndex) {
            this.initPageIndex(this.len, this.currentIndex - this.len + 1);
        }
        //如果生成的索引数组小于规定的索引数组长度
        if (this.currentIndex + this.len > this.maxPage) {
            this.initPageIndex(this.len, this.maxPage - this.len + 1);
        }
    };
    SearchCarComponent = __decorate([
        core_1.Component({
            selector: 'app-searchCar',
            template: __webpack_require__("../../../../../src/app/popover/searchCar/searchCar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popover/searchCar/searchCar.component.scss")]
        }),
        __metadata("design:paramtypes", [parking_service_1.ParkingService])
    ], SearchCarComponent);
    return SearchCarComponent;
}());
exports.SearchCarComponent = SearchCarComponent;


/***/ }),

/***/ "../../../../../src/app/popover/searchCard/searchCard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>月卡期限查询</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"searchBox\">\r\n        <div class=\"tabel-title\">查询条件</div>\r\n        <div class=\"searchPanel\">\r\n            <div>\r\n                <span>车牌号码</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.carNumber\" style=\"width: 150px;\">\r\n            </div>\r\n\r\n            <div>\r\n                <span>卡号</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.cardNo\" style=\"width: 150px;\">\r\n            </div>\r\n\r\n            <!-- <div>\r\n                <span>车场卡类</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.cardType\" style=\"width: 150px;\">\r\n            </div> -->\r\n\r\n            <div>\r\n                <span>车主姓名</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.ownerName\" style=\"width: 150px;\">\r\n            </div>\r\n            <!-- \r\n            <div>\r\n                <span>到期天数</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.expireDays\" style=\"width: 150px;\">\r\n            </div> -->\r\n            <div class=\"\">\r\n                <button type=\"button\" (click)=\"search()\" class=\"searchbutton\">查询</button>\r\n                <button type=\"button\" (click)=\"reset()\" class=\"resetbutton\">重置</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"tabel-title\">查询结果</div>\r\n\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <!-- '序号', '卡号', '车牌', '类型', '车主姓名', '账号', '手机号码','有效截至日期'  -->\r\n                <tr *ngFor=\"let item of body,let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.ownerName}}</td>\r\n                    <td>{{item.phoneNo}}</td>\r\n                    <td>{{item.endDate | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                    <!-- <td>{{item.account}}</td>\r\n                    <td>{{item.identityNo}}</td>\r\n                    <td>{{item.companyName}}</td>\r\n                    <td>{{item.carModel}}</td>\r\n                    <td>{{item.carColor}}</td>\r\n                    <td>{{item.cardDeposit}}</td> -->\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"footBox\" *ngIf=\"totalSize\">\r\n        <div>第{{currentIndex}}页，共{{maxPage}}页/共找到{{totalSize}}条数据</div>\r\n        <ul class=\"pagination pagination-sm\">\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1)\" *ngIf=\"maxPage>len\">1</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'back')\">←</li>\r\n            <ng-container *ngIf=\"maxPage\">\r\n                <li class=\"page-item page-link hand\" [ngClass]=\"{active:currentIndex==i}\" (click)=\"indexNav(i)\" *ngFor=\"let i of pageIndex\">{{i}}</li>\r\n            </ng-container>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'next')\">→</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(maxPage)\" *ngIf=\"maxPage>len\">{{maxPage}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popover/searchCard/searchCard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popover/searchCard/searchCard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var cardManage_service_1 = __webpack_require__("../../../../../src/app/services/cardManage/cardManage.service.ts");
var cardListDB_1 = __webpack_require__("../../../../../src/app/services/DB/cardListDB.ts");
var SearchCardComponent = (function () {
    function SearchCardComponent(card, cardDB) {
        this.card = card;
        this.cardDB = cardDB;
        this.map = {
            cardNo: "",
            carNumber: "",
            cardType: "",
            ownerName: "",
            cardStatus: "",
            expireDays: ""
        };
        /**当前的页数 */
        this.currentIndex = 1;
        /**列表的长度，默认是6 */
        this.len = 6;
        /**分页数组 */
        this.pageIndex = [];
    }
    SearchCardComponent.prototype.search = function () {
        this.card.getCardInfo(1, "query", this.map);
    };
    SearchCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.head = ['序号', '卡号', '车牌号码', '类型', '车主姓名', '账号', '身份证号', '所属公司','车辆型号', '车辆颜色',  '发卡押金'];
        this.head = ['序号', '卡号', '车牌号码', '类型', '车主姓名', '手机号码', '有效截至日期'];
        this.card.cardInfo$.subscribe(function (data) {
            _this.body = data.collection;
            _this.maxPage = Number(data.totalPage);
            _this.totalSize = data.totalSize;
            _this.len = Number(data.totalPage) > _this.len ? _this.len : Number(data.totalPage);
            _this.currentIndex == 1 ? _this.initPageIndex(_this.len, 1) : false;
        });
    };
    SearchCardComponent.prototype.reset = function () {
        this.map = {
            cardNo: "",
            carNumber: "",
            cardType: "",
            ownerName: "",
            cardStatus: "",
            expireDays: ""
        };
        this.card.getCardInfo(1, "query", this.map);
    };
    /**初始化 */
    SearchCardComponent.prototype.initPageIndex = function (len, index) {
        if (index === void 0) { index = 1; }
        index = index < 1 ? 1 : index;
        this.minIndex = index;
        for (var i = 0; i < len; i++) {
            this.pageIndex[i] = index++;
            this.maxIndex = this.pageIndex[i];
        }
    };
    /**点击导航按钮 */
    SearchCardComponent.prototype.indexNav = function (i, mode) {
        if (mode === void 0) { mode = ""; }
        if (mode == "") {
            this.currentIndex = i;
        }
        else if (mode == "back") {
            this.currentIndex - 1 >= 1 ? this.currentIndex -= 1 : this.currentIndex = 1;
        }
        else if (mode == "next") {
            this.currentIndex + 1 <= this.maxPage ? this.currentIndex += 1 : this.currentIndex = this.maxPage;
        }
        // this.parking.getParkingCarChargeList(this.currentIndex);
        this.card.getCardInfo(this.currentIndex, "query", this.map);
        //如果点击的数大于了当前最大的索引值
        if (this.currentIndex >= this.maxIndex) {
            this.initPageIndex(this.len, this.currentIndex);
        }
        else if (this.currentIndex <= this.minIndex) {
            this.initPageIndex(this.len, this.currentIndex - this.len + 1);
        }
        //如果生成的索引数组小于规定的索引数组长度
        if (this.currentIndex + this.len > this.maxPage) {
            this.initPageIndex(this.len, this.maxPage - this.len + 1);
        }
    };
    SearchCardComponent = __decorate([
        core_1.Component({
            selector: 'app-searchCard',
            template: __webpack_require__("../../../../../src/app/popover/searchCard/searchCard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popover/searchCard/searchCard.component.scss")]
        }),
        __metadata("design:paramtypes", [cardManage_service_1.CardManageService, cardListDB_1.CardListDBService])
    ], SearchCardComponent);
    return SearchCardComponent;
}());
exports.SearchCardComponent = SearchCardComponent;


/***/ }),

/***/ "../../../../../src/app/popover/searchRecord/searchRecord.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n            <b>收费记录查询</b>\r\n        </span>\r\n    </div>\r\n    <div class=\"searchBox\">\r\n        <div class=\"tabel-title\">查询条件</div>\r\n\r\n        <div class=\"searchPanel\">\r\n            <div class=\"flex_alignItem_center-justifyContent_center\">\r\n                <p class=\"recordDesc\">卡号</p>\r\n                <input type=\"text\" [(ngModel)]=\"map.cardNo\" style=\"width: 150px;\" class=\"recordInput\">\r\n            </div>\r\n\r\n            <div class=\"flex_alignItem_center-justifyContent_center\">\r\n                <p class=\"recordDesc\">车牌号码</p>\r\n                <input type=\"text\" [(ngModel)]=\"map.carNumber\" style=\"width: 150px;\" class=\"recordInput\">\r\n            </div>\r\n\r\n            <div class=\"flex_alignItem_center-justifyContent_center\">\r\n                <p class=\"recordDesc\">卡类</p>\r\n                <input type=\"text\" [(ngModel)]=\"map.cardType\" style=\"width: 150px;\" class=\"recordInput\">\r\n            </div>\r\n\r\n            <div class=\"flex_alignItem_center-justifyContent_center\">\r\n                <p class=\"recordDesc\">入场时间</p>\r\n                <input type=\"text\" [(ngModel)]=\"map.createStartTimeMs\" style=\"width: 150px;\" class=\"recordInput\">\r\n            </div>\r\n        </div>\r\n        <div class=\"searchPanel\" style=\"margin-top:20px;\">\r\n            <div class=\"flex_alignItem_center-justifyContent_center\">\r\n                <p class=\"recordDesc\">出场时间</p>\r\n                <input type=\"text\" [(ngModel)]=\"map.createEndTimeMs\" style=\"width: 150px;\" class=\"recordInput\">\r\n            </div>\r\n            <div class=\"\">\r\n                <button type=\"button\" (click)=\"search()\" class=\"searchbutton\">查询</button>\r\n                <button type=\"button\" (click)=\"reset()\" class=\"resetbutton\">重置</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"tabel-title\">查询结果</div>\r\n\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body,let i = index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.gateNumber}}</td>\r\n                    <td>{{item.outGateNumber}}</td>\r\n                    <td>{{item.comeTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                    <td>{{item.outTime-item.comeTime | parkingTime }}</td>                    \r\n                    <td>{{item.outTime | date:\"yyyy-MM-dd HH:mm:ss\"}}</td>\r\n                    <td>{{item.feeMoney}}</td>\r\n                    <td>{{item.amountReceive}}</td>\r\n                    <td>{{item.freeReason}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <pagination [maxPage]=\"maxPage\" [totalSize]=\"totalSize\" [pageIndex]=\"pageIndex\"></pagination> -->\r\n    <div class=\"footBox\" *ngIf=\"totalSize\">\r\n        <div>第{{currentIndex}}页，共{{maxPage}}页/共找到{{totalSize}}条数据</div>\r\n        <ul class=\"pagination pagination-sm\">\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1)\" *ngIf=\"maxPage>len\">1</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'back')\">←</li>\r\n            <ng-container *ngIf=\"maxPage\">\r\n                <li class=\"page-item page-link hand\" [ngClass]=\"{active:currentIndex==i}\" (click)=\"indexNav(i)\" *ngFor=\"let i of pageIndex\">{{i}}</li>\r\n            </ng-container>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(1,'next')\">→</li>\r\n            <li class=\"page-item page-link hand\" (click)=\"indexNav(maxPage)\" *ngIf=\"maxPage>len\">{{maxPage}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popover/searchRecord/searchRecord.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px; }\n\n.tabel-width {\n  width: 1500px; }\n\n.recordDesc {\n  font-size: 14px;\n  padding-right: 10px;\n  display: inline-block;\n  width: 73px; }\n\n.recordInput {\n  width: 150px;\n  height: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popover/searchRecord/searchRecord.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
// declare let $: any;
var SearchRecordComponent = (function () {
    function SearchRecordComponent(parking) {
        this.parking = parking;
        this.map = {
            cardNo: "",
            carNumber: "",
            cardType: "",
            createStartTimeMs: null,
            createEndTimeMs: null
        };
        /**当前的页数 */
        this.currentIndex = 1;
        /**列表的长度，默认是6 */
        this.len = 6;
        /**分页数组 */
        this.pageIndex = [];
    }
    SearchRecordComponent.prototype.search = function () {
        this.parking.getParkingCarChargeList(1, this.map);
    };
    SearchRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.head = ['序号', '卡号', '车牌号码', '卡类', '入场车道', '出场车道', '入场时间', '停车时间', "出场时间", '应收', '实收', '免费原因'];
        this.parking.carChargeList$.subscribe(function (data) {
            _this.body = data.collection;
            _this.maxPage = Number(data.totalPage);
            _this.totalSize = data.totalSize;
            _this.len = Number(data.totalPage) > _this.len ? _this.len : Number(data.totalPage);
            _this.currentIndex == 1 ? _this.initPageIndex(_this.len, 1) : false;
        });
    };
    SearchRecordComponent.prototype.reset = function () {
        this.map = {
            cardNo: "",
            carNumber: "",
            cardType: "",
            createStartTimeMs: null,
            createEndTimeMs: null
        };
    };
    /**初始化 */
    SearchRecordComponent.prototype.initPageIndex = function (len, index) {
        if (index === void 0) { index = 1; }
        index = index < 1 ? 1 : index;
        this.minIndex = index;
        for (var i = 0; i < len; i++) {
            this.pageIndex[i] = index++;
            this.maxIndex = this.pageIndex[i];
        }
    };
    /**点击导航按钮 */
    SearchRecordComponent.prototype.indexNav = function (i, mode) {
        if (mode === void 0) { mode = ""; }
        if (mode == "") {
            this.currentIndex = i;
        }
        else if (mode == "back") {
            this.currentIndex - 1 >= 1 ? this.currentIndex -= 1 : this.currentIndex = 1;
        }
        else if (mode == "next") {
            this.currentIndex + 1 <= this.maxPage ? this.currentIndex += 1 : this.currentIndex = this.maxPage;
        }
        // this.parking.getParkingCarChargeList(this.currentIndex);
        this.parking.getParkingCarChargeList(this.currentIndex, this.map);
        //如果点击的数大于了当前最大的索引值
        if (this.currentIndex >= this.maxIndex) {
            this.initPageIndex(this.len, this.currentIndex);
        }
        else if (this.currentIndex <= this.minIndex) {
            this.initPageIndex(this.len, this.currentIndex - this.len + 1);
        }
        //如果生成的索引数组小于规定的索引数组长度
        if (this.currentIndex + this.len >= this.maxPage) {
            this.initPageIndex(this.len, this.maxPage - this.len + 1);
        }
    };
    SearchRecordComponent = __decorate([
        core_1.Component({
            selector: 'app-searchRecord',
            template: __webpack_require__("../../../../../src/app/popover/searchRecord/searchRecord.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popover/searchRecord/searchRecord.component.scss")]
        }),
        __metadata("design:paramtypes", [parking_service_1.ParkingService])
    ], SearchRecordComponent);
    return SearchRecordComponent;
}());
exports.SearchRecordComponent = SearchRecordComponent;


/***/ }),

/***/ "../../../../../src/app/popover/setCard/setCard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_white wrapBox\">\r\n    <close-button class=\"close-button\"></close-button>\r\n\r\n    <div class=\"title\">\r\n        <span>\r\n        <b>场内车辆查询</b>\r\n    </span>\r\n    </div>\r\n    <div class=\"searchBox\">\r\n        <div class=\"searchPanel\">\r\n            <div>\r\n                <span>卡片号码1</span>\r\n                <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"cardNo\" style=\"width: 150px;\">\r\n            </div>\r\n\r\n            <div>\r\n                <span>车牌号码</span>\r\n                <input type=\"text\" name=\"\" id=\"\" [(ngModel)]=\"carNumber\" style=\"width: 150px;\">\r\n            </div>\r\n\r\n            <button type=\"button\" (click)=\"getParkingCarList()\" class=\"searchbutton\">查询</button>\r\n            <button type=\"button\" (click)=\"reset()\" class=\"resetbutton\">重置</button>\r\n        </div>\r\n    </div>\r\n    <!--\r\n          <div class=\"searchBox\">\r\n        <div class=\"tabel-title\">查询条件</div>\r\n        <div class=\"searchPanel\">\r\n            <div>\r\n                <span>车牌号码</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.carNumber\" style=\"width: 150px;\">\r\n            </div>\r\n\r\n            <div>\r\n                <span>卡片号码</span>\r\n                <input type=\"text\" [(ngModel)]=\"map.cardNo\" style=\"width: 150px;\">\r\n            </div>\r\n            -->\r\n    <div class=\"container tableBox\">\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body\">\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.comeTime}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.comePark}}</td>\r\n                    <td>{{item.ownerName}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"table table-striped tabel-width table-bordered table-hover\">\r\n            <thead class=\"thead-light\">\r\n                <tr>\r\n                    <th *ngFor=\"let th of head\">{{th}}</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of body\">\r\n                    <td>{{item.cardNo}}</td>\r\n                    <td>{{item.cardType}}</td>\r\n                    <td>{{item.comeTime}}</td>\r\n                    <td>{{item.carNumber}}</td>\r\n                    <td>{{item.comePark}}</td>\r\n                    <td>{{item.ownerName}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popover/setCard/setCard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapBox {\n  width: 1000px;\n  height: 700px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.title {\n  width: 100%;\n  font-size: 18px;\n  font-family: \"SimHei\";\n  color: #E03612;\n  border-bottom: 1px #E03612 solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .title span {\n    padding-top: 12.5px;\n    padding-bottom: 5px; }\n\n.searchPanel {\n  width: 329px;\n  color: #E03612;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .searchPanel div {\n    margin-right: 5px; }\n    .searchPanel div input {\n      width: 100px; }\n\n.resetbutton {\n  font-size: 14px;\n  color: #354052;\n  border-style: none;\n  min-width: 50px;\n  min-height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #e3e5ec;\n  background-color: #EFF1F7; }\n\n.resetbutton:active {\n  outline: none;\n  background-color: #e3e5ec; }\n\n.resetbutton:focus {\n  outline: none; }\n\n.searchbutton {\n  font-size: 14px;\n  border-style: none;\n  min-width: 50px;\n  min-height: 29px;\n  border-radius: 4px;\n  border-bottom: 3px solid #FF6003;\n  background-color: #E03612;\n  color: #EFF1F7;\n  margin-right: 5px;\n  background-color: #FF6003; }\n\n.searchbutton:active {\n  outline: none;\n  background-color: #FF6003; }\n\n.searchbutton:focus {\n  outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popover/setCard/setCard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SetCardComponent = (function () {
    function SetCardComponent() {
        this.cardNumber = [1, 2, 3];
    }
    SetCardComponent.prototype.ngOnInit = function () {
    };
    SetCardComponent = __decorate([
        core_1.Component({
            selector: 'app-setCard',
            template: __webpack_require__("../../../../../src/app/popover/setCard/setCard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/popover/setCard/setCard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SetCardComponent);
    return SetCardComponent;
}());
exports.SetCardComponent = SetCardComponent;


/***/ }),

/***/ "../../../../../src/app/services/DB/cardListDB.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var render_service_1 = __webpack_require__("../../../../../src/app/services/render/render.service.ts");
var common_service_1 = __webpack_require__("../../../../../src/app/services/common.service.ts");
var CardListDBService = (function () {
    function CardListDBService(render, common) {
        this.render = render;
        this.common = common;
        this.db = null;
        this.connection = indexedDB.open('cardList_DB', 1);
        this.storeName = "cardList";
        /**出场记录信息流 */
        this.cardList$ = new rxjs_1.Subject();
        this.connection.onupgradeneeded = function (event) {
            this.db = event.target.result;
            /**创建月卡信息表 */
            this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }.bind(this);
        //连接数据库成功后
        this.connection.onsuccess = function (event) {
            console.log("Success!");
            this.db = event.target.result;
        }.bind(this);
        //连接数据库失败后
        this.connection.onerror = function (e) {
            console.log("Error");
            console.dir(e);
        }.bind(this);
    }
    /**添加 */
    CardListDBService.prototype.addData = function (data) {
        var _this = this;
        if (!this.db) {
            return;
        }
        console.log("addPublication OK");
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        // let count = store.count();
        // count.onsuccess = function (evt) {
        var req = store.add(data);
        req.onsuccess = function (evt) {
            _this.getList();
            console.log("add success");
        };
        req.onerror = function () {
            console.error("add error", this.error);
        };
        // };
        // count.onerror = function (evt) {
        //     console.error("add error", this.error);
        // };
    };
    /**显示所有数据 */
    CardListDBService.prototype.getList = function () {
        var _this = this;
        var store = this.db.transaction(this.storeName, 'readonly').objectStore(this.storeName);
        var req = store.count();
        req.onsuccess = function (evt) {
            console.log(evt.target.result);
        };
        req.onerror = function (evt) {
            console.error("add error", this.error);
        };
        req = store.openCursor();
        var outParkList = [];
        req.onsuccess = function (evt) {
            var cursor = evt.target.result;
            if (cursor) {
                var result = evt.target.result.value;
                var item = {
                    adminUserId: result.adminUserId,
                    parkId: result.parkId,
                    createId: result.createId,
                    createName: result.createName,
                    createTime: result.createTime,
                    updateTime: result.updateTime,
                    updateId: result.updateId,
                    updateName: result.updateName,
                    cardID: result.cardID,
                    cardNo: result.cardNo,
                    cardType: result.cardType,
                    carNumber: result.carNumber,
                    ownerName: result.ownerName,
                    comeTime: result.comeTime,
                    comePark: result.comePark,
                    gateNumber: result.gateNumber,
                    comePhoto: result.comePhoto,
                    certificatePhoto: result.certificatePhoto,
                    cardBalance: result.cardBalance,
                    remark: result.remark // 备注
                };
                outParkList.push(item);
                cursor.continue();
                _this.cardList$.next(outParkList);
            }
        };
    };
    /**查询数据 */
    CardListDBService.prototype.query = function (k) {
        var _this = this;
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        var req = store.get(k);
        req.onsuccess = function (e) {
            var result = e.target.result;
            var outParkList = [];
            var outParkItemt = {
                id: result.id,
                name: result.name,
                type: result.type,
                dep: result.dep,
                license: result.license,
                balance: result.balance,
            };
            outParkList.push(outParkItemt);
            _this.cardList$.next(outParkList);
        };
    };
    /**删除数据库 */
    CardListDBService.prototype.clearDB = function () {
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        store.clear();
        this.getList();
    };
    /**通过控制机号获得车道名称 */
    CardListDBService.prototype.getCardInfoByCardNo = function (cardNo) {
        // cardNo = cardNo.replace(/0/g, '');
        var store = this.db.transaction(this.storeName, 'readonly').objectStore(this.storeName);
        var req = store.openCursor();
        // let outParkList = [];
        return rxjs_1.Observable.create(function (ob) {
            req.onsuccess = function (evt) {
                var cursor = evt.target.result;
                if (cursor) {
                    var result = evt.target.result.value;
                    if (cardNo == result.cardNo) {
                        ob.next(result);
                    }
                    cursor.continue();
                }
            };
            req.onerror = function (evt) {
                ob.next({});
            };
        });
    };
    CardListDBService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [render_service_1.RenderService, common_service_1.CommonService])
    ], CardListDBService);
    return CardListDBService;
}());
exports.CardListDBService = CardListDBService;


/***/ }),

/***/ "../../../../../src/app/services/DB/inparkListDB.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var render_service_1 = __webpack_require__("../../../../../src/app/services/render/render.service.ts");
var InparkdbService = (function () {
    function InparkdbService(render) {
        this.render = render;
        this.connection = indexedDB.open('inParkList_DB', 1);
        this.db = null;
        this.storeName = "inPark";
        /**出场记录信息流 */
        this.inParkList$ = new rxjs_1.Subject();
        this.connection.onupgradeneeded = function (event) {
            this.db = event.target.result;
            this.store = this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }.bind(this);
        //连接数据库成功后
        this.connection.onsuccess = function (event) {
            console.log("Success!");
            this.db = event.target.result;
        }.bind(this);
        //连接数据库失败后
        this.connection.onerror = function (e) {
            // console.log("Error" + e.target.errorCode);
            console.dir(e);
            console.dir(this.connection);
            console.dir(this.db);
        }.bind(this);
    }
    /**添加 */
    InparkdbService.prototype.addData = function (data) {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        var req = store.add(data);
        req.onsuccess = function (evt) {
            _this.getList();
        };
        req.onerror = function () {
            console.error("add error", this.error);
        };
    };
    /**批量添加数据 */
    InparkdbService.prototype.addDatas = function (datas) {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        datas.forEach(function (data) {
            var req = store.add(data);
            req.onsuccess = function (evt) {
                _this.getList();
            };
            req.onerror = function () {
                console.error("add error", this.error);
            };
        });
    };
    /**显示所有数据 */
    InparkdbService.prototype.getList = function () {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readonly').objectStore(this.storeName);
        /**数据库长度 */
        var len;
        var req = store.count();
        req.onsuccess = function (evt) {
            len = evt.target.result;
            var inParkList = [];
            _this.inParkList$.next(inParkList);
            if (len == 0) {
                _this.inParkList$.next(inParkList);
            }
            else {
                var request_1 = store.openCursor();
                request_1.onsuccess = function (evt) {
                    var cursor = evt.target.result;
                    if (cursor) {
                        var result = cursor.value;
                        var item = {
                            adminUserId: result.adminUserId,
                            parkId: result.parkId,
                            createId: result.createId,
                            createName: result.createName,
                            createTime: result.createTime,
                            updateTime: result.updateTime,
                            updateId: result.updateId,
                            updateName: result.updateName,
                            cardID: result.cardID,
                            cardNo: result.cardNo,
                            cardType: result.cardType,
                            carNumber: result.carNumber,
                            ownerName: result.ownerName,
                            comeTime: result.comeTime,
                            comePark: result.comePark,
                            gateNumber: result.gateNumber,
                            comePhoto: result.comePhoto,
                            certificatePhoto: result.certificatePhoto,
                            cardBalance: result.cardBalance,
                            remark: result.remark,
                            recordId: result.recordId
                        };
                        inParkList.push(item);
                        cursor.continue();
                        if (inParkList.length == len) {
                            _this.inParkList$.next(inParkList);
                            _this.exportData(inParkList);
                        }
                    }
                    request_1.onerror = function (evt) {
                        console.error("add error", this.error);
                    };
                };
            }
        };
        req.onerror = function (evt) {
            console.error("add error", this.error);
        };
    };
    /**查询数据 */
    InparkdbService.prototype.query = function (record_id) {
        var _this = this;
        if (!this.db) {
            return;
        }
        return rxjs_1.Observable.create(function (ob) {
            var store = _this.db.transaction(_this.storeName, 'readonly').objectStore(_this.storeName);
            var len;
            var req = store.count();
            req.onsuccess = function (evt) {
                len = evt.target.result;
                var isExist = false;
                if (len == 0) {
                    ob.next(isExist);
                    console.log(len);
                }
                else {
                    var request = store.openCursor();
                    var querynumber_1 = 0;
                    request.onsuccess = function (evt) {
                        var cursor = evt.target.result;
                        if (cursor) {
                            var result = evt.target.result.value;
                            if (record_id == result.recordId && isExist == false) {
                                isExist = true;
                                ob.next(isExist);
                                querynumber_1 += 1;
                                console.log(len);
                            }
                            else if (record_id != result.recordId || isExist == true) {
                                querynumber_1 += 1;
                            }
                            if (querynumber_1 == len && isExist == false) {
                                ob.next(isExist);
                                console.log(len);
                            }
                            cursor.continue();
                        }
                    };
                    request.onerror = function (evt) {
                        ob.next(isExist);
                        console.log(len);
                    };
                }
            };
            req.onerror = function (evt) {
                console.error("add error", this.error);
            };
        });
    };
    /**删除数组里面的数据 */
    InparkdbService.prototype.deleteDatas = function (record_id) {
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        var len;
        var req = store.count();
        req.onsuccess = function (evt) {
            len = evt.target.result;
            var isExist = false;
            if (len == 0) {
                return;
            }
            else {
                var request = store.openCursor();
                var querynumber_2 = 0;
                request.onsuccess = function (evt) {
                    var cursor = evt.target.result;
                    if (cursor) {
                        var result = evt.target.result.value;
                        if (record_id == result.recordId && isExist == false) {
                            var dereq = cursor.delete();
                            querynumber_2 += 1;
                            dereq.onsuccess = function () {
                            };
                            dereq.onerror = function () {
                                console.log("删除失败");
                            };
                        }
                        else if (record_id != result.recordId || isExist == true) {
                            querynumber_2 += 1;
                        }
                        if (querynumber_2 == len) {
                        }
                        cursor.continue();
                    }
                };
                request.onerror = function (evt) {
                };
            }
        };
        req.onerror = function (evt) {
            console.error("add error", this.error);
        };
    };
    /**删除数据库 */
    InparkdbService.prototype.clearDB = function () {
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        store.clear();
        this.getList();
    };
    /**导出数据 */
    InparkdbService.prototype.exportData = function (datas) {
        var data = {
            list: datas
        };
        this.render.send('save-db-inpark', JSON.stringify(data));
    };
    InparkdbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [render_service_1.RenderService])
    ], InparkdbService);
    return InparkdbService;
}());
exports.InparkdbService = InparkdbService;


/***/ }),

/***/ "../../../../../src/app/services/DB/outparkListDB.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var render_service_1 = __webpack_require__("../../../../../src/app/services/render/render.service.ts");
var OutparkdbService = (function () {
    function OutparkdbService(render) {
        this.render = render;
        this.db = null;
        this.connection = indexedDB.open('outParkList_DB', 1);
        this.storeName = "outPark";
        /**出场记录信息流 */
        this.outParkList$ = new rxjs_1.Subject();
        this.connection.onupgradeneeded = function (event) {
            this.db = event.target.result;
            /**创建两个表：出场纪录表和入场纪录表 */
            this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }.bind(this);
        //连接数据库成功后
        this.connection.onsuccess = function (event) {
            console.log("Success!");
            this.db = event.target.result;
        }.bind(this);
        //连接数据库失败后
        this.connection.onerror = function (e) {
            console.log("Error");
            console.dir(e);
        }.bind(this);
    }
    /**添加 */
    OutparkdbService.prototype.addData = function (data) {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        var req = store.add(data);
        req.onsuccess = function (evt) {
            _this.getList();
        };
        req.onerror = function () {
            console.error("add error", this.error);
        };
    };
    /**批量添加数据 */
    OutparkdbService.prototype.addDatas = function (datas) {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        datas.forEach(function (data) {
            var req = store.add(data);
            req.onsuccess = function (evt) {
                _this.getList();
            };
            req.onerror = function () {
                console.error("add error", this.error);
            };
        });
    };
    /**显示所有数据 */
    OutparkdbService.prototype.getList = function () {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readonly').objectStore(this.storeName);
        /**数据库长度 */
        var len;
        var req = store.count();
        req.onsuccess = function (evt) {
            len = evt.target.result;
            var outParkList = [];
            if (len == 0) {
                _this.outParkList$.next(outParkList);
            }
            else {
                var request_1 = store.openCursor();
                request_1.onsuccess = function (evt) {
                    var cursor = evt.target.result;
                    if (cursor) {
                        var result = cursor.value;
                        var item = {
                            adminUserId: result.adminUserId,
                            parkId: result.parkId,
                            createId: result.createId,
                            createName: result.createName,
                            createTime: result.createTime,
                            updateTime: result.updateTime,
                            updateId: result.updateId,
                            updateName: result.updateName,
                            cardID: result.cardID,
                            cardNo: result.cardNo,
                            cardType: result.cardType,
                            carNumber: result.carNumber,
                            ownerName: result.ownerName,
                            comeTime: result.comeTime,
                            comePark: result.comePark,
                            gateNumber: result.gateNumber,
                            comePhoto: result.comePhoto,
                            certificatePhoto: result.certificatePhoto,
                            cardBalance: result.cardBalance,
                            outTime: result.outTime,
                            outPark: result.outPark,
                            outGateNumber: result.outGateNumber,
                            outPhoto: result.outPhoto,
                            feeMoney: result.feeMoney,
                            amountReceive: result.amountReceive,
                            timeoutFlag: result.timeoutFlag,
                            timeoutHour: result.timeoutHour,
                            timeoutMoney: result.timeoutMoney,
                            freeReason: result.freeReason,
                            freeReasonId: result.freeReasonId,
                            remark: result.remark,
                            recordId: result.recordId
                        };
                        outParkList.push(item);
                        cursor.continue();
                        if (outParkList.length == len) {
                            _this.outParkList$.next(outParkList);
                            _this.exportData(outParkList);
                        }
                    }
                    request_1.onerror = function (evt) {
                        console.error("add error", this.error);
                    };
                };
            }
        };
        req.onerror = function (evt) {
            console.error("add error", this.error);
        };
    };
    /**查询数据 */
    OutparkdbService.prototype.query = function (record_id) {
        var _this = this;
        return rxjs_1.Observable.create(function (ob) {
            var store = _this.db.transaction(_this.storeName, 'readonly').objectStore(_this.storeName);
            var len;
            var req = store.count();
            req.onsuccess = function (evt) {
                len = evt.target.result;
                var isExist = false;
                if (len == 0) {
                    ob.next(isExist);
                }
                else {
                    var request = store.openCursor();
                    var querynumber_1 = 0;
                    request.onsuccess = function (evt) {
                        var cursor = evt.target.result;
                        if (cursor) {
                            var result = evt.target.result.value;
                            if (record_id == result.recordId && isExist == false) {
                                isExist = true;
                                ob.next(isExist);
                                querynumber_1 += 1;
                            }
                            else if (record_id != result.recordId || isExist == true) {
                                querynumber_1 += 1;
                            }
                            if (querynumber_1 == len && isExist == false) {
                                ob.next(isExist);
                            }
                            cursor.continue();
                        }
                    };
                    request.onerror = function (evt) {
                        ob.next(isExist);
                    };
                }
            };
            req.onerror = function (evt) {
                console.error("add error", this.error);
            };
        });
    };
    /**删除数组里面的数据 */
    OutparkdbService.prototype.deleteDatas = function (record_id) {
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        var len;
        var req = store.count();
        req.onsuccess = function (evt) {
            len = evt.target.result;
            var isExist = false;
            if (len == 0) {
                return;
            }
            else {
                var request = store.openCursor();
                var querynumber_2 = 0;
                request.onsuccess = function (evt) {
                    var cursor = evt.target.result;
                    if (cursor) {
                        var result = evt.target.result.value;
                        if (record_id == result.recordId && isExist == false) {
                            var dereq = cursor.delete();
                            querynumber_2 += 1;
                            dereq.onsuccess = function () {
                            };
                            dereq.onerror = function () {
                                console.log("删除失败");
                            };
                        }
                        else if (record_id != result.recordId || isExist == true) {
                            querynumber_2 += 1;
                        }
                        if (querynumber_2 == len) {
                        }
                        cursor.continue();
                    }
                };
                request.onerror = function (evt) {
                };
            }
        };
        req.onerror = function (evt) {
            console.error("add error", this.error);
        };
    };
    /**删除数据库 */
    OutparkdbService.prototype.clearDB = function () {
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        store.clear();
        this.getList();
    };
    /**导出数据 */
    OutparkdbService.prototype.exportData = function (datas) {
        var data = {
            list: datas
        };
        this.render.send('save-db-outpark', JSON.stringify(data));
    };
    OutparkdbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [render_service_1.RenderService])
    ], OutparkdbService);
    return OutparkdbService;
}());
exports.OutparkdbService = OutparkdbService;


/***/ }),

/***/ "../../../../../src/app/services/DB/privilegeListDB.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var render_service_1 = __webpack_require__("../../../../../src/app/services/render/render.service.ts");
var PrivilegedbService = (function () {
    function PrivilegedbService(render) {
        this.render = render;
        this.connection = indexedDB.open('privilegeList_DB', 1);
        this.db = null;
        this.storeName = "privilege";
        /**优惠信息流 */
        this.privilegeList$ = new rxjs_1.Subject();
        this.connection.onupgradeneeded = function (event) {
            this.db = event.target.result;
            this.store = this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }.bind(this);
        //连接数据库成功后
        this.connection.onsuccess = function (event) {
            console.log("Success!");
            this.db = event.target.result;
        }.bind(this);
        //连接数据库失败后
        this.connection.onerror = function (e) {
            // console.log("Error" + e.target.errorCode);
            console.dir(e);
            console.dir(this.connection);
            console.dir(this.db);
        }.bind(this);
    }
    /**添加 */
    PrivilegedbService.prototype.addData = function (data) {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        var req = store.add(data);
        req.onsuccess = function (evt) {
            _this.getList();
        };
        req.onerror = function () {
            console.error("add error", this.error);
        };
    };
    /**批量添加数据 */
    PrivilegedbService.prototype.addDatas = function (datas) {
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        datas.forEach(function (data) {
            var req = store.add(data);
            req.onsuccess = function (evt) {
                // this.getList();
            };
            req.onerror = function () {
                console.error("add error", this.error);
            };
        });
        this.getList();
    };
    /**显示所有数据 */
    PrivilegedbService.prototype.getList = function () {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readonly').objectStore(this.storeName);
        /**数据库长度 */
        var len;
        var req = store.count();
        req.onsuccess = function (evt) {
            len = evt.target.result;
            var privilegeList = [];
            if (len == 0) {
                _this.privilegeList$.next(privilegeList);
            }
            else {
                var request_1 = store.openCursor();
                request_1.onsuccess = function (evt) {
                    var cursor = evt.target.result;
                    if (cursor) {
                        var result = cursor.value;
                        var item = {
                            adminUserId: result.adminUserId,
                            parkId: result.parkId,
                            createId: result.createId,
                            createName: result.createName,
                            createTime: result.createTime,
                            updateTime: result.updateTime,
                            updateId: result.updateId,
                            updateName: result.updateName,
                            freeName: result.freeName,
                            freeTime: result.freeTime,
                            unitPrice: result.unitPrice,
                            unit: result.unit,
                            singleUseMax: result.singleUseMax,
                            superpositionType: result.superpositionType
                        };
                        privilegeList.push(item);
                        cursor.continue();
                        if (privilegeList.length == len) {
                            _this.privilegeList$.next(privilegeList);
                        }
                    }
                    request_1.onerror = function (evt) {
                        console.error("add error", this.error);
                    };
                };
            }
        };
        req.onerror = function (evt) {
            console.error("add error", this.error);
        };
    };
    /**查询数据 */
    PrivilegedbService.prototype.query = function (k) {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        var req = store.get(k);
        var privilegeList = [];
        req.onsuccess = function (e) {
            var result = e.target.result;
            var inParkItemt = {
                id: result.id,
                name: result.name,
                type: result.type,
                dep: result.dep,
                license: result.license,
                balance: result.balance,
            };
            privilegeList.push(inParkItemt);
            _this.privilegeList$.next(privilegeList);
        };
    };
    /**删除数据库 */
    PrivilegedbService.prototype.clearDB = function () {
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        store.clear();
        this.getList();
    };
    PrivilegedbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [render_service_1.RenderService])
    ], PrivilegedbService);
    return PrivilegedbService;
}());
exports.PrivilegedbService = PrivilegedbService;


/***/ }),

/***/ "../../../../../src/app/services/DB/releaseListDB.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var ReleasedbService = (function () {
    function ReleasedbService() {
        this.db = null;
        this.connection = indexedDB.open('releaseList_DB', 1);
        this.storeName = "release";
        /**出场记录信息流 */
        this.releaseList$ = new rxjs_1.Subject();
        this.connection.onupgradeneeded = function (event) {
            this.db = event.target.result;
            /**创建两个表：出场纪录表和入场纪录表 */
            this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }.bind(this);
        //连接数据库成功后
        this.connection.onsuccess = function (event) {
            console.log("Success!");
            this.db = event.target.result;
        }.bind(this);
        //连接数据库失败后
        this.connection.onerror = function (e) {
            console.log("Error");
            console.dir(e);
        }.bind(this);
    }
    /**添加 */
    ReleasedbService.prototype.addData = function (data) {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        var req = store.add(data);
        req.onsuccess = function (evt) {
            _this.getList();
        };
        req.onerror = function () {
            console.error("add error", this.error);
        };
    };
    /**批量添加数据 */
    ReleasedbService.prototype.addDatas = function (datas) {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        datas.forEach(function (data) {
            var req = store.add(data);
            req.onsuccess = function (evt) {
                _this.getList();
            };
            req.onerror = function () {
                console.error("add error", this.error);
            };
        });
    };
    /**显示所有数据 */
    ReleasedbService.prototype.getList = function () {
        var _this = this;
        if (!this.db) {
            return;
        }
        var store = this.db.transaction(this.storeName, 'readonly').objectStore(this.storeName);
        /**数据库长度 */
        var len;
        var req = store.count();
        req.onsuccess = function (evt) {
            len = evt.target.result;
            var releaseList = [];
            if (len == 0) {
                _this.releaseList$.next(releaseList);
            }
            else {
                var request_1 = store.openCursor();
                request_1.onsuccess = function (evt) {
                    var cursor = evt.target.result;
                    if (cursor) {
                        var result = cursor.value;
                        var item = {
                            adminUserId: result.adminUserId,
                            parkId: result.parkId,
                            createId: result.createId,
                            createName: result.createName,
                            createTime: result.createTime,
                            updateTime: result.updateTime,
                            updateId: result.updateId,
                            updateName: result.updateName,
                            cardID: result.cardID,
                            cardNo: result.cardNo,
                            cardType: result.cardType,
                            carNumber: result.carNumber,
                            ownerName: result.ownerName,
                            comeTime: result.comeTime,
                            comePark: result.comePark,
                            gateNumber: result.gateNumber,
                            comePhoto: result.comePhoto,
                            certificatePhoto: result.certificatePhoto,
                            cardBalance: result.cardBalance,
                            remark: result.remark,
                            recordId: result.recordId
                        };
                        releaseList.push(item);
                        cursor.continue();
                        if (releaseList.length == len) {
                            _this.releaseList$.next(releaseList);
                            // this.exportData(releaseList);
                        }
                    }
                    request_1.onerror = function (evt) {
                        console.error("add error", this.error);
                    };
                };
            }
        };
        req.onerror = function (evt) {
            console.error("add error", this.error);
        };
    };
    /**查询数据 */
    ReleasedbService.prototype.query = function (record_id) {
        var _this = this;
        if (!this.db) {
            return;
        }
        return rxjs_1.Observable.create(function (ob) {
            var store = _this.db.transaction(_this.storeName, 'readonly').objectStore(_this.storeName);
            var len;
            var req = store.count();
            req.onsuccess = function (evt) {
                len = evt.target.result;
                var isExist = false;
                if (len == 0) {
                    ob.next(isExist);
                }
                else {
                    var request = store.openCursor();
                    var querynumber_1 = 0;
                    request.onsuccess = function (evt) {
                        var cursor = evt.target.result;
                        if (cursor) {
                            var result = evt.target.result.value;
                            if (record_id == result.recordId && isExist == false) {
                                isExist = true;
                                ob.next(isExist);
                                querynumber_1 += 1;
                            }
                            else if (record_id != result.recordId || isExist == true) {
                                querynumber_1 += 1;
                            }
                            if (querynumber_1 == len && isExist == false) {
                                ob.next(isExist);
                            }
                            cursor.continue();
                        }
                    };
                    request.onerror = function (evt) {
                        ob.next(isExist);
                    };
                }
            };
            req.onerror = function (evt) {
                console.error("add error", this.error);
            };
        });
    };
    /**删除数组里面的数据 */
    ReleasedbService.prototype.deleteDatas = function (record_id) {
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        var len;
        var req = store.count();
        req.onsuccess = function (evt) {
            len = evt.target.result;
            var isExist = false;
            if (len == 0) {
                return;
            }
            else {
                var request = store.openCursor();
                var querynumber_2 = 0;
                request.onsuccess = function (evt) {
                    var cursor = evt.target.result;
                    if (cursor) {
                        var result = evt.target.result.value;
                        if (record_id == result.recordId && isExist == false) {
                            var dereq = cursor.delete();
                            querynumber_2 += 1;
                            dereq.onsuccess = function () {
                            };
                            dereq.onerror = function () {
                                console.log("删除失败");
                            };
                        }
                        else if (record_id != result.recordId || isExist == true) {
                            querynumber_2 += 1;
                        }
                        if (querynumber_2 == len) {
                        }
                        cursor.continue();
                    }
                };
                request.onerror = function (evt) {
                };
            }
        };
        req.onerror = function (evt) {
            console.error("add error", this.error);
        };
    };
    /**删除数据库 */
    ReleasedbService.prototype.clearDB = function () {
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        store.clear();
        this.getList();
    };
    return ReleasedbService;
}());
exports.ReleasedbService = ReleasedbService;


/***/ }),

/***/ "../../../../../src/app/services/DB/roadListDB.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var RoadListDBService = (function () {
    function RoadListDBService() {
        this.db = null;
        this.connection = indexedDB.open('roadList_DB', 1);
        this.storeName = "roadList";
        /**出场记录信息流 */
        this.roadList$ = new rxjs_1.Subject();
        this.connection.onupgradeneeded = function (event) {
            this.db = event.target.result;
            /**创建月卡信息表 */
            this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }.bind(this);
        //连接数据库成功后
        this.connection.onsuccess = function (event) {
            console.log("Success!");
            this.db = event.target.result;
        }.bind(this);
        //连接数据库失败后
        this.connection.onerror = function (e) {
            console.log("Error");
            console.dir(e);
        }.bind(this);
    }
    /**添加 */
    RoadListDBService.prototype.addData = function (data) {
        var _this = this;
        if (!this.db) {
            return;
        }
        console.log("addPublication OK");
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        // let count = store.count();
        // count.onsuccess = function (evt) {
        var req = store.add(data);
        req.onsuccess = function (evt) {
            _this.getList();
            console.log("add success");
        };
        req.onerror = function () {
            console.error("add error", this.error);
        };
        // };
        // count.onerror = function (evt) {
        //     console.error("add error", this.error);
        // };
    };
    /**显示所有数据 */
    RoadListDBService.prototype.getList = function () {
        var _this = this;
        var store = this.db.transaction(this.storeName, 'readonly').objectStore(this.storeName);
        var req = store.count();
        req.onsuccess = function (evt) {
            console.log(evt.target.result);
        };
        req.onerror = function (evt) {
            console.error("add error", this.error);
        };
        req = store.openCursor();
        var outParkList = [];
        req.onsuccess = function (evt) {
            var cursor = evt.target.result;
            if (cursor) {
                var result = evt.target.result.value;
                var item = {
                    laneMarking: result.laneMarking,
                    entryMarking: result.entryMarking,
                    entryName: result.entryName,
                    controlNum: result.controlNum,
                    openedType: result.openedType,
                    isCardMachine: result.isCardMachine,
                    isMonitoring: result.isMonitoring,
                    inspectionMarking: result.inspectionMarking
                };
                outParkList.push(item);
                cursor.continue();
                _this.roadList$.next(outParkList);
            }
        };
    };
    /**查询数据 */
    RoadListDBService.prototype.query = function (k) {
        var _this = this;
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        var req = store.get(k);
        req.onsuccess = function (e) {
            var result = e.target.result;
            var outParkList = [];
            var outParkItemt = {
                id: result.id,
                name: result.name,
                type: result.type,
                dep: result.dep,
                license: result.license,
                balance: result.balance,
            };
            outParkList.push(outParkItemt);
            _this.roadList$.next(outParkList);
        };
    };
    /**删除数据库 */
    RoadListDBService.prototype.clearDB = function () {
        var store = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
        store.clear();
        this.getList();
    };
    /**通过控制机号获得车道名称 */
    RoadListDBService.prototype.getEntryNameByEntryMarking = function (entryMarking) {
        var _this = this;
        /**数据库长度 */
        return rxjs_1.Observable.create(function (ob) {
            var store = _this.db.transaction(_this.storeName, 'readonly').objectStore(_this.storeName);
            var len;
            var req = store.count();
            var obj = {
                isExist: false,
                result: null
            };
            req.onsuccess = function (evt) {
                len = evt.target.result;
                if (len == 0) {
                    ob.next(obj);
                }
                else {
                    var request = store.openCursor();
                    var querynumber_1 = 0;
                    request.onsuccess = function (evt) {
                        var cursor = evt.target.result;
                        if (cursor) {
                            var result = evt.target.result.value;
                            if (entryMarking == result.entryMarking && obj.isExist == false) {
                                obj = {
                                    isExist: true,
                                    result: result.entryName
                                };
                                ob.next(obj);
                                querynumber_1 += 1;
                            }
                            else {
                                querynumber_1 += 1;
                            }
                            if (querynumber_1 == len && obj.isExist == false) {
                                ob.next(obj);
                            }
                            cursor.continue();
                        }
                    };
                    request.onerror = function (evt) {
                        ob.next(obj);
                    };
                }
            };
            req.onerror = function (evt) {
                ob.next(obj);
            };
        });
    };
    RoadListDBService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], RoadListDBService);
    return RoadListDBService;
}());
exports.RoadListDBService = RoadListDBService;


/***/ }),

/***/ "../../../../../src/app/services/cardManage/cardManage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var sysConfigs_1 = __webpack_require__("../../../../../src/app/services/constants/sysConfigs.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var CardManageService = (function () {
    function CardManageService(http, sysConfigs) {
        this.http = http;
        this.sysConfigs = sysConfigs;
        /**月卡信息流 */
        this.cardInfo$ = new rxjs_1.Subject();
        /**月卡信息下载流 */
        this.cardInfoDownLoad$ = new rxjs_1.Subject();
    }
    /**查询卡片信息 */
    CardManageService.prototype.getCardInfo = function (page, mode, map) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (mode === void 0) { mode = "download"; }
        if (map === void 0) { map = { cardNo: "", carNumber: "", cardType: "", ownerName: "", cardStatus: "", expireDays: "" }; }
        var _searchParams = {
            map: map,
            page: page,
            pageSize: 10
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'cardinfo/list', _searchParams, headers).subscribe(function (resp) {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().status == 0) {
                    if (resp.json().object.collection) {
                        // this.cardInfo$.next(resp.json().object.collection);
                        var obj = {
                            collection: resp.json().object.collection,
                            totalSize: resp.json().object.totalSize,
                            totalPage: Math.ceil(resp.json().object.totalSize / resp.json().object.pageSize)
                        };
                        mode == "download" ? _this.cardInfoDownLoad$.next(obj) : _this.cardInfo$.next(obj);
                    }
                }
                else {
                    alert(resp.json().message);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    CardManageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, sysConfigs_1.SysConfigs])
    ], CardManageService);
    return CardManageService;
}());
exports.CardManageService = CardManageService;


/***/ }),

/***/ "../../../../../src/app/services/cloud/cloud.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var sysConfigs_1 = __webpack_require__("../../../../../src/app/services/constants/sysConfigs.ts");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var common_service_1 = __webpack_require__("../../../../../src/app/services/common.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var CloudService = (function () {
    function CloudService(sysConfigs, device, common, http) {
        var _this = this;
        this.sysConfigs = sysConfigs;
        this.device = device;
        this.common = common;
        this.http = http;
        /**
        * orderKey:订阅key
        * connectFn：连接后执行函数
        * subscribeFn:订阅后执行函数
        * sysDomain:订阅域名
        **/
        this.state = false;
        rxjs_1.Observable.interval(5000).subscribe(function () {
            if (_this.state == false) {
                _this.connect();
            }
        });
    }
    CloudService.prototype.connect = function () {
        var _this = this;
        // this.stompClient = Stomp.over(new SockJS("http://192.168.1.168/websocket"));
        this.stompClient = Stomp.over(new SockJS(this.sysConfigs.SERVER_SOCKET));
        this.stompClient.connect({}, function (frame) {
            _this.state = true;
            /**ID卡充值 */
            _this.stompClient.subscribe("/cardRecharge/idCardIssued/" + JSON.parse(localStorage.baseInfo).macAddress, function (resp) {
                console.log(resp);
                var body = JSON.parse(resp.body);
                body.deviceNo.split(",").forEach(function (element) {
                    var opt = {
                        hw_id: element,
                        card_id: body.cardNum,
                        card_type: "0",
                        op_type: 'set',
                        time_to: _this.device.timeNumberToString(body.endDate),
                    };
                    _this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op == "ret-publish-id-card-info"; }).subscribe(function (data) {
                        var parameter = {
                            cardNum: data.card_id,
                            macAddress: JSON.parse(localStorage.baseInfo).macAddress
                        };
                        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': _this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
                        _this.http.post(_this.sysConfigs.SERVER_PARKING + 'idCardIssued/cancel', parameter, headers).subscribe(function (resp) { });
                    });
                    _this.device.sendIDCardToDevice(opt);
                });
            });
            /**IC/ID挂失 */
            _this.stompClient.subscribe("/cardLoss/lossCard/" + JSON.parse(localStorage.baseInfo).macAddress, function (resp) {
                console.log(resp);
                var body = JSON.parse(resp.body);
                body.deviceNo.split(",").forEach(function (element) {
                    var opt = {
                        hw_id: element,
                        card_id: body.cardNum,
                        card_type: _this.toNumberType(body.cardType),
                        op_type: 'set',
                        time_to: "2013-09-01 09:00:00",
                    };
                    _this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op == "ret-publish-id-card-info"; }).subscribe(function (data) {
                        var parameter = {
                            cardNum: data.card_id,
                            macAddress: JSON.parse(localStorage.baseInfo).macAddress
                        };
                        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': _this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
                        _this.http.post(_this.sysConfigs.SERVER_PARKING + 'cardLoss/cancel', parameter, headers).subscribe(function (resp) { });
                    });
                    _this.device.sendIDCardToDevice(opt);
                });
            });
            /**IC/ID卡停用 */
            _this.stompClient.subscribe("/cardDisable/disableCard/" + JSON.parse(localStorage.baseInfo).macAddress, function (resp) {
                console.log(resp);
                var body = JSON.parse(resp.body);
                body.deviceNo.split(",").forEach(function (element) {
                    var opt = {
                        hw_id: element,
                        card_id: body.cardNum,
                        card_type: _this.toNumberType(body.cardType),
                        op_type: 'set',
                        time_to: "2013-09-01 09:00:00",
                    };
                    _this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op == "ret-publish-id-card-info"; }).subscribe(function (data) {
                        var parameter = {
                            cardNum: data.card_id,
                            macAddress: JSON.parse(localStorage.baseInfo).macAddress
                        };
                        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': _this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
                        _this.http.post(_this.sysConfigs.SERVER_PARKING + 'cardDisable/cancel', parameter, headers).subscribe(function (resp) { });
                    });
                    _this.device.sendIDCardToDevice(opt);
                });
            });
            /**IC/ID卡解挂 */
            _this.stompClient.subscribe("/cardResetLoss/resetCardLoss/" + JSON.parse(localStorage.baseInfo).macAddress, function (resp) {
                console.info(resp);
                var body = JSON.parse(resp.body);
                body.deviceNo.split(",").forEach(function (element) {
                    var opt = {
                        hw_id: element,
                        card_id: body.cardNum,
                        card_type: _this.toNumberType(body.cardType),
                        op_type: 'set',
                        time_to: _this.device.timeNumberToString(body.endDate),
                    };
                    _this.device.onmessage$.filter(function (data) { return data.ret == "0"; }).filter(function (data) { return data.op == "ret-publish-id-card-info"; }).subscribe(function (data) {
                        var parameter = {
                            cardNum: data.card_id,
                            macAddress: JSON.parse(localStorage.baseInfo).macAddress
                        };
                        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': _this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
                        _this.http.post(_this.sysConfigs.SERVER_PARKING + 'cardResetLoss/cancel', parameter, headers).subscribe(function (resp) { });
                    });
                    _this.device.sendIDCardToDevice(opt);
                });
            });
        });
    };
    CloudService.prototype.disconnect = function () {
        if (this.stompClient != null) {
            this.state = false;
            this.stompClient.disconnect();
        }
        console.info('Disconnected');
    };
    CloudService.prototype.cancelIDcardIssued = function () {
        this.stompClient.send("/idCardIssued/cancel", {}, {
            cardNum: "004873C0",
            macAddress: "f4:8e:38:b6:a9:08"
        });
    };
    CloudService.prototype.toNumberType = function (type) {
        if (type == "parking_id") {
            return "0";
        }
        else {
            return "2";
        }
    };
    CloudService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [sysConfigs_1.SysConfigs, device_service_1.DeviceService, common_service_1.CommonService, http_1.Http])
    ], CloudService);
    return CloudService;
}());
exports.CloudService = CloudService;


/***/ }),

/***/ "../../../../../src/app/services/common.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CommonService = (function () {
    function CommonService() {
    }
    CommonService.prototype.timeTransform = function (date) {
        var days;
        var hours;
        var minutes;
        // let seconds;
        var obj;
        if (date >= 86400000) {
            var temp = 0;
            days = Math.floor((date - temp) / 86400000);
            temp += days * 86400000;
            hours = Math.floor((date - temp) / 3600000);
            temp += hours * 3600000;
            minutes = Math.floor((date - temp) / 60000);
            return obj = {
                day: days,
                hour: hours,
                min: minutes
            };
        }
        else if (date < 86400000 && date >= 3600000) {
            var temp = 0;
            hours = Math.floor((date - temp) / 3600000);
            temp += hours * 3600000;
            minutes = Math.floor((date - temp) / 60000);
            return obj = {
                day: "0",
                hour: hours,
                min: minutes
            };
        }
        else if (date < 3600000 && date >= 60000) {
            var temp = 0;
            minutes = Math.floor((date - temp) / 60000);
            return obj = {
                day: "0",
                hour: "0",
                min: minutes
            };
        }
        else {
            return obj = {
                day: "0",
                hour: "0",
                min: "0"
            };
        }
    };
    /**去除前面的0 */
    CommonService.prototype.deleteZero = function (string) {
        var arr = string.split("");
        var newArr = [];
        var sign;
        var total;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != "0") {
                sign = i;
                total = arr.length - sign;
                break;
            }
        }
        for (var i = 0; i < total; i++) {
            newArr.push(arr[sign++]);
        }
        return newArr.join("");
    };
    CommonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;
var WebsocketService = (function () {
    function WebsocketService() {
        // this.ll = 1;
        this.wb = new WebSocket("ws://127.0.0.1:8181");
        // this.wb.onopen = onopen();
        // this.wb.onmessage = onmessage();
        // this.wb.onclose = onclose();
        // this.wb.onerror = onerror();
    }
    WebsocketService.prototype.send = function (message) {
        this.wb.send(message);
    };
    return WebsocketService;
}());
exports.WebsocketService = WebsocketService;
var RenderedService = (function () {
    // private ipcRenderer = require('electron').ipcRenderer;
    function RenderedService() {
    }
    RenderedService.prototype.on = function (message) {
        switch (message) {
            case 'hello':
                console.log('hello');
                return;
        }
    };
    return RenderedService;
}());
exports.RenderedService = RenderedService;


/***/ }),

/***/ "../../../../../src/app/services/constants/parkingDictionary.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ParkingDictionary = (function () {
    function ParkingDictionary() {
        this.cardType = [
            { name: "储值卡A", key: "33", label: "储值卡", value: "" },
            { name: "储值卡B", key: "34", label: "储值卡", value: "" },
            { name: "储值卡C", key: "35", label: "储值卡", value: "" },
            { name: "储值卡D", key: "3A", label: "储值卡", value: "" },
            { name: "临时卡A", key: "36", label: "临时卡", value: "0" },
            { name: "临时卡B", key: "37", label: "临时卡", value: "0" },
            { name: "临时卡C", key: "38", label: "临时卡", value: "0" },
            { name: "临时卡D", key: "39", label: "临时卡", value: "0" },
            { name: "临时卡E", key: "43", label: "临时卡", value: "0" },
            { name: "临时卡F", key: "44", label: "临时卡", value: "0" },
            { name: "临时卡G", key: "45", label: "临时卡", value: "0" },
            { name: "临时卡H", key: "46", label: "临时卡", value: "0" },
            { name: "IC卡月卡", key: "32", label: "月卡", value: "1" },
            { name: "月卡A", key: "48", label: "月卡", value: "1" },
            { name: "月卡B", key: "49", label: "月卡", value: "1" },
            { name: "月卡C", key: "4A", label: "月卡", value: "1" },
            { name: "月卡D", key: "4B", label: "月卡", value: "1" },
            { name: "蓝牙卡", key: "3F", label: "月卡", value: "1" }
        ];
        /**收费方式选项 */
        this.feeMethods = [
            {
                label: '标准收费',
                value: '1'
            },
            {
                label: '分时段收费',
                value: '2'
            },
            {
                label: '按单位时间收费',
                value: '3'
            },
            {
                label: '按次收费',
                value: '4'
            }
        ];
        /**折扣方式选项 */
        this.discountMethods = [
            {
                label: '固定折扣',
                value: '1'
            },
            {
                label: '自由输入打折',
                value: '2'
            }
        ];
        /**时间加载方式选项 */
        this.loadTimeMethods = [
            {
                label: '手动加载',
                value: '1'
            }
        ];
        /**开闸方式 */
        this.openMethods = [
            {
                label: '临时卡确定开闸',
                value: '1'
            },
            {
                label: '全部确定开闸',
                value: '2'
            },
            {
                label: '全部自动开闸',
                value: '3'
            },
            {
                label: '免临确定开闸',
                value: '4'
            },
            {
                label: '确定开闸并吞卡',
                value: '5'
            },
            {
                label: '自动开闸并吞卡',
                value: '6'
            },
            {
                label: '自动吞卡确定开闸',
                value: '7'
            },
            {
                label: '读卡或车牌识别开闸',
                value: '8'
            },
            {
                label: '读卡加车牌识别开闸',
                value: '9'
            }
        ];
        /**出入标记 */
        this.gateFlags = [
            {
                label: '入口车道',
                value: '1'
            },
            {
                label: '出口车道',
                value: '2'
            }
        ];
    }
    ParkingDictionary.prototype.getLabelByKey = function (key) {
        var symbol = false;
        for (var i = 0; i < this.cardType.length; i++) {
            if (this.cardType[i].key.toLocaleLowerCase() == key.toLocaleLowerCase()) {
                symbol = true;
                return this.cardType[i].label;
            }
        }
        if (symbol == false) {
            return "未识别卡";
        }
    };
    ParkingDictionary = __decorate([
        core_1.Injectable()
    ], ParkingDictionary);
    return ParkingDictionary;
}());
exports.ParkingDictionary = ParkingDictionary;
// export class SetParking {
// } 


/***/ }),

/***/ "../../../../../src/app/services/constants/sysConfigs.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SysConfigs = (function () {
    function SysConfigs() {
        /**本地 */
        // SERVER_PORTAL= "http://192.168.1.121:8080/rest/portal/";
        // SERVER_ERP= "http://192.168.1.199/rest/property/";
        // SERVER_PROFILE= "http://192.168.1.199/rest/profile/";
        // SERVER_SOCKET= "http://192.168.1.199:8010/";
        // SYSTEM_PORTAL= "http://192.168.1.199/portal/";
        // SYSTEM_ERP= "http://192.168.1.199:8888/";
        // SYSTEM_PANO="http://192.168.1.199/";
        // SERVER_PARKING = "http://192.168.1.199/rest/parking/";
        // DEVICE_SOCKET = "ws://192.168.1.252:20089";
        /**正式库 */
        // SERVER_PORTAL = "http://www.panpartner.com/rest/portal/";
        // SERVER_ERP = "http://www.panpartner.com/rest/property/";
        // SERVER_PROFILE = "http://www.panpartner.com/rest/profile/";
        // SERVER_SOCKET = "http://www.panpartner.com";
        // SYSTEM_PORTAL = "http://www.panpartner.com/portal/";
        // SYSTEM_ERP = "http://www.panpartner.com/";
        // SYSTEM_PANO = "http://www.panpartner.com/";
        /**测试库 */
        this.SERVER_PORTAL = "http://192.168.1.121:8080/rest/portal/";
        this.SERVER_ERP = "http://192.168.1.121:8080/rest/property/";
        this.SERVER_PROFILE = "http://192.168.1.121:8080/rest/profile/";
        // SERVER_SOCKET= "http://192.168.1.121:8080/";
        this.SERVER_SOCKET = "http://192.168.1.121:8080/websocket";
        // SERVER_SOCKET: "http://119.23.150.217:8080/";
        this.DEVICE_SOCKET = "ws://192.168.1.252:20089";
        // DEVICE_SOCKET = "ws://127.0.0.1:20089";	
        this.SYSTEM_PORTAL = "http://192.168.1.121:8080/portal/";
        this.SYSTEM_ERP = "http://192.168.1.121:8080/";
        this.SYSTEM_PANO = "http://192.168.1.121:8080/";
        this.SERVER_PARKING = "http://192.168.1.121:8080/rest/parking/";
        /**模拟库 */
        // SERVER_PORTAL =  "http://120.24.80.15:8080/rest/portal/";
        // SERVER_ERP = "http://120.24.80.15:8080/rest/property/";
        // SERVER_PROFILE = "http://120.24.80.15:8080/rest/profile/";
        // SERVER_SOCKET = "http://120.24.80.15:8080/";
        // SYSTEM_PORTAL = "http://120.24.80.15:8080/portal/";
        // SYSTEM_ERP = "http://120.24.80.15:8080/";
        // SYSTEM_PANO = "http://120.24.80.15:8080/";
        /**库 */
        // SERVER_PORTAL = "http://192.168.1.192/rest/portal/";
        // SERVER_ERP =  "http://192.168.1.192/rest/property/";
        // SERVER_PROFILE = "http://192.168.1.192/rest/profile/";
        // SERVER_SOCKET = "http://192.168.1.192/";
        // DEVICE_SOCKET = "ws://192.168.1.252:1234";
        // SERVER_PARKING = "http://192.168.1.192/rest/parking/";
        // SYSTEM_PORTAL = "http://192.168.1.192/portal/";
        // SYSTEM_ERP = "http://192.168.1.192/";
        // SYSTEM_PANO = "http://192.168.1.192/";
        this.CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded;charset=utf-8';
        this.CONTENT_TYPE_JSON = 'application/json;charset=UTF-8';
        this.MAX_PAY = 100000;
        this.MIN_METER = 0.01;
    }
    SysConfigs = __decorate([
        core_1.Injectable()
    ], SysConfigs);
    return SysConfigs;
}());
exports.SysConfigs = SysConfigs;


/***/ }),

/***/ "../../../../../src/app/services/controller/controller.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var sysConfigs_1 = __webpack_require__("../../../../../src/app/services/constants/sysConfigs.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var ControllerService = (function () {
    function ControllerService(http, sysConfigs, deviceService) {
        // this.deviceService.device_ws.onmessage=(data)=>{
        //     let json= JSON.parse(data.data)
        //     if(json.op == "ret‐get‐hw‐time"){
        //           if(json.ret == 0){
        //                 console.log("正确连接");
        //           }
        //           else if(json.ret >= 1 &&json.ret<=100 ){
        //             alert("硬件通信异常");
        this.http = http;
        this.sysConfigs = sysConfigs;
        this.deviceService = deviceService;
        /*控制机消息流*/
        this.controller$ = new rxjs_1.Subject();
        this.device_obj$ = new rxjs_1.BehaviorSubject({
            connect: ''
        });
        //           }
        //           else if(json.ret >100){
        //                 alert("报文格式错误");
        //           }
        //     }
        // }
    }
    ControllerService.prototype.getControllerData = function () {
        var _this = this;
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.get(this.sysConfigs.SERVER_PARKING + 'feestandard/getFeestandard', headers).subscribe(function (resp) {
            console.log(resp.json().object);
            if (resp.json().object.feestandardItems != null) {
                _this.controller$.next(resp.json().object);
                console.log(resp.json().object);
            }
        }, function (erro) {
            console.log("获取云端数据失败");
        });
    };
    ControllerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, sysConfigs_1.SysConfigs, device_service_1.DeviceService])
    ], ControllerService);
    return ControllerService;
}());
exports.ControllerService = ControllerService;


/***/ }),

/***/ "../../../../../src/app/services/ctrlbutton/ctrlbutton.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var cardManage_service_1 = __webpack_require__("../../../../../src/app/services/cardManage/cardManage.service.ts");
var CtrlbuttonService = (function () {
    function CtrlbuttonService(router, modal, parking, device, card) {
        var _this = this;
        this.router = router;
        this.modal = modal;
        this.parking = parking;
        this.device = device;
        this.card = card;
        document.onkeydown = function (e) {
            // 按 F3 车牌预置 
            if (e && e.keyCode == 114) {
                _this.handle('setCard');
            }
            else if (e && e.keyCode == 115) {
                _this.handle('removeCard');
            }
            else if (e && e.keyCode == 116) {
                _this.handle('release');
            }
            else if (e && e.keyCode == 117) {
                _this.handle('outCard');
            }
        };
    }
    /**根据按钮名字执行各自的函数 */
    CtrlbuttonService.prototype.handle = function (buttonName) {
        switch (buttonName) {
            /**修改密码 */
            case 'changePassword':
                this.router.navigate(['./changePassword']);
                this.modal.showModal();
                return;
            /**换班登录 */
            case 'login':
                this.router.navigate(['./login']);
                this.modal.showModal();
                return;
            /**车牌预置-F3 */
            case 'setCard':
                // this.router.navigate(['./setCard']);
                // this.modal.showModal();
                return;
            /**取消配置-F4 */
            case 'removeCard':
                console.log('setCard');
                // this.device.device_ws.send(JSON.stringify({"fid":"0", "op":"hb","id_from":"001","id_to":"002","ftime":"2017-12-1513:45:09"}));
                return;
            /**无卡放行-F5 */
            case 'release':
                this.router.navigate(['./release']);
                this.modal.showModal();
                // this.device.sendOpenGate(1);
                return;
            /**卡机出卡-F6 */
            case 'outCard':
                console.log('setCard');
                return;
            /**转到六画面 */
            case 'transform':
                // console.log('setCard');
                // this.
                return;
            /**卡片检测 */
            case 'checkCard':
                this.router.navigate(['./checkCard']);
                this.modal.showModal();
                return;
            /**月卡期限查询 */
            case 'searchCard':
                this.card.getCardInfo(1, "query");
                this.router.navigate(['./searchCard']);
                this.modal.showModal();
                return;
            /**场内车辆查询 */
            case 'searchCar':
                this.parking.getParkingCarList();
                this.router.navigate(['./searchCar']);
                this.modal.showModal();
                return;
            /**收费记录查询 */
            case 'searchRecord':
                this.parking.getParkingCarChargeList(1);
                this.router.navigate(['./searchRecord']);
                this.modal.showModal();
                return;
            default:
                return;
        }
    };
    CtrlbuttonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, modal_service_1.ModalService, parking_service_1.ParkingService, device_service_1.DeviceService, cardManage_service_1.CardManageService])
    ], CtrlbuttonService);
    return CtrlbuttonService;
}());
exports.CtrlbuttonService = CtrlbuttonService;


/***/ }),

/***/ "../../../../../src/app/services/device/device.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var sysConfigs_1 = __webpack_require__("../../../../../src/app/services/constants/sysConfigs.ts");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var parkingDictionary_1 = __webpack_require__("../../../../../src/app/services/constants/parkingDictionary.ts");
var DeviceService = (function () {
    function DeviceService(sysConfigs, parkdic) {
        var _this = this;
        this.sysConfigs = sysConfigs;
        this.parkdic = parkdic;
        this.fid = 0;
        this.onmessage$ = new rxjs_1.Subject();
        this.state = false;
        this.device_ws = new WebSocket(this.sysConfigs.DEVICE_SOCKET);
        this.onmessage$.filter(function (data) { return data.ret != "0"; }).subscribe(function (data) {
            //硬件通信异常
            if (data.ret > 0 && data.ret <= 100) {
                console.log("硬件通信异常");
            }
            else if (data.ret > 100 && data.ret <= 200) {
                console.log("命令内容异常");
            }
        });
        this.device_ws.onopen = function () {
            _this.state = true;
            console.log("与硬件服务器开始连接");
        };
        /**当信息返回*/
        this.device_ws.onmessage = function (ret) {
            _this.onmessage$.next(JSON.parse(ret.data));
            // console.log(ret.data);
        };
        this.device_ws.onclose = function () {
            _this.state = false;
            console.log('与硬件服务器断开连接');
            _this.device_ws.close(); //关闭TCP连接
        };
        /**定时器 */
        rxjs_1.Observable.interval(5000).subscribe(function () {
            if (_this.state == true) {
                _this.sendHb();
            }
            else {
                _this.reconnect();
                // console.log(1212123322312123123);            
                // this.device_ws = new WebSocket(this.sysConfigs.DEVICE_SOCKET); 
            }
        });
    }
    DeviceService.prototype.reconnect = function () {
        var _this = this;
        this.device_ws = new WebSocket(this.sysConfigs.DEVICE_SOCKET);
        this.onmessage$.filter(function (data) { return data.ret != "0"; }).subscribe(function (data) {
            //硬件通信异常
            if (data.ret > 0 && data.ret <= 100) {
                alert("硬件通信异常");
            }
            else if (data.ret > 100 && data.ret <= 200) {
                alert("命令内容异常");
            }
        });
        this.device_ws.onopen = function () {
            _this.state = true;
            console.log("与硬件服务器开始连接");
        };
        /**当信息返回*/
        this.device_ws.onmessage = function (ret) {
            _this.onmessage$.next(JSON.parse(ret.data));
            console.log(ret.data);
        };
        this.device_ws.onclose = function () {
            _this.state = false;
            console.log('与硬件服务器断开连接');
            _this.device_ws.close(); //关闭TCP连接
        };
    };
    /**发送心跳，用来检查线路是否通畅，每5秒检查一次，1秒内没收到正确回应则重新连接 */
    DeviceService.prototype.sendHb = function () {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'hb',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime())
        };
        this.device_ws.send(JSON.stringify(data));
        // console.log(data);
        this.timeStringToNumber("2017-12-15 13:45:09");
    };
    /**查询硬件时间 */
    DeviceService.prototype.sendGetTime = function (hw_id) {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'get-hw-time',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime()),
            hw_id: hw_id.toString() //控制机ID            
        };
        this.device_ws.send(JSON.stringify(data));
    };
    /**修改硬件时间 */
    DeviceService.prototype.sendSetHwTime = function (hw_id) {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'set-hw-time',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime()),
            hw_id: hw_id.toString(),
            v: this.timeNumberToString(new Date().getTime()) //时间
        };
        this.device_ws.send(JSON.stringify(data));
    };
    /**开闸*/
    DeviceService.prototype.sendOpenGate = function (hw_id) {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'z',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime()),
            hw_id: hw_id.toString(),
            v: 1 //关闸
        };
        this.device_ws.send(JSON.stringify(data));
    };
    /**关闸 */
    DeviceService.prototype.sendCloseGate = function (hw_id) {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'z',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime()),
            hw_id: hw_id.toString(),
            v: 0 //开闸
        };
        this.device_ws.send(JSON.stringify(data));
    };
    /**查询收费规则 */
    DeviceService.prototype.sendGetFeeRules = function (hw_id) {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'price-get',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime()),
            hw_id: hw_id.toString(),
            card_type: "36"
        };
        this.device_ws.send(JSON.stringify(data));
    };
    /**修改收费规则 */
    DeviceService.prototype.sendSetFeeRules = function (hw_id, opt) {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'price-set',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime()),
            hw_id: hw_id.toString(),
            card_type: "36",
            fee_type: "1",
            free_m: opt.free_time.toString(),
            price: opt.priceArray.map(function (key, value, arr) { return Math.round(Number(key)); }),
            free_m_no_charge: this.boolToString(opt.free_m_no_charge),
            day_limit: opt.day_limit
        };
        // console.log(opt.priceArray.map((key, value, arr) => {
        //     console.log(key);
        //     console.log(arr);
        //     console.log(value);
        //     return Math.round(Number(value)) 
        // }));
        this.device_ws.send(JSON.stringify(data));
    };
    /**入场记录信息回馈 */
    DeviceService.prototype.sendBackRecord = function (record_id) {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'ret-report-card-record',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime()),
            record_id: record_id
        };
        this.device_ws.send(JSON.stringify(data));
    };
    /**拿到减免过的费用 */
    DeviceService.prototype.sendGetRealFee = function (min) {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'time-to-money',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime()),
            card_type: "36",
            time_m: min >= 0 ? min.toString() : "0"
        };
        this.device_ws.send(JSON.stringify(data));
    };
    /**下发ID卡信息到硬件 */
    DeviceService.prototype.sendIDCardToDevice = function (opt) {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'publish-id-card-info',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime()),
            hw_id: opt.hw_id.toString(),
            card_id: opt.card_id.toString(),
            card_type: opt.card_type.toString(),
            op_type: opt.op_type.toString(),
            time_to: opt.time_to.toString(),
        };
        this.device_ws.send(JSON.stringify(data));
    };
    /**语音播报 */
    DeviceService.prototype.sendRequestVoice = function (hw_id, money, dayOpt) {
        //报文格式
        var data = {
            fid: "B" + this.fid++,
            op: 'au-money',
            id_from: "001",
            id_to: "002",
            ftime: this.timeNumberToString(new Date().getTime()),
            hw_id: hw_id.toString(),
            day: dayOpt.day.toString(),
            hour: dayOpt.hour.toString(),
            min: dayOpt.min.toString(),
            money: money.toString()
        };
        this.device_ws.send(JSON.stringify(data));
    };
    /**小于10前面补0 */
    DeviceService.prototype.addZero = function (number) {
        if (number < 10) {
            return "0" + number;
        }
        else {
            return number.toString();
        }
    };
    /**时间格式化，将毫秒时间输出成字符串时间*/
    DeviceService.prototype.timeNumberToString = function (timeMS) {
        var time = new Date(timeMS);
        return time.getFullYear() + "-" + this.addZero(time.getMonth() + 1) + "-" + this.addZero(time.getDate()) + " " + this.addZero(time.getHours()) + ":" + this.addZero(time.getMinutes()) + ":" + this.addZero(time.getSeconds());
    };
    /**时间格式化，将字符串时间输出成毫秒时间*/
    DeviceService.prototype.timeStringToNumber = function (timeString) {
        return new Date(timeString.replace(new RegExp("-", "gm"), "/")).getTime();
    };
    /**布尔值转化为字符型 */
    DeviceService.prototype.boolToString = function (bool) {
        if (bool == "true" || bool == "1") {
            return "1";
        }
        else {
            return "0";
        }
    };
    /**毫秒转化为分钟 */
    DeviceService.prototype.msToMin = function (ms) {
        return Math.ceil(ms / 1000 / 60);
    };
    DeviceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [sysConfigs_1.SysConfigs, parkingDictionary_1.ParkingDictionary])
    ], DeviceService);
    return DeviceService;
}());
exports.DeviceService = DeviceService;


/***/ }),

/***/ "../../../../../src/app/services/loginGuard/loginGuard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var LoginGuardService = (function () {
    function LoginGuardService(user, router) {
        this.user = user;
        this.router = router;
    }
    LoginGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    LoginGuardService.prototype.checkLogin = function (url) {
        if (this.user.isLogin == true) {
            return true;
        }
        else {
            this.user.redirectUrl = url;
            this.router.navigate(['/interceptor']);
            return false;
        }
    };
    LoginGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], LoginGuardService);
    return LoginGuardService;
}());
exports.LoginGuardService = LoginGuardService;


/***/ }),

/***/ "../../../../../src/app/services/menu/menu.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var parking_service_1 = __webpack_require__("../../../../../src/app/services/parking/parking.service.ts");
var navbutton_service_1 = __webpack_require__("../../../../../src/app/services/navbutton/navbutton.service.ts");
var cardManage_service_1 = __webpack_require__("../../../../../src/app/services/cardManage/cardManage.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var MenuService = (function () {
    function MenuService(router, modal, device, parking, nav, card, user) {
        this.router = router;
        this.modal = modal;
        this.device = device;
        this.parking = parking;
        this.nav = nav;
        this.card = card;
        this.user = user;
        /**是否显示菜单流 */
        this.isShowMenu$ = new rxjs_1.BehaviorSubject(false);
    }
    /**根据菜单名字执行各自的函数 */
    MenuService.prototype.handle = function (menuName) {
        switch (menuName) {
            /**修改密码 */
            case 'changePassword':
                this.router.navigate(['./changePassword']);
                this.modal.showModal();
                return;
            /**换班登录 */
            case 'login':
                this.router.navigate(['./login']);
                this.modal.showModal();
                return;
            /**设置 */
            case 'setBaseInfo':
                this.router.navigate(['./setBaseInfo']);
                this.modal.showModal();
                return;
            /**退出 */
            case 'quit':
                this.nav.app_close();
                return;
            /**车场管理 - 控制机设置 */
            case 'setController':
                this.user.isLogin = false;
                this.router.navigate(['./setController']);
                this.modal.showModal();
                return;
            /**车场管理 - 车道设置 */
            case 'setRoad':
                this.user.isLogin = false;
                this.router.navigate(['./setRoad']);
                this.modal.showModal();
                console.log(this.user.isLogin);
                return;
            /**车场管理 - 收费设置 */
            case 'setFeeStandard':
                this.router.navigate(['./setFeeStandard']);
                this.modal.showModal();
                return;
            /**车场管理 - 机号设置 */
            case 'setDeviceNo':
                this.router.navigate(['./setDeviceNo']);
                this.modal.showModal();
                return;
            /**停车管理 - 出场纪录 */
            case 'recordOut':
                this.parking.getOutParkList(1);
                this.router.navigate(['./recordOut']);
                this.modal.showModal();
                return;
            /**停车管理 - 入场纪录 */
            case 'recordIn':
                this.parking.getInParkList(1);
                this.router.navigate(['./recordIn']);
                this.modal.showModal();
                return;
            /**停车管理 - 无卡放行纪录 */
            case 'recordRelease':
                this.parking.getReleaseList(1);
                this.router.navigate(['./recordRelease']);
                this.modal.showModal();
                return;
            /**停车管理 - 场内车辆查询 */
            case 'recordCar':
                this.parking.getParkingCarList();
                this.router.navigate(['./recordCar']);
                this.modal.showModal();
                return;
            /**停车管理 - 车辆收费查询 */
            case 'recordCarCharge':
                this.parking.getParkingCarChargeList(1);
                this.router.navigate(['./searchRecord']);
                this.modal.showModal();
                return;
            /**卡片管理 - 卡片下载 */
            case 'cardDownload':
                this.router.navigate(['./cardDownload']);
                this.modal.showModal();
                return;
            /**卡片管理 - 月卡期限查询 */
            case 'cardQuery':
                this.card.getCardInfo(1, "query");
                this.router.navigate(['./cardQuery']);
                this.modal.showModal();
                return;
            /**数据同步 - 入场纪录 */
            case 'updateInParking':
                this.router.navigate(['./updateInParking']);
                this.modal.showModal();
                return;
            /**数据同步 - 出场纪录 */
            case 'UpdateOutParking':
                this.router.navigate(['./updateOutParking']);
                this.modal.showModal();
                return;
            /**数据同步 - 无卡放行记录 */
            case 'updateRelease':
                this.router.navigate(['./updateRelease']);
                this.modal.showModal();
                return;
            /**数据同步 - 月卡信息 */
            case 'updateCardInfo':
                this.router.navigate(['./updateCardInfo']);
                this.modal.showModal();
                return;
            /**数据同步 - 车道信息 */
            case 'updateRoadInfo':
                this.router.navigate(['./updateRoadInfo']);
                this.modal.showModal();
                return;
            /**数据同步 - 优惠信息 */
            case 'updatePrivilege':
                this.router.navigate(['./updatePrivilege']);
                this.modal.showModal();
                return;
            default:
                return;
        }
    };
    MenuService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, modal_service_1.ModalService, device_service_1.DeviceService, parking_service_1.ParkingService,
            navbutton_service_1.NavbuttonService, cardManage_service_1.CardManageService, user_service_1.UserService])
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;


/***/ }),

/***/ "../../../../../src/app/services/modal/modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var ModalService = (function () {
    function ModalService() {
        /**modal弹出流 */
        this.isShowModal$ = new rxjs_1.BehaviorSubject(false);
        /**modal是否禁用流 */
        this.isOperable$ = new rxjs_1.BehaviorSubject(true);
    }
    ModalService.prototype.showModal = function () {
        var _this = this;
        this.isOperable$.subscribe(function (isAble) {
            if (isAble == true) {
                _this.isShowModal$.next(true);
            }
        });
    };
    ModalService.prototype.closeModal = function () {
        var _this = this;
        this.isOperable$.subscribe(function (isAble) {
            if (isAble == true) {
                _this.isShowModal$.next(false);
            }
        });
    };
    ModalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());
exports.ModalService = ModalService;


/***/ }),

/***/ "../../../../../src/app/services/navbutton/navbutton.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var render_service_1 = __webpack_require__("../../../../../src/app/services/render/render.service.ts");
var NavbuttonService = (function () {
    function NavbuttonService(render) {
        this.render = render;
    }
    NavbuttonService.prototype.app_close = function () {
        this.render.send('app_close');
    };
    NavbuttonService.prototype.window_hide = function () {
        this.render.send('hide-window');
    };
    NavbuttonService.prototype.window_show = function () {
        this.render.send('show-window');
    };
    NavbuttonService.prototype.window_orignal = function () {
        this.render.send('orignal-window');
    };
    NavbuttonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [render_service_1.RenderService])
    ], NavbuttonService);
    return NavbuttonService;
}());
exports.NavbuttonService = NavbuttonService;


/***/ }),

/***/ "../../../../../src/app/services/parkLot/parkLot.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var ParkLotService = (function () {
    function ParkLotService() {
        var _this = this;
        this.parkLotObj$ = new rxjs_1.Subject();
        this.parkLotObj = {
            monthCardNum: 0,
            temporaryCard: 0,
            inWithHand: 0,
            outWithHand: 0,
            remaining: 0,
            total: 0
        };
        this.parkLotObj$.subscribe(function (data) {
            _this.parkLotObj = data;
        });
        this.parkLotObj$.next({
            monthCardNum: 0,
            temporaryCard: 0,
            inWithHand: 0,
            outWithHand: 0,
            remaining: 0,
            total: 0
        });
    }
    /**增加月卡 */
    ParkLotService.prototype.addMonthCardNum = function () {
        this.parkLotObj$.next({
            monthCardNum: this.parkLotObj.monthCardNum + 1,
            temporaryCard: this.parkLotObj.temporaryCard,
            inWithHand: this.parkLotObj.inWithHand,
            outWithHand: this.parkLotObj.outWithHand,
            remaining: this.parkLotObj.remaining,
            total: this.parkLotObj.total
        });
    };
    /**增加月卡 */
    ParkLotService.prototype.decMonthCardNum = function () {
        this.parkLotObj$.next({
            monthCardNum: this.parkLotObj.monthCardNum - 1,
            temporaryCard: this.parkLotObj.temporaryCard,
            inWithHand: this.parkLotObj.inWithHand,
            outWithHand: this.parkLotObj.outWithHand,
            remaining: this.parkLotObj.remaining,
            total: this.parkLotObj.total
        });
    };
    /**增加临时卡 */
    ParkLotService.prototype.addTemporaryCard = function () {
        this.parkLotObj$.next({
            monthCardNum: this.parkLotObj.monthCardNum,
            temporaryCard: this.parkLotObj.temporaryCard + 1,
            inWithHand: this.parkLotObj.inWithHand,
            outWithHand: this.parkLotObj.outWithHand,
            remaining: this.parkLotObj.remaining,
            total: this.parkLotObj.total
        });
    };
    /**增加临时卡 */
    ParkLotService.prototype.decTemporaryCard = function () {
        this.parkLotObj$.next({
            monthCardNum: this.parkLotObj.monthCardNum,
            temporaryCard: this.parkLotObj.temporaryCard - 1,
            inWithHand: this.parkLotObj.inWithHand,
            outWithHand: this.parkLotObj.outWithHand,
            remaining: this.parkLotObj.remaining,
            total: this.parkLotObj.total
        });
    };
    /**增加手动放入 */
    ParkLotService.prototype.addInWithHand = function () {
        this.parkLotObj$.next({
            monthCardNum: this.parkLotObj.monthCardNum,
            temporaryCard: this.parkLotObj.temporaryCard,
            inWithHand: this.parkLotObj.inWithHand + 1,
            outWithHand: this.parkLotObj.outWithHand,
            remaining: this.parkLotObj.remaining,
            total: this.parkLotObj.total
        });
    };
    /**增加手动放出 */
    ParkLotService.prototype.addOutWithHand = function () {
        this.parkLotObj$.next({
            monthCardNum: this.parkLotObj.monthCardNum,
            temporaryCard: this.parkLotObj.temporaryCard,
            inWithHand: this.parkLotObj.inWithHand,
            outWithHand: this.parkLotObj.outWithHand + 1,
            remaining: this.parkLotObj.remaining,
            total: this.parkLotObj.total
        });
    };
    /**余位增加 */
    ParkLotService.prototype.addRemaining = function () {
        this.parkLotObj$.next({
            monthCardNum: this.parkLotObj.monthCardNum,
            temporaryCard: this.parkLotObj.temporaryCard,
            inWithHand: this.parkLotObj.inWithHand,
            outWithHand: this.parkLotObj.outWithHand,
            remaining: this.parkLotObj.remaining + 1,
            total: this.parkLotObj.total
        });
    };
    /**余位减少 */
    ParkLotService.prototype.decRemaining = function () {
        this.parkLotObj$.next({
            monthCardNum: this.parkLotObj.monthCardNum,
            temporaryCard: this.parkLotObj.temporaryCard,
            inWithHand: this.parkLotObj.inWithHand,
            outWithHand: this.parkLotObj.outWithHand,
            remaining: this.parkLotObj.remaining - 1 < 0 ? 0 : this.parkLotObj.remaining - 1,
            total: this.parkLotObj.total
        });
    };
    /**设置总车位 */
    ParkLotService.prototype.setTotal = function (total) {
        this.parkLotObj$.next({
            monthCardNum: this.parkLotObj.monthCardNum,
            temporaryCard: this.parkLotObj.temporaryCard,
            inWithHand: this.parkLotObj.inWithHand,
            outWithHand: this.parkLotObj.outWithHand,
            remaining: this.parkLotObj.remaining,
            total: total
        });
    };
    /**设置余位 */
    ParkLotService.prototype.setRemaining = function (remaining) {
        this.parkLotObj$.next({
            monthCardNum: this.parkLotObj.monthCardNum,
            temporaryCard: this.parkLotObj.temporaryCard,
            inWithHand: this.parkLotObj.inWithHand,
            outWithHand: this.parkLotObj.outWithHand,
            remaining: remaining,
            total: this.parkLotObj.total
        });
    };
    ParkLotService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ParkLotService);
    return ParkLotService;
}());
exports.ParkLotService = ParkLotService;


/***/ }),

/***/ "../../../../../src/app/services/parking/parking.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var sysConfigs_1 = __webpack_require__("../../../../../src/app/services/constants/sysConfigs.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var device_service_1 = __webpack_require__("../../../../../src/app/services/device/device.service.ts");
var ParkingService = (function () {
    function ParkingService(http, sysConfigs, device) {
        this.http = http;
        this.sysConfigs = sysConfigs;
        this.device = device;
        /**出场纪录流 */
        this.outParkList$ = new rxjs_1.Subject();
        /**入场纪录流 */
        this.inParkList$ = new rxjs_1.Subject();
        /**无卡放行记录流 */
        this.releaseList$ = new rxjs_1.Subject();
        /**场内车辆流 */
        this.parkingList$ = new rxjs_1.Subject();
        /**车辆收费记录流 */
        this.carChargeList$ = new rxjs_1.Subject();
        /**入场信息回馈流 */
        this.inParkListBack$ = new rxjs_1.Subject();
        /**出场信息回馈流 */
        this.outParkListBack$ = new rxjs_1.Subject();
        /**无卡放行回馈流 */
        this.releaseListBack$ = new rxjs_1.Subject();
    }
    /**查询出场纪录 */
    ParkingService.prototype.getOutParkList = function (page, map) {
        var _this = this;
        if (map === void 0) { map = {}; }
        var _searchParams = {
            page: page,
            pageSize: 10,
            map: map,
            sort: 'outTime',
            dir: 'desc'
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'outpark/list', _searchParams, headers).subscribe(function (resp) {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().status == 0) {
                    if (resp.json().object.collection) {
                        var obj = {
                            collection: resp.json().object.collection,
                            totalSize: resp.json().object.totalSize,
                            totalPage: Math.ceil(resp.json().object.totalSize / resp.json().object.pageSize)
                        };
                        _this.outParkList$.next(obj);
                    }
                }
                else {
                    alert(resp.json().message);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**查询入场纪录 */
    ParkingService.prototype.getInParkList = function (page, map) {
        var _this = this;
        if (map === void 0) { map = {}; }
        var _searchParams = {
            page: page,
            pageSize: 10,
            map: map,
            sort: 'comeTime',
            dir: 'desc'
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'inpark/list', _searchParams, headers).subscribe(function (resp) {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().object.collection) {
                    var obj = {
                        collection: resp.json().object.collection,
                        totalSize: resp.json().object.totalSize,
                        totalPage: Math.ceil(resp.json().object.totalSize / resp.json().object.pageSize)
                    };
                    _this.inParkList$.next(obj);
                }
                else {
                    alert(resp.json().message);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**查询无卡放行纪录 */
    ParkingService.prototype.getReleaseList = function (page, map) {
        var _this = this;
        if (map === void 0) { map = {}; }
        var _searchParams = {
            page: page,
            pageSize: 10,
            map: map,
            sort: 'createTime',
            dir: 'desc'
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'release/list', _searchParams, headers).subscribe(function (resp) {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().status == 0) {
                    if (resp.json().object.collection) {
                        var obj = {
                            collection: resp.json().object.collection,
                            totalSize: resp.json().object.totalSize,
                            totalPage: Math.ceil(resp.json().object.totalSize / resp.json().object.pageSize)
                        };
                        _this.releaseList$.next(obj);
                    }
                }
                else {
                    alert(resp.json().message);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**查询场内车辆 */
    ParkingService.prototype.getParkingCarList = function (map) {
        var _this = this;
        if (map === void 0) { map = {}; }
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'inpark/getParkingList', map, headers).subscribe(function (resp) {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().status == 0) {
                    if (resp.json().object) {
                        var obj = {
                            collection: resp.json().object.sort(function (a, b) {
                                return _this.device.timeStringToNumber(b.comeTime) - _this.device.timeStringToNumber(a.comeTime);
                            }),
                            totalSize: resp.json().object.length,
                            totalPage: Math.ceil(resp.json().object.length / 10)
                        };
                        _this.parkingList$.next(obj);
                    }
                }
                else {
                    alert(resp.json().message);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**查询车辆出场收费记录 */
    ParkingService.prototype.getParkingCarChargeList = function (page, map) {
        var _this = this;
        if (map === void 0) { map = {}; }
        var _searchParams = {
            page: page,
            pageSize: 10,
            map: map,
            sort: 'outTime',
            dir: 'desc'
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'outpark/list', _searchParams, headers).subscribe(function (resp) {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().status == 0) {
                    if (resp.json().object.collection) {
                        var obj = {
                            collection: resp.json().object.collection,
                            totalSize: resp.json().object.totalSize,
                            totalPage: Math.ceil(resp.json().object.totalSize / resp.json().object.pageSize)
                        };
                        _this.carChargeList$.next(obj);
                    }
                }
                else {
                    alert(resp.json().message);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**新增入场纪录 */
    ParkingService.prototype.addInParkList = function (data) {
        var _this = this;
        var parameter = {
            list: data
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'inpark/synch', parameter, headers).subscribe(function (resp) {
            //正确返回
            if (resp.json().status == 0) {
                var back = {
                    isConnect: true,
                    data: resp.json().object
                };
                _this.inParkListBack$.next(back);
            }
            else {
                alert(resp.json().message);
            }
        }, function (error) {
            var back = {
                isConnect: false,
                data: data
            };
            _this.inParkListBack$.next(back);
            if (error.status >= 400 && error.status < 500) {
                alert('没有此服务');
            }
            else if (error.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**新增出场纪录 */
    ParkingService.prototype.addOutParkList = function (data) {
        var _this = this;
        var parameter = {
            list: data
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'outpark/synch', parameter, headers).subscribe(function (resp) {
            //正确返回
            if (resp.json().status == 0) {
                var back = {
                    isConnect: true,
                    data: resp.json().object
                };
                _this.outParkListBack$.next(back);
            }
            else {
                alert(resp.json().message);
            }
        }, function (error) {
            var back = {
                isConnect: false,
                data: data
            };
            _this.outParkListBack$.next(back);
            if (error.status >= 400 && error.status < 500) {
                alert('没有此服务');
            }
            else if (error.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**新增无卡放行纪录 */
    ParkingService.prototype.addReleaseList = function (data) {
        var _this = this;
        var parameter = {
            list: data
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'release/synch', parameter, headers).subscribe(function (resp) {
            //正确返回
            if (resp.json().status == 0) {
                var back = {
                    isConnect: true,
                    data: resp.json().object
                };
                _this.releaseListBack$.next(back);
            }
            else {
                alert(resp.json().message);
            }
        }, function (error) {
            var back = {
                isConnect: false,
                data: data
            };
            _this.releaseListBack$.next(back);
            if (error.status >= 400 && error.status < 500) {
                alert('没有此服务');
            }
            else if (error.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    ParkingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, sysConfigs_1.SysConfigs, device_service_1.DeviceService])
    ], ParkingService);
    return ParkingService;
}());
exports.ParkingService = ParkingService;


/***/ }),

/***/ "../../../../../src/app/services/privilege/privilege.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var sysConfigs_1 = __webpack_require__("../../../../../src/app/services/constants/sysConfigs.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var PrivilegeService = (function () {
    function PrivilegeService(http, sysConfigs) {
        this.http = http;
        this.sysConfigs = sysConfigs;
        /**优惠规则流 */
        this.privilegeList$ = new rxjs_1.Subject();
    }
    /**查询优惠规则 */
    PrivilegeService.prototype.getPrivilegeList = function (map) {
        var _this = this;
        if (map === void 0) { map = {}; }
        var _searchParams = {
            parkId: JSON.parse(localStorage.adminUser).parkId
            // page: page,
            // pageSize: 10,
            // map: map,
            // sort: 'outTime',
            // dir: 'desc'
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'freerule/listAllToJsonForApp', _searchParams, headers).subscribe(function (resp) {
            //正确返回
            if (resp.json().status == 0) {
                _this.privilegeList$.next(resp.json().object.freerule);
            }
            else {
                alert(resp.json().message);
            }
        }, function (error) {
            if (error.status >= 400 && error.status < 500) {
                alert('没有此服务');
            }
            else if (error.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    PrivilegeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, sysConfigs_1.SysConfigs])
    ], PrivilegeService);
    return PrivilegeService;
}());
exports.PrivilegeService = PrivilegeService;


/***/ }),

/***/ "../../../../../src/app/services/render/render.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var RenderService = (function () {
    function RenderService() {
        this.ipcRenderer = electron.ipcRenderer;
    }
    RenderService.prototype.on = function (message, done) {
        return this.ipcRenderer.on(message, done);
    };
    RenderService.prototype.send = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.ipcRenderer.send(message, args);
    };
    RenderService.prototype.api = function (action) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.ipcRenderer).send.apply(_a, ['api', action].concat(args));
        return new Promise(function (resolve, reject) {
            _this.ipcRenderer.once(action + "reply", function (e, reply, status) {
                if (!reply) {
                    return reject(status);
                }
                return resolve(reply);
            });
        });
        var _a;
    };
    RenderService.prototype.dialog = function (action) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.ipcRenderer).send.apply(_a, ['dialog', action].concat(args));
        var _a;
    };
    RenderService.prototype.sendSync = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.ipcRenderer.sendSync(message, arguments);
    };
    RenderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], RenderService);
    return RenderService;
}());
exports.RenderService = RenderService;


/***/ }),

/***/ "../../../../../src/app/services/road/road.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var sysConfigs_1 = __webpack_require__("../../../../../src/app/services/constants/sysConfigs.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var RoadService = (function () {
    function RoadService(http, sysConfigs) {
        this.http = http;
        this.sysConfigs = sysConfigs;
        this.roadList$ = new rxjs_1.Subject();
        this.parkOptList$ = new rxjs_1.Subject();
    }
    /**获得机号设置列表 */
    RoadService.prototype.getRoadList = function (page, map) {
        var _this = this;
        if (map === void 0) { map = {}; }
        var _searchParams = {
            page: page,
            pageSize: 10,
            map: map
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'parksettingRoadway/list', _searchParams, headers).subscribe(function (resp) {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().status == 0) {
                    if (resp.json().object.collection) {
                        var obj = {
                            collection: resp.json().object.collection,
                            totalSize: resp.json().object.totalSize,
                            totalPage: Math.ceil(resp.json().object.totalSize / resp.json().object.pageSize)
                        };
                        _this.roadList$.next(obj);
                    }
                }
                else {
                    alert(resp.json().message);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**获得车场设置 */
    RoadService.prototype.getParkingOptList = function () {
        var _this = this;
        // let _searchParams = {
        //     page: page,
        //     pageSize: 10,
        //     map: map
        // }
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.get(this.sysConfigs.SERVER_PARKING + ("parksetting/showParksetting?parkId=" + JSON.parse(localStorage.adminUser).parkId), headers).subscribe(function (resp) {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().status == 0) {
                    if (resp.json().object) {
                        _this.parkOptList$.next(resp.json().object);
                    }
                }
                else {
                    alert(resp.json().message);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /*得到新增数据*/
    RoadService.prototype.getParksettingAddData = function (object) {
        console.log("服务数据是" + JSON.stringify(object));
        object.checkCard = this.boolToString(object.checkCard);
        object.getCard = this.boolToString(object.getCard);
        object.Monitor = this.boolToString(object.Monitor);
        var _searchParams = {
            "laneMarking": object.addRoadNumber,
            "entryMarking": object.entranceAndExit_Identification,
            "entryName": object.entranceAndExit,
            "controlNum": object.addcontroller,
            "openedNum": "1",
            "openedType": object.openWay,
            "videoCardNum": "1",
            "garageMarking": "1",
            "inspectionMarking": object.checkCard,
            "isCardMachine": object.getCard,
            "isMonitoring": object.Monitor,
            // "isCardMachine":"0",
            // "isMonitoring":"1",
            // "inspectionMarking":"1",
            "computerName": "",
            "macAdress": "Mac"
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'parksettingRoadway/add', _searchParams, headers).subscribe(function (resp) {
            console.log("数据是" + resp.json().object);
        });
    };
    /**布尔值转化为字符型 */
    RoadService.prototype.boolToString = function (bool) {
        if (bool == "true" || bool == "1") {
            return "1";
        }
        else {
            return "0";
        }
    };
    RoadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, sysConfigs_1.SysConfigs])
    ], RoadService);
    return RoadService;
}());
exports.RoadService = RoadService;


/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var sysConfigs_1 = __webpack_require__("../../../../../src/app/services/constants/sysConfigs.ts");
var modal_service_1 = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var render_service_1 = __webpack_require__("../../../../../src/app/services/render/render.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserService = (function () {
    function UserService(http, sysConfigs, render, modal, router) {
        var _this = this;
        this.http = http;
        this.sysConfigs = sysConfigs;
        this.render = render;
        this.modal = modal;
        this.router = router;
        /**定义用户信息流 */
        this.userInfo$ = new rxjs_1.BehaviorSubject("");
        /**验证密码正确流 */
        this.isTruePassword$ = new rxjs_1.Subject();
        /**是否已经成功修改了密码流 */
        this.isSuccessChange$ = new rxjs_1.Subject();
        /**权限流 */
        this.permission$ = new rxjs_1.Subject();
        /**用户登录状态流，true为在线，false为离线 */
        this.isConnect$ = new rxjs_1.Subject();
        /**用户电脑信息 */
        this.baseInfo$ = new rxjs_1.Subject();
        /**是否登录 */
        this.isLogin = false;
        /**当登录成功后重新请求数据 */
        this.render.on('login-reply', function (event, arg) {
            localStorage.setItem('token', arg.object.token);
            var adminUser = {
                adminUserId: arg.object.adminUserId ? arg.object.adminUserId : "",
                parkId: arg.object.activeParkId ? arg.object.activeParkId : "",
                createId: arg.object.id ? arg.object.id : "",
                createName: arg.object.userAccount ? arg.object.userAccount : "",
                // createTime: arg.object.createTime?arg.object.createTime:"",
                updateId: arg.object.id ? arg.object.id : "",
                updateName: arg.object.userAccount ? arg.object.userAccount : "",
            };
            localStorage.setItem('adminUser', JSON.stringify(adminUser));
            _this.userInfo$.next(arg.object.userAccount);
            _this.permission$.next(['lessor']);
            _this.isConnect$.next(true);
        });
        /**离线登录成功 */
        this.render.on('login-reply-outline', function (event, arg) {
            localStorage.setItem('token', arg.token);
            _this.userInfo$.next(arg.userAccount);
            _this.permission$.next(['lessor']);
            alert("连接超时，现在是离线登录状态，请告之管理员");
            _this.isConnect$.next(false);
        });
    }
    /**登录方法 */
    UserService.prototype.login = function (account, password) {
        var _this = this;
        var _userParams = new http_1.URLSearchParams();
        _userParams.set("userAccount", account);
        _userParams.set("userPassword", password);
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_FORM }) });
        this.http.post(this.sysConfigs.SERVER_PORTAL + 'user/login4DesktopApp', _userParams, headers).subscribe(function (resp) {
            // this.http.post(this.SERVER_PORTAL + 'user/login4DesktopApp', _userParams, headers).subscribe((resp: Response) => {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().status == 0) {
                    //token
                    localStorage.setItem('token', resp.json().object.token);
                    //adminUser Info
                    var adminUser = {
                        adminUserId: resp.json().object.adminUserId ? resp.json().object.adminUserId : "",
                        parkId: resp.json().object.activeParkId ? resp.json().object.activeParkId : "",
                        createId: resp.json().object.id ? resp.json().object.id : "",
                        createName: resp.json().object.userAccount ? resp.json().object.userAccount : "",
                        // createTime: resp.json().object.createTime?resp.json().object.createTime:"",
                        updateId: resp.json().object.id ? resp.json().object.id : "",
                        updateName: resp.json().object.userAccount ? resp.json().object.userAccount : "",
                    };
                    localStorage.setItem('adminUser', JSON.stringify(adminUser));
                    _this.userInfo$.next(resp.json().object.userAccount);
                    _this.permission$.next(['lessor']);
                    _this.modal.isOperable$.next(true);
                    _this.modal.closeModal();
                }
                else {
                    alert(resp.json().message);
                    _this.modal.isOperable$.next(true);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
                _this.modal.isOperable$.next(true);
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
                _this.modal.isOperable$.next(true);
            }
        });
    };
    /**拦截登录验证 */
    UserService.prototype.interceptorLogin = function (password) {
        if (localStorage.baseInfo && JSON.parse(localStorage.baseInfo).passWord) {
            if (password == JSON.parse(localStorage.baseInfo).passWord) {
                this.modal.isOperable$.next(true);
                this.isLogin = true;
                if (this.isLogin && this.redirectUrl) {
                    // let redirect = this.redirectUrl ? this.redirectUrl : '/login';
                    this.router.navigate([this.redirectUrl]);
                }
                else {
                    this.isLogin = false;
                    this.modal.closeModal();
                }
            }
            else {
                this.isLogin = false;
                alert("密码错误");
            }
        }
        else {
            this.isLogin = true;
            this.modal.isOperable$.next(true);
            localStorage.baseInfo = JSON.stringify({ passWord: password });
            this.router.navigate([this.redirectUrl]);
        }
    };
    /**验证密码 */
    UserService.prototype.checkPassword = function (oldPassword) {
        var _this = this;
        var _passwordParams = {
            oldPassword: oldPassword
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PORTAL + 'user/verifyPassword', _passwordParams, headers).subscribe(function (resp) {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().status == 0) {
                    _this.isTruePassword$.next(resp.json().object);
                }
                else {
                    alert(resp.json().message);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**修改密码 */
    UserService.prototype.changePassword = function (newPassword) {
        var _this = this;
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.get(this.sysConfigs.SERVER_PORTAL + ("user/updatePassword?password=" + newPassword), headers).subscribe(function (resp) {
            //成功连接服务器
            if (resp.status == 200) {
                //正确返回
                if (resp.json().status == 0) {
                    if (resp.json().object) {
                        _this.isSuccessChange$.next(true);
                    }
                }
                else {
                    alert(resp.json().message);
                }
            }
            else if (resp.status >= 400 && resp.status < 500) {
                alert('没有此服务');
            }
            else if (resp.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**同步上班收费记录 */
    UserService.prototype.uploadChargeRecord = function () {
        var adminUser = JSON.parse(localStorage.adminUser);
        console.log(adminUser);
        var nowTime = new Date().getTime();
        var adminUsera = {
            adminUserId: adminUser.adminUserId,
            parkId: adminUser.parkId,
            createId: adminUser.createId,
            createName: adminUser.createName,
            createTime: nowTime,
            updateId: adminUser.updateId,
            updateName: adminUser.updateName,
            updateTime: nowTime,
        };
        var _passwordParams = {
            list: [Object.assign(adminUsera, adminUsera)]
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'computerpass/synch', _passwordParams, headers).subscribe(function (resp) {
            //成功连接服务器
            //正确返回
            if (resp.json().status == 0) {
                // this.baseInfo$.next(resp.json().object);
            }
            else {
                alert(resp.json().message);
            }
        }, function (erro) {
            //状态码为400+
            if (erro.status >= 400 && erro.status < 500) {
                alert('没有此服务');
            }
            else if (erro.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**收费电脑数据同步 */
    UserService.prototype.getBaseInfo = function (baseInfo) {
        var adminUser = JSON.parse(localStorage.adminUser);
        console.log(adminUser);
        var nowTime = new Date().getTime();
        var adminUsera = {
            adminUserId: adminUser.adminUserId,
            parkId: adminUser.parkId,
            createId: adminUser.createId,
            createName: adminUser.createName,
            createTime: nowTime,
            updateId: adminUser.updateId,
            updateName: adminUser.updateName,
            updateTime: nowTime,
        };
        var _passwordParams = {
            list: [Object.assign(adminUsera, baseInfo)]
        };
        var headers = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': this.sysConfigs.CONTENT_TYPE_JSON, 'X-Access-Token': localStorage.getItem('token') }) });
        this.http.post(this.sysConfigs.SERVER_PARKING + 'computerpass/synch', _passwordParams, headers).subscribe(function (resp) {
            //成功连接服务器
            //正确返回
            if (resp.json().status == 0) {
                // this.baseInfo$.next(resp.json().object);
            }
            else {
                alert(resp.json().message);
            }
        }, function (erro) {
            //状态码为400+
            if (erro.status >= 400 && erro.status < 500) {
                alert('没有此服务');
            }
            else if (erro.status >= 500) {
                alert('与服务器连接失败');
            }
        });
    };
    /**清除token */
    UserService.prototype.clearToken = function () {
        localStorage.removeItem('token');
    };
    /**清除流 */
    UserService.prototype.clearStream = function () {
        this.isTruePassword$.next(false);
        this.isSuccessChange$.next(false);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, sysConfigs_1.SysConfigs, render_service_1.RenderService, modal_service_1.ModalService, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map