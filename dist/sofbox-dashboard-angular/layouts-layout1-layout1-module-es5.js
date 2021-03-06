function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-layout1-layout1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/layout1/index/index.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/layout1/index/index.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsLayout1IndexIndexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <!-- <app-loader></app-loader> -->-->\n\n<!-- Wrapper [START] -->\n<div class=\"wrapper\">\n  <app-side-bar1></app-side-bar1>\n  <app-nav-bar1 (cartValue)=\"getValue($event)\"></app-nav-bar1>\n  <!--Content [START]-->\n  <div id=\"content-page\" class=\"content-page\">\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <!-- Content [END] -->\n</div>\n<!-- Wrapper [END] -->\n\n\n";
    /***/
  },

  /***/
  "./src/app/layouts/layout1/index/index.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/layouts/layout1/index/index.component.ts ***!
    \**********************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppLayoutsLayout1IndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
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


    var _plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../plugins.service */
    "./src/app/plugins.service.ts");

    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent(plugins) {
        _classCallCheck(this, IndexComponent);

        this.plugins = plugins;
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Init all plugins...
          var current = this;
          setTimeout(function () {
            current.plugins.index();
            current.plugins.dashboardIndex();
          }, 200);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(c) {
          console.log(c);
        }
      }, {
        key: "getValue",
        value: function getValue($event) {
          console.log($event);
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.ctorParameters = function () {
      return [{
        type: _plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"]
      }];
    };

    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./index.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/layout1/index/index.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })], IndexComponent);
    /***/
  },

  /***/
  "./src/app/layouts/layout1/layout1-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layouts/layout1/layout1-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: Layout1RoutingModule */

  /***/
  function srcAppLayoutsLayout1Layout1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Layout1RoutingModule", function () {
      return Layout1RoutingModule;
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


    var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/layouts/layout1/index/index.component.ts");

    var routes = [{
      path: '',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | views-views-module */
          [__webpack_require__.e("default~layouts-auth-layout-auth-layout-module~views-views-module"), __webpack_require__.e("views-views-module")]).then(__webpack_require__.bind(null,
          /*! ../../views/views.module */
          "./src/app/views/views.module.ts")).then(function (m) {
            return m.ViewsModule;
          });
        }
      }, {
        path: 'email',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-application-email-email-module */
          "views-application-email-email-module").then(__webpack_require__.bind(null,
          /*! ../../views/application/email/email.module */
          "./src/app/views/application/email/email.module.ts")).then(function (m) {
            return m.EmailModule;
          });
        }
      }]
    }];

    var Layout1RoutingModule = function Layout1RoutingModule() {
      _classCallCheck(this, Layout1RoutingModule);
    };

    Layout1RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Layout1RoutingModule);
    /***/
  },

  /***/
  "./src/app/layouts/layout1/layout1.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/layouts/layout1/layout1.module.ts ***!
    \***************************************************/

  /*! exports provided: Layout1Module */

  /***/
  function srcAppLayoutsLayout1Layout1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Layout1Module", function () {
      return Layout1Module;
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


    var _layout1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout1-routing.module */
    "./src/app/layouts/layout1/layout1-routing.module.ts");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/layouts/layout1/index/index.component.ts");
    /* harmony import */


    var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/sofbox/sofbox.module */
    "./src/app/components/sofbox/sofbox.module.ts");

    var Layout1Module = function Layout1Module() {
      _classCallCheck(this, Layout1Module);
    };

    Layout1Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout1_routing_module__WEBPACK_IMPORTED_MODULE_3__["Layout1RoutingModule"], _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"]]
    })], Layout1Module);
    /***/
  }
}]);
//# sourceMappingURL=layouts-layout1-layout1-module-es5.js.map