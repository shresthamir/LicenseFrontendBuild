function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{DPn5:function(e,t,r){"use strict";var n=r("dNgK"),s=r("fXoL"),i=r("ofXK");function o(e,t){if(1&e&&(s.Zb(0,"div",3),s.Zb(1,"p",4),s.Fc(2),s.Yb(),s.Yb()),2&e){var r=s.lc();s.Jb(2),s.Gc(null==r.dialogData?null:r.dialogData.message)}}function a(e,t){if(1&e&&(s.Zb(0,"div",5),s.Zb(1,"p",6),s.Fc(2),s.Yb(),s.Yb()),2&e){var r=s.lc();s.Jb(2),s.Gc(null==r.dialogData?null:r.dialogData.message)}}function c(e,t){if(1&e&&(s.Zb(0,"div",7),s.Zb(1,"p",8),s.Fc(2),s.Yb(),s.Yb()),2&e){var r=s.lc();s.Jb(2),s.Gc(null==r.dialogData?null:r.dialogData.message)}}var l,b=((l=function(){function e(t){_classCallCheck(this,e),this.data=t,this.dialogData=t}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||l)(s.Ub(n.a))},l.\u0275cmp=s.Ob({type:l,selectors:[["app-snackbar"]],decls:3,vars:3,consts:[["class","toaster toaster-success",4,"ngIf"],["class","toaster toaster-danger",4,"ngIf"],["class","toaster toaster-warning",4,"ngIf"],[1,"toaster","toaster-success"],[1,"text-success","mb-0"],[1,"toaster","toaster-danger"],[1,"text-danger","mb-0"],[1,"toaster","toaster-warning"],[1,"text-warning","mb-0"]],template:function(e,t){1&e&&(s.Ec(0,o,3,1,"div",0),s.Ec(1,a,3,1,"div",1),s.Ec(2,c,3,1,"div",2)),2&e&&(s.qc("ngIf",t.dialogData&&t.dialogData.message&&"success"===t.dialogData.type),s.Jb(1),s.qc("ngIf",t.dialogData&&t.dialogData.message&&"danger"===t.dialogData.type),s.Jb(1),s.qc("ngIf",t.dialogData&&t.dialogData.message&&"warning"===t.dialogData.type))},directives:[i.l],styles:[".toaster[_ngcontent-%COMP%]{border-radius:8px;padding:14px 16px;min-height:48px}.toaster-success[_ngcontent-%COMP%]{border:2px solid #28a745}.toaster-warning[_ngcontent-%COMP%]{border:2px solid #ffc107}.toaster-danger[_ngcontent-%COMP%]{border:2px solid #dc3545}.toaster[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;font-weight:500}"]}),l);r.d(t,"a",(function(){return u}));var d,u=((d=function(){function e(t){_classCallCheck(this,e),this.snackBar=t}return _createClass(e,[{key:"openSnackBar",value:function(e){this.snackBar.openFromComponent(b,{data:e})}}]),e}()).\u0275fac=function(e){return new(e||d)(s.dc(n.c))},d.\u0275prov=s.Qb({token:d,factory:d.\u0275fac,providedIn:"root"}),d)},M0ap:function(e,t,r){"use strict";r.r(t);var n,s,i=r("ofXK"),o=r("3Pt+"),a=r("tyNb"),c=r("fXoL"),l=r("7dP1"),b=r("jhN1"),d=r("DPn5"),u=r("qFpe"),f=((n=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=c.Ob({type:n,selectors:[["app-header"]],decls:12,vars:0,consts:[[1,"header","bg-gradient-primary","py-5","py-lg-5"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-white"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"]],template:function(e,t){1&e&&(c.Zb(0,"div",0),c.Zb(1,"div",1),c.Zb(2,"div",2),c.Zb(3,"div",3),c.Zb(4,"div",4),c.Zb(5,"h1",5),c.Fc(6,"Welcome!"),c.Yb(),c.Zb(7,"p",6),c.Fc(8,"License Management System By IMS Software."),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Zb(9,"div",7),c.kc(),c.Zb(10,"svg",8),c.Vb(11,"polygon",9),c.Yb(),c.Yb(),c.Yb())},styles:[""]}),n),g=r("wd/R"),m=((s=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.year=g().format("YYYY")}}]),e}()).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=c.Ob({type:s,selectors:[["app-footer"]],decls:8,vars:1,consts:[[1,"py-5"],[1,"container"],[1,"row","align-items-center","justify-content-center"],[1,"col-xl-12"],[1,"copyright","text-center","text-muted"],["href","http://imssoftware.com.np","target","_blank",1,"font-weight-bold","text-white","ml-1"]],template:function(e,t){1&e&&(c.Zb(0,"footer",0),c.Zb(1,"div",1),c.Zb(2,"div",2),c.Zb(3,"div",3),c.Zb(4,"div",4),c.Fc(5),c.Zb(6,"a",5),c.Fc(7,"IMS Software Pvt. Ltd."),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb()),2&e&&(c.Jb(5),c.Hc(" \xa9 ",t.year," "))},styles:[""]}),s);function p(e,t){if(1&e&&(c.Zb(0,"div",21),c.Fc(1),c.Yb()),2&e){var r=c.lc();c.Jb(1),c.Gc(r.errorMessage)}}function h(e,t){1&e&&(c.Zb(0,"small"),c.Fc(1,"Username is required."),c.Yb())}function v(e,t){if(1&e&&(c.Zb(0,"div",22),c.Ec(1,h,2,0,"small",23),c.Yb()),2&e){var r=c.lc();c.Jb(1),c.qc("ngIf",r.form.controls.username.errors.required)}}function w(e,t){1&e&&(c.Zb(0,"small"),c.Fc(1,"Username is required."),c.Yb())}function y(e,t){if(1&e&&(c.Zb(0,"div",22),c.Ec(1,w,2,0,"small",23),c.Yb()),2&e){var r=c.lc();c.Jb(1),c.qc("ngIf",r.form.controls.username.errors.required)}}function Y(e,t){1&e&&(c.Zb(0,"small"),c.Fc(1,"Password is required."),c.Yb())}function Z(e,t){1&e&&(c.Zb(0,"small"),c.Fc(1,"Password must be at least 3 characters."),c.Yb())}function k(e,t){1&e&&(c.Zb(0,"small"),c.Fc(1,"Password must be less than 12 characters."),c.Yb())}function S(e,t){if(1&e&&(c.Zb(0,"div",22),c.Ec(1,Y,2,0,"small",23),c.Ec(2,Z,2,0,"small",23),c.Ec(3,k,2,0,"small",23),c.Yb()),2&e){var r=c.lc();c.Jb(1),c.qc("ngIf",r.form.controls.password.errors.required),c.Jb(1),c.qc("ngIf",r.form.controls.password.errors.minlength),c.Jb(1),c.qc("ngIf",r.form.controls.password.errors.maxlength)}}function I(e,t){1&e&&(c.Zb(0,"small"),c.Fc(1,"Password is required."),c.Yb())}function x(e,t){1&e&&(c.Zb(0,"small"),c.Fc(1,"Password must be at least 3 characters."),c.Yb())}function C(e,t){1&e&&(c.Zb(0,"small"),c.Fc(1,"Password must be less than 12 characters."),c.Yb())}function q(e,t){if(1&e&&(c.Zb(0,"div",22),c.Ec(1,I,2,0,"small",23),c.Ec(2,x,2,0,"small",23),c.Ec(3,C,2,0,"small",23),c.Yb()),2&e){var r=c.lc();c.Jb(1),c.qc("ngIf",r.form.controls.password.errors.required),c.Jb(1),c.qc("ngIf",r.form.controls.password.errors.minlength),c.Jb(1),c.qc("ngIf",r.form.controls.password.errors.maxlength)}}function _(e,t){1&e&&c.Vb(0,"div",24)}var J,E,F=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(J=function(){function e(t,r,n,s,i,o){_classCallCheck(this,e),this.router=t,this.fb=r,this.authService=n,this.title=s,this.snackBarService=i,this.scrollHelper=o,this.isSubmitting=!1,this.isLoader=!1,this.errors=[],this.isSubmitted=!1,this.title.setTitle("Login | License Management System")}return _createClass(e,[{key:"ngOnInit",value:function(){this.fbInit(),this.authService.loginReceived.subscribe(this.loginResponse.bind(this)),this.authService.loginError.subscribe(this.loginError.bind(this))}},{key:"ngAfterViewChecked",value:function(){this.scrollHelper.doScroll()}},{key:"fbInit",value:function(){this.form=this.fb.group({username:["",[o.u.required]],password:["",[o.u.required,o.u.minLength(3),o.u.maxLength(24)]]})}},{key:"submit",value:function(e){if(!this.form.valid)return this.isSubmitting=!0,void this.scrollHelper.scrollToFirst("invalid-feedback");this.isSubmitted||(this.isLoader=!0,this.isSubmitted=!0,this.resetErrors(),this.authService.login(e))}},{key:"loginResponse",value:function(e){var t=this;this.tokenData=e,this.authService.getProfile(e).subscribe((function(e){e?(t.isLoader=!1,t.profileData=e.result,t.authService.setUserData(t.tokenData,t.profileData),t.snackBarService.openSnackBar({type:"success",message:"Successfully Logged In !"}),t.router.navigate(["/dashboard"])):(t.isLoader=!1,t.errorMessage="Invalid username / password.",t.scrollHelper.scrollToFirst("alert-danger"))}),(function(e){t.loginError(e)}))}},{key:"loginError",value:function(e){if(this.isSubmitted=!1,this.isLoader=!1,this.isSubmitting=!1,e&&401===e.status){this.errorMessage=e.error.error_description?e.error.error_description:"Please contact admin to verify your account.",this.scrollHelper.scrollToFirst("alert-danger");var t=this;setTimeout((function(){t.errorMessage=void 0}),3e3)}else{this.errorMessage="Invalid username / password.",this.scrollHelper.scrollToFirst("alert-danger");var r=this;setTimeout((function(){r.errorMessage=void 0}),3e3)}}},{key:"resetErrors",value:function(){this.errorMessage=void 0,this.errors=[]}}]),e}(),J.\u0275fac=function(e){return new(e||J)(c.Ub(a.f),c.Ub(o.d),c.Ub(l.a),c.Ub(b.c),c.Ub(d.a),c.Ub(u.a))},J.\u0275cmp=c.Ob({type:J,selectors:[["app-login"]],decls:33,vars:8,consts:[[1,"container","mt--8","pb-5"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],[3,"formGroup","ngSubmit"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"form-group","mb-3"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-email-83"],["placeholder","username","type","text","formControlName","username",1,"form-control"],["class","invalid-feedback d-block",4,"ngIf"],[1,"form-group"],[1,"ni","ni-lock-circle-open"],["placeholder","**********","type","password","formControlName","password",1,"form-control"],[1,"text-center","d-flex","justify-content-center","align-items-center"],["type","submit",1,"btn","btn-primary","d-flex","justify-content-center","align-items-center","my-4",2,"width","120px",3,"disabled"],["class","preloader",4,"ngIf"],["role","alert",1,"alert","alert-danger"],[1,"invalid-feedback","d-block"],[4,"ngIf"],[1,"preloader"]],template:function(e,t){1&e&&(c.Vb(0,"app-header"),c.Zb(1,"div",0),c.Zb(2,"div",1),c.Zb(3,"div",2),c.Zb(4,"div",3),c.Zb(5,"div",4),c.Zb(6,"div",5),c.Zb(7,"small"),c.Fc(8,"Sign in with credentials"),c.Yb(),c.Yb(),c.Zb(9,"form",6),c.hc("ngSubmit",(function(e){return t.submit(t.form.value)})),c.Ec(10,p,2,1,"div",7),c.Zb(11,"div",8),c.Zb(12,"div",9),c.Zb(13,"div",10),c.Zb(14,"span",11),c.Vb(15,"i",12),c.Yb(),c.Yb(),c.Vb(16,"input",13),c.Yb(),c.Ec(17,v,2,1,"div",14),c.Ec(18,y,2,1,"div",14),c.Yb(),c.Zb(19,"div",15),c.Zb(20,"div",9),c.Zb(21,"div",10),c.Zb(22,"span",11),c.Vb(23,"i",16),c.Yb(),c.Yb(),c.Vb(24,"input",17),c.Yb(),c.Ec(25,S,4,3,"div",14),c.Ec(26,q,4,3,"div",14),c.Yb(),c.Zb(27,"div",18),c.Zb(28,"button",19),c.Zb(29,"span"),c.Fc(30,"Sign in"),c.Yb(),c.Ec(31,_,1,0,"div",20),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Vb(32,"app-footer")),2&e&&(c.Jb(9),c.qc("formGroup",t.form),c.Jb(1),c.qc("ngIf",t.errorMessage),c.Jb(7),c.qc("ngIf",!t.isSubmitting&&t.form.controls.username.invalid&&(t.form.controls.username.dirty||t.form.controls.username.touched)),c.Jb(1),c.qc("ngIf",t.isSubmitting&&t.form.controls.username.invalid),c.Jb(7),c.qc("ngIf",!t.isSubmitting&&t.form.controls.password.invalid&&(t.form.controls.password.dirty||t.form.controls.password.touched)),c.Jb(1),c.qc("ngIf",t.isSubmitting&&t.form.controls.password.invalid),c.Jb(2),c.qc("disabled",t.isSubmitted),c.Jb(3),c.qc("ngIf",t.isLoader))},directives:[f,o.w,o.o,o.h,i.l,o.c,o.n,o.g,m],styles:[""]}),J)}],D=((E=function e(){_classCallCheck(this,e)}).\u0275mod=c.Sb({type:E}),E.\u0275inj=c.Rb({factory:function(e){return new(e||E)},imports:[[a.j.forChild(F)],a.j]}),E);r.d(t,"SigninModule",(function(){return M}));var P,M=((P=function e(){_classCallCheck(this,e)}).\u0275mod=c.Sb({type:P}),P.\u0275inj=c.Rb({factory:function(e){return new(e||P)},imports:[[i.b,D,o.j,o.s]]}),P)}}]);