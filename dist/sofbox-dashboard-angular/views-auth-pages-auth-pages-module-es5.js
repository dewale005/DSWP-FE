function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-pages-auth-pages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/confirm-mail/confirm-mail.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/confirm-mail/confirm-mail.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsAuthPagesDefaultConfirmMailConfirmMailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sign-in-from\">\n  <img src=\"/assets/images/login/mail.png\" width=\"80\"  alt=\"\">\n  <h1 class=\"mt-3 mb-0\">Success !</h1>\n  <p>A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.</p>\n  <div class=\"d-inline-block w-100\">\n\n    <button type=\"submit\" class=\"btn btn-primary mt-3\">Back to Home</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/lock-screen/lock-screen.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/lock-screen/lock-screen.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsAuthPagesDefaultLockScreenLockScreenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sign-in-from\">\n  <img src=\"/assets/images/user/1.jpg\" alt=\"user-image\" class=\"rounded-circle\">\n  <h4 class=\"mt-3 mb-0\">Hi ! Michael Smith</h4>\n  <p>Enter your password to access the admin.</p>\n  <form class=\"mt-4\">\n\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Password</label>\n      <input type=\"password\" class=\"form-control mb-0\" id=\"exampleInputEmail1\"  placeholder=\"Password\">\n    </div>\n\n    <div class=\"d-inline-block w-100\">\n      <button type=\"submit\" class=\"btn btn-primary float-right\">Log In</button>\n    </div>\n\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/password-reset/password-reset.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/password-reset/password-reset.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsAuthPagesDefaultPasswordResetPasswordResetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sign-in-from\">\n  <h1 class=\"mb-0\">Reset Password</h1>\n  <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>\n  <form class=\"mt-4\">\n\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control mb-0\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n    </div>\n\n    <div class=\"d-inline-block w-100\">\n\n      <button type=\"submit\" class=\"btn btn-primary float-right\">Reset Password</button>\n    </div>\n\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/sign-in/sign-in.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/sign-in/sign-in.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsAuthPagesDefaultSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sign-in-from\">\n  <h1 class=\"mb-0\" >Sign in</h1>\n  <p>Enter your email address and password to access admin panel.</p>\n  <form class=\"mt-4\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"ngform\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\" style=\"font-weight: bolder;\">Email address</label>\n      <input type=\"email\" formControlName=\"email\" class=\"form-control mb-0\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\" style=\"font-weight: bolder;\">Password</label>\n      <!-- <a href=\"javascript:void(0);\" class=\"float-right\">Forgot password?</a> -->\n      <input type=\"password\" formControlName=\"password\" class=\"form-control mb-0\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n    </div>\n    <div class=\"d-inline-block w-100\">\n      <!-- <div class=\"custom-control custom-checkbox d-inline-block mt-2 pt-1\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">Remember Me</label>\n      </div> -->\n      <span class=\"dark-color d-inline-block line-height-2\">Don't have an account? <a routerLink='/auth/sign-up'>Sign up</a></span>\n      <button type=\"submit\" [disabled]=\"!ngform.valid\" class=\"btn btn-primary float-right\">Sign in</button>\n    </div>\n    <div class=\"sign-info\" style=\"margin-right: auto;\">\n      <!-- <ul class=\"iq-social-media\">\n        <li><a href=\"javascript:void(0);\"><i class=\"ri-facebook-box-line\"></i></a></li>\n        <li><a href=\"javascript:void(0);\"><i class=\"ri-twitter-line\"></i></a></li>\n        <li><a href=\"javascript:void(0);\"><i class=\"ri-instagram-line\"></i></a></li>\n      </ul> -->\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/sign-up/sign-up.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/sign-up/sign-up.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsAuthPagesDefaultSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sign-in-from\">\n  <h1 class=\"mb-0\">Sign Up</h1>\n  <p>Enter your email address and password to access admin panel.</p>\n  <form class=\"mt-4\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"ngform\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">First Name</label>\n      <input type=\"email\" formControlName=\"firstname\" class=\"form-control mb-0\" id=\"exampleInputEmail1\" placeholder=\"Your first name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Last Name</label>\n      <input type=\"email\" formControlName=\"lastname\" class=\"form-control mb-0\" id=\"exampleInputEmail1\" placeholder=\"Your last name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Phone Number</label>\n      <input type=\"email\" formControlName=\"phone\" class=\"form-control mb-0\" id=\"exampleInputEmail1\" placeholder=\"Your Phone Number\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail2\">Email address</label>\n      <input type=\"email\" formControlName=\"email\" class=\"form-control mb-0\" id=\"exampleInputEmail2\" placeholder=\"Enter email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail2\">Category</label>\n      <select class=\"form-control mb-0\" formControlName=\"category\" id=\"exampleInputEmail2\">\n        <option disabled>Category</option>\n        <option value=\"pharmacy\">Pharmacy</option>\n        <option value=\"doctors-office\">Doctor Office</option>\n        <option value=\"clinic\">Clinic</option>\n        <option value=\"hospital\">Hospital</option>\n        <option value=\"nursing-home\">Nursing Homes</option>\n        <!-- <option value=\"others\">Others</option> -->\n      </select>\n      <!-- <input type=\"email\" class=\"form-control mb-0\" id=\"exampleInputEmail2\" placeholder=\"Enter email\"> -->\n    </div>\n    <!-- <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control mb-0\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n    </div> -->\n    <div class=\"d-inline-block w-100\">\n      <!-- <div class=\"custom-control custom-checkbox d-inline-block mt-2 pt-1\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">I accept <a href=\"javascript:void(0);\">Terms and Conditions</a></label>\n      </div> -->\n      <span class=\"dark-color d-inline-block line-height-2\">Already Have Account ? <a routerLink=\"/auth/sign-in\">Log In</a></span>\n      <button *ngIf=\"!isProcessing\" type=\"submit\" class=\"btn btn-primary float-right\">{{!isProcessing ? 'Sign Up' : \"Registering....\"}}</button>\n        <div *ngIf=\"isProcessing\" class=\"spinner\">\n          <div class=\"bounce1\"></div>\n          <div class=\"bounce2\"></div>\n          <div class=\"bounce3\"></div>\n        </div>\n    </div>\n    <div class=\"sign-info\">\n      <ul class=\"iq-social-media\">\n        <li><a href=\"https://www.facebook.com/drugstoc\"><i class=\"ri-facebook-box-line\"></i></a></li>\n        <li><a href=\"https://twitter.com/DrugStocNg\"><i class=\"ri-twitter-line\"></i></a></li>\n        <li><a href=\"https://www.instagram.com/drugstoc\"><i class=\"ri-instagram-line\"></i></a></li>\n      </ul>\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/views/auth-pages/auth-pages-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/views/auth-pages/auth-pages-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AuthPagesRoutingModule */

  /***/
  function srcAppViewsAuthPagesAuthPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPagesRoutingModule", function () {
      return AuthPagesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _default_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./default/sign-in/sign-in.component */
    "./src/app/views/auth-pages/default/sign-in/sign-in.component.ts");
    /* harmony import */


    var _default_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./default/sign-up/sign-up.component */
    "./src/app/views/auth-pages/default/sign-up/sign-up.component.ts");
    /* harmony import */


    var _default_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./default/lock-screen/lock-screen.component */
    "./src/app/views/auth-pages/default/lock-screen/lock-screen.component.ts");
    /* harmony import */


    var _default_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./default/password-reset/password-reset.component */
    "./src/app/views/auth-pages/default/password-reset/password-reset.component.ts");
    /* harmony import */


    var _default_confirm_mail_confirm_mail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./default/confirm-mail/confirm-mail.component */
    "./src/app/views/auth-pages/default/confirm-mail/confirm-mail.component.ts");

    var routes = [{
      path: 'sign-up',
      component: _default_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    }, {
      path: 'sign-in',
      component: _default_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]
    }, {
      path: 'lock-screen',
      component: _default_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_5__["LockScreenComponent"]
    }, {
      path: 'password-reset',
      component: _default_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_6__["PasswordResetComponent"]
    }, {
      path: 'confirm-mail',
      component: _default_confirm_mail_confirm_mail_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmMailComponent"]
    }];

    var AuthPagesRoutingModule = function AuthPagesRoutingModule() {
      _classCallCheck(this, AuthPagesRoutingModule);
    };

    AuthPagesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthPagesRoutingModule);
    /***/
  },

  /***/
  "./src/app/views/auth-pages/auth-pages.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/auth-pages/auth-pages.module.ts ***!
    \*******************************************************/

  /*! exports provided: AuthPagesModule */

  /***/
  function srcAppViewsAuthPagesAuthPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPagesModule", function () {
      return AuthPagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _auth_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-pages-routing.module */
    "./src/app/views/auth-pages/auth-pages-routing.module.ts");
    /* harmony import */


    var _default_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./default/sign-in/sign-in.component */
    "./src/app/views/auth-pages/default/sign-in/sign-in.component.ts");
    /* harmony import */


    var _default_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./default/sign-up/sign-up.component */
    "./src/app/views/auth-pages/default/sign-up/sign-up.component.ts");
    /* harmony import */


    var _default_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./default/lock-screen/lock-screen.component */
    "./src/app/views/auth-pages/default/lock-screen/lock-screen.component.ts");
    /* harmony import */


    var _default_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./default/password-reset/password-reset.component */
    "./src/app/views/auth-pages/default/password-reset/password-reset.component.ts");
    /* harmony import */


    var _default_confirm_mail_confirm_mail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./default/confirm-mail/confirm-mail.component */
    "./src/app/views/auth-pages/default/confirm-mail/confirm-mail.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AuthPagesModule = function AuthPagesModule() {
      _classCallCheck(this, AuthPagesModule);
    };

    AuthPagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_default_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"], _default_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], _default_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_6__["LockScreenComponent"], _default_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetComponent"], _default_confirm_mail_confirm_mail_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmMailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _auth_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthPagesRoutingModule"]],
      exports: [_default_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"], _default_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], _default_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_6__["LockScreenComponent"], _default_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetComponent"], _default_confirm_mail_confirm_mail_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmMailComponent"]]
    })], AuthPagesModule);
    /***/
  },

  /***/
  "./src/app/views/auth-pages/default/confirm-mail/confirm-mail.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/views/auth-pages/default/confirm-mail/confirm-mail.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ConfirmMailComponent */

  /***/
  function srcAppViewsAuthPagesDefaultConfirmMailConfirmMailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmMailComponent", function () {
      return ConfirmMailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConfirmMailComponent = /*#__PURE__*/function () {
      function ConfirmMailComponent() {
        _classCallCheck(this, ConfirmMailComponent);
      }

      _createClass(ConfirmMailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfirmMailComponent;
    }();

    ConfirmMailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirm-mail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./confirm-mail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/confirm-mail/confirm-mail.component.html"))["default"]
    })], ConfirmMailComponent);
    /***/
  },

  /***/
  "./src/app/views/auth-pages/default/lock-screen/lock-screen.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/views/auth-pages/default/lock-screen/lock-screen.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: LockScreenComponent */

  /***/
  function srcAppViewsAuthPagesDefaultLockScreenLockScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LockScreenComponent", function () {
      return LockScreenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LockScreenComponent = /*#__PURE__*/function () {
      function LockScreenComponent() {
        _classCallCheck(this, LockScreenComponent);
      }

      _createClass(LockScreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LockScreenComponent;
    }();

    LockScreenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lock-screen',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./lock-screen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/lock-screen/lock-screen.component.html"))["default"]
    })], LockScreenComponent);
    /***/
  },

  /***/
  "./src/app/views/auth-pages/default/password-reset/password-reset.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/views/auth-pages/default/password-reset/password-reset.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: PasswordResetComponent */

  /***/
  function srcAppViewsAuthPagesDefaultPasswordResetPasswordResetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function () {
      return PasswordResetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PasswordResetComponent = /*#__PURE__*/function () {
      function PasswordResetComponent() {
        _classCallCheck(this, PasswordResetComponent);
      }

      _createClass(PasswordResetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PasswordResetComponent;
    }();

    PasswordResetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-password-reset',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./password-reset.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/password-reset/password-reset.component.html"))["default"]
    })], PasswordResetComponent);
    /***/
  },

  /***/
  "./src/app/views/auth-pages/default/sign-in/sign-in.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/views/auth-pages/default/sign-in/sign-in.component.ts ***!
    \***********************************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppViewsAuthPagesDefaultSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var SignInComponent = /*#__PURE__*/function () {
      function SignInComponent(fb, auth) {
        _classCallCheck(this, SignInComponent);

        this.fb = fb;
        this.auth = auth;
        this.isProcessing = false;
        this.ngform = this.fb.group({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.isProcessing = true;
          this.auth.login(this.ngform.value);
          this.isProcessing = false;
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    SignInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/sign-in/sign-in.component.html"))["default"]
    })], SignInComponent);
    /***/
  },

  /***/
  "./src/app/views/auth-pages/default/sign-up/sign-up.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/views/auth-pages/default/sign-up/sign-up.component.ts ***!
    \***********************************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppViewsAuthPagesDefaultSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(fb, router, auth) {
        _classCallCheck(this, SignUpComponent);

        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.isProcessing = false;
        this.ngform = this.fb.group({
          firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          if (this.ngform.valid) {
            this.isProcessing = true;
            this.auth.register(this.ngform.value).subscribe(function (resp) {
              console.log(resp);
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: 'success',
                title: resp['message'],
                showConfirmButton: true
              });
              _this.isProcessing = false;

              _this.router.navigate(['/']);
            }, function (err) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: 'error',
                title: err.error.message,
                showConfirmButton: true
              });
              _this.isProcessing = false;
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              icon: 'error',
              title: "Wrong Registeration details please check and start again",
              showConfirmButton: true
            });
            this.isProcessing = false;
          }
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/auth-pages/default/sign-up/sign-up.component.html"))["default"]
    })], SignUpComponent);
    /***/
  }
}]);
//# sourceMappingURL=views-auth-pages-auth-pages-module-es5.js.map