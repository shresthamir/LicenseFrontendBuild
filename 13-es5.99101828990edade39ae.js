function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{A2Ca:function(e,r,t){"use strict";t.r(r);var i=t("ofXK"),n=t("3Pt+"),s=t("0IaG"),a=t("5wG6"),o=t("/1cH"),c=t("qFsG"),b=t("bSwM"),l=t("tyNb"),d=t("fXoL"),u=t("qFpe"),v=t("Uq27"),f=t("jhN1"),m=t("DPn5"),g=t("iIrt"),h=t("oOf3"),p=t("ifrw");function Y(e,r){if(1&e&&(d.Zb(0,"div",3),d.Zb(1,"div",24),d.Zb(2,"div",25),d.Fc(3),d.Yb(),d.Yb(),d.Yb()),2&e){var t=d.lc();d.Jb(3),d.Gc(t.errorMessage)}}function Z(e,r){1&e&&d.Vb(0,"div",26)}function y(e,r){if(1&e){var t=d.ac();d.Zb(0,"tr"),d.Zb(1,"th",34),d.Fc(2),d.Yb(),d.Zb(3,"td",35),d.Fc(4),d.Vb(5,"br"),d.Zb(6,"small"),d.Zb(7,"i"),d.Fc(8),d.Yb(),d.Yb(),d.Yb(),d.Zb(9,"td",35),d.Fc(10),d.Yb(),d.Zb(11,"td",35),d.Fc(12),d.Vb(13,"br"),d.Zb(14,"small"),d.Zb(15,"i"),d.Fc(16),d.Yb(),d.Yb(),d.Yb(),d.Zb(17,"td",35),d.Fc(18),d.Yb(),d.Zb(19,"td",35),d.Zb(20,"select",36),d.hc("ngModelChange",(function(e){return d.yc(t),r.$implicit.approveDays=e})),d.Zb(21,"option",37),d.Fc(22,"1"),d.Yb(),d.Zb(23,"option",38),d.Fc(24,"3"),d.Yb(),d.Zb(25,"option",39),d.Fc(26,"7"),d.Yb(),d.Zb(27,"option",40),d.Fc(28,"10"),d.Yb(),d.Zb(29,"option",41),d.Fc(30,"14"),d.Yb(),d.Yb(),d.Yb(),d.Zb(31,"td",35),d.Zb(32,"input",42),d.hc("ngModelChange",(function(e){return d.yc(t),r.$implicit.remarks=e})),d.Yb(),d.Yb(),d.Zb(33,"td"),d.Zb(34,"a",43),d.Zb(35,"i",44),d.hc("click",(function(e){d.yc(t);var i=r.$implicit;return d.lc(3).approveRequest(i)})),d.Yb(),d.Yb(),d.Zb(36,"a",43),d.Zb(37,"i",45),d.hc("click",(function(e){d.yc(t);var i=r.$implicit;return d.lc(3).denyRequest(i)})),d.Yb(),d.Yb(),d.Yb(),d.Yb()}if(2&e){var i=r.$implicit,n=r.index;d.Jb(2),d.Gc(n+1),d.Jb(2),d.Gc(null==i?null:i.RequestingUser),d.Jb(4),d.Gc(null==i?null:i.RequestStamp),d.Jb(2),d.Gc(null==i?null:i.CName),d.Jb(2),d.Hc("",null==i?null:i.ServerName," "),d.Jb(4),d.Gc(null==i?null:i.ServerAddress),d.Jb(2),d.Gc(null==i?null:i.UserName),d.Jb(2),d.qc("ngModel",i.approveDays),d.Jb(12),d.qc("ngModel",i.remarks)}}var S=function(e,r,t){return{itemsPerPage:e,currentPage:r,totalItems:t}};function C(e,r){if(1&e&&(d.Xb(0),d.Ec(1,y,38,9,"tr",33),d.mc(2,"paginate"),d.mc(3,"searchData"),d.Wb()),2&e){var t=d.lc(2);d.Jb(1),d.qc("ngForOf",d.nc(2,1,d.nc(3,4,t.requestList,t.filter),d.vc(7,S,t.itemsPerPage,t.currentPage,t.totalCount)))}}function w(e,r){1&e&&(d.Xb(0),d.Zb(1,"tr"),d.Zb(2,"td",46),d.Zb(3,"div",47),d.Fc(4,"Request List is unavailable."),d.Yb(),d.Yb(),d.Yb(),d.Wb())}function q(e,r){if(1&e){var t=d.ac();d.Zb(0,"div",48),d.Zb(1,"pagination-controls",49),d.hc("pageChange",(function(e){return d.yc(t),d.lc(2).userPagination(e)})),d.Yb(),d.Yb()}}function I(e,r){if(1&e&&(d.Xb(0),d.Zb(1,"div",27),d.Zb(2,"table",28),d.Zb(3,"thead",29),d.Zb(4,"tr"),d.Zb(5,"th",30),d.Fc(6,"S.No."),d.Yb(),d.Zb(7,"th",31),d.Fc(8,"Requesting User"),d.Yb(),d.Zb(9,"th",31),d.Fc(10,"Client"),d.Yb(),d.Zb(11,"th",31),d.Fc(12,"Server Name"),d.Yb(),d.Zb(13,"th",31),d.Fc(14,"DB User"),d.Yb(),d.Zb(15,"th",31),d.Fc(16,"Approve Days"),d.Yb(),d.Zb(17,"th",31),d.Fc(18,"Remarks"),d.Yb(),d.Yb(),d.Yb(),d.Zb(19,"tbody"),d.Ec(20,C,4,11,"ng-container",23),d.Ec(21,w,5,0,"ng-container",23),d.mc(22,"searchData"),d.Yb(),d.Yb(),d.Yb(),d.Ec(23,q,2,0,"div",32),d.mc(24,"searchData"),d.Wb()),2&e){var t=d.lc();d.Jb(20),d.qc("ngIf",t.requestList&&t.requestList.length>0),d.Jb(1),d.qc("ngIf",t.requestList&&0===d.nc(22,3,t.requestList,t.filter).length),d.Jb(2),d.qc("ngIf",t.requestList&&d.nc(24,6,t.requestList,t.filter).length>t.itemsPerPage)}}var k,F,P=((k=function(){function e(r,t,i,n){_classCallCheck(this,e),this.scrollHelper=r,this.serverService=t,this.title=i,this.snackBarService=n,this.isLoader=!0,this.itemsPerPage=10,this.currentPage=1,this.limit=20,this.offset=0,this.title.setTitle("Server Access Requests  | License Management System")}return _createClass(e,[{key:"ngOnInit",value:function(){this.getInformation(0)}},{key:"getInformation",value:function(e){var r=this;this.serverService.getAccessRequests().subscribe((function(e){r.isLoader=!1,console.log(e),r.requestList=e&&e.result?e.result:[]}),(function(e){r.isLoader=!1,r.totalCount=0,r.itemsPerPage=20,r.requestList=[]}))}},{key:"userPagination",value:function(e){this.isLoader=!0,this.currentPage=e;var r=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout((function(){r.isLoader=!1}),500)}},{key:"approveRequest",value:function(e){var r=this;void 0===e.approveDays||e.approveDays<=0?this.setErrorMessage("Please select the approved days."):this.serverService.approveAccess(e.ID,e.approveDays).subscribe((function(e){r.snackBarService.openSnackBar({type:"success",message:"Request approved."}),r.getInformation(null)}),(function(e){e&&e.error&&r.setErrorMessage(e.error.message?e.error.message:JSON.stringify(e.error))}))}},{key:"denyRequest",value:function(e){var r=this;void 0!==e.remarks&&""!==e.remarks?this.serverService.denyAccess(e.ID,e.remarks).subscribe((function(e){r.snackBarService.openSnackBar({type:"success",message:"Request denied."}),r.getInformation(null)}),(function(e){e&&e.error&&r.setErrorMessage(e.error.message?e.error.message:JSON.stringify(e.error))})):this.setErrorMessage("Please enter the remarks to deny.")}},{key:"setErrorMessage",value:function(e){var r=this;this.errorMessage=e,setTimeout((function(){r.errorMessage=void 0}),5e3)}}]),e}()).\u0275fac=function(e){return new(e||k)(d.Ub(u.a),d.Ub(v.a),d.Ub(f.c),d.Ub(m.a))},k.\u0275cmp=d.Ob({type:k,selectors:[["app-server-access-requests"]],decls:27,vars:4,consts:[[1,"header","bg-gradient-primary","pb-6","pt-4","pt-md-6"],[1,"container-fluid"],[1,"header-body"],[1,"row"],[1,"col-xl-12","col-lg-12","pb-3","pt-3"],["aria-label","breadcrumb",1,"nav-breadcrumb"],[1,"breadcrumb","mb-0"],[1,"breadcrumb-item"],["routerLink","/dashboard"],[1,"ni","ni-tv-2"],["aria-current","page",1,"breadcrumb-item","active"],[1,"container-fluid","mt--7"],[1,"row","mt-5"],[1,"col-xl-12"],[1,"card","shadow"],[1,"card-header","border-0"],[1,"row","align-items-center"],[1,"col-12","col-md-7","col-lg-7"],[1,"mb-0"],[1,"col-12","col-md-5","col-lg-5","text-right"],["type","search","placeholder","Search...","name","filter",1,"form-control",3,"ngModel","ngModelChange"],["class","row",4,"ngIf"],["class","preloader lms_loader",4,"ngIf"],[4,"ngIf"],[1,"col-12"],[1,"alert","alert-danger"],[1,"preloader","lms_loader"],[1,"table-responsive","mb-3"],[1,"table","align-items-center","table-flush"],[1,"thead-light"],["scope","col",2,"width","50px"],["scope","col"],["class","pagination",4,"ngIf"],[4,"ngFor","ngForOf"],["scope","row",2,"width","50px"],[1,"text-capitalize"],[1,"form-control",3,"ngModel","ngModelChange"],["value","1"],["value","3"],["value","7"],["value","10"],["value","14"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-info","mr-3",2,"margin-right","10px"],[1,"fa","fa-check",3,"click"],[1,"fa","fa-times",3,"click"],["colspan","8"],[1,"font-weight-bold"],[1,"pagination"],[3,"pageChange"]],template:function(e,r){1&e&&(d.Zb(0,"div",0),d.Zb(1,"div",1),d.Zb(2,"div",2),d.Zb(3,"div",3),d.Zb(4,"div",4),d.Zb(5,"nav",5),d.Zb(6,"ol",6),d.Zb(7,"li",7),d.Zb(8,"a",8),d.Vb(9,"i",9),d.Yb(),d.Yb(),d.Zb(10,"li",10),d.Fc(11,"Server Access Requests"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(12,"div",11),d.Zb(13,"div",12),d.Zb(14,"div",13),d.Zb(15,"div",14),d.Zb(16,"div",15),d.Zb(17,"div",16),d.Zb(18,"div",17),d.Zb(19,"h3",18),d.Fc(20,"Approve/Deny Access Request"),d.Yb(),d.Yb(),d.Zb(21,"div",19),d.Zb(22,"input",20),d.hc("ngModelChange",(function(e){return r.filter=e})),d.Yb(),d.Yb(),d.Ec(23,Y,4,1,"div",21),d.Yb(),d.Yb(),d.Ec(24,Z,1,0,"div",22),d.Ec(25,I,25,9,"ng-container",23),d.Yb(),d.Yb(),d.Yb(),d.Vb(26,"app-footer"),d.Yb()),2&e&&(d.Jb(22),d.qc("ngModel",r.filter),d.Jb(1),d.qc("ngIf",r.errorMessage),d.Jb(1),d.qc("ngIf",r.isLoader),d.Jb(1),d.qc("ngIf",!r.isLoader))},directives:[l.i,n.c,n.n,n.q,i.l,g.a,i.k,n.t,n.r,n.v,h.c],pipes:[p.a,h.b],styles:[""]}),k),L=t("OPNc"),N=((F=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||F)},F.\u0275cmp=d.Ob({type:F,selectors:[["app-server"]],decls:2,vars:0,template:function(e,r){1&e&&(d.Vb(0,"app-header"),d.Vb(1,"router-outlet"))},directives:[L.a,l.k],encapsulation:2}),F),J=t("Kj3r"),x=t("/uUt");function E(e,r){1&e&&d.Vb(0,"div",23)}var M=function(e){return{server:e}};function V(e,r){if(1&e&&(d.Zb(0,"tr"),d.Zb(1,"th",31),d.Fc(2),d.Yb(),d.Zb(3,"td",32),d.Fc(4),d.Yb(),d.Zb(5,"td",32),d.Fc(6),d.Yb(),d.Zb(7,"td",32),d.Fc(8),d.Yb(),d.Zb(9,"td",32),d.Fc(10),d.Yb(),d.Zb(11,"td",32),d.Fc(12),d.Yb(),d.Zb(13,"td",32),d.Fc(14),d.Yb(),d.Zb(15,"td"),d.Zb(16,"a",33),d.Vb(17,"i",34),d.Yb(),d.Zb(18,"a",35),d.Vb(19,"i",36),d.Yb(),d.Yb(),d.Yb()),2&e){var t=r.$implicit,i=r.index;d.Jb(2),d.Gc(i+1),d.Jb(2),d.Gc(null==t?null:t.CName),d.Jb(2),d.Gc(null==t?null:t.Pan),d.Jb(2),d.Gc(null==t?null:t.Alias),d.Jb(2),d.Gc(null==t?null:t.ServerName),d.Jb(2),d.Gc(null==t?null:t.ServerAddress),d.Jb(2),d.Gc(null==t?null:t.InitialCatalog),d.Jb(2),d.qc("state",t)("queryParams",d.uc(11,M,t)),d.Jb(2),d.qc("state",t)("queryParams",t)}}var O=function(e,r,t){return{id:"server",itemsPerPage:e,currentPage:r,totalItems:t}};function U(e,r){if(1&e&&(d.Xb(0),d.Ec(1,V,20,13,"tr",30),d.mc(2,"paginate"),d.Wb()),2&e){var t=d.lc(2);d.Jb(1),d.qc("ngForOf",d.nc(2,1,t.serverList,d.vc(4,O,t.itemsPerPage,t.currentPage,t.totalCount)))}}function A(e,r){1&e&&(d.Xb(0),d.Zb(1,"tr"),d.Zb(2,"td",37),d.Zb(3,"div",38),d.Fc(4,"Server List is unavailable."),d.Yb(),d.Yb(),d.Yb(),d.Wb())}function G(e,r){if(1&e){var t=d.ac();d.Xb(0),d.Zb(1,"div",24),d.Zb(2,"table",25),d.Zb(3,"thead",26),d.Zb(4,"tr"),d.Zb(5,"th",27),d.Fc(6,"S.No."),d.Yb(),d.Zb(7,"th",27),d.Fc(8,"Company Name"),d.Yb(),d.Zb(9,"th",27),d.Fc(10,"VAT/PAN No."),d.Yb(),d.Zb(11,"th",27),d.Fc(12,"Alias"),d.Yb(),d.Zb(13,"th",27),d.Fc(14,"Server Name"),d.Yb(),d.Zb(15,"th",27),d.Fc(16,"Server Address"),d.Yb(),d.Zb(17,"th",27),d.Fc(18,"Initial Catalog"),d.Yb(),d.Vb(19,"th",27),d.Yb(),d.Yb(),d.Zb(20,"tbody"),d.Ec(21,U,3,8,"ng-container",22),d.Ec(22,A,5,0,"ng-container",22),d.mc(23,"searchData"),d.Yb(),d.Yb(),d.Yb(),d.Zb(24,"div",28),d.Zb(25,"pagination-controls",29),d.hc("pageChange",(function(e){return d.yc(t),d.lc().userPagination(e)})),d.Yb(),d.Yb(),d.Wb()}if(2&e){var i=d.lc();d.Jb(21),d.qc("ngIf",i.serverList&&i.serverList.length>0),d.Jb(1),d.qc("ngIf",i.serverList&&0===d.nc(23,2,i.serverList,i.filter).length)}}var _,R=((_=function(){function e(r,t,i){_classCallCheck(this,e),this.scrollHelper=r,this.serverService=t,this.title=i,this.isLoader=!0,this.itemsPerPage=10,this.currentPage=1,this.limit=20,this.offset=0,this.control=new n.e(""),this.title.setTitle("Server List | License Management System")}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.getServerList(),this.subscription=this.control.valueChanges.pipe(Object(J.a)(300),Object(x.a)()).subscribe((function(r){e.getServerList(r)}))}},{key:"getServerList",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.serverService.getServerList(this.currentPage,this.itemsPerPage,r).subscribe((function(r){e.isLoader=!1,e.serverList=r&&r.result?r.result:[],e.serverList.forEach((function(e){e.IsNew=!0})),e.totalCount=r&&r.result2?r.result2:e.itemsPerPage}),(function(r){e.isLoader=!1,e.totalCount=0,e.itemsPerPage=20,e.serverList=[]}))}},{key:"userPagination",value:function(e){this.isLoader=!0,this.currentPage=e,this.getServerList();var r=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout((function(){r.isLoader=!1}),500)}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||_)(d.Ub(u.a),d.Ub(v.a),d.Ub(f.c))},_.\u0275cmp=d.Ob({type:_,selectors:[["app-server-list"]],decls:26,vars:4,consts:[[1,"header","bg-gradient-primary","pb-6","pt-4","pt-md-6"],[1,"container-fluid"],[1,"header-body"],[1,"row"],[1,"col-xl-12","col-lg-12","pb-3","pt-3"],["aria-label","breadcrumb",1,"nav-breadcrumb"],[1,"breadcrumb","mb-0"],[1,"breadcrumb-item"],["routerLink","/dashboard"],[1,"ni","ni-tv-2"],["aria-current","page",1,"breadcrumb-item","active"],[1,"container-fluid","mt--7"],[1,"row","mt-5"],[1,"col-xl-12"],[1,"card","shadow"],[1,"card-header","border-0"],[1,"row","align-items-center"],[1,"col-12","col-md-7","col-lg-7"],["routerLink","/server/server-register/",1,"btn","btn-primary","d-flex"],[1,"col-12","col-md-5","col-lg-5","text-right"],["type","search","placeholder","Search...",1,"form-control",3,"ngModel","formControl","ngModelChange"],["class","preloader lms_loader",4,"ngIf"],[4,"ngIf"],[1,"preloader","lms_loader"],[1,"table-responsive","mb-3"],[1,"table","align-items-center","table-flush"],[1,"thead-light"],["scope","col"],[1,"pagination"],["id","server",3,"pageChange"],[4,"ngFor","ngForOf"],["scope","row"],[1,"text-capitalize"],["routerLink","/server/update",1,"text-info","mr-3",2,"margin-right","10px",3,"state","queryParams"],[1,"fa","fa-edit"],["routerLink","/server/server-credentials",1,"text-info","mr-3",2,"margin-right","10px",3,"state","queryParams"],[1,"fa","fa-user"],["colspan","8"],[1,"font-weight-bold"]],template:function(e,r){1&e&&(d.Zb(0,"div",0),d.Zb(1,"div",1),d.Zb(2,"div",2),d.Zb(3,"div",3),d.Zb(4,"div",4),d.Zb(5,"nav",5),d.Zb(6,"ol",6),d.Zb(7,"li",7),d.Zb(8,"a",8),d.Vb(9,"i",9),d.Yb(),d.Yb(),d.Zb(10,"li",10),d.Fc(11,"Server List"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(12,"div",11),d.Zb(13,"div",12),d.Zb(14,"div",13),d.Zb(15,"div",14),d.Zb(16,"div",15),d.Zb(17,"div",16),d.Zb(18,"div",17),d.Zb(19,"button",18),d.Fc(20,"New Server"),d.Yb(),d.Yb(),d.Zb(21,"div",19),d.Zb(22,"input",20),d.hc("ngModelChange",(function(e){return r.filter=e})),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Ec(23,E,1,0,"div",21),d.Ec(24,G,26,5,"ng-container",22),d.Yb(),d.Yb(),d.Yb(),d.Vb(25,"app-footer"),d.Yb()),2&e&&(d.Jb(22),d.qc("ngModel",r.filter)("formControl",r.control),d.Jb(1),d.qc("ngIf",r.isLoader),d.Jb(1),d.qc("ngIf",!r.isLoader))},directives:[l.i,l.g,n.c,n.n,n.f,i.l,g.a,h.c,i.k],pipes:[p.a,h.b],styles:[""]}),_),D=t("lJxs"),j=t("qPwn");function B(e,r){if(1&e&&(d.Zb(0,"div",3),d.Zb(1,"div",40),d.Zb(2,"div",41),d.Fc(3),d.Yb(),d.Yb(),d.Yb()),2&e){var t=d.lc();d.Jb(3),d.Gc(t.errorMessage)}}function T(e,r){if(1&e&&(d.Zb(0,"div",3),d.Zb(1,"div",40),d.Zb(2,"div",42),d.Fc(3),d.Yb(),d.Yb(),d.Yb()),2&e){var t=d.lc();d.Jb(3),d.Gc(t.successMessage)}}function $(e,r){if(1&e&&(d.Zb(0,"option",45),d.Fc(1),d.Yb()),2&e){var t=r.$implicit;d.Jb(1),d.Hc(" ",t.CName," ")}}function X(e,r){if(1&e&&(d.Zb(0,"datalist",43),d.Ec(1,$,2,1,"option",44),d.Yb()),2&e){var t=d.lc();d.Jb(1),d.qc("ngForOf",t.companyList)}}function H(e,r){1&e&&(d.Zb(0,"small"),d.Fc(1,"Client is required."),d.Yb())}function W(e,r){if(1&e&&(d.Zb(0,"div",46),d.Ec(1,H,2,0,"small",47),d.Yb()),2&e){var t=d.lc();d.Jb(1),d.qc("ngIf",t.form.controls.clientId.errors.required)}}function z(e,r){1&e&&(d.Zb(0,"small"),d.Fc(1,"Server Name is required."),d.Yb())}function K(e,r){1&e&&(d.Zb(0,"small"),d.Fc(1,"Server Name should be less than 250 characters."),d.Yb())}function Q(e,r){if(1&e&&(d.Zb(0,"div",46),d.Ec(1,z,2,0,"small",47),d.Ec(2,K,2,0,"small",47),d.Yb()),2&e){var t=d.lc();d.Jb(1),d.qc("ngIf",t.form.controls.serverName.errors.required),d.Jb(1),d.qc("ngIf",t.form.controls.serverName.errors.maxlength)}}function ee(e,r){1&e&&(d.Zb(0,"small"),d.Fc(1,"Server Address is required."),d.Yb())}function re(e,r){if(1&e&&(d.Zb(0,"div",46),d.Ec(1,ee,2,0,"small",47),d.Yb()),2&e){var t=d.lc();d.Jb(1),d.qc("ngIf",t.form.controls.serverAddress.errors.required)}}function te(e,r){1&e&&(d.Zb(0,"small"),d.Fc(1,"VAT/PAN No. is required."),d.Yb())}function ie(e,r){if(1&e&&(d.Zb(0,"div",46),d.Ec(1,te,2,0,"small",47),d.Yb()),2&e){var t=d.lc();d.Jb(1),d.qc("ngIf",t.form.controls.initialCatalog.errors.required)}}function ne(e,r){1&e&&d.Vb(0,"div",48)}var se,ae=((se=function(){function e(r,t,i,s,a,o){_classCallCheck(this,e),this.fb=r,this.comService=t,this.serverService=i,this.snackBarService=s,this.route=a,this.router=o,this.selectedRoles=new Array,this.role=new n.e,this.isSubmitting=!1,this.isSubmitted=!1,this.isLoader=!1,this.isEdit=!1,this.companyList=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.forminit()}},{key:"forminit",value:function(){var e=this;this.form=this.fb.group({clientName:[""],clientId:["",[n.u.required]],serverId:[""],serverName:["",[n.u.required,n.u.maxLength(50)]],serverAddress:["",[n.u.required,n.u.maxLength(200)]],initialCatalog:["",[n.u.required,n.u.maxLength(100)]]}),this.form.get("clientName").valueChanges.pipe(Object(J.a)(300),Object(x.a)()).subscribe((function(r){e.getCompanyList(r)})),this.loadValues()}},{key:"loadValues",value:function(){var e=this;this.route.paramMap.pipe(Object(D.a)((function(){return window.history.state}))).subscribe((function(r){console.log(r),r.ServerName&&(e.form.setValue({clientName:r.CName,clientId:r.ClientId,serverId:r.ServerId,serverName:r.ServerName,serverAddress:r.ServerAddress,initialCatalog:r.InitialCatalog}),e.isEdit=!0)}))}},{key:"submit",value:function(e){var r=this;if(!this.form.valid)return console.log(this.form),void(this.isSubmitting=!0);this.isSubmitted=!0,this.isLoader=!0,this.serverService.saveServer(e).subscribe((function(e){r.isSubmitted=!1,r.isLoader=!1,r.resetForm(),r.router.navigate(["/server/server-list"]),r.snackBarService.openSnackBar({type:"success",message:e&&e.message?e.message:"Registration Successfull"})}),(function(e){r.isSubmitted=!1,r.isLoader=!1,e&&e.error&&(r.errorMessage=e.error.message?e.error.message:JSON.stringify(e.error));var t=r;setTimeout((function(){t.errorMessage=void 0}),5e3)}))}},{key:"resetForm",value:function(){this.form.reset()}},{key:"getCompanyList",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.comService.getCompanyList(1,10,r).subscribe((function(r){e.isLoader=!1,e.companyList=r&&r.result?r.result:[]}),(function(r){e.isLoader=!1,e.companyList=[]}))}},{key:"clientChanged",value:function(e){this.form.get("clientId").setValue(this.companyList.find((function(r){return r.CName==e.target.value})).ClientId)}}]),e}()).\u0275fac=function(e){return new(e||se)(d.Ub(n.d),d.Ub(j.a),d.Ub(v.a),d.Ub(m.a),d.Ub(l.a),d.Ub(l.f))},se.\u0275cmp=d.Ob({type:se,selectors:[["app-server-register"]],decls:59,vars:10,consts:[[1,"header","bg-gradient-primary","pb-6","pt-4","pt-md-6"],[1,"container-fluid"],[1,"header-body"],[1,"row"],[1,"col-xl-12","col-lg-12","pb-3","pt-3"],["aria-label","breadcrumb",1,"nav-breadcrumb"],[1,"breadcrumb","mb-0"],[1,"breadcrumb-item"],["routerLink","/dashboard"],[1,"ni","ni-tv-2"],["aria-current","page",1,"breadcrumb-item","active"],[1,"container-fluid","mt--7"],[1,"row","mt-5"],[1,"col-xl-12"],[1,"card","shadow"],[1,"card-header","border-0"],[1,"row","align-items-center"],[1,"col"],[1,"mb-0"],["class","row",4,"ngIf"],["autocomplete","off",1,"form-horizontal","form-material",2,"padding-left","20px",3,"formGroup","ngSubmit"],[1,"form-group","row","pt-2"],["for","clientId",1,"col-md-2","fontweight"],[1,"col-md-4"],["type","hidden","id","clientId","formControlName","clientId"],["type","text","placeholder","Enter Mobile No.","id","clientName","list","results","formControlName","clientName",1,"input",3,"change"],["id","results",4,"ngIf"],["class","invalid-feedback d-block",4,"ngIf"],["for","serverName",1,"col-md-2","fontweight"],["type","hidden","id","serverId","formControlName","serverId"],["type","text","placeholder","Enter Server Name","id","serverName","formControlName","serverName",1,"input"],["for","serverAddress",1,"col-md-2","fontweight"],["type","text","placeholder","Enter Server Address","id","serverAddress","formControlName","serverAddress",1,"input"],["for","initialCatalog",1,"col-md-2","fontweight"],["type","text","placeholder","Enter Initial Catalog","id","initialCatalog","formControlName","initialCatalog",1,"input"],[1,"form-group","row"],[1,"col-sm-12"],["type","submit",1,"btn","btn-success",2,"width","70px","margin-right","15px",3,"disabled"],["class","postloader",4,"ngIf"],["routerLink","/server/server-list",1,"btn","btn-info"],[1,"col-12"],[1,"alert","alert-danger"],[1,"alert","alert-success"],["id","results"],["class","search-option",4,"ngFor","ngForOf"],[1,"search-option"],[1,"invalid-feedback","d-block"],[4,"ngIf"],[1,"postloader"]],template:function(e,r){1&e&&(d.Zb(0,"div",0),d.Zb(1,"div",1),d.Zb(2,"div",2),d.Zb(3,"div",3),d.Zb(4,"div",4),d.Zb(5,"nav",5),d.Zb(6,"ol",6),d.Zb(7,"li",7),d.Zb(8,"a",8),d.Vb(9,"i",9),d.Yb(),d.Yb(),d.Zb(10,"li",10),d.Fc(11,"Server Registration"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(12,"div",11),d.Zb(13,"div",12),d.Zb(14,"div",13),d.Zb(15,"div",14),d.Zb(16,"div",15),d.Zb(17,"div",16),d.Zb(18,"div",17),d.Zb(19,"h3",18),d.Fc(20,"Server Details"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Ec(21,B,4,1,"div",19),d.Ec(22,T,4,1,"div",19),d.Zb(23,"form",20),d.hc("ngSubmit",(function(e){return r.submit(r.form.value)})),d.Zb(24,"div",21),d.Zb(25,"label",22),d.Fc(26,"Client"),d.Yb(),d.Zb(27,"div",23),d.Vb(28,"input",24),d.Zb(29,"input",25),d.hc("change",(function(e){return r.clientChanged(e)})),d.Yb(),d.Ec(30,X,2,1,"datalist",26),d.Ec(31,W,2,1,"div",27),d.Yb(),d.Yb(),d.Zb(32,"div",21),d.Zb(33,"label",28),d.Fc(34,"Server Name"),d.Yb(),d.Zb(35,"div",23),d.Vb(36,"input",29),d.Vb(37,"input",30),d.Ec(38,Q,3,2,"div",27),d.Yb(),d.Yb(),d.Zb(39,"div",21),d.Zb(40,"label",31),d.Fc(41,"Server Address"),d.Yb(),d.Zb(42,"div",23),d.Vb(43,"input",32),d.Ec(44,re,2,1,"div",27),d.Yb(),d.Yb(),d.Zb(45,"div",21),d.Zb(46,"label",33),d.Fc(47,"Initial Catalog"),d.Yb(),d.Zb(48,"div",23),d.Vb(49,"input",34),d.Ec(50,ie,2,1,"div",27),d.Yb(),d.Yb(),d.Zb(51,"div",35),d.Zb(52,"div",36),d.Zb(53,"button",37),d.Fc(54," Save "),d.Ec(55,ne,1,0,"div",38),d.Yb(),d.Zb(56,"a",39),d.Fc(57,"Back"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Vb(58,"app-footer")),2&e&&(d.Jb(21),d.qc("ngIf",r.errorMessage),d.Jb(1),d.qc("ngIf",r.successMessage),d.Jb(1),d.qc("formGroup",r.form),d.Jb(7),d.qc("ngIf",r.companyList),d.Jb(1),d.qc("ngIf",r.form.controls.clientId.invalid&&(r.isSubmitting||r.form.controls.clientId.dirty||r.form.controls.clientId.touched)),d.Jb(7),d.qc("ngIf",r.form.controls.serverName.invalid&&(r.isSubmitting||r.form.controls.serverName.dirty||r.form.controls.serverName.touched)),d.Jb(6),d.qc("ngIf",r.form.controls.serverAddress.invalid&&(r.isSubmitting||r.form.controls.serverAddress.dirty||r.form.controls.serverAddress.touched)),d.Jb(6),d.qc("ngIf",r.form.controls.initialCatalog.invalid&&(r.isSubmitting||r.form.controls.initialCatalog.dirty||r.form.controls.initialCatalog.touched)),d.Jb(3),d.qc("disabled",r.isSubmitted),d.Jb(2),d.qc("ngIf",r.isLoader))},directives:[l.i,i.l,n.w,n.o,n.h,n.c,n.n,n.g,g.a,i.k,n.r,n.v],styles:[".fontweight[_ngcontent-%COMP%]{font-weight:400;padding-top:7px}.input[_ngcontent-%COMP%]{border:2px solid grey;border-radius:5px;padding-left:5px;height:40px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:0;border-bottom:1px solid #ddd}"]}),se),oe=t("mrSG"),ce=t("6Irx"),be=t("7dP1");function le(e,r){1&e&&(d.Zb(0,"small"),d.Fc(1,"User Name isrequired."),d.Yb())}function de(e,r){1&e&&(d.Zb(0,"small"),d.Fc(1,"User Name should be less than 250 characters."),d.Yb())}function ue(e,r){if(1&e&&(d.Zb(0,"div",31),d.Ec(1,le,2,0,"small",32),d.Ec(2,de,2,0,"small",32),d.Yb()),2&e){var t=d.lc();d.Jb(1),d.qc("ngIf",t.form.controls.userName.errors.required),d.Jb(1),d.qc("ngIf",t.form.controls.userName.errors.maxlength)}}function ve(e,r){1&e&&(d.Zb(0,"small"),d.Fc(1,"Password is required."),d.Yb())}function fe(e,r){if(1&e&&(d.Zb(0,"div",31),d.Ec(1,ve,2,0,"small",32),d.Yb()),2&e){var t=d.lc();d.Jb(1),d.qc("ngIf",t.form.controls.password.errors.required)}}function me(e,r){1&e&&d.Vb(0,"div",33)}function ge(e,r){if(1&e){var t=d.ac();d.Zb(0,"tr"),d.Zb(1,"td"),d.Fc(2),d.Yb(),d.Zb(3,"td"),d.Fc(4),d.Yb(),d.Zb(5,"td"),d.Zb(6,"a",43),d.hc("click",(function(e){d.yc(t);var i=r.$implicit;return d.lc(2).update(i)})),d.Vb(7,"i",44),d.Yb(),d.Zb(8,"a",43),d.hc("click",(function(e){d.yc(t);var i=r.$implicit;return d.lc(2).showPassword(i.Password)})),d.Vb(9,"i",45),d.Yb(),d.Yb(),d.Yb()}if(2&e){var i=r.$implicit,n=r.index;d.Jb(2),d.Gc(n+1),d.Jb(2),d.Gc(null==i?null:i.UName)}}function he(e,r){if(1&e){var t=d.ac();d.Zb(0,"div",46),d.Zb(1,"pagination-controls",47),d.hc("pageChange",(function(e){return d.yc(t),d.lc(2).licencePagination(e)})),d.Yb(),d.Yb()}}var pe=function(e,r,t){return{itemsPerPage:e,currentPage:r,totalItems:t}};function Ye(e,r){if(1&e&&(d.Zb(0,"div",34),d.Zb(1,"div",35),d.Zb(2,"div",11),d.Zb(3,"div",36),d.Zb(4,"h3",13),d.Fc(5,"User List"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(6,"div",37),d.Zb(7,"table",38),d.Zb(8,"thead",39),d.Zb(9,"tr"),d.Zb(10,"th",40),d.Fc(11,"S.No."),d.Yb(),d.Zb(12,"th",40),d.Fc(13,"User Name"),d.Yb(),d.Yb(),d.Yb(),d.Zb(14,"tbody"),d.Ec(15,ge,10,2,"tr",41),d.mc(16,"paginate"),d.mc(17,"searchData"),d.Yb(),d.Yb(),d.Yb(),d.Ec(18,he,2,0,"div",42),d.mc(19,"searchData"),d.Yb()),2&e){var t=d.lc();d.Jb(15),d.qc("ngForOf",d.nc(16,2,d.nc(17,5,t.credentials,t.filter),d.vc(11,pe,t.itemsPerPage,t.currentPage,t.totalCount))),d.Jb(3),d.qc("ngIf",t.credentials&&d.nc(19,8,t.credentials,t.filter).length>t.itemsPerPage)}}var Ze,ye,Se=[{path:"",component:N,children:[{path:"server-list",component:R},{path:"server-register",component:ae},{path:"server-credentials",component:(Ze=function(){function e(r,t,i,n,s,a,o,c,b){_classCallCheck(this,e),this.fb=r,this.licenseService=t,this.serverService=i,this.authService=n,this.scrollHelper=s,this.router=a,this.route=o,this.title=c,this.snackBarService=b,this.isLoader=!0,this.itemsPerPage=5,this.currentPage=1,this.isSubmitting=!1,this.isSubmitted=!1,this.errors=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.forminit()}},{key:"forminit",value:function(){this.form=this.fb.group({credentialId:[""],serverId:["",[n.u.required]],userName:["",[n.u.required,n.u.maxLength(50)]],password:["",[n.u.required,n.u.maxLength(50)]]}),this.loadValues()}},{key:"loadValues",value:function(){var e=this;this.route.queryParams.subscribe((function(r){r.ServerId&&(e.form.setValue({credentialId:"",serverId:r.ServerId,userName:"",password:""}),e.getServerCredentials(r.ServerId),e.server=r)}))}},{key:"getServerCredentials",value:function(e){var r=this;this.serverService.getServerCredentials(this.currentPage,this.itemsPerPage,e).subscribe((function(e){r.isLoader=!1,r.credentials=e&&e.result?e.result:[],r.totalCount=e&&e.result2?e.result2:r.itemsPerPage}),(function(e){r.isLoader=!1,r.totalCount=0,r.itemsPerPage=20,r.credentials=[]}))}},{key:"licencePagination",value:function(e){this.isLoader=!0,this.currentPage=e;var r=this;window.scrollTo({top:0,behavior:"smooth"}),setTimeout((function(){r.isLoader=!1}),500)}},{key:"submit",value:function(e){var r=this;if(!this.form.valid)return console.log(this.form),void(this.isSubmitting=!0);this.isSubmitted=!0,this.isLoader=!0,this.serverService.saveUser(e).subscribe((function(e){r.isSubmitted=!1,r.isLoader=!1,r.resetForm(),r.getServerCredentials(r.server.ServerId),r.snackBarService.openSnackBar({type:"success",message:e&&e.message?e.message:"User added successfully."})}),(function(e){r.isSubmitted=!1,r.isLoader=!1,e&&e.error&&(r.errorMessage=e.error.message?e.error.message:JSON.stringify(e.error));var t=r;setTimeout((function(){t.errorMessage=void 0}),5e3)}))}},{key:"resetForm",value:function(){this.form.reset()}},{key:"ngOnDestroy",value:function(){}},{key:"resetErrors",value:function(){this.errorMessage=void 0,this.errors=[]}},{key:"update",value:function(e){this.form.get("userName").setValue(e.UName),this.form.get("credentialId").setValue(e.CredentialId)}},{key:"showPassword",value:function(e){return Object(oe.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,this.authService.decrypt(e);case 3:t=r.sent,this.form.get("password").setValue(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),r.t0&&r.t0.error&&(this.errorMessage=r.t0.error.message?r.t0.error.message:JSON.stringify(r.t0.error));case 10:case"end":return r.stop()}}),r,this,[[0,7]])})))}}]),e}(),Ze.\u0275fac=function(e){return new(e||Ze)(d.Ub(n.d),d.Ub(ce.c),d.Ub(v.a),d.Ub(be.a),d.Ub(u.a),d.Ub(l.f),d.Ub(l.a),d.Ub(f.c),d.Ub(m.a))},Ze.\u0275cmp=d.Ob({type:Ze,selectors:[["app-server-credentials"]],decls:43,vars:8,consts:[[1,"header","pb-8","pt-5","pt-lg-8","d-flex","align-items-center",2,"min-height","380px"],[1,"mask","bg-gradient-default","opacity-8"],[1,"container-fluid","d-flex","align-items-center"],[1,"row"],[1,"col-lg-12","col-md-12"],[1,"display-2","text-white","text-capitalize"],[1,"display-4","text-white"],[1,"container-fluid","mt--7"],[1,"col-xl-7","mb-4","mb-xl-0"],[1,"card"],[1,"card-header","bg-white"],[1,"row","align-items-center"],[1,"col-8"],[1,"mb-0"],[1,"card-body"],["autocomplete","off",1,"form-horizontal","form-material",2,"padding-left","20px",3,"formGroup","ngSubmit"],[1,"form-group","row","pt-2"],["for","userName",1,"col-md-2","fontweight"],[1,"col-md-4"],["type","hidden","id","credentialId","formControlName","credentialId"],["type","text","placeholder","Enter User Name","id","serverName","formControlName","userName",1,"input"],["class","invalid-feedback d-block",4,"ngIf"],["for","password",1,"col-md-2","fontweight"],["type","text","placeholder","Enter Password","id","password","formControlName","password",1,"input"],[1,"form-group","row"],[1,"col-sm-12"],["type","submit",1,"btn","btn-success",2,"width","70px","margin-right","15px",3,"disabled"],["class","postloader",4,"ngIf"],["routerLink","/server/server-list",1,"btn","btn-info"],[1,"row","col-xl-5"],["class","card shadow",4,"ngIf"],[1,"invalid-feedback","d-block"],[4,"ngIf"],[1,"postloader"],[1,"card","shadow"],[1,"card-header","border-0"],[1,"col"],[1,"table-responsive"],[1,"table","align-items-center","table-flush"],[1,"thead-light"],["scope","col"],[4,"ngFor","ngForOf"],["class","pagination",4,"ngIf"],[1,"text-info","mr-3",2,"margin-right","10px",3,"click"],[1,"fa","fa-edit"],[1,"fa","fa-eye"],[1,"pagination"],[3,"pageChange"]],template:function(e,r){1&e&&(d.Zb(0,"div",0),d.Vb(1,"span",1),d.Zb(2,"div",2),d.Zb(3,"div",3),d.Zb(4,"div",4),d.Zb(5,"h1",5),d.Fc(6),d.Yb(),d.Zb(7,"h2",6),d.Fc(8),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(9,"div",7),d.Zb(10,"div",3),d.Zb(11,"div",8),d.Zb(12,"div",9),d.Zb(13,"div",10),d.Zb(14,"div",11),d.Zb(15,"div",12),d.Zb(16,"h3",13),d.Fc(17,"Server Credentials"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(18,"div",14),d.Zb(19,"form",15),d.hc("ngSubmit",(function(e){return r.submit(r.form.value)})),d.Zb(20,"div",16),d.Zb(21,"label",17),d.Fc(22,"User Name"),d.Yb(),d.Zb(23,"div",18),d.Vb(24,"input",19),d.Vb(25,"input",20),d.Ec(26,ue,3,2,"div",21),d.Yb(),d.Yb(),d.Zb(27,"div",16),d.Zb(28,"label",22),d.Fc(29,"Password"),d.Yb(),d.Zb(30,"div",18),d.Vb(31,"input",23),d.Ec(32,fe,2,1,"div",21),d.Yb(),d.Yb(),d.Zb(33,"div",24),d.Zb(34,"div",25),d.Zb(35,"button",26),d.Fc(36," Save "),d.Ec(37,me,1,0,"div",27),d.Yb(),d.Zb(38,"a",28),d.Fc(39,"Back"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(40,"div",29),d.Ec(41,Ye,20,15,"div",30),d.Yb(),d.Yb(),d.Vb(42,"app-footer"),d.Yb()),2&e&&(d.Jb(6),d.Gc(null==r.server?null:r.server.CName),d.Jb(2),d.Gc(null==r.server?null:r.server.ServerName),d.Jb(11),d.qc("formGroup",r.form),d.Jb(7),d.qc("ngIf",r.form.controls.userName.invalid&&(r.isSubmitting||r.form.controls.userName.dirty||r.form.controls.userName.touched)),d.Jb(6),d.qc("ngIf",r.form.controls.password.invalid&&(r.isSubmitting||r.form.controls.password.dirty||r.form.controls.password.touched)),d.Jb(3),d.qc("disabled",r.isSubmitted),d.Jb(2),d.qc("ngIf",r.isLoader),d.Jb(4),d.qc("ngIf",r.credentials))},directives:[n.w,n.o,n.h,n.c,n.n,n.g,i.l,l.i,g.a,i.k,h.c],pipes:[h.b,p.a],styles:[".fontweight[_ngcontent-%COMP%]{font-weight:400;padding-top:7px}.input[_ngcontent-%COMP%]{border:2px solid grey;border-radius:5px;padding-left:5px;height:40px;width:100%}"]}),Ze)},{path:"update",component:ae},{path:"access-requests",component:P}]}],Ce=((ye=function e(){_classCallCheck(this,e)}).\u0275mod=d.Sb({type:ye}),ye.\u0275inj=d.Rb({factory:function(e){return new(e||ye)},imports:[[l.j.forChild(Se)],l.j]}),ye);t.d(r,"ServerModule",(function(){return qe}));var we,qe=((we=function e(){_classCallCheck(this,e)}).\u0275mod=d.Sb({type:we}),we.\u0275inj=d.Rb({factory:function(e){return new(e||we)},providers:[v.a],imports:[[i.b,a.a,Ce,n.j,n.s,s.c,c.c,o.b,b.b]]}),we)}}]);