(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"default~layouts-auth-layout-auth-layout-module~views-views-module",
		"layouts-auth-layout-auth-layout-module"
	],
	"./layouts/blank-layout/blank-layout.module": [
		"./src/app/layouts/blank-layout/blank-layout.module.ts",
		"layouts-blank-layout-blank-layout-module"
	],
	"./layouts/layout1/layout1.module": [
		"./src/app/layouts/layout1/layout1.module.ts",
		"layouts-layout1-layout1-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar-breadcrumb\">\n  <h5 class=\"mb-0\">{{ title }}</h5>\n  <nav aria-label=\"breadcrumb\">\n    <ul class=\"breadcrumb\">\n      <li *ngFor=\"let item of items\" class=\"breadcrumb-item {{ (item.isActive) ? 'active' : '' }}\">\n        <span *ngIf=\"item.isActive\">{{ item.label }}</span>\n        <a *ngIf=\"!item.isActive\" [href]=\"item.link\">{{ item.label }}</a>\n      </li>\n    </ul>\n  </nav>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/card-with-image/card-with-image.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/card-with-image/card-with-image.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"cardClass\">\n  <div [ngClass]=\"cardRowClass\">\n    <div class=\"col-md-4\">\n      <ng-content select=\"[card-image]\"></ng-content>\n    </div>\n    <div class=\"col-md-8\">\n      <div [ngClass]=\"cardBodyClass\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/cards/iq-card/iq-card.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/cards/iq-card/iq-card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"cardClass\">\n  <!-- card image or extra content here -->\n  <ng-content select=\"[card-top]\"></ng-content>\n  <!-- card header content here -->\n  <div [ngClass]=\"cardHeaderClass\" *ngIf=\"isCardHeader\">\n    <ng-content select=\"[card-header]\"></ng-content>\n  </div>\n  <!-- card body content here  -->\n  <div [ngClass]=\"cardBodyClass\" *ngIf=\"isCardBody\">\n    <ng-content></ng-content>\n  </div>\n  <!-- card footer content here  -->\n  <div [ngClass]=\"cardFooterClass\" *ngIf=\"isCardFooter\">\n    <ng-content select=\"[card-footer]\"></ng-content>\n  </div>\n  <!-- card extra content here  -->\n  <ng-content select=\"[card-bottom]\"></ng-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/apex-chart/apex-chart.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/apex-chart/apex-chart.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [id]=\"ids\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/high-chart/high-chart.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/high-chart/high-chart.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [id]=\"ids\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/full-calendar/full-calendar.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/full-calendar/full-calendar.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<full-calendar\n  defaultView=\"dayGridMonth\"\n  [plugins]=\"calendarPlugins\"\n  [events]=\"calendarEvents\"\n  [weekends]=\"calendarWeekends\"\n></full-calendar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/loaders/loader1/loader.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/loaders/loader1/loader.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Loader [START] -->\n<div id=\"loading\">\n  <div id=\"loading-center\">\n    <img src=\"../../../../../assets/images/drugstoc.png\" style=\"position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%); width: 10%;\" alt=\"logo\">\n    <div class=\"loader\">\n      <div class=\"spinner\">\n        <div class=\"bounce1\"></div>\n        <div class=\"bounce2\"></div>\n        <div class=\"bounce3\"></div>\n      </div>\n      <!-- <div class=\"cube\">\n        <div class=\"sides\">\n          <div class=\"top\"></div>\n          <div class=\"right\"></div>\n          <div class=\"bottom\"></div>\n          <div class=\"left\"></div>\n          <div class=\"front\"></div>\n          <div class=\"back\"></div>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</div>\n<!-- Loader [END] -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/menus/list-style1/list-style1.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/menus/list-style1/list-style1.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul [class]=\"listClass\">\n  <li *ngFor=\"let listItem of listItems\" [class]=\"(listItem.isHeading ? 'iq-menu-title' : activeLink(listItem) && listItem.children ? 'active' : activeLink(listItem) ? 'active' : '')\">\n\n    <!-- Heading Menu Items -->\n    <i *ngIf=listItem.isHeading [class]=\"listItem.icon\"></i>\n    <span *ngIf=listItem.isHeading>{{ listItem.title }}</span>\n\n    <!-- Menu Items -->\n    <a href=\"javascript:void(0)\" *ngIf=!listItem.isHeading&&listItem.children  [class]=\"'iq-waves-effect '+ activeLink(listItem) && listItem.children ? 'active' : activeLink(listItem) ? 'active' : ''\"\n       data-toggle=\"collapse\" [attr.data-target]=\"'#'+listItem.name\" aria-expanded=\"false\"\n       [attr.aria-controls]=\"listItem.name\"\n    >\n      <i *ngIf=listItem.isIconClass [class]=\"listItem.icon\"></i><span>{{ listItem.title }}</span>\n      <i *ngIf=\"listItem.children\" class=\"ri-arrow-right-s-line iq-arrow-right\"></i>\n    </a>\n\n    <a href=\"javascript:void(0)\" *ngIf=!listItem.isHeading&&!listItem.children\n        class=\"iq-waves-effect\" [routerLink]=\"listItem.link != '' ? [listItem.link] : []\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{exact: true}\"\n    >\n      <i *ngIf=listItem.isIconClass [class]=\"listItem.icon\"></i><span>{{ listItem.title }}</span>\n      <small *ngIf=\"listItem.append\" class=\"badge badge-pill badge-primary float-right font-weight-normal ml-auto\">{{ listItem.append }}</small>\n      <i *ngIf=\"listItem.children\" class=\"ri-arrow-right-s-line iq-arrow-right\"></i>\n    </a>\n    <!-- Child Menu Items -->\n    <app-list-style1 *ngIf=\"listItem.children\" listClass=\"iq-submenu\" [class]=\"'collapse '+(activeLink(listItem) && listItem.children ? 'show' : activeLink(listItem) ? 'show' : '')\" [listItems]=\"listItem.children\" [id]=\"listItem.name\" data-parent=\"#iq-sidebar-toggle\"></app-list-style1>\n\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- TOP Nav Bar [START] -->\n<div class=\"iq-top-navbar\">\n  <div class=\"iq-navbar-custom\">\n    <div class=\"iq-sidebar-logo\">\n      <div class=\"top-logo\">\n        <a href=\"index.html\" class=\"logo\">\n          <img src=\"/assets/images/drugstoc.png\" class=\"img-fluid\" alt=\"\">\n        </a>\n      </div>\n    </div>\n    <nav *ngIf=\"userData\" class=\"navbar navbar-expand-lg navbar-light p-0\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"ri-menu-3-line\"></i>\n      </button>\n      <div class=\"iq-menu-bt align-self-center\">\n        <div class=\"wrapper-menu\">\n          <div class=\"line-menu half start\"></div>\n          <div class=\"line-menu\"></div>\n          <div class=\"line-menu half end\"></div>\n        </div>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav ml-auto navbar-list\">\n          <li class=\"nav-item\">\n            <div class=\"ng-autocomplete\">\n              <ng-autocomplete \n                [data]=\"searchList\"\n                [searchKeyword]=\"keyword\"\n                placeHolder=\"Search for products\"\n                (keyup.enter)=\"search($event)\"\n                (selected)='selectEvent($event)'\n                (inputChanged)='onChangeSearch($event)'\n                (inputFocused)='onFocused($event)'\n                historyIdentifier=\"History\"\n                [itemTemplate]=\"itemTemplate\"\n                [notFoundTemplate]=\"notFoundTemplate\">                                 \n              </ng-autocomplete>\n               \n              <ng-template #itemTemplate let-item>\n              <a [innerHTML]=\"item.name\"></a>\n              </ng-template>\n               \n              <ng-template #notFoundTemplate let-notFound>\n              <!-- <div [innerHTML]=\"notFound\"></div> -->\n              <div class=\"spinner\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n              </div>\n              </ng-template>\n              </div>\n          </li>\n\n          <li class=\"nav-item\">\n            <a routerLink=\"/cart\" class=\"iq-waves-effect\">\n              <i class=\"ri-shopping-cart-2-line\"></i>\n              <span *ngIf=\"countTicket !== 0\" class=\"menu-tag\">{{countTicket}}</span>\n            </a>\n          </li>\n\n        </ul>\n      </div>\n      <ul *ngIf=\"userData\" class=\"navbar-list\">\n        <li>\n          <a href=\"javascript:void(0);\" class=\"search-toggle iq-waves-effect bg-primary text-white\"><img src=\"{{photo}}\" class=\"img-fluid rounded\" ></a>\n          <div class=\"iq-sub-dropdown iq-user-dropdown\">\n            <div class=\"iq-card shadow-none m-0\">\n              <div class=\"iq-card-body p-0 \">\n                <div class=\"bg-primary p-3\">\n                  <h5 class=\"mb-0 text-white line-height\">Hello {{userName}}</h5>\n                  <!-- <span class=\"text-white font-size-12\">Available</span> -->\n                </div>\n                <a routerLink=\"/update-profile\" class=\"iq-sub-card iq-bg-primary-success-hover\">\n                  <div class=\"media align-items-center\">\n                    <div class=\"rounded iq-card-icon iq-bg-success\">\n                      <i class=\"ri-profile-line\"></i>\n                    </div>\n                    <div class=\"media-body ml-3\">\n                      <h6 class=\"mb-0 \">Edit Profile</h6>\n                      <p class=\"mb-0 font-size-12\">Modify your personal details.</p>\n                    </div>\n                  </div>\n                </a>\n                <div class=\"d-inline-block w-100 text-center p-3\">\n                  <a class=\"iq-bg-danger iq-sign-btn\" href=\"javascript:void(0);\" (click)=\"logout()\" role=\"button\">Sign out<i class=\"ri-login-box-line ml-2\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </nav>\n    <nav *ngIf=\"!userData\" class=\"navbar navbar-expand-lg navbar-light p-0\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"ri-menu-3-line\"></i>\n      </button>\n      <div class=\"iq-menu-bt align-self-center\">\n        <div class=\"wrapper-menu\">\n          <div class=\"line-menu half start\"></div>\n          <div class=\"line-menu\"></div>\n          <div class=\"line-menu half end\"></div>\n        </div>\n      </div>\n      <div style=\"background-color: #FFD6D6; height: 100%;\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <p style=\"color: #ff3b3b; height: 100%; text-align: center; font-weight: bold; margin-top: 30px; margin-left: auto; margin-right: auto;\">Are you a licensed Medical Practitioner? <span><a style=\"color: #ff3b3b; text-decoration: underline;\" routerLink=\"/auth/sign-up\">Sign Up</a></span> to get activated. Have an account? <span><a style=\"color: #ff3b3b; text-decoration: underline;\" routerLink=\"/auth/sign-in\">Sign In</a></span> To Continue</p>\n      </div>\n    </nav>\n  </div>\n</div>\n<!-- TOP Nav Bar [END] -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/scroll-top/scroll-top.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/scroll-top/scroll-top.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- back-to-top -->\n<div id=\"back-to-top\" style=\"display: none;\">\n  <a class=\"top\" id=\"top\" href=\"javascript:void(0)\" (click)=\"scrollTop()\"> <i class=\"ion-ios-upload-outline\"></i> </a>\n</div>\n<!-- back-to-top End -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidebar [START] -->\n<div class=\"iq-sidebar\">\n  <div class=\"iq-sidebar-logo d-flex justify-content-between\">\n    <a routerLink=\"/\">\n      <img src=\"assets/images/drugstoc.png\" class=\"img-fluid\" alt=\"\">\n    </a>\n    <div class=\"iq-menu-bt align-self-center\">\n      <div class=\"wrapper-menu\">\n        <div class=\"line-menu half start\"></div>\n        <div class=\"line-menu\"></div>\n        <div class=\"line-menu half end\"></div>\n      </div>\n    </div>\n  </div>\n  <ng-scrollbar>\n    <nav class=\"iq-sidebar-menu\">\n      <app-list-style1 [listItems]=\"menuItems\" [collapseOpen]=\"true\" id=\"iq-sidebar-toggle\"></app-list-style1>\n    </nav>\n    <div class=\"p-3\"></div>\n  </ng-scrollbar>\n</div>\n<!-- Sidebar [END] -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-content/tab-content.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-content/tab-content.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-pane fade\" [id]=\"tabContentLink\" role=\"tabpanel\">\n   <ng-content select=\"[tab-content]\"></ng-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul [classList]=\"tabClass\">\n  <li *ngFor=\"let tabNavItem of tabNavItems; let index = index\">\n    <a [href]=\"tabNavItem.link\"\n       [ngClass]=\"(tabNavItem.isActive ? 'nav-link active' : 'nav-link' )\"\n       role=\"tab\" data-toggle=\"pill\"\n       [attr.active]=\"tabNavItem.isActive\">\n      <i *ngIf=\"tabNavItem.icon\" [classList]=\"tabNavItem.icon\"></i>{{ tabNavItem.label }}\n      <span [innerHTML]=\"tabNavItem.append\"></span>\n    </a>\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/cart/cart.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/cart/cart.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"iq-card\">\n          <div class=\"iq-card-body\">\n            <ul id=\"progressbar\" class=\"text-center\">\n              <li class=\"active step0\" id=\"step1\">Cart</li>\n              <li class=\"step0\" id=\"step2\">Address</li>\n              <li class=\"step0\" id=\"step3\">Payment</li>\n            </ul>\n            <div id=\"cart\" class=\"card-block show b-0\">\n              <div class=\"row\">\n                <div class=\"col-lg-8\">\n                  <div *ngFor=\"let item of cartData; let i=index;\" class=\"iq-card\">\n                    <div class=\"iq-card-body\">\n                      <div class=\"ckeckout-product-lists\">\n                        <div class=\"d-flex align-items-center justify-content-between\">\n                          <div class=\"d-flex align-items-center\">\n                            <div class=\"ckeckout-product\">\n                              <img *ngIf=\"item.image === false\"  src=\"https://dummyimage.com/180x180/000/fff\">\n                              <img *ngIf=\"item.image != false\"  src=\"data:image/jpg;base64,{{ item.image }}\" style=\"width: 250px;\">\n                            </div>\n                            <div class=\"ml-3 checkout-product-details\">\n                              <h5>{{ item.name }}</h5>\n                              <p class=\"text-success\">In stock</p>\n                              <p class=\"mb-0\"><b>Quantity</b></p>\n                              <div class=\"input-box\">\n                                <button (click)=\"decreaseQty(item)\" type=\"button\" class=\"btn-less\"><i class=\"ri-subtract-fill\"></i></button>\n                                <input disabled type=\"number\" min=\"1\" max=\"10\" value=\"{{item.quantity}}\" class=\"increment\">\n                                <button (click)=\"increaseQty(item)\" type=\"button\" class=\"btn-plus\"><i class=\"ri-add-fill\"></i></button>\n                              </div>\n\n                              <!-- <p class=\"mb-0 mt-2\">Delivery by, Thu Jan 30 </p> -->\n                              <!-- <p class=\"text-success\">9% off 3 offers Available</p> -->\n                            </div>\n                          </div>\n                          <div class=\"checkout-amount-data text-center\">\n                            <div class=\"price\">\n                              <h5>₦{{ item.list_price * item.quantity | number : '1.2-2'}}</h5>\n                              <!-- <p class=\"shopping-info\"><i class=\"ri-shopping-cart-2-line mr-2\"></i>Free Shipping</p> -->\n                            </div>\n                            <div class=\"checkout-button\">\n                              <a (click)=\"removeItem(i)\" type=\"submit\" class=\"btn btn-light d-block\"><i class=\"ri-close-line mr-1\"></i>Remove</a>\n                              <!-- <a href=\"#\" type=\"submit\" class=\"btn btn-primary d-block mt-2\"><i class=\"ri-heart-line mr-1\"></i>Wishlist</a> -->\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"iq-card\">\n                    <div class=\"iq-card-body\">\n                      <p>Options</p>\n                      <!-- <div class=\"d-flex justify-content-between\">\n                        <span>Coupons</span>\n                        <span><a href=\"#\"><strong>Apply</strong></a></span>\n                      </div> -->\n                      <hr>\n                      <p><b>Price Details</b></p>\n                      <!-- <div class=\"d-flex justify-content-between\">\n                        <span>Total MRP</span>\n                        <span>{{getTotal()}}</span>\n                      </div> -->\n                      <!-- <div class=\"d-flex justify-content-between\">\n                        <span>Bag Discount</span>\n                        <span class=\"text-success\">-15$</span>\n                      </div> -->\n                      <!-- <div class=\"d-flex justify-content-between\">\n                        <span>Estimated Tax</span>\n                        <span>$10</span>\n                      </div> -->\n                      <!-- <div class=\"d-flex justify-content-between\">\n                        <span>EMI Eligibility</span>\n                        <span><a href=\"#\">Details</a></span>\n                      </div> -->\n                      <div class=\"d-flex justify-content-between\">\n                        <span>Delivery Charges</span>\n                        <span class=\"text-success\">Free</span>\n                      </div>\n                      <hr>\n                      <div class=\"d-flex justify-content-between\">\n                        <span class=\"text-dark\"><strong>Total</strong></span>\n                        <span class=\"text-dark\"><strong>₦{{getTotal() | number : '1.2-2'}}</strong></span>\n                      </div>\n                      <a id=\"place-order\" href=\"javascript:void();\" type=\"button\" (click)=\"placeOrder()\" class=\"btn btn-primary d-block mt-1 next\">Place order</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"address\" class=\"card-block b-0\">\n              <div class=\"row\">\n                <div class=\"col-lg-8\">\n                  <div class=\"iq-card\">\n                    <div class=\"iq-card-header d-flex justify-content-between\">\n                      <div class=\"iq-header-title\">\n                        <h4 class=\"card-title\">Add New Address</h4>\n                      </div>\n                    </div>\n                    <div class=\"iq-card-body\">\n                      <form onsubmit=\"required()\">\n                        <div class=\"row mt-3\">\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"fname\">Full Name: *</label>\n                              <input type=\"text\" class=\"form-control\" name=\"fname\" required=\"\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"mno\">Mobile Number: *</label>\n                              <input type=\"text\" class=\"form-control\" name=\"mno\" required=\"\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"houseno\">Flat, House No: *</label>\n                              <input type=\"text\" class=\"form-control\" name=\"houseno\" required=\"\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"landmark\">Landmark e.g. near apollo hospital:: *</label>\n                              <input type=\"text\" class=\"form-control\" name=\"landmark\" required=\"\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"city\">Town/City: *</label>\n                              <input type=\"text\" class=\"form-control\" name=\"city\" required=\"\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"pincode\">Pincode: *</label>\n                              <input type=\"text\" class=\"form-control\" name=\"pincode\" required=\"\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"state\">State: *</label>\n                              <input type=\"text\" class=\"form-control\" name=\"state\" required=\"\">\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label for=\"addtype\">Address Type</label>\n                              <select class=\"form-control\" id=\"addtype\" required=\"\">\n                                <option>Home</option>\n                                <option>Office</option>\n                              </select>\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <button id=\"savenddeliver\" type=\"submit\" class=\"btn btn-primary\">Save And Deliver Here</button>\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"iq-card\">\n                    <div class=\"iq-card-body\">\n                      <h4 class=\"mb-2\">{{dispatch.name}}</h4>\n                      <div class=\"shipping-address\">\n                        <p class=\"mb-0\">{{dispatch.address}}</p>\n                        <!-- <p>Lewis Center, OH 43035</p> -->\n                        <!-- <p>{{dispatch.address}}</p> -->\n                        <p *ngIf=\"dispatch.phone\">{{dispatch.phone}}</p>\n                      </div>\n                      <hr>\n                      <a id=\"deliver-address\" href=\"javascript:void();\" type=\"button\" (click)=\"deliverAddress()\" class=\"btn btn-primary d-block mt-1 next\">Deliver To this Address</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"payment\" class=\"card-block b-0\">\n              <div class=\"row\">\n                <div class=\"col-lg-8\">\n                  <div class=\"iq-card\">\n                    <div class=\"iq-card-header d-flex justify-content-between\">\n                      <div class=\"iq-header-title\">\n                        <h4 class=\"card-title\">Payment Options</h4>\n                      </div>\n                    </div>\n                    <button angular-rave\n                    [customer]=\"{ email: 'user@example.com', phonenumber: '0809808800900' }\"\n                    [amount]=[Total]\n                    [tx_ref]=\"'USR1295950'\"\n                    (callback)=\"paymentSuccess($event)\"\n                    (close)=\"paymentFailure()\"\n                    (init)=\"paymentInit()\" type=\"submit\" class=\"btn btn-primary\">Pay Now\n                    </button>\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"make_order()\">Pay Later</button>\n                    <!-- <div class=\"iq-card-body\">\n                      <div class=\"d-flex justify-content-between align-items-center\">\n                        <div class=\"d-flex justify-content-between align-items-center\">\n                          <img src=\"assets/images/booking/cart.png\" alt=\"cart\" height=\"40\" width=\"50\">\n                          <span>US Unlocked Debit Card 12XX XXXX XXXX 0000</span>\n                        </div>\n                        <span>Nik John</span>\n                        <span>28/2020</span>\n                      </div>\n                      <form class=\"mt-3\">\n                        <div class=\"d-flex align-items-center\">\n                          <span>Enter CVV: </span>\n                          <div class=\"cvv-input ml-3 mr-3\">\n                            <input type=\"text\" class=\"form-control\" required=\"\">\n                          </div>\n                          <button type=\"submit\" class=\"btn btn-primary\">Continue</button>\n                        </div>\n                      </form>\n                      <hr>\n                      <div class=\"card-lists\">\n                        <div class=\"form-group\">\n                          <div class=\"custom-control custom-radio\">\n                            <input type=\"radio\" id=\"credit\" name=\"customRadio\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"credit\"> Credit / Debit / ATM Card</label>\n                          </div>\n                          <div class=\"custom-control custom-radio\">\n                            <input type=\"radio\" id=\"netbaking\" name=\"customRadio\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"netbaking\"> Net Banking</label>\n                          </div>\n                          <div class=\"custom-control custom-radio\">\n                            <input type=\"radio\" id=\"emi\" name=\"emi\" class=\"custom-control-input\">\n                            <label class=\"custom-control-label\" for=\"emi\"> EMI (Easy Installment)</label>\n                          </div>\n                          <div class=\"custom-control custom-radio\">\n                            <input type=\"radio\" id=\"cod\" name=\"cod\" class=\"custom-control-input\" >\n                            <label class=\"custom-control-label\" for=\"cod\"> Cash On Delivery</label>\n                          </div>\n                        </div>\n                      </div>\n                      <hr>\n                      <div class=\"add-card\">\n                        <a href=\"#\"><span><i class=\"ri-add-box-line mr-2 font-size-18\"></i>Add Gift Card</span></a>\n                      </div>\n                    </div> -->\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"iq-card\">\n                    <div class=\"iq-card-body\">\n                      <h4 class=\"mb-2\">Price Details</h4>\n                      <div class=\"d-flex justify-content-between\">\n                        <!-- <span>Price 3 Items</span> -->\n                        <!-- <span><strong>₦{{getTotal() | number : '1.2-2'}}</strong></span> -->\n                      </div>\n                      <div class=\"d-flex justify-content-between\">\n                        <span>Delivery Charges</span>\n                        <span class=\"text-success\">Free</span>\n                      </div>\n                      <hr>\n                      <div class=\"d-flex justify-content-between\">\n                        <span>Amount Payable</span>\n                        <span><strong>₦{{getTotal() | number : '1.2-2'}}</strong></span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/home/home.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/home/home.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row row-eq-height\">\n  <div *ngIf=\"userId\" class=\"col-lg-3 col-md-12\">\n    <app-iq-card cardClass=\"iq-card iq-profile-card text-center\" [isCardHeader]=false>\n      <div style=\"min-height: 329px\" class=\"iq-team text-center p-0\">\n        <img *ngIf=\"!userId\" src=\"assets/images/no_logo.png\" style=\"filter: grayscale(100%);\"\n          class=\"img-fluid mb-3 avatar-120 rounded-circle\" alt=\"\">\n        <a routerLink=\"/update-profile\"><img *ngIf=\"userId\" src=\"{{image}}\"\n            class=\"img-fluid mb-3 avatar-120 rounded-circle\" alt=\"\"></a>\n        <h4 *ngIf=\"!userId\" class=\"mb-0\">Welcome</h4>\n        <h4 *ngIf=\"userId\" class=\"mb-0\">{{user.name}}</h4>\n        <a *ngIf=\"userId && user.phone\" href=\"javascript:void(0);\" class=\"d-inline-block w-100\">{{user.phone}}</a>\n        <p *ngIf=\"!userId\" class=\"mt-1\">To Drugstoc your No 1</p>\n        <p *ngIf=\"!userId\" class=\"mt-1\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n          remaining essentially unchanged.</p>\n        <p *ngIf=\"userId\" class=\"mt-1\">{{user.address}}</p>\n        <hr>\n        <ul class=\"list-inline mb-0 d-flex justify-content-between\">\n          <li class=\"list-inline-item\">\n            <!-- <h5>Blood</h5>\n                  <p class=\"text-success\">AB+</p> -->\n          </li>\n          <li class=\"list-inline-item\">\n            <h5 *ngIf=\"!userId\">Virtual Pharmacy</h5>\n            <h5 *ngIf=\"userId\">Licensed Pharmacy</h5>\n            <!-- <p class=\"text-success\">161cm</p> -->\n          </li>\n          <li class=\"list-inline-item\">\n            <!-- <h5>Weight</h5>\n                  <p class=\"text-success\">64kg</p> -->\n          </li>\n        </ul>\n      </div>\n    </app-iq-card>\n  </div>\n  <div [ngClass]=\"{'col-lg-9': userId, 'col-lg-12': !userId }\" class=\"col-md-12\">\n    <app-iq-card style=\"background-color: #4b70d6;\" cardClass=\"iq-card bg-primary sb-top-banner-card\"\n      cardBodyClass=\"iq-card-body\" [isCardHeader]=false>\n      <div class=\"row\" style=\"min-height: 329px\">\n        <div class=\"col-md-7 align-self-center padded\">\n          <h2 *ngIf=\"!userId\" class=\"text-white padded\">Welcome to Drugstoc, Nigeria's<br> largest Pharmacy Partner</h2>\n          <h2 *ngIf=\"userId\" class=\"text-white padded\">{{user.name}}</h2>\n          <p class=\"text-white padded\" style=\"font-weight: 600;\">Source all medications, consumables, and small medical\n            devices you need for your patients or <br>practice in one place.</p>\n          <!-- <p *ngIf=\"userId\" class=\"text-white\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. remaining essentially unchanged.</p> -->\n          <!-- <button type=\"button\" class=\"btn iq-bg-primary\">Read More</button> -->\n        </div>\n        <div class=\"col-md-5 position-relative\">\n          <div>\n            <img src=\"../../../assets/images/homepage.png\" style=\"width: 100%\" alt=\"Welcome\">\n          </div>\n          <!-- <div class=\"an-img-two\"> -->\n          <!-- <div class=\"bodymovin\"> -->\n          <!-- <ng-lottie [options]=\"optionsData2\"></ng-lottie> -->\n          <!-- </div> -->\n          <!-- </div> -->\n        </div>\n      </div>\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div *ngIf=\"userId\" class=\"col-md-12\">\n    <app-iq-card cardClass=\"iq-card wow fadeInUp\" data-wow-delay=\"0.6s\">\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Category Summary</h4>\n      </div>\n      <div card-header class=\"iq-card-header-toolbar d-flex align-items-center\">\n        <div class=\"dropdown\">\n          <a routerLink=\"/my-drugstoc\" class=\"dropdown-toggle text-primary\" data-toggle=\"dropdown\">View All\n          </a>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!loadCatergory\">\n        <div *ngFor=\"let sale of sumaryItem; let i=index;\" class=\"col-md-4\">\n          <app-iq-card cardClass=\"iq-card shadow-none mb-0\" cardBodyClass=\"q-card-body p-1\" [isCardHeader]=false>\n            <span class=\"text-dark float-right\"><i class=\"ri-arrow-up-fill mr-1\"></i></span>\n            <span class=\"font-size-14\">{{sale.category}}</span>\n            <h2>{{sale.number}}</h2>\n            <div class=\"iq-progress-bar-linear d-inline-block w-100 mt-3\">\n              <div class=\"iq-progress-bar\">\n                <span class=\"bg-primary\" data-percent={{sale.percentage}}\n                  style=\"transition: width 2s ease 0s; width: {{sale.percentage}}%\"></span>\n                <!-- <progressbar class=\"iq-progress-bar\" [value]=\"{{sale.percentage}}\" type=\"primary\" ></progressbar> -->\n              </div>\n            </div>\n          </app-iq-card>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"loadCatergory\">\n        <div *ngFor=\"let sale of sumLoading; let i=index;\" class=\"col-md-4\">\n          <app-iq-card cardClass=\"iq-card shadow-none mb-0\" cardBodyClass=\"q-card-body p-1\" [isCardHeader]=false>\n            <span class=\"text-dark float-right\"><i class=\"ri-arrow-up-fill mr-1\"></i></span>\n            <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                      width: '70%',\n                      'border-radius': '12px',\n                      height: '15px',\n                      'margin-bottom': '-5px',\n                      'margin-right': '20px'\n                    }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n            <p style=\"margin-bottom: 0;\">\n              <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                        width: '30%',\n                        'border-radius': '6px',\n                        height: '30px',\n                        'margin-bottom': '-2px',\n                        'margin-right': '20px'\n                      }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n            </p>\n            <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                      width: '100%',\n                      'border-radius': '12px',\n                      height: '10px',\n                      'margin-bottom': '-5px',\n                      'margin-right': '20px'\n                    }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n          </app-iq-card>\n        </div>\n      </div>\n\n    </app-iq-card>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"iq-card\">\n          <app-iq-card>\n            <div card-header class=\"iq-header-title\">\n              <h4 class=\"card-title\">Recommended For you</h4>\n            </div>\n            <div card-header class=\"iq-card-header-toolbar d-flex align-items-center\">\n              <!-- <div class=\"dropdown\">\n                            <span class=\"dropdown-toggle\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\">\n                              <i class=\"ri-more-2-fill\"></i>\n                            </span>\n                            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                              <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-eye-fill mr-2\"></i>View</a>\n                              <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-delete-bin-6-fill mr-2\"></i>Delete</a>\n                              <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-pencil-fill mr-2\"></i>Edit</a>\n                              <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-printer-fill mr-2\"></i>Print</a>\n                              <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-file-download-fill mr-2\"></i>Download</a>\n                            </div>\n                          </div> -->\n            </div>\n            <div *ngIf=\"loadingItem\" class=\"iq-card-body\">\n              <div id=\"js-product-list\">\n                <div class=\"Products\">\n                  <ul class=\"product_list gridcount grid row\">\n                    <li *ngFor=\"let item of data\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                      <div class=\"product-miniature\" style=\"width: 100%;\">\n                        <div class=\"thumbnail-container\">\n                          <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                        width: '100%',\n                                        'border-radius': '12px',\n                                        height: '200px',\n                                        'margin-bottom': '-5px',\n                                        'margin-right': '20px'\n                                      }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                          <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                        width: '70%',\n                                        'border-radius': '12px',\n                                        height: '20px',\n                                        'margin-bottom': '-5px',\n                                        'margin-right': '20px'\n                                      }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                          <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                        width: '95%',\n                                        'border-radius': '12px',\n                                        height: '15px',\n                                        'margin-bottom': '-5px',\n                                        'margin-right': '20px'\n                                      }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                          <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                        width: '40%',\n                                        'border-radius': '12px',\n                                        height: '15px',\n                                        'margin-bottom': '-5px',\n                                        'margin-right': '20px'\n                                      }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                        </div>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"!loadingItem\" class=\"iq-card-body\">\n              <div id=\"js-product-list\">\n                <div class=\"Products\">\n                  <ul class=\"product_list gridcount grid row\">\n                    <li *ngFor=\"let item of data\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                      <div class=\"product-miniature\">\n                        <div class=\"thumbnail-container\">\n                          <div class=\"box\">\n                            <a *ngIf=\"!item.image\" routerLink=\"/products/itemdetail/{{item.id}}\"><img\n                                src=\"../../../assets/images/no_image.png\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                            <a *ngIf=\"item.image\" routerLink=\"/products/itemdetail/{{item.id}}\"><img\n                                src=\"data:image/jpeg;base64,{{item.image}}\" alt=\"product-image\" class=\"img-fluid\" />\n                            </a>\n                            <div *ngIf=\"item.qty_available === 0\" class=\"ribbon ribbon-top-right\"><span>Out Of\n                                Stock</span></div>\n                            <a href=\"javascript:void();\" *ngIf=\"item.type == 'New'\" class=\"new\">{{ item.type }}</a>\n                          </div>\n                        </div>\n                        <div class=\"product-description\">\n\n                          <!-- <h4 *ngIf=\"item.qty_available === 0\" style=\"padding: 5px;\n                                      background: red;\n                                      margin: 10px 0;\n                                      color: #fff;\n                                      text-align: center;\n                                      border-radius: 12px;\">Out Of Stock</h4> -->\n                          <h4>{{ item.name }}</h4>\n                          <p class=\"mb-0\">{{ item.x_studio_field_5Gttm }}</p>\n                          <div *ngIf=\"userId\" class=\"ratting\">\n                            <!-- <ul class=\"ratting-item d-flex p-0 m-0\">\n                                          <li class=\"full\"><i class=\"{{ item.rating >= 1 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                          <li class=\"full\"><i class=\"{{ item.rating >= 2 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                          <li class=\"full\"><i class=\"{{ item.rating >= 3 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                          <li class=\"full\"><i class=\"{{ item.rating >= 4 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                          <li class=\"full\"><i class=\"{{ item.rating >= 5 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                        </ul> -->\n                          </div>\n                          <div *ngIf=\"userId\" class=\"d-flex flex-wrap justify-content-between align-items-center\">\n                            <div class=\"product-price\">\n                              <div class=\"regular-price\"><b> ₦{{ item.list_price | number : '1.2-2'}}</b></div>\n                            </div>\n                            <div class=\"input-box\" *ngIf=\"item.qty_available > 0\">\n                              <select *ngIf=\"!check_already_in_cart(item.id)\" (change)=\"ChangingValue($event, item)\" [value]='1' >\n                                <!-- <option *ngFor=\"let item of data: let i=index\" [value]=\"item\">{{i}}</option> -->\n                                <option value=1>1</option>\n                                <option value=2>2</option>\n                                <option value=3>3</option>\n                                <option value=4>4</option>\n                                <option value=5>5</option>\n                                <option value=6>6</option>\n                                <option value=7>7</option>\n                                <option value=8>8</option>\n                                <option value=9>9</option>\n                                <option value=10>10</option>\n                                <option value=11>11</option>\n                                <option value=12>12</option>\n                                <option value=13>13</option>\n                                <option value=14>14</option>\n                                <option value=15>15</option>\n                                <option value=16>16</option>\n                                <option value=17>17</option>\n                                <option value=18>18</option>\n                                <option value=19>19</option>\n                                <option value=20>20</option>\n                                <option value=21>21</option>\n                                <option value=22>22</option>\n                                <option value=23>23</option>\n                                <option value=24>24</option>\n                                <option value=25>25</option>\n                                <option value=26>26</option>\n                                <option value=27>27</option>\n                                <option value=28>28</option>\n                                <option value=29>29</option>\n                                <option value=30>30</option>\n                                <option value=31>31</option>\n                                <option value=32>32</option>\n                                <option value=33>33</option>\n                                <option value=34>34</option>\n                                <option value=35>35</option>\n                                <option value=36>36</option>\n                                <option value=37>37</option>\n                                <option value=38>38</option>\n                                <option value=39>39</option>\n                                <option value=40>40</option>\n                                <option value=41>41</option>\n                                <option value=42>42</option>\n                                <option value=43>43</option>\n                                <option value=44>44</option>\n                                <option value=45>45</option>\n                                <option value=46>46</option>\n                                <option value=47>47</option>\n                                <option value=48>48</option>\n                                <option value=49>49</option>\n                                <option value=50>50</option>\n                              </select>\n                              <!-- <button (click)=\"decreaseQty(item)\" type=\"button\" class=\"btn-less btn btn-primary d-block mt-1 next\"><i class=\"ri-subtract-fill\"></i></button>\n                                          <input disabled type=\"number\" min=\"1\" max=\"10\" value=\"{{item.quantity}}\" class=\"increment\">\n                                          <button (click)=\"increaseQty(item)\" type=\"button\" class=\"btn-plus btn btn-primary d-block mt-1 next\"><i class=\"ri-add-fill\"></i></button> -->\n                            </div>\n                            <div class=\"product-action\" *ngIf=\"item.qty_available > 0\">\n                              <div *ngIf=\"!check_already_in_cart(item.id)\" class=\"add-to-cart\"><a\n                                  (click)=\"addToCat(item)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\n                                  data-original-title=\"Add to Cart\"> <i class=\"ri-shopping-cart-2-line\"></i> </a></div>\n                              <!-- <div class=\"wishlist\"><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Wishlist\"> <i class=\"ri-heart-line\"></i> </a></div> -->\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </app-iq-card>\n          <div infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"1000\" (scrolled)=\"onScroll()\">\n          </div>\n          <p *ngIf=\"loading\" style=\"text-align: center;\">Loading....</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/layout/layout.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/layout/layout.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loader></app-loader>\n\n<div class=\"wrapper\">\n    <app-side-bar1></app-side-bar1>\n    <app-nav-bar1 (cartValue)=\"getValue($event)\" ></app-nav-bar1>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/my-drugstoc/my-drugstoc.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/my-drugstoc/my-drugstoc.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row row-eq-height\">\n  <div class=\"col-md-8\">\n   <div class=\"col-md-12\">\n      <div class=\"iq-card\">\n         <div class=\"iq-card-header d-flex justify-content-between\">\n            <div class=\"iq-header-title\">\n               <h4 class=\"card-title\">My Drugstoc</h4>\n            </div>\n            <div class=\"iq-card-header-toolbar d-flex align-items-center\">\n                <div class=\"form-group\">\n                  <label for=\"exampleFormControlSelect1\"></label>\n                  <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"changeCatgory($event.target.value)\" >\n                    <option selected=\"\" disabled=\"\">Select Category</option>\n                    <option value={{item.name}} *ngFor=\"let item of category\">{{item.name}}</option>\n                  </select>\n                </div>\n                </div>\n                </div>\n        <div class=\"iq-card-body\">\n          <div id=\"js-product-list\">\n            <div *ngIf=\"loading\"  class=\"iq-card-body\">\n              <div id=\"js-product-list\">\n                <div class=\"Products\">\n                  <ul class=\"product_list gridcount grid row\">\n                    <li *ngFor=\"let item of data2\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                      <div class=\"product-miniature\" style=\"width: 100%;\">\n                        <div class=\"thumbnail-container\">\n                          <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                            width: '100%',\n                            'border-radius': '12px',\n                            height: '200px',\n                            'margin-bottom': '-5px',\n                            'margin-right': '20px'\n                          }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                          <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                            width: '70%',\n                            'border-radius': '12px',\n                            height: '20px',\n                            'margin-bottom': '-5px',\n                            'margin-right': '20px'\n                          }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                          <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                            width: '95%',\n                            'border-radius': '12px',\n                            height: '15px',\n                            'margin-bottom': '-5px',\n                            'margin-right': '20px'\n                          }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                          <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                            width: '40%',\n                            'border-radius': '12px',\n                            height: '15px',\n                            'margin-bottom': '-5px',\n                            'margin-right': '20px'\n                          }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                        </div>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"!loading\" class=\"Products\">\n              <ul class=\"product_list gridcount grid row\">\n                <li *ngFor=\"let item of data\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                  <div class=\"product-miniature\">\n                    <div class=\"thumbnail-container\">\n                      <a *ngIf=\"item.image === false\" routerLink=\"/products/itemdetail/{{item.id}}\"><img src=\"../../../assets/images/no_image.png\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                      <a *ngIf=\"item.image != false\" routerLink=\"/products/itemdetail/{{item.id}}\"><img src=\"data:image/jpeg;base64,{{item.image}}\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                      <a href=\"javascript:void();\" *ngIf=\"item.type == 'New'\" class=\"new\">{{ item.type }}</a>\n                    </div>\n                    <div class=\"product-description\">\n                      <h4>{{ item.name }}</h4>\n                      <p class=\"mb-0\">{{ item.x_studio_field_5Gttm }}</p>\n                      <!-- <div class=\"ratting\">\n                        <ul class=\"ratting-item d-flex p-0 m-0\">\n                          <li class=\"full\"><i class=\"{{ item.rating >= 1 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                          <li class=\"full\"><i class=\"{{ item.rating >= 2 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                          <li class=\"full\"><i class=\"{{ item.rating >= 3 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                          <li class=\"full\"><i class=\"{{ item.rating >= 4 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                          <li class=\"full\"><i class=\"{{ item.rating >= 5 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                        </ul>\n                      </div> -->\n                      <div class=\"d-flex flex-wrap justify-content-between align-items-center\">\n                        <div class=\"product-price\">\n                          <div class=\"regular-price\"><b> ₦{{ item.list_price | number : '1.2-2'}}</b></div>\n                        </div>\n                        <div class=\"product-action\">\n                          <div *ngIf=\"!check_already_in_cart(item.id)\"  class=\"add-to-cart\"><a (click)=\"addToCat(item)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Add to Cart\"> <i class=\"ri-shopping-cart-2-line\"></i> </a></div>\n                          <!-- <div class=\"wishlist\"><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Wishlist\"> <i class=\"ri-heart-line\"></i> </a></div> -->\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n        <div class=\"col-md-4\">\n          <div class=\"iq-card iq-card-block iq-card-stretch iq-card-height wow fadeInUp\" data-wow-delay=\"0.8s\" style=\"position: relative; visibility: visible; animation-delay: 0.8s; animation-name: fadeInUp;\">\n            <div class=\"iq-card-header d-flex justify-content-between\">\n               <div class=\"iq-header-title\">\n                  <h4 class=\"card-title\">Categories</h4>\n               </div>\n            </div>\n            <div class=\"iq-card-body\">\n               <div class=\"row\">\n                  <div class=\"col-lg-12\">\n                     <div *ngFor=\"let item of category\" class=\"iq-details\">\n                        <span class=\"title text-dark\">{{item.name}}</span>\n                        <div class=\"percentage float-right text-primary\">{{getNumberInCategory(item.name)}}</div>\n                        <div class=\"iq-progress-bar-linear d-inline-block w-100\">\n                           <div class=\"iq-progress-bar\">\n                              <span class=\"bg-primary\" data-percent={{getPercentage(item.name)}} style=\"transition: width 2s ease 0s; width: {{getPercentage(item.name)}}%;\"></span>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n          </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/my-invoice/my-invoice.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/my-invoice/my-invoice.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-12\">\n      <app-iq-card [isCardHeader]=false>\n        <div class=\"table-responsive\">\n          <!-- Projects table -->\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">SO / Number</th>\n              <th scope=\"col\">Invoices Number</th>\n              <th scope=\"col\">Due Date</th>\n              <th scope=\"col\">Total</th>\n              <th scope=\"col\">Status</th>\n            </tr>\n            </thead>\n            <tbody *ngIf=\"loading\">\n            <tr *ngFor=\"let row of data2; let i=index;\">\n              <td><ngx-skeleton-loader count=\"1\" [theme]=\"{\n                width: '70%',\n                'border-radius': '12px',\n                height: '20px'\n              }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></td>\n              <td ><ngx-skeleton-loader count=\"1\" [theme]=\"{\n                width: '70%',\n                'border-radius': '12px',\n                height: '20px'\n              }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></td>\n              <td><ngx-skeleton-loader count=\"1\" [theme]=\"{\n                width: '70%',\n                'border-radius': '12px',\n                height: '20px'\n              }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></td>\n              <td><ngx-skeleton-loader count=\"1\" [theme]=\"{\n                width: '70%',\n                'border-radius': '12px',\n                height: '20px'\n              }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></td>\n              <td><ngx-skeleton-loader count=\"1\" [theme]=\"{\n                width: '70%',\n                'border-radius': '12px',\n                height: '20px'\n              }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></td>\n            </tr>\n            </tbody>\n            <tbody *ngIf=\"!loading\">\n            <tr *ngFor=\"let row of invoice; let i=index;\">\n              <td>{{row.origin}}</td>\n              <td *ngIf=\"row.number\">{{row.number}}</td>\n              <td *ngIf=\"!row.number\">NO INVOICE NUMBER</td>\n              <td>{{row.create_date | date }}</td>\n              <td>₦ {{row.amount_total | number : '1.2-2' }}</td>\n              <td *ngIf=\"!row.number\">pending payment</td>\n              <td *ngIf=\"row.number\">paid</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n        <!-- <div class=\"row\">\n          <div class=\"col-lg-6\">\n            <img src=\"/assets/images/drugstoc.png\" style=\"width: 20%;\" class=\"img-fluid\" alt=\"\">\n          </div>\n          <div class=\"col-lg-6 align-self-center\">\n            <h4 class=\"mb-0 float-right\">Invoice</h4>\n          </div>\n          <div class=\"col-sm-12\">\n            <hr class=\"mt-3\">\n            <h5 class=\"mb-0\">Hello, Nik Jones</h5>\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when\n              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of\n              letters, as opposed to using 'Content here, content here', making it look like readable English.</p>\n          </div>\n        </div> -->\n        <!-- <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"table-responsive-sm\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Order Date</th>\n                    <th scope=\"col\">Order Status</th>\n                    <th scope=\"col\">Order ID</th>\n                    <th scope=\"col\">Billing Address</th>\n                    <th scope=\"col\">Shipping Address</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Jan 17, 2016</td>\n                    <td><span class=\"badge badge-danger\">Unpaid</span></td>\n                    <td>250028</td>\n                    <td>\n                      <p class=\"mb-0\">PO Box 16122 Collins Street West<br>Victoria 8007 Australia<br>\n                        Phone: +123 456 7890<br>\n                        Email: demo@sofbox.com<br>\n                        Web: www.sofbox.com\n                      </p>\n                    </td>\n                    <td>\n                      <p class=\"mb-0\">PO Box 16122 Collins Street West<br>Victoria 8007 Australia<br>\n                        Phone: +123 456 7890<br>\n                        Email: demo@sofbox.com<br>\n                        Web: www.sofbox.com\n                      </p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div> -->\n        <!-- <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <h5>Order Summary</h5>\n            <div class=\"table-responsive-sm\">\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th class=\"text-center\" scope=\"col\">#</th>\n                    <th scope=\"col\">Item</th>\n                    <th class=\"text-center\" scope=\"col\">Quantity</th>\n                    <th class=\"text-center\" scope=\"col\">Price</th>\n                    <th class=\"text-center\" scope=\"col\">Totals</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <th class=\"text-center\" scope=\"row\">1</th>\n                    <td>\n                      <h6 class=\"mb-0\">Web Design</h6>\n                      <p class=\"mb-0\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </td>\n                    <td class=\"text-center\">5</td>\n                    <td class=\"text-center\">$120.00</td>\n                    <td class=\"text-center\"><b>$2,880.00</b></td>\n                  </tr>\n                  <tr>\n                    <th class=\"text-center\" scope=\"row\">2</th>\n                    <td>\n                      <h6 class=\"mb-0\">Web Design</h6>\n                      <p class=\"mb-0\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </td>\n                    <td class=\"text-center\">5</td>\n                    <td class=\"text-center\">$120.00</td>\n                    <td class=\"text-center\"><b>$2,880.00</b></td>\n                  </tr>\n                  <tr>\n                    <th class=\"text-center\" scope=\"row\">3</th>\n                    <td>\n                      <h6 class=\"mb-0\">Web Design</h6>\n                      <p class=\"mb-0\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </td>\n                    <td class=\"text-center\">5</td>\n                    <td class=\"text-center\">$120.00</td>\n                    <td class=\"text-center\"><b>$2,880.00</b></td>\n                  </tr>\n                  <tr>\n                    <th class=\"text-center\" scope=\"row\">4</th>\n                    <td>\n                      <h6 class=\"mb-0\">Web Design</h6>\n                      <p class=\"mb-0\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </td>\n                    <td class=\"text-center\">5</td>\n                    <td class=\"text-center\">$120.00</td>\n                    <td class=\"text-center\"><b>$2,880.00</b></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <h5 class=\"mt-5\">Order Details</h5>\n            <div class=\"table-responsive-sm\">\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">Bank</th>\n                    <th scope=\"col\">.Acc.No</th>\n                    <th scope=\"col\">Due Date</th>\n                    <th scope=\"col\">Sub-total</th>\n                    <th scope=\"col\">Discount</th>\n                    <th scope=\"col\">Total</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">Threadneedle St</th>\n                    <td>12333456789</td>\n                    <td>12 November 2019</td>\n                    <td>$4597.50</td>\n                    <td>10%</td>\n                    <td><b>$4137.75 USD</b></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"col-sm-6\"></div>\n          <div class=\"col-sm-6 text-right\">\n            <button type=\"button\" class=\"btn btn-link mr-3\"><i class=\"ri-printer-line\"></i> Download Print</button>\n            <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n          </div>\n          <div class=\"col-sm-12 mt-5\">\n            <b class=\"text-danger\">Notes:</b>\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when\n              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of\n              letters, as opposed to using 'Content here, content here', making it look like readable English.</p>\n          </div>\n        </div> -->\n      </app-iq-card>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/my-orders/my-orders.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/my-orders/my-orders.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-12\">\n    <app-iq-card>\n      <div card-header class=\"iq-header-title\">\n        <h4 class=\"card-title\">Order Summary</h4>\n      </div>\n      <div card-header class=\"iq-card-header-toolbar d-flex align-items-center\">\n        <!-- <div class=\"dropdown\">\n          <span class=\"dropdown-toggle text-primary\" id=\"dropdownMenuButton5\" data-toggle=\"dropdown\">\n            <i class=\"ri-more-2-fill\"></i>\n          </span>\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-eye-fill mr-2\"></i>View</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-delete-bin-6-fill mr-2\"></i>Delete</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-pencil-fill mr-2\"></i>Edit</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-printer-fill mr-2\"></i>Print</a>\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-file-download-fill mr-2\"></i>Download</a>\n          </div>\n        </div> -->\n      </div>\n      <div class=\"table-responsive\">\n        <table class=\"table mb-0 table-borderless\">\n          <thead>\n          <tr>\n            <th scope=\"col\">SO Number</th>\n            <th scope=\"col\">Date Confirmed</th>\n            <th scope=\"col\">Date Received</th>\n            <th scope=\"col\">Item</th>\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\">Total</th>\n\n          </tr>\n          </thead>\n          <tbody *ngIf=\"!loading\">\n          <tr *ngFor=\"let order of orders; let i=index;\">\n            <td>{{order.name}}</td>\n            <td>{{order.confirmation_date | date}}</td>\n            <td>{{order.date_order | date}}</td>\n            <td>{{order.order_line.length}} Items</td>\n            <td>\n              <div class=\"badge badge-pill badge-{{getStatus(order.state)}}\">{{getOrderStatus(order.state)}}</div>\n            </td>\n            <td>₦ {{order.amount_total | number : '1.2-2'}}</td>\n          </tr>\n          </tbody>\n          <tbody *ngIf=\"loading\">\n          <tr *ngFor=\"let order of data2; let i=index;\">\n            <td><ngx-skeleton-loader count=\"1\" [theme]=\"{\n              width: '70%',\n              'border-radius': '12px',\n              height: '20px'\n            }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></td>\n            <td><ngx-skeleton-loader count=\"1\" [theme]=\"{\n              width: '70%',\n              'border-radius': '12px',\n              height: '20px'\n            }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></td>\n            <td><ngx-skeleton-loader count=\"1\" [theme]=\"{\n              width: '70%',\n              'border-radius': '12px',\n              height: '20px'\n            }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></td>\n            <td><ngx-skeleton-loader count=\"1\" [theme]=\"{\n              width: '70%',\n              'border-radius': '12px',\n              height: '20px'\n            }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></td>\n            <td>\n              <div class=\"badge badge-pill\"><ngx-skeleton-loader count=\"1\" [theme]=\"{\n                width: '70px',\n                'border-radius': '12px',\n                height: '20px'\n              }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></div>\n            </td>\n            <td><ngx-skeleton-loader count=\"1\" [theme]=\"{\n              width: '70%',\n              'border-radius': '12px',\n              height: '20px'\n            }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-iq-card>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/per-category-list/per-category-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/per-category-list/per-category-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loading\" class=\"row\">\n    <div *ngFor=\"let item of data2; let i=index;\" class=\"col-lg-3 col-md-12\">\n        <app-iq-card cardClass=\"iq-card iq-profile-card text-center\" [isCardHeader]=false>\n          <p style=\"margin-bottom: 0;\">\n            <ngx-skeleton-loader count=\"1\" [theme]=\"{\n              width: '30%',\n              'border-radius': '6px',\n              height: '70px',\n              'margin-bottom': '20px',\n              'margin-right': '20px'\n            }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n          </p>\n          <ngx-skeleton-loader count=\"1\" [theme]=\"{\n            width: '70%',\n            'border-radius': '12px',\n            height: '15px',\n            'margin-bottom': '-5px',\n            'margin-right': '20px'\n          }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n              <hr>\n              <ul class=\"list-inline mb-0 d-flex justify-content-between\">\n                <li class=\"list-inline-item\">\n                </li>\n                <li class=\"list-inline-item\">\n                </li>\n                <li class=\"list-inline-item\">\n                </li>\n              </ul>\n          </app-iq-card>\n    </div>\n</div>\n<div *ngIf=\"!loading\" class=\"row\">\n    <div *ngFor=\"let item of data; let i=index;\" class=\"col-lg-3 col-md-12\">\n        <app-iq-card cardClass=\"iq-card iq-profile-card text-center\" [isCardHeader]=false>\n            <a routerLink=\"/company/{{item}}\" class=\"iq-team text-center p-0\">\n              <img src=\"{{getImage(item)}}\" onerror=\"this.src='/Users/adewale/Desktop/drugstoc web/angular/src/assets/images/no_image2.png'\" class=\"img-fluid mb-3 avatar-120\" alt=\"\">\n              <!-- <img *ngIf=\"userId\" src=\"assets/images/medplus.jpeg\" class=\"img-fluid mb-3 avatar-120 rounded-circle\" alt=\"\"> -->\n              <!-- <h4 *ngIf=\"!userId\" class=\"mb-0\">Welcome</h4> -->\n              <h4 class=\"mb-0\">{{item}}</h4>\n              <!-- <a *ngIf=\"userId && user.phone\" href=\"javascript:void(0);\" class=\"d-inline-block w-100\">0{{user.phone}}</a> -->\n              <!-- <p *ngIf=\"!userId\" class=\"mt-1\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. remaining essentially unchanged.</p> -->\n              <!-- <p *ngIf=\"userId\" class=\"mt-1\">{{user.address}}</p> -->\n              <hr>\n              <ul class=\"list-inline mb-0 d-flex justify-content-between\">\n                <li class=\"list-inline-item\">\n                  <!-- <h5>Blood</h5>\n                  <p class=\"text-success\">AB+</p> -->\n                </li>\n                <li class=\"list-inline-item\">\n                  <!-- <h5 *ngIf=\"!userId\">Virtual Pharmacy</h5>\n                  <h5 *ngIf=\"userId\">Licensed Pharmacy</h5> -->\n                  <!-- <p class=\"text-success\">161cm</p> -->\n                </li>\n                <li class=\"list-inline-item\">\n                  <!-- <h5>Weight</h5>\n                  <p class=\"text-success\">64kg</p> -->\n                </li>\n              </ul>\n            </a>\n          </app-iq-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/per-category/per-category.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/per-category/per-category.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"iq-card\">\n          <div class=\"iq-card-body\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"exampleFormControlSelect1\">Categories</label>\n                <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"changeCatgory($event.target.value)\" >\n                  <option selected=\"\" disabled=\"\">Select Category</option>\n                  <option value={{cat.id}} *ngFor=\"let cat of categories\">{{cat.name}}</option>\n                </select>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"iq-card\">\n          <div class=\"iq-card-body\">\n            <div id=\"js-product-list\">\n              <div *ngIf=\"loading\"  class=\"iq-card-body\">\n                <div id=\"js-product-list\">\n                  <div class=\"Products\">\n                    <ul class=\"product_list gridcount grid row\">\n                      <li *ngFor=\"let item of data2\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                        <div class=\"product-miniature\" style=\"width: 100%;\">\n                          <div class=\"thumbnail-container\">\n                            <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                              width: '100%',\n                              'border-radius': '12px',\n                              height: '200px',\n                              'margin-bottom': '-5px',\n                              'margin-right': '20px'\n                            }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                            <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                              width: '70%',\n                              'border-radius': '12px',\n                              height: '20px',\n                              'margin-bottom': '-5px',\n                              'margin-right': '20px'\n                            }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                            <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                              width: '95%',\n                              'border-radius': '12px',\n                              height: '15px',\n                              'margin-bottom': '-5px',\n                              'margin-right': '20px'\n                            }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                            <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                              width: '40%',\n                              'border-radius': '12px',\n                              height: '15px',\n                              'margin-bottom': '-5px',\n                              'margin-right': '20px'\n                            }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"!loading\" class=\"Products\">\n                <ul class=\"product_list gridcount grid row\">\n                  <li *ngFor=\"let item of data\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                    <div class=\"product-miniature\">\n                      <div class=\"thumbnail-container\">\n                        <a *ngIf=\"item.image === false\" routerLink=\"/products/itemdetail/{{item.id}}\"><img src=\"../../../assets/images/no_image.png\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                        <a *ngIf=\"item.image != false\" routerLink=\"/products/itemdetail/{{item.id}}\"><img src=\"data:image/jpeg;base64,{{item.image}}\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                        <a href=\"javascript:void();\" *ngIf=\"item.type == 'New'\" class=\"new\">{{ item.type }}</a>\n                      </div>\n                      <div class=\"product-description\">\n                        <h4>{{ item.name }}</h4>\n                        <p class=\"mb-0\">{{ item.x_studio_field_5Gttm }}</p>\n                        <!-- <div class=\"ratting\">\n                          <ul class=\"ratting-item d-flex p-0 m-0\">\n                            <li class=\"full\"><i class=\"{{ item.rating >= 1 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                            <li class=\"full\"><i class=\"{{ item.rating >= 2 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                            <li class=\"full\"><i class=\"{{ item.rating >= 3 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                            <li class=\"full\"><i class=\"{{ item.rating >= 4 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                            <li class=\"full\"><i class=\"{{ item.rating >= 5 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                          </ul>\n                        </div> -->\n                        <div class=\"d-flex flex-wrap justify-content-between align-items-center\">\n                          <div class=\"product-action\">\n                            <div *ngIf=\"!check_already_in_cart(item.id)\" class=\"add-to-cart\"><a (click)=\"addToCat(item)\"  data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Add to Cart\"> <i class=\"ri-shopping-cart-2-line\"></i> </a></div>\n                            <!-- <div class=\"wishlist\"><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Wishlist\"> <i class=\"ri-heart-line\"></i> </a></div> -->\n                          </div>\n                          <div class=\"product-price\">\n                            <div class=\"regular-price\"><b> ₦{{ item.list_price | number : '1.2-2'}}</b></div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"10\" (scrolled)=\"onScroll()\"></div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/per-products/per-products.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/per-products/per-products.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row row-eq-height\">\n    <div class=\"col-lg-3 col-md-12\">\n        <app-iq-card cardClass=\"iq-card iq-profile-card text-center\" [isCardHeader]=false>\n            <div class=\"iq-team text-center p-0\" style=\"min-height: 385px;\">\n              <img src=\"{{getImage(title)}}\" \n                   class=\"img-fluid mb-3 avatar-120\" alt=\"\">\n              <h4 class=\"mb-0\">{{title}}</h4>\n              <!-- <a *ngIf=\"user.phone\" href=\"javascript:void(0);\" class=\"d-inline-block w-100\">0{{user.phone}}</a> -->\n              <!-- <p class=\"mt-1\">Calle Aquilino de la Guardia & Calle 47, Panama City, Panama PA</p> -->\n              <hr>\n              <ul class=\"list-inline mb-0 d-flex justify-content-between\">\n                <li class=\"list-inline-item\">\n                </li>\n                <li class=\"list-inline-item\">\n                  <h5 *ngIf=\"!loading\" >{{data.length}} Products</h5>\n                  <h5 *ngIf=\"loading\" >Loading...</h5>\n                </li>\n                <li class=\"list-inline-item\">\n                </li>\n              </ul>\n            </div>\n          </app-iq-card>\n    </div>\n    <div class=\"col-lg-9 col-md-12\">\n        <app-iq-card cardClass=\"iq-card bg-primary sb-top-banner-card\" cardBodyClass=\"iq-card-body pt-5 pb-5\" [isCardHeader]=false>\n            <div class=\"row\">\n              <div class=\"col-md-6 align-self-center\">\n                <!-- <h2 class=\"text-white\">Congratulations {{user.name}}</h2> -->\n                <p class=\"text-white\">Buy genuine {{title}} products directly from source . Avoid substandard and Counterfeit!</p>\n              </div>\n              <div class=\"col-md-6 position-relative\">\n                <div class=\"an-img-two\">\n                  <div class=\"bodymovin\">\n                    <ng-lottie [options]=\"optionsData2\"></ng-lottie>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </app-iq-card>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"iq-card\">\n              <app-iq-card>\n                <div card-header class=\"iq-header-title\">\n                  <h4 class=\"card-title\">{{title}}'s Products</h4>\n                </div>\n                <div card-header class=\"iq-card-header-toolbar d-flex align-items-center\">\n                  <!-- <div class=\"dropdown\">\n                    <span class=\"dropdown-toggle\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\">\n                      <i class=\"ri-more-2-fill\"></i>\n                    </span>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-eye-fill mr-2\"></i>View</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-delete-bin-6-fill mr-2\"></i>Delete</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-pencil-fill mr-2\"></i>Edit</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-printer-fill mr-2\"></i>Print</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-file-download-fill mr-2\"></i>Download</a>\n                    </div>\n                  </div> -->\n                </div>\n              <div class=\"iq-card-body\">\n                <div id=\"js-product-list\">\n                    <div class=\"item\" style=\"align-content: center; width: 100%;\">\n                      <div *ngIf=\"loading\"  class=\"iq-card-body\">\n                        <div id=\"js-product-list\">\n                          <div class=\"Products\">\n                            <ul class=\"product_list gridcount grid row\">\n                              <li *ngFor=\"let item of data2\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                                <div class=\"product-miniature\" style=\"width: 100%;\">\n                                  <div class=\"thumbnail-container\">\n                                    <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                      width: '100%',\n                                      'border-radius': '12px',\n                                      height: '200px',\n                                      'margin-bottom': '-5px',\n                                      'margin-right': '20px'\n                                    }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                                    <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                      width: '70%',\n                                      'border-radius': '12px',\n                                      height: '20px',\n                                      'margin-bottom': '-5px',\n                                      'margin-right': '20px'\n                                    }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                                    <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                      width: '95%',\n                                      'border-radius': '12px',\n                                      height: '15px',\n                                      'margin-bottom': '-5px',\n                                      'margin-right': '20px'\n                                    }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                                    <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                      width: '40%',\n                                      'border-radius': '12px',\n                                      height: '15px',\n                                      'margin-bottom': '-5px',\n                                      'margin-right': '20px'\n                                    }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                                  </div>\n                                </div>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                      </div>\n                      </div>\n                  <div *ngIf=\"!loading\" class=\"Products\">\n                    <ul class=\"product_list gridcount grid row\">\n                      <li *ngFor=\"let item of data\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                        <div class=\"product-miniature\">\n                          <div class=\"thumbnail-container\">\n                            <a *ngIf=\"item.image === false\" routerLink=\"/products/itemdetail/{{item.id}}\"><img src=\"../../../assets/images/no_image.png\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                            <a *ngIf=\"item.image != false\" routerLink=\"/products/itemdetail/{{item.id}}\"><img src=\"data:image/jpeg;base64,{{item.image}}\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                            <a href=\"javascript:void();\" *ngIf=\"item.type == 'New'\" class=\"new\">{{ item.type }}</a>\n                          </div>\n                          <div class=\"product-description\">\n                            <h4>{{ item.name }}</h4>\n                            <p class=\"mb-0\">{{ item.x_studio_field_5Gttm }}</p>\n                            <!-- <div class=\"ratting\">\n                              <ul class=\"ratting-item d-flex p-0 m-0\">\n                                <li class=\"full\"><i class=\"{{ item.rating >= 1 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 2 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 3 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 4 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 5 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                              </ul>\n                            </div> -->\n                            <div class=\"d-flex flex-wrap justify-content-between align-items-center\">\n                              <div class=\"product-action\">\n                                <div *ngIf=\"!check_already_in_cart(item.id)\" class=\"add-to-cart\"><a (click)=\"addToCat(item)\"  data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Add to Cart\"> <i class=\"ri-shopping-cart-2-line\"></i> </a></div>\n                                <!-- <div class=\"wishlist\"><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Wishlist\"> <i class=\"ri-heart-line\"></i> </a></div> -->\n                              </div>\n                              <div class=\"product-price\">\n                                <div class=\"regular-price\"><b> ₦{{ item.list_price | number : '1.2-2'}}</b></div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </app-iq-card>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/problem/problem.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/problem/problem.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-12 col-lg-6\">\n      <app-iq-card>\n        <div card-header class=\"iq-header-title\">\n          <h4 class=\"card-title\"> Report a problem</h4>\n        </div>\n        <p>Notice a bug or issue? Kindly fill the form below. Our customer agents will reach out within 24 hours</p>\n        <form class=\"was-validated\">\n        <div class=\"mb-3\">\n            <label for=\"validationDefault01\">Email</label>\n            <input type=\"text\" class=\"form-control\" id=\"validationDefault01\" required>\n        </div>\n          <div class=\"mb-3\">\n              <label for=\"validationTextarea\">Write you complain</label>\n              <textarea class=\"form-control is-invalid\" id=\"validationTextarea\" placeholder=\"Your problems....\" required></textarea>\n              <div class=\"invalid-feedback\">\n                Please enter a message in the here.\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n        </div>\n        </form>\n      </app-iq-card>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/product/product.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/product/product.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"iq-card\">\n              <app-iq-card>\n                <div card-header class=\"iq-header-title\">\n                  <h4 class=\"card-title\">New Products</h4>\n                </div>\n                <div card-header class=\"iq-card-header-toolbar d-flex align-items-center\">\n                  <!-- <div class=\"dropdown\">\n                    <span class=\"dropdown-toggle\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\">\n                      <i class=\"ri-more-2-fill\"></i>\n                    </span>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-eye-fill mr-2\"></i>View</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-delete-bin-6-fill mr-2\"></i>Delete</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-pencil-fill mr-2\"></i>Edit</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-printer-fill mr-2\"></i>Print</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-file-download-fill mr-2\"></i>Download</a>\n                    </div>\n                  </div> -->\n                </div>\n              <div class=\"iq-card-body\">\n                <div id=\"js-product-list\">\n                  <div *ngIf=\"loading\"  class=\"iq-card-body\">\n                    <div id=\"js-product-list\">\n                      <div class=\"Products\">\n                        <ul class=\"product_list gridcount grid row\">\n                          <li *ngFor=\"let item of data2\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                            <div class=\"product-miniature\" style=\"width: 100%;\">\n                              <div class=\"thumbnail-container\">\n                                <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                  width: '100%',\n                                  'border-radius': '12px',\n                                  height: '200px',\n                                  'margin-bottom': '-5px',\n                                  'margin-right': '20px'\n                                }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                                <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                  width: '70%',\n                                  'border-radius': '12px',\n                                  height: '20px',\n                                  'margin-bottom': '-5px',\n                                  'margin-right': '20px'\n                                }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                                <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                  width: '95%',\n                                  'border-radius': '12px',\n                                  height: '15px',\n                                  'margin-bottom': '-5px',\n                                  'margin-right': '20px'\n                                }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                                <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                  width: '40%',\n                                  'border-radius': '12px',\n                                  height: '15px',\n                                  'margin-bottom': '-5px',\n                                  'margin-right': '20px'\n                                }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                              </div>\n                            </div>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"!loading\" class=\"Products\">\n                    <ul class=\"product_list gridcount grid row\">\n                      <li *ngFor=\"let item of data\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                        <div class=\"product-miniature\">\n                          <div class=\"thumbnail-container\">\n                            <a *ngIf=\"item.image === false\" routerLink=\"/products/itemdetail/{{item.id}}\"><img src=\"../../../assets/images/no_image.png\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                            <a *ngIf=\"item.image != false\" routerLink=\"/products/itemdetail/{{item.id}}\"><img src=\"data:image/jpeg;base64,{{item.image}}\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                            <a href=\"javascript:void();\" *ngIf=\"item.type == 'New'\" class=\"new\">{{ item.type }}</a>\n                          </div>\n                          <div class=\"product-description\">\n                            <h4>{{ item.name }}</h4>\n                            <p class=\"mb-0\">{{ item.x_studio_field_5Gttm }}</p>\n                            <!-- <div class=\"ratting\">\n                              <ul class=\"ratting-item d-flex p-0 m-0\">\n                                <li class=\"full\"><i class=\"{{ item.rating >= 1 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 2 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 3 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 4 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 5 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                              </ul>\n                            </div> -->\n                            <div class=\"d-flex flex-wrap justify-content-between align-items-center\">\n                              <div class=\"product-action\">\n                                <div *ngIf=\"!check_already_in_cart(item.id)\" class=\"add-to-cart\"><a (click)=\"addToCat(item)\"data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Add to Cart\"> <i class=\"ri-shopping-cart-2-line\"></i> </a></div>\n                                <!-- <div class=\"wishlist\"><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Wishlist\"> <i class=\"ri-heart-line\"></i> </a></div> -->\n                              </div>\n                              <div class=\"product-price\">\n                                <div class=\"regular-price\"><b> ₦{{ item.list_price | number : '1.2-2'}}</b></div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </app-iq-card>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/profile/profile.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/profile/profile.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-sm-12 col-lg-12\">\n      <app-iq-card>\n        <div card-header class=\"iq-header-title\">\n          <h4 class=\"card-title\">Update you Profile</h4>\n        </div>\n        <img *ngIf=\"image == ''\" src=\"assets/images/medplus.jpeg\" class=\"img-fluid mb-3 avatar-120 rounded-circle\" alt=\"\">\n        <img *ngIf=\"image !== ''\" src=\"{{image}}\" class=\"img-fluid mb-3 avatar-120 rounded-circle\" alt=\"\">\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"ngform\">\n          <div class=\"form-row\">\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"validationDefault01\">Name</label>\n                <input value=\"{{username}}\" disabled formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"validationDefault01\" required>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"validationDefault02\">Phone Number</label>\n                <input disabled value=\"{{phone}}\" formControlName=\"phone\" type=\"text\" class=\"form-control\" id=\"validationDefault02\" required>\n              </div>\n              <div class=\"col-md-12 mb-12\">\n                <label for=\"validationDefaultUsername\">Address</label>\n                <div class=\"input-group\">\n                    <input disabled formControlName=\"address\" value=\"{{address}}\" type=\"text\" class=\"form-control\" id=\"validationDefaultUsername\"  aria-describedby=\"inputGroupPrepend2\" required>\n                </div>\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"validationDefault04\">Profile Photo</label>\n                <input type=\"file\" #userPhoto accept=\"image/x-png,image/gif,image/jpeg\" class=\"form-control-file formStyle\" (change)=\"onFileSelected($event)\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <div class=\"form-check\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"invalidCheck2\" required>\n                <label class=\"form-check-label\" for=\"invalidCheck2\">\n                Agree to terms and conditions\n                </label>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <button class=\"btn btn-primary\" type=\"submit\">Save Settings</button>\n          </div>\n        </form>\n      </app-iq-card>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/promotions/promotions.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/promotions/promotions.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>promotions works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/search/search.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/search/search.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"iq-card\">\n              <app-iq-card>\n                <div card-header class=\"iq-header-title\">\n                  <h4 class=\"card-title\">Products Result</h4>\n                </div>\n                <div card-header class=\"iq-card-header-toolbar d-flex align-items-center\">\n                  <!-- <div class=\"dropdown\">\n                    <span class=\"dropdown-toggle\" id=\"dropdownMenuButton1\" data-toggle=\"dropdown\">\n                      <i class=\"ri-more-2-fill\"></i>\n                    </span>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-eye-fill mr-2\"></i>View</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-delete-bin-6-fill mr-2\"></i>Delete</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-pencil-fill mr-2\"></i>Edit</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-printer-fill mr-2\"></i>Print</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0);\"><i class=\"ri-file-download-fill mr-2\"></i>Download</a>\n                    </div>\n                  </div> -->\n                </div>\n                <div *ngIf=\"loading\"  class=\"iq-card-body\">\n                  <div id=\"js-product-list\">\n                    <div class=\"Products\">\n                      <ul class=\"product_list gridcount grid row\">\n                        <li *ngFor=\"let item of data3\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                          <div class=\"product-miniature\" style=\"width: 100%;\">\n                            <div class=\"thumbnail-container\">\n                              <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                width: '100%',\n                                'border-radius': '12px',\n                                height: '200px',\n                                'margin-bottom': '-5px',\n                                'margin-right': '20px'\n                              }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                              <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                width: '70%',\n                                'border-radius': '12px',\n                                height: '20px',\n                                'margin-bottom': '-5px',\n                                'margin-right': '20px'\n                              }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                              <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                width: '95%',\n                                'border-radius': '12px',\n                                height: '15px',\n                                'margin-bottom': '-5px',\n                                'margin-right': '20px'\n                              }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                              <ngx-skeleton-loader count=\"1\" [theme]=\"{\n                                width: '40%',\n                                'border-radius': '12px',\n                                height: '15px',\n                                'margin-bottom': '-5px',\n                                'margin-right': '20px'\n                              }\" appearance=\"circle\" animation=\"progress\"></ngx-skeleton-loader>\n                            </div>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              <div *ngIf=\"!loading\"class=\"iq-card-body\">\n                <div id=\"js-product-list\">\n                  <div class=\"Products\">\n                    <ul class=\"product_list gridcount grid row\">\n                      <li *ngFor=\"let item of data2\" class=\"product_item col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n                        <div class=\"product-miniature\">\n                          <div class=\"thumbnail-container\">\n                            <a *ngIf=\"item.image_medium === false\" routerLink=\"/products/itemdetail/{{item.id}}\"><img src=\"../../../assets/images/no_image.png\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                            <a *ngIf=\"item.image_medium != false\" routerLink=\"/products/itemdetail/{{item.id}}\"><img src=\"https://drugstoc-sam-dev-1293660.dev.odoo.com/web/image/product.product/{{item.id}}/image\" alt=\"product-image\" class=\"img-fluid\" /> </a>\n                            <a href=\"javascript:void();\" *ngIf=\"item.type == 'New'\" class=\"new\">{{ item.type }}</a>\n                          </div>\n                          <div class=\"product-description\">\n                            <h4>{{ item.name }}</h4>\n                            <p class=\"mb-0\">{{ item.x_studio_field_5Gttm }}</p>\n                            <!-- <div *ngIf=\"userId\" class=\"ratting\">\n                              <ul class=\"ratting-item d-flex p-0 m-0\">\n                                <li class=\"full\"><i class=\"{{ item.rating >= 1 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 2 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 3 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 4 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                                <li class=\"full\"><i class=\"{{ item.rating >= 5 ? 'ri-star-fill' : 'ri-star-line'}}\"></i></li>\n                              </ul>\n                            </div> -->\n                            <div class=\"d-flex flex-wrap justify-content-between align-items-center\">\n                              <div class=\"product-price\">\n                                <div class=\"regular-price\"><b> ₦{{ item.list_price | number : '1.2-2'}}</b></div>\n                              </div>\n                              <div class=\"product-action\">\n                                <div *ngIf=\"!check_already_in_cart(item.id)\" class=\"add-to-cart\"><a (click)=\"addToCat(item)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Add to Cart\"> <i class=\"ri-shopping-cart-2-line\"></i> </a></div>\n                                <!-- <div class=\"wishlist\"><a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Wishlist\"> <i class=\"ri-heart-line\"></i> </a></div> -->\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </app-iq-card>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/error-page/error-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/error-page/error-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Wrapper Start -->\n<div class=\"wrapper\">\n  <div class=\"container-fluid p-0\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-sm-12 text-center\">\n        <div class=\"iq-error\">\n          <h1>{{ errorType }}</h1>\n          <h4 class=\"mb-0\">Oops! This Page is Not Found.</h4>\n          <p>The requested page dose not exist.</p>\n          <a class=\"btn btn-primary mt-3\" href=\"javascript:void(0);\"><i class=\"ri-home-4-line\"></i>Back to Home</a>\n          <img src=\"./assets/images/error/01.png\" class=\"img-fluid iq-error-img\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Wrapper END -->\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/pages/error-page/error-page.component */ "./src/app/views/pages/error-page/error-page.component.ts");




const routes = [
    { path: '', loadChildren: './layouts/layout1/layout1.module#Layout1Module' },
    { path: 'page', loadChildren: './layouts/blank-layout/blank-layout.module#BlankLayoutModule' },
    { path: 'auth', loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule' },
    { path: '**', component: _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _plugins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins.service */ "./src/app/plugins.service.ts");




let AppComponent = class AppComponent {
    constructor(plugins, router) {
        this.plugins = plugins;
        this.router = router;
        this.title = 'sofbox-dashboard-angular';
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sofbox/sofbox.module */ "./src/app/components/sofbox/sofbox.module.ts");
/* harmony import */ var _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/pages/error-page/error-page.component */ "./src/app/views/pages/error-page/error-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/buttons/fesm2015/ngx-bootstrap-buttons.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
/* harmony import */ var _drugstoc_web_layout_layout_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./drugstoc_web/layout/layout.component */ "./src/app/drugstoc_web/layout/layout.component.ts");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/__ivy_ngcc__/fesm2015/ngx-lottie.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _drugstoc_web_product_product_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./drugstoc_web/product/product.component */ "./src/app/drugstoc_web/product/product.component.ts");
/* harmony import */ var _drugstoc_web_my_drugstoc_my_drugstoc_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./drugstoc_web/my-drugstoc/my-drugstoc.component */ "./src/app/drugstoc_web/my-drugstoc/my-drugstoc.component.ts");
/* harmony import */ var _drugstoc_web_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./drugstoc_web/my-orders/my-orders.component */ "./src/app/drugstoc_web/my-orders/my-orders.component.ts");
/* harmony import */ var _drugstoc_web_my_invoice_my_invoice_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./drugstoc_web/my-invoice/my-invoice.component */ "./src/app/drugstoc_web/my-invoice/my-invoice.component.ts");
/* harmony import */ var _drugstoc_web_problem_problem_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./drugstoc_web/problem/problem.component */ "./src/app/drugstoc_web/problem/problem.component.ts");
/* harmony import */ var _drugstoc_web_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./drugstoc_web/profile/profile.component */ "./src/app/drugstoc_web/profile/profile.component.ts");
/* harmony import */ var _drugstoc_web_promotions_promotions_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./drugstoc_web/promotions/promotions.component */ "./src/app/drugstoc_web/promotions/promotions.component.ts");
/* harmony import */ var angular_rave__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-rave */ "./node_modules/angular-rave/__ivy_ngcc__/fesm2015/angular-rave.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _drugstoc_web_cart_cart_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./drugstoc_web/cart/cart.component */ "./src/app/drugstoc_web/cart/cart.component.ts");
/* harmony import */ var _drugstoc_web_per_products_per_products_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./drugstoc_web/per-products/per-products.component */ "./src/app/drugstoc_web/per-products/per-products.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _drugstoc_web_per_category_per_category_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./drugstoc_web/per-category/per-category.component */ "./src/app/drugstoc_web/per-category/per-category.component.ts");
/* harmony import */ var _drugstoc_web_per_category_list_per_category_list_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./drugstoc_web/per-category-list/per-category-list.component */ "./src/app/drugstoc_web/per-category-list/per-category-list.component.ts");
/* harmony import */ var _drugstoc_web_search_search_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./drugstoc_web/search/search.component */ "./src/app/drugstoc_web/search/search.component.ts");
/* harmony import */ var _drugstoc_web_home_home_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./drugstoc_web/home/home.module */ "./src/app/drugstoc_web/home/home.module.ts");

















































function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_29___default.a;
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _views_pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"],
            _drugstoc_web_layout_layout_component__WEBPACK_IMPORTED_MODULE_26__["LayoutComponent"],
            // HomeComponent,
            _drugstoc_web_product_product_component__WEBPACK_IMPORTED_MODULE_30__["ProductComponent"],
            _drugstoc_web_my_drugstoc_my_drugstoc_component__WEBPACK_IMPORTED_MODULE_31__["MyDrugstocComponent"],
            _drugstoc_web_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_32__["MyOrdersComponent"],
            _drugstoc_web_my_invoice_my_invoice_component__WEBPACK_IMPORTED_MODULE_33__["MyInvoiceComponent"],
            _drugstoc_web_problem_problem_component__WEBPACK_IMPORTED_MODULE_34__["ProblemComponent"],
            _drugstoc_web_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProfileComponent"],
            _drugstoc_web_promotions_promotions_component__WEBPACK_IMPORTED_MODULE_36__["PromotionsComponent"],
            _drugstoc_web_cart_cart_component__WEBPACK_IMPORTED_MODULE_41__["CartComponent"],
            _drugstoc_web_per_products_per_products_component__WEBPACK_IMPORTED_MODULE_42__["PerProductsComponent"],
            _drugstoc_web_per_category_per_category_component__WEBPACK_IMPORTED_MODULE_45__["PerCategoryComponent"],
            _drugstoc_web_search_search_component__WEBPACK_IMPORTED_MODULE_47__["SearchComponent"],
            _drugstoc_web_per_category_list_per_category_list_component__WEBPACK_IMPORTED_MODULE_46__["PerCategoryListComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _drugstoc_web_home_home_module__WEBPACK_IMPORTED_MODULE_48__["HomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_43__["InfiniteScrollModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"],
            _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_store_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], {
                metaReducers: _store_reducers__WEBPACK_IMPORTED_MODULE_9__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                }
            }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([]),
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_17__["AlertModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalModule"].forRoot(),
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_39__["SweetAlert2Module"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_15__["PopoverModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_16__["ProgressbarModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__["TabsModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_19__["TooltipModule"].forRoot(),
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_20__["ButtonsModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_21__["CarouselModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_16__["ProgressbarModule"].forRoot(),
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_23__["NgScrollbarModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_28__["NgxSkeletonLoaderModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_38__["AutocompleteLibModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_27__["LottieModule"].forRoot({ player: playerFactory }),
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_24__["SlickCarouselModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            angular_rave__WEBPACK_IMPORTED_MODULE_37__["AngularRaveModule"].forRoot('FLWPUBK-dac71dcb2884cfa4d397b2fbbc33abb7-X'),
            ngx_wow__WEBPACK_IMPORTED_MODULE_25__["NgwWowModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_40__["ToastrModule"].forRoot(),
        ],
        exports: [
            _components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.ts ***!
  \************************************************************************************/
/*! exports provided: Breadcrumb1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb1Component", function() { return Breadcrumb1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Breadcrumb1Component = class Breadcrumb1Component {
    constructor() { }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Breadcrumb1Component.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Breadcrumb1Component.prototype, "items", void 0);
Breadcrumb1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumb1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./breadcrumb1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.html")).default
    })
], Breadcrumb1Component);



/***/ }),

/***/ "./src/app/components/sofbox/card-with-image/card-with-image.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/sofbox/card-with-image/card-with-image.component.ts ***!
  \********************************************************************************/
/*! exports provided: CardWithImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWithImageComponent", function() { return CardWithImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CardWithImageComponent = class CardWithImageComponent {
    constructor() {
        this.cardClass = 'iq-card';
        this.cardRowClass = 'row no-gutters';
        this.cardBodyClass = 'card-body';
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardWithImageComponent.prototype, "cardClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardWithImageComponent.prototype, "cardRowClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardWithImageComponent.prototype, "cardBodyClass", void 0);
CardWithImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-with-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card-with-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/card-with-image/card-with-image.component.html")).default
    })
], CardWithImageComponent);



/***/ }),

/***/ "./src/app/components/sofbox/cards/iq-card/iq-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/sofbox/cards/iq-card/iq-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: IqCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IqCardComponent", function() { return IqCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IqCardComponent = class IqCardComponent {
    constructor() {
        this.cardClass = 'iq-card';
        this.cardHeaderClass = 'iq-card-header d-flex justify-content-between';
        this.cardBodyClass = 'iq-card-body';
        this.cardFooterClass = 'card-footer';
        this.isCardHeader = true;
        this.isCardBody = true;
        this.isCardFooter = false;
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IqCardComponent.prototype, "cardClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IqCardComponent.prototype, "cardHeaderClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IqCardComponent.prototype, "cardBodyClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IqCardComponent.prototype, "cardFooterClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IqCardComponent.prototype, "isCardHeader", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IqCardComponent.prototype, "isCardBody", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IqCardComponent.prototype, "isCardFooter", void 0);
IqCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-iq-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./iq-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/cards/iq-card/iq-card.component.html")).default
    })
], IqCardComponent);



/***/ }),

/***/ "./src/app/components/sofbox/charts/apex-chart/apex-chart.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sofbox/charts/apex-chart/apex-chart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ApexChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function() { return ApexChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../plugins.service */ "./src/app/plugins.service.ts");



let ApexChartComponent = class ApexChartComponent {
    constructor(plugins) {
        this.plugins = plugins;
    }
    ngOnInit() {
        let _this = this;
        setTimeout(() => {
            _this.plugins.apexChart(_this.ids, _this.options);
        }, 500);
    }
};
ApexChartComponent.ctorParameters = () => [
    { type: _plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApexChartComponent.prototype, "ids", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApexChartComponent.prototype, "options", void 0);
ApexChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apex-chart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./apex-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/apex-chart/apex-chart.component.html")).default
    })
], ApexChartComponent);



/***/ }),

/***/ "./src/app/components/sofbox/charts/high-chart/high-chart.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sofbox/charts/high-chart/high-chart.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HighChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighChartComponent", function() { return HighChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../plugins.service */ "./src/app/plugins.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);




let HighChartComponent = class HighChartComponent {
    constructor(plugins) {
        this.plugins = plugins;
    }
    ngOnInit() {
        setTimeout(() => {
            if (this.ids !== undefined) {
                highcharts__WEBPACK_IMPORTED_MODULE_3__["chart"](this.ids, this.options);
            }
        }, 500);
    }
};
HighChartComponent.ctorParameters = () => [
    { type: _plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HighChartComponent.prototype, "ids", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HighChartComponent.prototype, "options", void 0);
HighChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-high-chart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./high-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/charts/high-chart/high-chart.component.html")).default
    })
], HighChartComponent);



/***/ }),

/***/ "./src/app/components/sofbox/full-calendar/full-calendar.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sofbox/full-calendar/full-calendar.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @import '~@fullcalendar/core/main.css';\n@import '~@fullcalendar/daygrid/main.css';\n.fc-day-grid-event {color: white!important;} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2Zib3gvZnVsbC1jYWxlbmRhci9mdWxsLWNhbGVuZGFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzhDQUU4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29mYm94L2Z1bGwtY2FsZW5kYXIvZnVsbC1jYWxlbmRhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCAnfkBmdWxsY2FsZW5kYXIvY29yZS9tYWluLmNzcyc7XG5AaW1wb3J0ICd+QGZ1bGxjYWxlbmRhci9kYXlncmlkL21haW4uY3NzJztcbi5mYy1kYXktZ3JpZC1ldmVudCB7Y29sb3I6IHdoaXRlIWltcG9ydGFudDt9ICovXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/sofbox/full-calendar/full-calendar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/sofbox/full-calendar/full-calendar.component.ts ***!
  \****************************************************************************/
/*! exports provided: FullCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullCalendarComponent", function() { return FullCalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.esm.js");




let FullCalendarComponent = class FullCalendarComponent {
    constructor() {
        this.calendarWeekends = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"]];
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FullCalendarComponent.prototype, "calendarWeekends", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FullCalendarComponent.prototype, "calendarPlugins", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FullCalendarComponent.prototype, "calendarEvents", void 0);
FullCalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-full-calendar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./full-calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/full-calendar/full-calendar.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./full-calendar.component.css */ "./src/app/components/sofbox/full-calendar/full-calendar.component.css")).default]
    })
], FullCalendarComponent);



/***/ }),

/***/ "./src/app/components/sofbox/loaders/loader1/loader.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/sofbox/loaders/loader1/loader.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/loaders/loader1/loader.component.html")).default
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/components/sofbox/menus/list-style1/list-style1.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/sofbox/menus/list-style1/list-style1.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListStyle1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStyle1Component", function() { return ListStyle1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../plugins.service */ "./src/app/plugins.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ListStyle1Component = class ListStyle1Component {
    constructor(plugins, router) {
        this.plugins = plugins;
        this.router = router;
        this.listClass = 'iq-menu';
        this.collapseName = '';
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
    }
    activeLink(item) {
        return this.plugins.getActiveLink(item, this.router.url);
    }
};
ListStyle1Component.ctorParameters = () => [
    { type: _plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListStyle1Component.prototype, "listClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListStyle1Component.prototype, "listItems", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListStyle1Component.prototype, "collapseOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListStyle1Component.prototype, "collapseName", void 0);
ListStyle1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-style1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-style1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/menus/list-style1/list-style1.component.html")).default
    })
], ListStyle1Component);



/***/ }),

/***/ "./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavBar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar1Component", function() { return NavBar1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");







let NavBar1Component = class NavBar1Component {
    constructor(store, user, auth, router) {
        this.store = store;
        this.user = user;
        this.auth = auth;
        this.router = router;
        this.countTicket = 0;
        this.keyword = 'name';
        this.searchList = [];
        this.userName = '';
        this.photo = this.user.photo;
    }
    ngOnInit() {
        this.userData = this.auth.userData;
        this.user.search().subscribe(res => {
            this.searchList = res;
            console.log(res);
        });
        this.user.getProfile(this.userData).subscribe(res => {
            this.userName = res['name'];
        });
        this.photo = this.user.photo;
        this.user.getCart();
        setInterval(() => {
            this.countTicket = this.user.getCatItem().length;
        }, 200);
        // this.store.subscribe(state => (this.countTicket = state.ticketBooking.ticketCount));
    }
    hello($event) {
        console.log($event);
    }
    clickPaymentShow(countTicketBooking) {
        if (countTicketBooking > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('.iq-sidebar-right-menu').addClass('film-side');
        }
    }
    selectEvent(item) {
        this.router.navigate([`/products/itemdetail/${item.id}`]);
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        console.log(item);
        // do something with selected item
    }
    onChangeSearch(val) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }
    search($event) {
        setTimeout(() => {
            window.location.reload();
        }, 100);
        // console.log($event.target.value)
        this.router.navigate([`/search/${$event.target.value}`]);
    }
    onFocused(e) {
        // do something when input is focused
    }
    logout() {
        this.auth.logoutUser();
    }
};
NavBar1Component.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavBar1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nav-bar1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.html")).default
    })
], NavBar1Component);



/***/ }),

/***/ "./src/app/components/sofbox/scroll-top/scroll-top.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/sofbox/scroll-top/scroll-top.component.ts ***!
  \**********************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let ScrollTopComponent = class ScrollTopComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollTop() {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('body,html').animate({
            scrollTop: 0
        }, 800);
    }
};
ScrollTopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scroll-top',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./scroll-top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/scroll-top/scroll-top.component.html")).default
    })
], ScrollTopComponent);



/***/ }),

/***/ "./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.ts ***!
  \******************************************************************************/
/*! exports provided: SideBar1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBar1Component", function() { return SideBar1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _fake_api_json_SideBar_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../fake-api/json/SideBar.json */ "./src/app/fake-api/json/SideBar.json");
var _fake_api_json_SideBar_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../fake-api/json/SideBar.json */ "./src/app/fake-api/json/SideBar.json", 1);




let SideBar1Component = class SideBar1Component {
    constructor(apiService) {
        this.apiService = apiService;
        this.menuItems = _fake_api_json_SideBar_json__WEBPACK_IMPORTED_MODULE_3__.data;
    }
    ngOnInit() {
        this.getMenuItems();
    }
    getMenuItems() {
        /*this.apiService.getMenuList().subscribe((data: {}) => {
          this.menuItems = data;
        });*/
    }
};
SideBar1Component.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
SideBar1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-bar1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./side-bar1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.html")).default,
    })
], SideBar1Component);



/***/ }),

/***/ "./src/app/components/sofbox/sofbox.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/sofbox/sofbox.module.ts ***!
  \****************************************************/
/*! exports provided: SofboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SofboxModule", function() { return SofboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loaders/loader1/loader.component */ "./src/app/components/sofbox/loaders/loader1/loader.component.ts");
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scroll-top/scroll-top.component */ "./src/app/components/sofbox/scroll-top/scroll-top.component.ts");
/* harmony import */ var _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bars/nav-bar1/nav-bar1.component */ "./src/app/components/sofbox/nav-bars/nav-bar1/nav-bar1.component.ts");
/* harmony import */ var _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-bars/side-bar1/side-bar1.component */ "./src/app/components/sofbox/side-bars/side-bar1/side-bar1.component.ts");
/* harmony import */ var _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/apex-chart/apex-chart.component */ "./src/app/components/sofbox/charts/apex-chart/apex-chart.component.ts");
/* harmony import */ var _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./breadcrumbs/breadcrumb1/breadcrumb1.component */ "./src/app/components/sofbox/breadcrumbs/breadcrumb1/breadcrumb1.component.ts");
/* harmony import */ var _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cards/iq-card/iq-card.component */ "./src/app/components/sofbox/cards/iq-card/iq-card.component.ts");
/* harmony import */ var _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menus/list-style1/list-style1.component */ "./src/app/components/sofbox/menus/list-style1/list-style1.component.ts");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
/* harmony import */ var _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./charts/high-chart/high-chart.component */ "./src/app/components/sofbox/charts/high-chart/high-chart.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tabs/tab-nav/tab-nav.component */ "./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.ts");
/* harmony import */ var _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tabs/tab-content/tab-content.component */ "./src/app/components/sofbox/tabs/tab-content/tab-content.component.ts");
/* harmony import */ var _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./full-calendar/full-calendar.component */ "./src/app/components/sofbox/full-calendar/full-calendar.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
/* harmony import */ var _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./card-with-image/card-with-image.component */ "./src/app/components/sofbox/card-with-image/card-with-image.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");





















let SofboxModule = class SofboxModule {
};
SofboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"],
            _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__["ScrollTopComponent"],
            _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_5__["NavBar1Component"],
            _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_6__["SideBar1Component"],
            _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__["ApexChartComponent"],
            _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_8__["Breadcrumb1Component"],
            _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_9__["IqCardComponent"],
            _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_10__["ListStyle1Component"],
            _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_14__["TabNavComponent"],
            _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_15__["TabContentComponent"],
            _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_12__["HighChartComponent"],
            _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_16__["FullCalendarComponent"],
            _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_18__["CardWithImageComponent"]
        ],
        exports: [
            _loaders_loader1_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"],
            _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_4__["ScrollTopComponent"],
            _nav_bars_nav_bar1_nav_bar1_component__WEBPACK_IMPORTED_MODULE_5__["NavBar1Component"],
            _side_bars_side_bar1_side_bar1_component__WEBPACK_IMPORTED_MODULE_6__["SideBar1Component"],
            _charts_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__["ApexChartComponent"],
            _breadcrumbs_breadcrumb1_breadcrumb1_component__WEBPACK_IMPORTED_MODULE_8__["Breadcrumb1Component"],
            _cards_iq_card_iq_card_component__WEBPACK_IMPORTED_MODULE_9__["IqCardComponent"],
            _menus_list_style1_list_style1_component__WEBPACK_IMPORTED_MODULE_10__["ListStyle1Component"],
            _tabs_tab_nav_tab_nav_component__WEBPACK_IMPORTED_MODULE_14__["TabNavComponent"],
            _tabs_tab_content_tab_content_component__WEBPACK_IMPORTED_MODULE_15__["TabContentComponent"],
            _charts_high_chart_high_chart_component__WEBPACK_IMPORTED_MODULE_12__["HighChartComponent"],
            _full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_16__["FullCalendarComponent"],
            _card_with_image_card_with_image_component__WEBPACK_IMPORTED_MODULE_18__["CardWithImageComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_11__["NgScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_17__["FullCalendarModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_20__["AutocompleteLibModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_19__["CollapseModule"].forRoot()
        ]
    })
], SofboxModule);



/***/ }),

/***/ "./src/app/components/sofbox/tabs/tab-content/tab-content.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sofbox/tabs/tab-content/tab-content.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TabContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContentComponent", function() { return TabContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabContentComponent = class TabContentComponent {
    constructor() {
        this.tabContentClass = 'tab-pane fade';
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabContentComponent.prototype, "tabContentClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabContentComponent.prototype, "tabContentLink", void 0);
TabContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-content',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-content/tab-content.component.html")).default
    })
], TabContentComponent);



/***/ }),

/***/ "./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.ts ***!
  \*********************************************************************/
/*! exports provided: TabNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabNavComponent", function() { return TabNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabNavComponent = class TabNavComponent {
    constructor() {
        this.tabClass = 'nav nav-pills';
        this.tagToggleType = 'pill';
        this.tabNavItems = [];
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabNavComponent.prototype, "tabClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabNavComponent.prototype, "tagToggleType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabNavComponent.prototype, "tabNavItems", void 0);
TabNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-nav',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sofbox/tabs/tab-nav/tab-nav.component.html")).default
    })
], TabNavComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/cart/cart.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/drugstoc_web/cart/cart.component.ts ***!
  \*****************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let CartComponent = class CartComponent {
    constructor(product, auth, router) {
        this.product = product;
        this.auth = auth;
        this.router = router;
        this.dispatch = {
            name: '',
            address: '',
            phone: ''
        };
        this.cartData = [];
    }
    ngOnInit() {
        this.userId = this.auth.userData;
        this.product.getProfile(this.userId).subscribe(res => {
            // console.log(res);
            this.dispatch.name = res['name'];
            this.dispatch.address = res['contact_address'];
            this.dispatch.phone = res['phone'];
            // console.log(this.dispatch, res)
        });
        this.cartData = this.product.getCatItem();
        console.log(this.cartData);
        this.product.updateCat(this.cartData).subscribe(res => {
            console.log(res);
        });
    }
    ngOnDestroy() {
        this.product.updateCat(this.cartData).subscribe(res => {
            console.log(res);
        });
    }
    placeOrder() {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#cart').removeClass('show');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#address').addClass('show');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step1').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step1').addClass('done');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step2').addClass('active');
    }
    decreaseQty(item) {
        if (item.quantity > 0) {
            (item.quantity) -= 1;
        }
        // this.cartData[id].quantity = number;
    }
    increaseQty(item) {
        let i = parseFloat(item.quantity);
        i += 1;
        item.quantity = i;
        console.log(item);
        // this.product.editItemAQuantity()
    }
    removeItem(id) {
        // console.log(id)
        this.product.removeFromCart(id);
        this.cartData = this.product.getCatItem();
    }
    // jQuery('#place-order').click(function(){
    // });
    deliverAddress() {
        // jQuery('#deliver-address').click(function(){
        // });
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#address').removeClass('show');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#payment').addClass('show');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step2').removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step2').addClass('done');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#step3').addClass('active');
    }
    paymentSuccess($event) {
        console.log($event);
        this.make_order();
    }
    paymentFailure() {
    }
    getTotal() {
        let total = 0;
        for (let i = 0; i < this.cartData.length; i++) {
            total += this.cartData[i].list_price * this.cartData[i].quantity;
        }
        this.Total = total;
        return total;
    }
    make_order() {
        const data = this.cartData;
        let items = [];
        for (let i = 0; i < data.length; i++) {
            let obj = {
                name: data[i].name,
                product_id: data[i].id,
                product_uom: 1,
                product_uom_qty: data[i].quantity,
                price_unit: data[i].website_price,
                amount_total: data[i].website_price
            };
            items.push(obj);
        }
        console.log(items);
        this.product.makeOrder(this.userId, items).subscribe((resp) => {
            this.product.emptyCart();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: 'success',
                title: 'Your Order Has been submitted successfully',
                showConfirmButton: false,
            });
            this.router.navigate(['/']);
            console.log(resp);
        });
    }
    paymentInit() {
    }
};
CartComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/cart/cart.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })
], CartComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/home/home-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/drugstoc_web/home/home-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/drugstoc_web/home/home.component.ts");




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/drugstoc_web/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/drugstoc_web/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let HomeComponent = class HomeComponent {
    constructor(apiService, product, toastr, auth) {
        this.apiService = apiService;
        this.product = product;
        this.toastr = toastr;
        this.auth = auth;
        this.optionsData = {
            path: '/assets/images/small/data.json'
        };
        this.optionsData2 = {
            path: '/assets/images/small/data.json'
        };
        this.cartValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.data = [];
        this.loadingItem = true;
        this.loadCatergory = true;
        this.sumLoading = [];
        this.page = 0;
        this.itemsValue = [];
        this.loading = false;
        this.user = {
            name: 'loading....',
            phone: 'loading....',
            address: 'loading....'
        };
        this.sumaryItem = [];
        this.invoice = [];
        this.newdata = [];
        this.cartItem = [];
        this.data.length = 21;
        this.sumLoading.length = 3;
        this.itemsValue.length = 10;
    }
    animationCreated(animationItem) { }
    ngOnInit() {
        this.userId = this.auth.userData;
        setInterval(() => {
            this.image = this.product.photo;
        }, 200);
        this.getSummary();
        this.product.get_recommended_products().subscribe((resp) => {
            console.log(resp);
            this.loadingItem = false;
            // this.loading = false;
            this.data = resp;
        });
        this.product.getProfile(this.userId).subscribe((resp) => {
            console.log(resp);
            this.user.name = resp['name'];
            this.user.address = resp['contact_address'];
            this.user.phone = resp['mobile'];
        });
        this.cartItem = this.product.getCatItem();
    }
    decreaseQty(item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        }
        // this.cartData[id].quantity = number;
    }
    increaseQty(item) {
        if (item.quantity) {
            item.quantity += 1;
        }
        else {
            item.quantity = 1;
        }
        console.log(item);
    }
    getSummary() {
        let arr = [];
        this.product.getMyDrugstoc(this.userId).subscribe(resp => {
            arr = resp;
            this.product.getCategory().subscribe(res => {
                let summary = [];
                for (let i = 0; i < res['length']; i++) {
                    let m = arr.filter(a => a.categ_id[1] === res[i].name);
                    let data = {
                        category: res[i].name,
                        number: m.length,
                        percentage: (m.length / resp['length']) * 100
                    };
                    summary.push(data);
                }
                summary.sort((a, b) => (a.number > b.number) ? -1 : ((b.number > a.number) ? 1 : 0));
                this.sumaryItem = summary.slice(0, 3);
                this.loadCatergory = false;
            });
        });
    }
    ChangingValue($event, item) {
        item.quantity = $event.target.value;
        console.log($event.target.value, item);
    }
    addToCat(item) {
        if (!item.quantity) {
            item.quantity = 1;
        }
        console.log(item.quantity);
        this.product.addToCart(item);
        this.cartValue.emit(this.cartItem.length);
        this.toastr.info('Item has been added to cart', 'Added to Cart');
    }
    check_already_in_cart(id) {
        if (this.cartItem.length === 0) {
            return false;
        }
        else {
            for (let i = 0; i < this.cartItem.length; i++) {
                if (id === this.cartItem[i].id) {
                    return true;
                }
            }
            return false;
        }
    }
    onScroll() {
        this.page++;
        this.loading = true;
        this.product.getAllProducts(this.page).subscribe((res) => {
            this.newdata = res;
            this.loading = false;
            let unqie = [...this.data, ...this.newdata];
            const categories = [...new Set(unqie.map(bill => bill.id))];
            console.log(categories);
            // let may = [...new Set(unqie)];
            this.data = unqie;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HomeComponent.prototype, "cartValue", void 0);
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/home/home.component.html")).default
    })
], HomeComponent);

function compare(a, b) {
    if (a.last_nom < b.last_nom) {
        return -1;
    }
    if (a.last_nom > b.last_nom) {
        return 1;
    }
    return 0;
}


/***/ }),

/***/ "./src/app/drugstoc_web/home/home.module.ts":
/*!**************************************************!*\
  !*** ./src/app/drugstoc_web/home/home.module.ts ***!
  \**************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/drugstoc_web/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/drugstoc_web/home/home-routing.module.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/__ivy_ngcc__/fesm2015/ngx-lottie.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/__ivy_ngcc__/fesm2015/ngx-scrollbar.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/__ivy_ngcc__/esm2015/ngx-wow.js");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var src_app_components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/sofbox/sofbox.module */ "./src/app/components/sofbox/sofbox.module.ts");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
















let HomeModule = class HomeModule {
};
HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollModule"],
            src_app_components_sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_14__["SofboxModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_9__["LottieModule"].forRoot({ player: src_app_app_module__WEBPACK_IMPORTED_MODULE_13__["playerFactory"] }),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"],
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["NgScrollbarModule"],
            ngx_wow__WEBPACK_IMPORTED_MODULE_12__["NgwWowModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_11__["SlickCarouselModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__["NgxSkeletonLoaderModule"],
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/drugstoc_web/layout/layout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/drugstoc_web/layout/layout.component.ts ***!
  \*********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_plugins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/plugins.service */ "./src/app/plugins.service.ts");



let LayoutComponent = class LayoutComponent {
    constructor(plugins) {
        this.plugins = plugins;
    }
    ngOnInit() {
        const current = this;
        setTimeout(() => {
            current.plugins.index();
            current.plugins.dashboardIndex();
        }, 200);
    }
    ngOnChanges(c) {
        console.log(c);
    }
    getValue($event) {
        console.log($event);
    }
};
LayoutComponent.ctorParameters = () => [
    { type: src_app_plugins_service__WEBPACK_IMPORTED_MODULE_2__["PluginsService"] }
];
LayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/layout/layout.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/my-drugstoc/my-drugstoc.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/drugstoc_web/my-drugstoc/my-drugstoc.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyDrugstocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDrugstocComponent", function() { return MyDrugstocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");





let MyDrugstocComponent = class MyDrugstocComponent {
    constructor(product, auth, toastr) {
        this.product = product;
        this.auth = auth;
        this.toastr = toastr;
        this.data = [];
        this.category = [];
        this.listData = [];
        this.loading = true;
        this.cartItem = [];
        this.data2 = [];
        this.chart1 = {
            chart: {
                height: 308,
                type: 'line',
                toolbar: {
                    show: false
                }
            },
            series: [{
                    name: 'Products',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                }],
            stroke: {
                width: [0, 4]
            },
            title: {
                show: false
            },
            legend: {
                show: false
            },
            // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            colors: ['#0084ff', '#00ca00'],
            xaxis: {
                labels: {
                    show: false,
                },
                type: 'datetime'
            },
            yaxis: [{
                    labels: {
                        show: false,
                    }
                }, {
                    labels: {
                        show: false,
                    }
                }],
        };
        this.data2.length = 21;
    }
    ngOnInit() {
        this.userId = this.auth.userData;
        this.product.getMyDrugstoc(this.userId).subscribe(res => {
            console.log(res);
            this.loading = false;
            this.data = res;
            this.listData = res;
        });
        this.product.getCategory().subscribe(res => {
            console.log(res);
            this.category = res;
        });
        this.cartItem = this.product.getCatItem();
    }
    getNumberInCategory(title) {
        let resp = this.data.filter(a => a.categ_id[1] === title);
        return resp.length;
    }
    getPercentage(title) {
        let resp = this.data.filter(a => a.categ_id[1] === title);
        let amd = (resp.length / this.data.length) * 100;
        return amd;
    }
    changeCatgory(value) {
        let resp = this.listData.filter(a => a.categ_id[1] === value);
        this.data = resp;
    }
    check_already_in_cart(id) {
        if (this.cartItem.length === 0) {
            return false;
        }
        else {
            for (let i = 0; i < this.cartItem.length; i++) {
                if (id === this.cartItem[i].id) {
                    return true;
                }
            }
            return false;
        }
    }
    addToCat(item) {
        item.quantity = 1;
        this.product.addToCart(item);
        this.toastr.info('Item has been added to cart', 'Added to Cart');
    }
};
MyDrugstocComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
MyDrugstocComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-drugstoc',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-drugstoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/my-drugstoc/my-drugstoc.component.html")).default
    })
], MyDrugstocComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/my-invoice/my-invoice.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/drugstoc_web/my-invoice/my-invoice.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInvoiceComponent", function() { return MyInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");




let MyInvoiceComponent = class MyInvoiceComponent {
    constructor(product, auth) {
        this.product = product;
        this.auth = auth;
        this.invoice = [];
        this.loading = true;
        this.data2 = [];
        this.data2.length = 21;
    }
    ngOnInit() {
        this.userId = this.auth.userData;
        this.product.getMyInvoice(this.userId).subscribe(resp => {
            console.log(resp);
            this.loading = false;
            this.invoice = resp;
        });
    }
};
MyInvoiceComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
MyInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-invoice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/my-invoice/my-invoice.component.html")).default
    })
], MyInvoiceComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/my-orders/my-orders.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/drugstoc_web/my-orders/my-orders.component.ts ***!
  \***************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");





let MyOrdersComponent = class MyOrdersComponent {
    constructor(order, auth, toastr) {
        this.order = order;
        this.auth = auth;
        this.toastr = toastr;
        this.data2 = [];
        this.loading = true;
        this.orders = [];
        this.statusClass = '';
        this.data2.length = 21;
    }
    getStatus($msg) {
        console.log($msg);
        $msg = $msg.toLowerCase();
        // tslint:disable-next-line:triple-equals
        if ($msg == 'cancelled') {
            this.statusClass = 'danger';
            // tslint:disable-next-line:triple-equals
        }
        else if ($msg == 'draft') {
            this.statusClass = 'warning';
            // tslint:disable-next-line:triple-equals
        }
        else if ($msg == 'sale') {
            this.statusClass = 'primary';
        }
        else {
            this.statusClass = 'success';
        }
        return this.statusClass;
    }
    getOrderStatus($msg) {
        $msg = $msg.toLowerCase();
        // tslint:disable-next-line:triple-equals
        if ($msg == 'draft') {
            return 'Being Processed';
            // tslint:disable-next-line:triple-equals
        }
        else if ($msg == 'canceled') {
            return 'cancled';
            // tslint:disable-next-line:triple-equals
        }
        else if ($msg == 'sale') {
            return 'Being packed';
        }
        else {
            return 'Dispatched';
        }
    }
    ngOnInit() {
        this.user_id = this.auth.userData;
        this.order.getMyOrders(this.user_id).subscribe(resp => {
            console.log(resp);
            this.loading = false;
            this.orders = resp;
        });
        this.cartItem = this.order.getCatItem();
    }
    check_already_in_cart(id) {
        if (this.cartItem.length === 0) {
            return false;
        }
        else {
            for (let i = 0; i < this.cartItem.length; i++) {
                if (id === this.cartItem[i].id) {
                    return true;
                }
            }
            return false;
        }
    }
    addToCat(item) {
        item.quantity = 1;
        this.order.addToCart(item);
        this.toastr.info('Item has been added to cart', 'Added to Cart');
    }
};
MyOrdersComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
MyOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/my-orders/my-orders.component.html")).default
    })
], MyOrdersComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/per-category-list/per-category-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/drugstoc_web/per-category-list/per-category-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PerCategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerCategoryListComponent", function() { return PerCategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");



let PerCategoryListComponent = class PerCategoryListComponent {
    constructor(list) {
        this.list = list;
        this.loading = true;
        this.data = [];
        this.data2 = [];
        this.data2.length = 40;
    }
    ngOnInit() {
        this.list.per_company().subscribe(res => {
            this.loading = false;
            let arr = [];
            arr = res;
            console.log(arr.sort());
            this.data = arr.sort();
        });
    }
    getImage(name) {
        switch (name) {
            case 'A&D Medical':
                return '../../../assets/images/Manufacturer Names/A_D Medical.png';
            case 'ADH Health Products Limited':
                return '../../../assets/images/Manufacturer Names/ADH Health Products Ltd.png';
            // case 'AQUATIX Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/ADH Health Products Ltd.png'
            case 'Abirot':
                return '../../../assets/images/Manufacturer Names/Abirot.png';
            case 'Abott':
                return '../../../assets/images/Manufacturer Names/Abbott.png';
            // case 'Absorbent':
            //   return '../../../assets/images/Manufacturer Names/Abbott.png'
            case 'Aconitum':
                return '../../../assets/images/Manufacturer Names/Aconitum.png';
            // case 'Adpharm Pharm Nig':
            //   return '../../../assets/images/Manufacturer Names/Abbott.png'
            case 'Afrab-Chem':
                return '../../../assets/images/Manufacturer Names/Afrab-Chem.png';
            case 'Africure':
                return '../../../assets/images/Manufacturer Names/Africure.png';
            case 'Agary Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Agary.png';
            case 'Agewell HealthCare Ltd':
                return '../../../assets/images/Manufacturer Names/Agewell HealthCare Ltd.png';
            // case 'Aiita':
            //   return '../../../assets/images/Manufacturer Names/Agewell HealthCare Ltd.png'
            case 'Ajanta Pharma Ltd':
                return '../../../assets/images/Manufacturer Names/Ajanta Pharma Ltd.png';
            // case 'Al-Tinez':
            //   return '../../../assets/images/Manufacturer Names/Agewell HealthCare Ltd.png'
            case 'Alchemy Medicine Pvt Ltd':
                return '../../../assets/images/Manufacturer Names/Alchemy Medicine Pvt Ltd.png';
            case 'Alcon':
                return '../../../assets/images/Manufacturer Names/Alcon.png';
            case 'Alka-Seltzer':
                return '../../../assets/images/Manufacturer Names/Alka-Seltzer .png';
            case 'Alkem':
                return '../../../assets/images/Manufacturer Names/Alkem.png';
            // case 'Allen & Hanburys':
            //   return '../../../assets/images/Manufacturer Names/Allen & Hanburys.png'
            case 'Almond Ethicals':
                return '../../../assets/images/Manufacturer Names/Almond Ethicals.png';
            case 'Alpha Laboraties':
                return '../../../assets/images/Manufacturer Names/Alpa Laboratories.png';
            case 'Anhui Chengshi Pharmaceuticals ':
                return '../../../assets/images/Manufacturer Names/Anhui Chengshi Pharmaceuticals .png';
            // case 'Answer one':
            //   return '../../../assets/images/Manufacturer Names/Alchemy Medicine Pvt Ltd.png'
            case 'Appeton Health':
                return '../../../assets/images/Manufacturer Names/Appeton Health.png';
            // case 'Aquabloc':
            //   return '../../../assets/images/Manufacturer Names/Aquabloc.png'
            case 'Aristo Pharma':
                return '../../../assets/images/Manufacturer Names/Aristo Pharma.png';
            case 'Artemis Life Sciences':
                return '../../../assets/images/Manufacturer Names/Artemis Life Sciences.png';
            case 'Artepham Co Ltd':
                return '../../../assets/images/Manufacturer Names/Artemis Life Sciences.png';
            case 'AstraZeneca':
                return '../../../assets/images/Manufacturer Names/AstraZenica.png';
            case 'AstraZenica':
                return '../../../assets/images/Manufacturer Names/AstraZenica.png';
            case 'Astrazeneca':
                return '../../../assets/images/Manufacturer Names/AstraZenica.png';
            // case 'Ayo Ayodele Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/AstraZenica.png'
            case 'BAROQUE Pharmaceuticals ltd':
                return '../../../assets/images/Manufacturer Names/BAROQUE Pharmaceuticals ltd.png';
            // case 'BSMith Needles':
            //   return '../../../assets/images/Manufacturer Names/AstraZenica.png'
            // case 'Basic Supplement':
            //   return '../../../assets/images/Manufacturer Names/AstraZenica.png'
            case 'Bayer':
                return '../../../assets/images/Manufacturer Names/Bayers Pharmaceutical.png';
            // case 'Bells Healthcare':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Beximco Pharmaceuticals ':
                return '../../../assets/images/Manufacturer Names/Beximo Pharmaceuticals.png';
            case 'Bharat Biotech':
                return '../../../assets/images/Manufacturer Names/Bharat Biotech.png';
            case 'Bharat Parenterals':
                return '../../../assets/images/Manufacturer Names/Bharat Parenterals.png';
            case 'Biochem Pharma':
                return '../../../assets/images/Manufacturer Names/Biochem Pharma.png';
            case 'Biogate Laboratories':
                return '../../../assets/images/Manufacturer Names/Biogate Laboratories.png';
            // case 'Biopharma Nigeria Limited':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Biosea Sweeter Life':
                return '../../../assets/images/Manufacturer Names/Biosea Sweeter Life.png';
            case 'Biozek Medical':
                return '../../../assets/images/Manufacturer Names/Biozek Medical.png';
            case 'Bliss GVS Pharma':
                return '../../../assets/images/Manufacturer Names/Bliss GVS Pharma.png';
            case 'Boehringer Ingelheim':
                return '../../../assets/images/Manufacturer Names/boehringer-ingelheim-logo-vector.svg';
            case 'Bond Chemical Industries':
                return '../../../assets/images/Manufacturer Names/Bond Chemical Industries.png';
            case 'Boyd Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Boyd Pharmaceuticals.png';
            // case 'Brian Munro Limited ':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Brookes Pharma':
                return '../../../assets/images/Manufacturer Names/Brookes Pharma.png';
            case 'CORE':
                return '../../../assets/images/Manufacturer Names/CORE.png';
            // case 'Carnation':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Carrot Top Drugs':
                return '../../../assets/images/Manufacturer Names/Carrot Top Drugs.png';
            case 'Celogen Generics Pvt. Ltd':
                return '../../../assets/images/Manufacturer Names/Celogen Generics Pvt. Ltd.png';
            case 'Centaur Pharmaceutical Ltd':
                return '../../../assets/images/Manufacturer Names/Centaur Pharmaceutical Ltd.png';
            case 'Centaur Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Centaur Pharmaceutical Ltd.png';
            case 'Chez Resources':
                return '../../../assets/images/Manufacturer Names/Chez Resources.png';
            case 'Chi Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Chi Pharmaceuticals.png';
            case 'Church & Dwight UK Ltd':
                return '../../../assets/images/Manufacturer Names/Church & Dwight UK Ltd.png';
            // case 'Citus Diagnosis':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Clarion Medicals Ltd':
                return '../../../assets/images/Manufacturer Names/Clarion Medicals Ltd.png';
            case 'Codix Pharma':
                return '../../../assets/images/Manufacturer Names/Codix Pharma.png';
            // case 'Colek':
            //   return '../../../assets/images/Manufacturer Names/Codix Pharma.png'
            // case 'Cranraspberry':
            //   return '../../../assets/images/Manufacturer Names/Codix Pharma.png'
            case 'Crookes Healthcare':
                return '../../../assets/images/Manufacturer Names/Crookes Healthcare.png';
            case 'DDD Limited':
                return '../../../assets/images/Manufacturer Names/DDD limited.png';
            case 'DHG Pharma':
                return '../../../assets/images/Manufacturer Names/ DHG Pharma.png';
            case 'DKT International ':
                return '../../../assets/images/Manufacturer Names/DKT international.png';
            // case 'Daewoo Pharm':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Daily Needs Industries':
                return '../../../assets/images/Manufacturer Names/Daily Needs Industries.png';
            case 'Dana Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Dana.png';
            case 'Diatech Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Diatech Pharmaceuticals .png';
            case 'Dongkook Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/  Dongkook Pharmaceuticals.png';
            case "Dr.Reddy's":
                return "../../../assets/images/Manufacturer Names/ Dr.Reddy's .png";
            // case 'Drugfield':
            //   return '../../../assets/images/Manufacturer Names/  Dongkook Pharmaceuticals.png'
            // case 'Drugfield Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Ecomed Pharma Ltd':
                return '../../../assets/images/Manufacturer Names/ Ecomed Pharma Ltd .png';
            case 'Efamol':
                return '../../../assets/images/Manufacturer Names/ Efamol .png';
            case 'Elastoplast':
                return '../../../assets/images/Manufacturer Names/Elastoplast.png';
            // case 'Elbe Pharma':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Embassy Pharmaceutical':
                return '../../../assets/images/Manufacturer Names/ Embassy Pharmaceutical .png';
            case 'Emzor':
                return '../../../assets/images/Manufacturer Names/ Emzor Pharmaceuticals Industries Ltd .png';
            case 'Ensure':
                return '../../../assets/images/Manufacturer Names/ Ensure .png';
            case 'Eurolife':
                return '../../../assets/images/Manufacturer Names/Eurolife.png';
            case 'Evans Baroque ':
                return '../../assets/images/Manufacturer Names/ Evans Baroque Limited .png';
            // case 'Evans Therapeutics':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Evergreen Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Evergreen .png';
            case 'Exeltis Pharmaceutical':
                return '../../../assets/images/Manufacturer Names/Exeltis Pharmaceutical.png';
            case 'FAES FARMA':
                return '../../../assets/images/Manufacturer Names/ FAES FARMA .png';
            case 'Farmex Meyer':
                return '../../../assets/images/Manufacturer Names/Farmex meyer Limited.png';
            case 'Fidson':
                return '../../../assets/images/Manufacturer Names/ Fidson Healthcare Plc .png';
            case 'Fiterman Pharma':
                return '../../../assets/images/Manufacturer Names/ Fiterman Pharma .png';
            case 'Future Biotics':
                return '../../../assets/images/Manufacturer Names/ Future Biotics .png';
            case 'Fyodor Biotechnologies':
                return '../../../assets/images/Manufacturer Names/ Fyodor Biotechnologies .png';
            case 'G.R Lane HealthCare Products':
                return '../../../assets/images/Manufacturer Names/ G.R Lane HealthCare Products .png';
            case 'GSK':
                return '../../../assets/images/Manufacturer Names/ GSK .png';
            case 'GainWorld':
                return '../../../assets/images/Manufacturer Names/GainWorld.png';
            case 'Gedeon Richter':
                return '../../../assets/images/Manufacturer Names/  Gedeon Richter .png';
            case 'Gemini':
                return '../../../assets/images/Manufacturer Names/ Gemini .png';
            case 'Geneith Pharm Limited':
                return '../../../assets/images/Manufacturer Names/ Geneith Pharm Limited .png';
            case 'Generix Global':
                return '../../../assets/images/Manufacturer Names/  Generix Globa .png';
            case 'Getz Pharma':
                return '../../../assets/images/Manufacturer Names/ Getz Pharma  .png';
            case 'Ginsana':
                return '../../../assets/images/Manufacturer Names/ Ginsana .png';
            // case 'Gland':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Globela Pharm Pvt. Ltd.':
                return '../../../assets/images/Manufacturer Names/ Globela Pharm Pvt. Ltd. .png';
            case 'Greenlife Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/  Greenlife Pharmaceuticals .png';
            case 'HOVID':
                return '../../../assets/images/Manufacturer Names/HOVID.png';
            case 'Haliborange':
                return '../../../assets/images/Manufacturer Names/  Haliborange .png';
            // case 'Hameln':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Hangzhou Qingyuan Medical Equipment Tech Ltd ':
                return '../../../assets/images/Manufacturer Names/  Hangzhou Qingyuan Medical Equipment Tech Ltd  .png';
            case 'Hanlim Pharm':
                return '../../../assets/images/Manufacturer Names/ Hanlim Pharm .png';
            // case 'Healflon':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            // case 'Health Check':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Health Forever Limited':
                return '../../../assets/images/Manufacturer Names/Health Forever Limited.png';
            // case 'HealthCheck':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'Healthquipng':
                return '../../../assets/images/Manufacturer Names/Healthquipng.png';
            // case 'Hemeln Pharms':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'Holland and Barrett':
                return '../../../assets/images/Manufacturer Names/ Holland and Barrett .png';
            case 'IPCA Laboratories':
                return '../../../assets/images/Manufacturer Names/ Ipca Laboratories .png';
            // case 'Immunecare':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'Indus Life Sciences':
                return '../../../assets/images/Manufacturer Names/Indus Life Sciences.png';
            case 'Innotech Laboratories':
                return '../../../assets/images/Manufacturer Names/ Innotech Laboratories .png';
            // case 'Ivee Aqua EPZ Ltd':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'JIZIKI':
                return '../../../assets/images/Manufacturer Names/ JIZIKI .png';
            case 'Janssen':
                return '../../../assets/images/Manufacturer Names/Janssen.png';
            case 'Jawa International ':
                return '../../../assets/images/Manufacturer Names/ Jawa International Limited .png';
            case 'Jiangsu Pengyao Pharmaceuticals Co. Ltd':
                return '../../../assets/images/Manufacturer Names/  Jiangsu Pengyao Pharmaceuticals Co. Ltd .png';
            case 'Jiangxi Xier Kangtai Pharmaceutical':
                return '../../../assets/images/Manufacturer Names/ Jiangxi Xier Kangtai Pharmaceutical .png';
            case 'Johnson & Johnson':
                return '../../../assets/images/Manufacturer Names/ Johnson and Johnson Limited .png';
            case 'Joswe Medical':
                return '../../../assets/images/Manufacturer Names/ Joswe Medical .png';
            case 'Juhel':
                return '../../../assets/images/Manufacturer Names/ Juhel .png';
            // case 'KIMCO':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'Kalms':
                return '../../../assets/images/Manufacturer Names/ Kalms .png';
            case 'Kendy Ltd':
                return '../../../assets/images/Manufacturer Names/ Kendy Ltd .png';
            case 'Kimbery Clark':
                return '../../../assets/images/Manufacturer Names/ Kimbery Clark .png';
            case 'KingLion':
                return '../../../assets/images/Manufacturer Names/Kinglion Pharmaceuticals.png';
            case 'Korea Pharma Co':
                return '../../../assets/images/Manufacturer Names/  Korea Pharma Co .png';
            case 'Korlyns Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Korlyns Pharmaceuticals .png';
            case 'Labacon':
                return '../../../assets/images/Manufacturer Names/ Labacon .png';
            case 'Laborate Pharmaceuticals Ltd':
                return '../../../assets/images/Manufacturer Names/ Laborate Pharmaceuticals Ltd .png';
            case 'Lane Health Products':
                return '../../../assets/images/Manufacturer Names/ Lane Health Products .png';
            // case 'Lavus Investment':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'LefasPharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Lefas Pharmaceuticals .png';
            case 'Lifesign Medical':
                return '../../../assets/images/Manufacturer Names/  Lifesign Medical .gif';
            case 'Lilly Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Lilly Medical .png';
            case 'Lincoln Parenteral Limited':
                return '../../../assets/images/Manufacturer Names/ Lincoln Parenteral Limited .png';
            case 'M & B Pharma':
                return '../../../assets/images/Manufacturer Names/M & B Pharma.png';
            // case 'M.P.I Pharmaceutica GmbH':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'MIMS':
                return '../../../assets/images/Manufacturer Names/ MIMS .png';
            case 'MSG company':
                return '../../../assets/images/Manufacturer Names/ MSG company .png';
            case 'MSN Laboratories':
                return '../../../assets/images/Manufacturer Names/MSN Laboratories.png';
            case 'MYK':
                return '../../../assets/images/Manufacturer Names/ MYK .png';
            case 'Marcson Healthcare':
                return '../../../assets/images/Manufacturer Names/  Marcson Healthcare .png';
            case 'Mark Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Mark Pharmaceuticals .png';
            case 'Martindale Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Martindale Pharmaceuticals .png';
            case 'Mass Pharma Ltd':
                return '../../../assets/images/Manufacturer Names/ Mass Pharma Ltd .png';
            case 'Maxivision':
                return '../../../assets/images/Manufacturer Names/ Maxivision .png';
            case 'McNeil Products Limited':
                return '../../../assets/images/Manufacturer Names/ McNeil Products Limited .gif';
            case 'McW Healthcare':
                return '../../../assets/images/Manufacturer Names/McW Healthcare.png';
            case 'Mecure Industries':
                return '../../../assets/images/Manufacturer Names/ Mecure Industries .png';
            case 'Medi Scan':
                return '../../../assets/images/Manufacturer Names/  Medi Scan .png';
            case 'Medicom Healthcare Ltd':
                return '../../../assets/images/Manufacturer Names/ Medicom Healthcare Ltd .png';
            case 'Medisure':
                return '../../../assets/images/Manufacturer Names/ Medisure .png';
            case 'Medop Healthcare':
                return '../../../assets/images/Manufacturer Names/Medop Healthcare.png';
            case 'Medreich':
                return '../../../assets/images/Manufacturer Names/ Medreich .png';
            case 'Mega Lifescience Nigeria Ltd':
                return '../../../assets/images/Manufacturer Names/  Mega Lifescience Nigeria Ltd .png';
            case 'Mentholatum Company Ltd':
                return '../../../assets/images/Manufacturer Names/ Mentholatum Company Ltd .png';
            case 'Merck':
                return '../../../assets/images/Manufacturer Names/ Merck .png';
            case 'Merit':
                return '../../../assets/images/Manufacturer Names/ Merit .png';
            // case 'Mic-Micro labs':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'Micro Nova':
                return '../../../assets/images/Manufacturer Names/ Micro Nova Pharmaceuticals .png';
            case 'Micropoint Bioscience':
                return '../../../assets/images/Manufacturer Names/ Micropoint Bioscience .png';
            case 'Mopson Pharmaceutical':
                return '../../../assets/images/Manufacturer Names/Mopson Pharmaceutical.png';
            case 'Moxie':
                return '../../../assets/images/Manufacturer Names/ Moxie .png';
            case 'Mundi Pharma':
                return '../../../assets/images/Manufacturer Names/Mundi Pharma.png';
            // case 'NGC PLC':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case '"Nanjing Bajingyu Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Nanjing Bajingyu Pharmaceuticals .gif';
            // case 'Nature Care':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case "Nature's Field":
                return ".../../../assets/images/Manufacturer Names/Nature's Field.png";
            case "Nature's Way":
                return "../../../assets/images/Manufacturer Names/Nature's Way.png";
            case 'Nectar Healthcare Ltd':
                return '../../../assets/images/Manufacturer Names/Nectar Healthcare Ltd.png';
            case 'Neimeth':
                return '../../../assets/images/Manufacturer Names/ Neimeth .png';
            case 'Nemel Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/  Nemel Pharmaceuticals .png';
            case 'New Healthway Company':
                return '../../../assets/images/Manufacturer Names/   New Healthway Company .png';
            case 'New Height Pharma Distribution':
                return '../../../assets/images/Manufacturer Names/New Height Pharma Distribution.png';
            case 'Nino Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Nino Pharmaceuticals .png';
            case 'Nitin Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Nitin Pharmaceuticals .png';
            // case 'Novartis':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'Novo Nordisk Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Novo Nordisk Pharmaceutical.png';
            // case 'Nuestra':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'Oak-Faith Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Oak-Faith Pharmaceuticals.png';
            // case 'Oakleaf Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
            case 'Oculus Pharmacare':
                return '../../../assets/images/Manufacturer Names/ Oculus Pharmacare .png';
            case 'Ofidy Global':
                return '../../../assets/images/Manufacturer Names/ Ofidy Global .png';
            case 'Olive Healthcare':
                return '../../../assets/images/Manufacturer Names/ Olive Healthcare .png';
            case 'Olpharm Nigeria':
                return '../../../assets/images/Manufacturer Names/ Olpharm Nigeria .png';
            case 'Omega Pharma Limited':
                return '../../../assets/images/Manufacturer Names/ Omega Pharma Limited .png';
            case 'Optrex':
                return '../../../assets/images/Manufacturer Names/ Optrex .png';
            case 'Osang Healthcare':
                return '../../../assets/images/Manufacturer Names/ Osang Healthcare .png';
            // case 'POM':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            // case 'Parke Davis and co.':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'PeakPharm':
                return '../../../assets/images/Manufacturer Names/ PeakPharm .png';
            // case 'Pemason Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Perigo':
                return '../../../assets/images/Manufacturer Names/ Perigo .png';
            case 'Pfizer':
                return '../../../assets/images/Manufacturer Names/ Pfizer .png';
            case 'Pfizer Consumer Healthcare':
                return '../../../assets/images/Manufacturer Names/ Pfizer Consumer Healthcare .png';
            case 'Phamatex Industries':
                return '../../../assets/images/Manufacturer Names/ Phamatex Industries .png';
            case 'Pharma Ethics ':
                return '../../../assets/images/Manufacturer Names/ Pharma Ethics  .png';
            case 'Pharma Max':
                return '../../../assets/images/Manufacturer Names/ Pharma Max .png';
            case 'Pharma-Deko PLC':
                return '../../../assets/images/Manufacturer Names/ Pharma Deko .png';
            // case 'Pharmacy Plus':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            // case 'Pharmaton':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Pinnacle Health Pharm Ltd':
                return '../../../assets/images/Manufacturer Names/ Pinnacle Health Pharm Ltd .png';
            case 'Plush Organics':
                return '../../../assets/images/Manufacturer Names/ Plush Organics .png';
            // case 'Popular Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Prevail':
                return '../../../assets/images/Manufacturer Names/ Prevail .svg';
            case 'Prisma Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Prisma Pharmaceuticals .png';
            case 'Procter & Gamble ':
                return '../../../assets/images/Manufacturer Names/ Procter & Gamble .png';
            case 'Pulse Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Pulse Pharmaceuticals .png';
            // case 'Qualiphar':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'RICH RESOURCE GLOBAL SUPPLY CHAIN LTD':
                return '../../../assets/images/Manufacturer Names/   RICH RESOURCE GLOBAL SUPPLY CHAIN LTD .png';
            // case 'Reagan Remedies':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Reals Pharmaceuticals Limited':
                return '../../../assets/images/Manufacturer Names/ Reals Pharmaceuticals Limited .png';
            case 'Reckitt Benckiser':
                return '../../../assets/images/Manufacturer Names/Reckitt Beckinser.png';
            // case 'Reload':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Reproaid':
                return '../../../assets/images/Manufacturer Names/ Reproaid .png';
            case 'Roche':
                return '../../../assets/images/Manufacturer Names/ Roche .png';
            case 'Rohto Pharmaceutical Company':
                return '../../../assets/images/Manufacturer Names/  Rohto Pharmaceutical Company .png';
            case 'Rossmax Swiss GmbH':
                return '../../../assets/images/Manufacturer Names/ Rossmax Swiss GmbH .svg';
            // case 'Rotex Medica':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Ruzu Herbal Products':
                return '../../../assets/images/Manufacturer Names/ Ruzu Herbal Products .png';
            case 'SD Biosensor':
                return '../../../assets/images/Manufacturer Names/ SD Biosensor .png';
            case 'SKG Pharma Limited':
                return '../../../assets/images/Manufacturer Names/ SKG Pharma Limited .png';
            case 'SKT Healthcare':
                return '../../../assets/images/Manufacturer Names/ SKT Healthcare .png';
            case 'Saffron':
                return '../../../assets/images/Manufacturer Names/Saffron.png';
            // case 'Safi':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Sagar Vitaceutical Nig Ltd':
                return '../../../assets/images/Manufacturer Names/ Sagar Vitaceutical Nig Ltd .png';
            case 'Sam Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Sam Pharmaceuticals .gif';
            case 'Sanofi':
                return '../../../assets/images/Manufacturer Names/Sanofi.png';
            case 'Sarantis':
                return '../../../assets/images/Manufacturer Names/ Sarantis .png';
            // case 'Saro Lifecare ':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Seagreen Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/  Seagreen Pharmaceuticals .png';
            case 'Septona':
                return '../../../assets/images/Manufacturer Names/ Septona .png';
            case 'Serum Institute Of India':
                return '../../../assets/images/Manufacturer Names/Serum Institute Of India.png';
            case 'Servier':
                return '../../../assets/images/Manufacturer Names/ Servier .png';
            case 'Seven Seas':
                return '../../../assets/images/Manufacturer Names/ Seven Seas .png';
            case 'Shalina Health Care Nigeria Limited':
                return '../../../assets/images/Manufacturer Names/ Shalina HealthCare Nigeria Limited .png';
            case 'Shalina Healthcare':
                return '../../../assets/images/Manufacturer Names/ Shalina HealthCare Nigeria Limited .png';
            case 'Sii':
                return '../../../assets/images/Manufacturer Names/ Sii .png';
            case 'Silver Healthcare ':
                return '../../../assets/images/Manufacturer Names/ Silver Healthcare  .png';
            // case 'Society for Family Health':
            //   return '../../../assets/images/Manufacturer Names/ Seven Seas .png'
            case 'Sri Trang':
                return '../../../assets/images/Manufacturer Names/Sri Trang.png';
            case 'Standard Generic':
                return '../../../assets/images/Manufacturer Names/  Standard Generics .png';
            case 'Sterling Drugs':
                return '../../../assets/images/Manufacturer Names/ Sterling Drugs .png';
            case 'Strides Shasun':
                return '../../../assets/images/Manufacturer Names/Strides Shasun.png';
            case 'Sumitomo Chemical Company':
                return '../../../assets/images/Manufacturer Names/sumitomo chemical.png';
            // case 'Sure Health & Beauty Ltd':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            // case 'Swipha':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Swiss Precision Diagnostics Gmb':
                return '../../../assets/images/Manufacturer Names/ Swiss Precision Diagnostics GmbH .png';
            // case 'Taylek Drugs':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            // case 'Teva':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'The Mentholatum Company Ltd':
                return '../../../assets/images/Manufacturer Names/ The Mentholatum Company Ltd .png';
            case 'Thornton and Ross Ltd':
                return '../../../assets/images/Manufacturer Names/ Thornton and Ross Ltd .png';
            case 'Tiger Balm':
                return '../../../assets/images/Manufacturer Names/ Tiger Balm .png';
            // case 'Titan Natural Ltd':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Tricare Pharma':
                return '../../../assets/images/Manufacturer Names/ Tricare Pharma .png';
            case 'Tuyil Pharm Limited':
                return '../../../assets/images/Manufacturer Names/ Tuyil Pharm Limited .png';
            case 'U-Mec':
                return '../../../assets/images/Manufacturer Names/ U-Mec .png';
            case 'UCB Pharma Ltd.':
                return '../../../assets/images/Manufacturer Names/ UCB Pharma Ltd. .png';
            case 'UST Corporation':
                return '../../../assets/images/Manufacturer Names/ UST Corporation .png';
            case 'Uni-medical Healthcare':
                return '../../../assets/images/Manufacturer Names/ Uni-medical Healthcare .png';
            case 'Unichem':
                return '../../../assets/images/Manufacturer Names/ Unichem.png';
            // case 'Unicure Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/ Unicure Pharmaceuticals .png'
            case 'Union Swiss':
                return '../../../assets/images/Manufacturer Names/ Union_Swiss.png';
            case 'Unique Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Unique Pharmaceuticals Limited .png';
            case 'Uvex':
                return '../../../assets/images/Manufacturer Names/ Uvex .png';
            case 'VSSCO':
                return '../../../assets/images/Manufacturer Names/ VSSCO .png';
            case 'Valupak':
                return '../../../assets/images/Manufacturer Names/ Valupak .png';
            case 'Vins':
                return '../../../assets/images/Manufacturer Names/ Vins .png';
            case 'Vita Care PVT LTD':
                return '../../../assets/images/Manufacturer Names/ Vita Care PVT LTD .png';
            case 'Vitabiotics':
                return '../../../assets/images/Manufacturer Names/ Vitabiotics .png';
            case 'Vitane':
                return '../../../assets/images/Manufacturer Names/  Vitane .png';
            case 'Vixa Pharmaceutical':
                return '../../../assets/images/Manufacturer Names/ Vixa Pharmaceutical .png';
            case 'Wenzhou Classic Packing Ltd':
                return '../../../assets/images/Manufacturer Names/ Wenzhou Classic Packing Ltd .png';
            // case 'White House':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Win-Medicare':
                return '../../../assets/images/Manufacturer Names/Win-Medicare.png';
            case 'Wockhardt':
                return '../../../assets/images/Manufacturer Names/ Wockhardt .png';
            case 'Zentiva':
                return '../../../assets/images/Manufacturer Names/Zentiva.png';
            case 'Zolon Healthcare':
                return '../../../assets/images/Manufacturer Names/ Zolon Healthcare .png';
            case ' Akums Drugs & Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Akums Drugs _ Pharmaceuticals.png';
            default:
                return 'assets/images/no_image2.png';
        }
    }
};
PerCategoryListComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
PerCategoryListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-per-category-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./per-category-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/per-category-list/per-category-list.component.html")).default,
    })
], PerCategoryListComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/per-category/per-category.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/drugstoc_web/per-category/per-category.component.ts ***!
  \*********************************************************************/
/*! exports provided: PerCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerCategoryComponent", function() { return PerCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");




let PerCategoryComponent = class PerCategoryComponent {
    constructor(product, toastr) {
        this.product = product;
        this.toastr = toastr;
        this.loading = true;
        this.page = 0;
        this.category = 'all';
        this.categories = [];
        this.data = [];
        this.data2 = [];
        this.newdata = [];
        this.data2.length = 21;
    }
    ngOnInit() {
        this.product.getCategory().subscribe(res => {
            this.categories = res;
        });
        this.product.getAllProducts(this.page).subscribe(resp => {
            console.log(resp);
            this.loading = false;
            this.data = resp;
        });
        this.cartItem = this.product.getCatItem();
    }
    changeCatgory(event) {
        this.page = 0;
        this.category = event;
        this.loading = true;
        this.product.getProductCategory(event, this.page).subscribe(res => {
            this.loading = false;
            this.data = res;
            console.log(res);
        });
    }
    check_already_in_cart(id) {
        if (this.cartItem.length === 0) {
            return false;
        }
        else {
            for (let i = 0; i < this.cartItem.length; i++) {
                if (id === this.cartItem[i].id) {
                    return true;
                }
            }
            return false;
        }
    }
    addToCat(item) {
        item.quantity = 1;
        this.product.addToCart(item);
        this.toastr.info('Item has been added to cart', 'Added to Cart');
    }
    onScroll() {
        this.page++;
        console.log(this.page);
        if (this.category === 'all') {
            this.product.getAllProducts(this.page).subscribe(resp => {
                this.newdata = resp;
                this.data = [...this.data, ...this.newdata];
            });
        }
        else {
            this.product.getProductCategory(this.category, this.page).subscribe(res => {
                this.newdata = res;
                this.data = [...this.data, ...this.newdata];
            });
        }
    }
};
PerCategoryComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
PerCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-per-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./per-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/per-category/per-category.component.html")).default,
    })
], PerCategoryComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/per-products/per-products.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/drugstoc_web/per-products/per-products.component.ts ***!
  \*********************************************************************/
/*! exports provided: PerProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerProductsComponent", function() { return PerProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");





let PerProductsComponent = class PerProductsComponent {
    constructor(product, route, toastr) {
        this.product = product;
        this.route = route;
        this.toastr = toastr;
        this.data = [];
        this.loading = true;
        this.page = 0;
        this.data2 = [];
        this.title = '';
        this.optionsData2 = {
            path: '/assets/images/small/data2.json'
        };
        this.data2.length = 21;
    }
    ngOnInit() {
        this.title = this.route.snapshot.params.id;
        this.product.lis_per_company(this.title).subscribe(resp => {
            this.loading = false;
            console.log(resp);
            this.data = resp;
        });
        this.cartItem = this.product.getCatItem();
    }
    check_already_in_cart(id) {
        if (this.cartItem.length === 0) {
            return false;
        }
        else {
            for (let i = 0; i < this.cartItem.length; i++) {
                if (id === this.cartItem[i].id) {
                    return true;
                }
            }
            return false;
        }
    }
    addToCat(item) {
        item.quantity = 1;
        this.product.addToCart(item);
        this.toastr.info('Item has been added to cart', 'Added to Cart');
    }
    getImage(name) {
        switch (name) {
            case 'A&D Medical':
                return '../../../assets/images/Manufacturer Names/A_D Medical.png';
            case 'ADH Health Products Limited':
                return '../../../assets/images/Manufacturer Names/ADH Health Products Ltd.png';
            // case 'AQUATIX Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/ADH Health Products Ltd.png'
            case 'Abirot':
                return '../../../assets/images/Manufacturer Names/Abirot.png';
            case 'Abott':
                return '../../../assets/images/Manufacturer Names/Abbott.png';
            // case 'Absorbent':
            //   return '../../../assets/images/Manufacturer Names/Abbott.png'
            case 'Aconitum':
                return '../../../assets/images/Manufacturer Names/Aconitum.png';
            // case 'Adpharm Pharm Nig':
            //   return '../../../assets/images/Manufacturer Names/Abbott.png'
            case 'Afrab-Chem':
                return '../../../assets/images/Manufacturer Names/Afrab-Chem.png';
            case 'Africure':
                return '../../../assets/images/Manufacturer Names/Africure.png';
            case 'Agary Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Agary.png';
            case 'Agewell HealthCare Ltd':
                return '../../../assets/images/Manufacturer Names/Agewell HealthCare Ltd.png';
            // case 'Aiita':
            //   return '../../../assets/images/Manufacturer Names/Agewell HealthCare Ltd.png'
            case 'Ajanta Pharma Ltd':
                return '../../../assets/images/Manufacturer Names/Ajanta Pharma Ltd.png';
            // case 'Al-Tinez':
            //   return '../../../assets/images/Manufacturer Names/Agewell HealthCare Ltd.png'
            case 'Alchemy Medicine Pvt Ltd':
                return '../../../assets/images/Manufacturer Names/Alchemy Medicine Pvt Ltd.png';
            case 'Alcon':
                return '../../../assets/images/Manufacturer Names/Alcon.png';
            case 'Alka-Seltzer':
                return '../../../assets/images/Manufacturer Names/Alka-Seltzer .png';
            case 'Alkem':
                return '../../../assets/images/Manufacturer Names/Alkem.png';
            // case 'Allen & Hanburys':
            //   return '../../../assets/images/Manufacturer Names/Allen & Hanburys.png'
            case 'Almond Ethicals':
                return '../../../assets/images/Manufacturer Names/Almond Ethicals.png';
            case 'Alpha Laboraties':
                return '../../../assets/images/Manufacturer Names/Alpa Laboratories.png';
            case 'Anhui Chengshi Pharmaceuticals ':
                return '../../../assets/images/Manufacturer Names/Anhui Chengshi Pharmaceuticals .png';
            // case 'Answer one':
            //   return '../../../assets/images/Manufacturer Names/Alchemy Medicine Pvt Ltd.png'
            case 'Appeton Health':
                return '../../../assets/images/Manufacturer Names/Appeton Health.png';
            // case 'Aquabloc':
            //   return '../../../assets/images/Manufacturer Names/Aquabloc.png'
            case 'Aristo Pharma':
                return '../../../assets/images/Manufacturer Names/Aristo Pharma.png';
            case 'Artemis Life Sciences':
                return '../../../assets/images/Manufacturer Names/Artemis Life Sciences.png';
            case 'Artepham Co Ltd':
                return '../../../assets/images/Manufacturer Names/Artemis Life Sciences.png';
            case 'AstraZeneca':
                return '../../../assets/images/Manufacturer Names/AstraZenica.png';
            case 'AstraZenica':
                return '../../../assets/images/Manufacturer Names/AstraZenica.png';
            case 'Astrazeneca':
                return '../../../assets/images/Manufacturer Names/AstraZenica.png';
            // case 'Ayo Ayodele Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/AstraZenica.png'
            case 'BAROQUE Pharmaceuticals ltd':
                return '../../../assets/images/Manufacturer Names/BAROQUE Pharmaceuticals ltd.png';
            // case 'BSMith Needles':
            //   return '../../../assets/images/Manufacturer Names/AstraZenica.png'
            // case 'Basic Supplement':
            //   return '../../../assets/images/Manufacturer Names/AstraZenica.png'
            case 'Bayer':
                return '../../../assets/images/Manufacturer Names/Bayers Pharmaceutical.png';
            // case 'Bells Healthcare':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Beximco Pharmaceuticals ':
                return '../../../assets/images/Manufacturer Names/Beximo Pharmaceuticals.png';
            case 'Bharat Biotech':
                return '../../../assets/images/Manufacturer Names/Bharat Biotech.png';
            case 'Bharat Parenterals':
                return '../../../assets/images/Manufacturer Names/Bharat Parenterals.png';
            case 'Biochem Pharma':
                return '../../../assets/images/Manufacturer Names/Biochem Pharma.png';
            case 'Biogate Laboratories':
                return '../../../assets/images/Manufacturer Names/Biogate Laboratories.png';
            // case 'Biopharma Nigeria Limited':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Biosea Sweeter Life':
                return '../../../assets/images/Manufacturer Names/Biosea Sweeter Life.png';
            case 'Biozek Medical':
                return '../../../assets/images/Manufacturer Names/Biozek Medical.png';
            case 'Bliss GVS Pharma':
                return '../../../assets/images/Manufacturer Names/Bliss GVS Pharma.png';
            case 'Boehringer Ingelheim':
                return '../../../assets/images/Manufacturer Names/boehringer-ingelheim-logo-vector.svg';
            case 'Bond Chemical Industries':
                return '../../../assets/images/Manufacturer Names/Bond Chemical Industries.png';
            case 'Boyd Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Boyd Pharmaceuticals.png';
            // case 'Brian Munro Limited ':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Brookes Pharma':
                return '../../../assets/images/Manufacturer Names/Brookes Pharma.png';
            case 'CORE':
                return '../../../assets/images/Manufacturer Names/CORE.png';
            // case 'Carnation':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Carrot Top Drugs':
                return '../../../assets/images/Manufacturer Names/Carrot Top Drugs.png';
            case 'Celogen Generics Pvt. Ltd':
                return '../../../assets/images/Manufacturer Names/Celogen Generics Pvt. Ltd.png';
            case 'Centaur Pharmaceutical Ltd':
                return '../../../assets/images/Manufacturer Names/Centaur Pharmaceutical Ltd.png';
            case 'Centaur Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Centaur Pharmaceutical Ltd.png';
            case 'Chez Resources':
                return '../../../assets/images/Manufacturer Names/Chez Resources.png';
            case 'Chi Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Chi Pharmaceuticals.png';
            case 'Church & Dwight UK Ltd':
                return '../../../assets/images/Manufacturer Names/Church & Dwight UK Ltd.png';
            // case 'Citus Diagnosis':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Clarion Medicals Ltd':
                return '../../../assets/images/Manufacturer Names/Clarion Medicals Ltd.png';
            case 'Codix Pharma':
                return '../../../assets/images/Manufacturer Names/Codix Pharma.png';
            // case 'Colek':
            //   return '../../../assets/images/Manufacturer Names/Codix Pharma.png'
            // case 'Cranraspberry':
            //   return '../../../assets/images/Manufacturer Names/Codix Pharma.png'
            case 'Crookes Healthcare':
                return '../../../assets/images/Manufacturer Names/Crookes Healthcare.png';
            case 'DDD Limited':
                return '../../../assets/images/Manufacturer Names/DDD limited.png';
            case 'DHG Pharma':
                return '../../../assets/images/Manufacturer Names/ DHG Pharma.png';
            case 'DKT International ':
                return '../../../assets/images/Manufacturer Names/DKT international.png';
            // case 'Daewoo Pharm':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Daily Needs Industries':
                return '../../../assets/images/Manufacturer Names/Daily Needs Industries.png';
            case 'Dana Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Dana.png';
            case 'Diatech Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Diatech Pharmaceuticals .png';
            case 'Dongkook Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/  Dongkook Pharmaceuticals.png';
            case "Dr.Reddy's":
                return "../../../assets/images/Manufacturer Names/ Dr.Reddy's .png";
            // case 'Drugfield':
            //   return '../../../assets/images/Manufacturer Names/  Dongkook Pharmaceuticals.png'
            // case 'Drugfield Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Ecomed Pharma Ltd':
                return '../../../assets/images/Manufacturer Names/ Ecomed Pharma Ltd .png';
            case 'Efamol':
                return '../../../assets/images/Manufacturer Names/ Efamol .png';
            case 'Elastoplast':
                return '../../../assets/images/Manufacturer Names/Elastoplast.png';
            // case 'Elbe Pharma':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Embassy Pharmaceutical':
                return '../../../assets/images/Manufacturer Names/ Emzor Pharmaceuticals Industries Ltd .png';
            case 'Emzor':
                return '../../../assets/images/Manufacturer Names/ Emzor Pharmaceuticals Industries Ltd .png';
            case 'Ensure':
                return '../../../assets/images/Manufacturer Names/ Ensure .png';
            case 'Eurolife':
                return '../../../assets/images/Manufacturer Names/Eurolife.png';
            case 'Evans Baroque ':
                return '../../assets/images/Manufacturer Names/ Evans Baroque Limited .png';
            // case 'Evans Therapeutics':
            //   return '../../../assets/images/Manufacturer Names/HOVID.png'
            case 'Evergreen Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Evergreen .png';
            case 'Exeltis Pharmaceutical':
                return '../../../assets/images/Manufacturer Names/Exeltis Pharmaceutical.png';
            case 'FAES FARMA':
                return '../../../assets/images/Manufacturer Names/ FAES FARMA .png';
            case 'Farmex Meyer':
                return '../../../assets/images/Manufacturer Names/Farmex meyer Limited.png';
            case 'Fidson':
                return '../../../assets/images/Manufacturer Names/ Fidson Healthcare Plc .png';
            case 'Fiterman Pharma':
                return '../../../assets/images/Manufacturer Names/ Fiterman Pharma .png';
            case 'Future Biotics':
                return '../../../assets/images/Manufacturer Names/ Future Biotics .png';
            case 'Fyodor Biotechnologies':
                return '../../../assets/images/Manufacturer Names/ Fyodor Biotechnologies .png';
            case 'G.R Lane HealthCare Products':
                return '../../../assets/images/Manufacturer Names/ G.R Lane HealthCare Products .png';
            case 'GSK':
                return '../../../assets/images/Manufacturer Names/ GSK .png';
            case 'HOVID':
                return '../../../assets/images/Manufacturer Names/HOVID.png';
            case 'Optrex':
                return '../../../assets/images/Manufacturer Names/ Optrex .png';
            case 'Osang Healthcare':
                return '../../../assets/images/Manufacturer Names/ Osang Healthcare .png';
            // case 'POM':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            // case 'Parke Davis and co.':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'PeakPharm':
                return '../../../assets/images/Manufacturer Names/ PeakPharm .png';
            // case 'Pemason Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Perigo':
                return '../../../assets/images/Manufacturer Names/ Perigo .png';
            case 'Pfizer':
                return '../../../assets/images/Manufacturer Names/ Pfizer .png';
            case 'Pfizer Consumer Healthcare':
                return '../../../assets/images/Manufacturer Names/ Pfizer Consumer Healthcare .png';
            case 'Phamatex Industries':
                return '../../../assets/images/Manufacturer Names/ Phamatex Industries .png';
            case 'Pharma Ethics ':
                return '../../../assets/images/Manufacturer Names/ Pharma Ethics  .png';
            case 'Pharma Max':
                return '../../../assets/images/Manufacturer Names/ Pharma Max .png';
            case 'Pharma-Deko PLC':
                return '../../../assets/images/Manufacturer Names/ Pharma Deko .png';
            // case 'Pharmacy Plus':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            // case 'Pharmaton':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Pinnacle Health Pharm Ltd':
                return '../../../assets/images/Manufacturer Names/ Pinnacle Health Pharm Ltd .png';
            case 'Plush Organics':
                return '../../../assets/images/Manufacturer Names/ Plush Organics .png';
            // case 'Popular Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Prevail':
                return '../../../assets/images/Manufacturer Names/ Prevail .svg';
            case 'Prisma Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Prisma Pharmaceuticals .png';
            case 'Procter & Gamble ':
                return '../../../assets/images/Manufacturer Names/ Procter & Gamble .png';
            case 'Pulse Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Pulse Pharmaceuticals .png';
            // case 'Qualiphar':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'RICH RESOURCE GLOBAL SUPPLY CHAIN LTD':
                return '../../../assets/images/Manufacturer Names/   RICH RESOURCE GLOBAL SUPPLY CHAIN LTD .png';
            // case 'Reagan Remedies':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Reals Pharmaceuticals Limited':
                return '../../../assets/images/Manufacturer Names/ Reals Pharmaceuticals Limited .png';
            case 'Reckitt Benckiser':
                return '../../../assets/images/Manufacturer Names/Reckitt Beckinser.png';
            // case 'Reload':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Reproaid':
                return '../../../assets/images/Manufacturer Names/ Reproaid .png';
            case 'Roche':
                return '../../../assets/images/Manufacturer Names/ Roche .png';
            case 'Rohto Pharmaceutical Company':
                return '../../../assets/images/Manufacturer Names/  Rohto Pharmaceutical Company .png';
            case 'Rossmax Swiss GmbH':
                return '../../../assets/images/Manufacturer Names/ Rossmax Swiss GmbH .svg';
            // case 'Rotex Medica':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Ruzu Herbal Products':
                return '../../../assets/images/Manufacturer Names/ Ruzu Herbal Products .png';
            case 'SD Biosensor':
                return '../../../assets/images/Manufacturer Names/ SD Biosensor .png';
            case 'SKG Pharma Limited':
                return '../../../assets/images/Manufacturer Names/ SKG Pharma Limited .png';
            case 'SKT Healthcare':
                return '../../../assets/images/Manufacturer Names/ SKT Healthcare .png';
            case 'Saffron':
                return '../../../assets/images/Manufacturer Names/Saffron.png';
            // case 'Safi':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Sagar Vitaceutical Nig Ltd':
                return '../../../assets/images/Manufacturer Names/ Sagar Vitaceutical Nig Ltd .png';
            case 'Sam Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Sam Pharmaceuticals .gif';
            case 'Sanofi':
                return '../../../assets/images/Manufacturer Names/Sanofi.png';
            case 'Sarantis':
                return '../../../assets/images/Manufacturer Names/ Sarantis .png';
            // case 'Saro Lifecare ':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Seagreen Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/  Seagreen Pharmaceuticals .png';
            case 'Septona':
                return '../../../assets/images/Manufacturer Names/ Septona .png';
            case 'Serum Institute Of India':
                return '../../../assets/images/Manufacturer Names/Serum Institute Of India.png';
            case 'Servier':
                return '../../../assets/images/Manufacturer Names/ Servier .png';
            case 'Seven Seas':
                return '../../../assets/images/Manufacturer Names/ Seven Seas .png';
            case 'Shalina Health Care Nigeria Limited':
                return '../../../assets/images/Manufacturer Names/ Shalina HealthCare Nigeria Limited .png';
            case 'Shalina Healthcare':
                return '../../../assets/images/Manufacturer Names/ Shalina HealthCare Nigeria Limited .png';
            case 'Sii':
                return '../../../assets/images/Manufacturer Names/ Sii .png';
            case 'Silver Healthcare ':
                return '../../../assets/images/Manufacturer Names/ Silver Healthcare  .png';
            // case 'Society for Family Health':
            //   return '../../../assets/images/Manufacturer Names/ Seven Seas .png'
            case 'Sri Trang':
                return '../../../assets/images/Manufacturer Names/Sri Trang.png';
            case 'Standard Generic':
                return '../../../assets/images/Manufacturer Names/  Standard Generics .png';
            case 'Sterling Drugs':
                return '../../../assets/images/Manufacturer Names/ Sterling Drugs .png';
            case 'Strides Shasun':
                return '../../../assets/images/Manufacturer Names/Strides Shasun.png';
            case 'Sumitomo Chemical Company':
                return '../../../assets/images/Manufacturer Names/sumitomo chemical.png';
            // case 'Sure Health & Beauty Ltd':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            // case 'Swipha':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Swiss Precision Diagnostics Gmb':
                return '../../../assets/images/Manufacturer Names/ Swiss Precision Diagnostics GmbH .png';
            // case 'Taylek Drugs':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            // case 'Teva':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'The Mentholatum Company Ltd':
                return '../../../assets/images/Manufacturer Names/ The Mentholatum Company Ltd .png';
            case 'Thornton and Ross Ltd':
                return '../../../assets/images/Manufacturer Names/ Thornton and Ross Ltd .png';
            case 'Tiger Balm':
                return '../../../assets/images/Manufacturer Names/ Tiger Balm .png';
            // case 'Titan Natural Ltd':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Tricare Pharma':
                return '../../../assets/images/Manufacturer Names/ Tricare Pharma .png';
            case 'Tuyil Pharm Limited':
                return '../../../assets/images/Manufacturer Names/ Tuyil Pharm Limited .png';
            case 'U-Mec':
                return '../../../assets/images/Manufacturer Names/ U-Mec .png';
            case 'UCB Pharma Ltd.':
                return '../../../assets/images/Manufacturer Names/ UCB Pharma Ltd. .png';
            case 'UST Corporation':
                return '../../../assets/images/Manufacturer Names/ UST Corporation .png';
            case 'Uni-medical Healthcare':
                return '../../../assets/images/Manufacturer Names/ Uni-medical Healthcare .png';
            case 'Unichem':
                return '../../../assets/images/Manufacturer Names/ Unichem.png';
            // case 'Unicure Pharmaceuticals':
            //   return '../../../assets/images/Manufacturer Names/ Unicure Pharmaceuticals .png'
            case 'Union Swiss':
                return '../../../assets/images/Manufacturer Names/Union Swiss.png';
            case 'Unique Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/ Unique Pharmaceuticals Limited .png';
            case 'Uvex':
                return '../../../assets/images/Manufacturer Names/ Uvex .png';
            case 'VSSCO':
                return '../../../assets/images/Manufacturer Names/ VSSCO .png';
            case 'Valupak':
                return '../../../assets/images/Manufacturer Names/ Valupak .png';
            case 'Vins':
                return '../../../assets/images/Manufacturer Names/ Vins .png';
            case 'Vita Care PVT LTD':
                return '../../../assets/images/Manufacturer Names/ Vita Care PVT LTD .png';
            case 'Vitabiotics':
                return '../../../assets/images/Manufacturer Names/ Vitabiotics .png';
            case 'Vitane':
                return '../../../assets/images/Manufacturer Names/  Vitane .png';
            case 'Vixa Pharmaceutical':
                return '../../../assets/images/Manufacturer Names/ Vixa Pharmaceutical .png';
            case 'Wenzhou Classic Packing Ltd':
                return '../../../assets/images/Manufacturer Names/ Wenzhou Classic Packing Ltd .png';
            // case 'White House':
            //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
            case 'Win-Medicare':
                return '../../../assets/images/Manufacturer Names/Win-Medicare.png';
            case 'Wockhardt':
                return '../../../assets/images/Manufacturer Names/ Wockhardt .png';
            case 'Zentiva':
                return '../../../assets/images/Manufacturer Names/Zentiva.png';
            case 'Zolon Healthcare':
                return '../../../assets/images/Manufacturer Names/ Zolon Healthcare .png';
            case ' Akums Drugs & Pharmaceuticals':
                return '../../../assets/images/Manufacturer Names/Akums Drugs _ Pharmaceuticals.png';
            default:
                return 'assets/images/drugstoc.png';
        }
    }
};
PerProductsComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
PerProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-per-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./per-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/per-products/per-products.component.html")).default
    })
], PerProductsComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/problem/problem.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/drugstoc_web/problem/problem.component.ts ***!
  \***********************************************************/
/*! exports provided: ProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemComponent", function() { return ProblemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProblemComponent = class ProblemComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProblemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-problem',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./problem.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/problem/problem.component.html")).default
    })
], ProblemComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/product/product.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/drugstoc_web/product/product.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");




let ProductComponent = class ProductComponent {
    constructor(product, toastr) {
        this.product = product;
        this.toastr = toastr;
        this.loading = true;
        this.data = [];
        this.data2 = [];
        this.page = 0;
        this.data2.length = 21;
    }
    ngOnInit() {
        this.product.getAllProducts(this.page).subscribe(resp => {
            console.log(resp);
            this.loading = false;
            this.data = resp;
        });
        this.cartItem = this.product.getCatItem();
    }
    check_already_in_cart(id) {
        if (this.cartItem.length === 0) {
            return false;
        }
        else {
            for (let i = 0; i < this.cartItem.length; i++) {
                if (id === this.cartItem[i].id) {
                    return true;
                }
            }
            return false;
        }
    }
    addToCat(item) {
        item.quantity = 1;
        this.product.addToCart(item);
        this.toastr.info('Item has been added to cart', 'Added to Cart');
    }
};
ProductComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/product/product.component.html")).default,
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/profile/profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/drugstoc_web/profile/profile.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");





let ProfileComponent = class ProfileComponent {
    constructor(profile, fb, auth) {
        this.profile = profile;
        this.fb = fb;
        this.auth = auth;
        this.image = '';
        this.username = '';
        this.address = '';
        this.phone = '';
        this.ngform = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.userId = this.auth.userData;
        this.profile.getProfile(this.userId).subscribe(resp => {
            console.log(resp);
            this.username = resp['name'];
            this.address = resp['contact_address'];
            this.phone = resp['mobile'];
        });
        this.image = this.profile.photo;
    }
    onFileSelected(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            // reader.onload = (event: FileReaderEvent) => {
            //   this.image = event.target.result;
            //   this.profile.changePhoto(event.target.result)
            //   console.log(this.image);
            // };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    onSubmmit() { }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/profile/profile.component.html")).default
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/promotions/promotions.component.css":
/*!******************************************************************!*\
  !*** ./src/app/drugstoc_web/promotions/promotions.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RydWdzdG9jX3dlYi9wcm9tb3Rpb25zL3Byb21vdGlvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/drugstoc_web/promotions/promotions.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/drugstoc_web/promotions/promotions.component.ts ***!
  \*****************************************************************/
/*! exports provided: PromotionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsComponent", function() { return PromotionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PromotionsComponent = class PromotionsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PromotionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-promotions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./promotions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/promotions/promotions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./promotions.component.css */ "./src/app/drugstoc_web/promotions/promotions.component.css")).default]
    })
], PromotionsComponent);



/***/ }),

/***/ "./src/app/drugstoc_web/search/search.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/drugstoc_web/search/search.component.ts ***!
  \*********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");






let SearchComponent = class SearchComponent {
    constructor(apiService, product, toastr, route) {
        this.apiService = apiService;
        this.product = product;
        this.toastr = toastr;
        this.route = route;
        this.data2 = [];
        this.data3 = [];
        this.loading = true;
        this.page = 0;
        this.cartItem = [];
        this.newdata = [];
        this.data3.length = 21;
    }
    ngOnInit() {
        const { data } = this.route.snapshot.params;
        this.query === this.route.snapshot.params.data;
        this.get_search(data);
        // setInterval(() => {
        // 	this.newquery === this.route.snapshot.params;
        // 	console.log(this.query === this.newquery, this.newquery, this.query);
        // 	// this.newquery === this.route.snapshot.params.data
        // },1000)
        // console.log(this.query === this.route.snapshot.params);
        setInterval(() => {
            console.log(this.route.snapshot.params.data);
            console.log(this.query === this.route.snapshot.params.data);
        }, 200);
        // if(this.query === this.route.snapshot.params.data) {
        // 	return;
        // } else {
        // }
        // 	this.product.getAllProducts(this.page).subscribe((resp) => {
        // 		let arr: any = []
        // 		arr = resp;
        // 		let res = arr.filter(n => n.name.toLowerCase().includes(data.toLowerCase()) || n.x_studio_field_xH9Vy.toLowerCase().includes(data.toLowerCase())) 
        // 		this.loading = false;
        //   console.log(res);
        // });
        this.cartItem = this.product.getCatItem();
    }
    get_search(data) {
        this.loading = true;
        this.product.search_result(data).subscribe(res => {
            this.data2 = res;
            this.loading = false;
        });
    }
    //   ngOnChanges(changes: SimpleChanges): void {
    // 	  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // 	  //Add '${implements OnChanges}' to the class.
    // 	  console.log(SimpleChanges)
    //   }
    check_already_in_cart(id) {
        if (this.cartItem.length === 0) {
            return false;
        }
        else {
            for (let i = 0; i < this.cartItem.length; i++) {
                if (id === this.cartItem[i].id) {
                    return true;
                }
            }
            return false;
        }
    }
    addToCat(item) {
        item.quantity = 1;
        this.product.addToCart(item);
        this.toastr.info('Item has been added to cart', 'Added to Cart');
    }
};
SearchComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drugstoc_web/search/search.component.html")).default
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/fake-api/json/SideBar.json":
/*!********************************************!*\
  !*** ./src/app/fake-api/json/SideBar.json ***!
  \********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":[{\"title\":\"Main\",\"isHeading\":true,\"isActive\":false,\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-separator\"},{\"title\":\"Products\",\"name\":\"products\",\"isHeading\":false,\"isActive\":true,\"link\":\"/\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-home-4-line\",\"children\":[{\"title\":\"Per Category\",\"isActive\":false,\"link\":\"/category\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"},{\"title\":\"Per Company\",\"isActive\":false,\"link\":\"/company\",\"className\":\"\",\"isIconClass\":false,\"icon\":\"\"}]},{\"title\":\"New Products\",\"name\":\"new products\",\"isHeading\":false,\"isActive\":true,\"link\":\"/new-products\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-calendar-line\"},{\"title\":\"Cart\",\"name\":\"cart\",\"isHeading\":false,\"isActive\":true,\"link\":\"/cart\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-shopping-cart-2-line\"},{\"title\":\"My DrugStoc\",\"name\":\"my drugstoc\",\"isHeading\":false,\"isActive\":true,\"link\":\"/my-drugstoc\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-bookmark-line\"},{\"title\":\"My Orders\",\"name\":\"dashboard\",\"isHeading\":false,\"isActive\":true,\"link\":\"/my-orders\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-account-pin-box-line\"},{\"title\":\"My Invoices\",\"name\":\"dashboard\",\"isHeading\":false,\"isActive\":true,\"link\":\"/my-invoice\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-book-open-line\"},{\"title\":\"Report a Problem\",\"name\":\"dashboard\",\"isHeading\":false,\"isActive\":true,\"link\":\"/report-a-problem\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-lightbulb-line\"},{\"title\":\"Update Profile\",\"name\":\"dashboard\",\"isHeading\":false,\"isActive\":true,\"link\":\"/update-profile\",\"className\":\"\",\"isIconClass\":true,\"icon\":\"ri-settings-2-line\"}]}");

/***/ }),

/***/ "./src/app/plugins.service.ts":
/*!************************************!*\
  !*** ./src/app/plugins.service.ts ***!
  \************************************/
/*! exports provided: PluginsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsService", function() { return PluginsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PluginsService = class PluginsService {
    constructor() {
        // @ts-ignore
        this.$ = window.$;
    }
    index() {
        this.loaderInit();
    }
    dashboardIndex() {
        this.sideBarToggle(this.$);
        this.navBarAction(this.$);
        this.wrapperMenuToggle(this.$);
        this.fullscreen(this.$);
        this.accordionToggle(this.$);
    }
    // Function for toggle page Loader...
    loaderInit() {
        this.$('#load').fadeOut();
        this.$('#loading').delay(1000).fadeOut('slow');
    }
    checkElement(type, element) {
        let found = false;
        let elements;
        switch (type) {
            case 'class':
                elements = document.getElementsByClassName(element);
                if (elements !== undefined && elements !== null && elements.length > 0) {
                    found = true;
                }
                break;
            case 'id':
                elements = document.getElementById(element);
                if (elements !== undefined && elements !== null) {
                    found = true;
                }
                break;
        }
        return found;
    }
    sideBarToggle($) {
        const elementExist = this.checkElement('class', 'iq-sidebar-menu');
        if (elementExist) {
            // $(document).on('click', '.iq-sidebar-menu li', function() {
            //   if ($(this).hasClass('menu-open')) {
            //     $(this).find('.iq-submenu').slideUp('slow');
            //     $(this).removeClass('menu-open');
            //     if (!$(this).find('.iq-submenu.menu-open .menu-open').length) {
            //       $(this).find('.menu-open').removeClass('menu-open');
            //     } else {
            //       $(this).find('.iq-submenu').removeClass('menu-open');
            //     }
            //   } else if ($(this).find('.iq-submenu').length) {
            //     $(this).find('.iq-submenu').slideDown('slow');
            //     $(this).addClass('menu-open');
            //     $(this).find('.iq-submenu').addClass('menu-open');
            //   }
            // });
        }
    }
    navBarAction($) {
        $(document).on('click', function (e) {
            const myTargetElement = e.target;
            // tslint:disable-next-line:one-variable-per-declaration
            let selector, mainElement;
            if ($(myTargetElement).hasClass('search-toggle')
                || $(myTargetElement).parent().hasClass('search-toggle')
                || $(myTargetElement).parent().parent().hasClass('search-toggle')) {
                if ($(myTargetElement).hasClass('search-toggle')) {
                    selector = $(myTargetElement).parent();
                    mainElement = $(myTargetElement);
                }
                else if ($(myTargetElement).parent().hasClass('search-toggle')) {
                    selector = $(myTargetElement).parent().parent();
                    mainElement = $(myTargetElement).parent();
                }
                else if ($(myTargetElement).parent().parent().hasClass('search-toggle')) {
                    selector = $(myTargetElement).parent().parent().parent();
                    mainElement = $(myTargetElement).parent().parent();
                }
                if (!mainElement.hasClass('active') && $('.navbar-list li').find('.active')) {
                    $('.navbar-list li').removeClass('iq-show');
                    $('.navbar-list li .search-toggle').removeClass('active');
                }
                selector.toggleClass('iq-show');
                mainElement.toggleClass('active');
                e.preventDefault();
            }
            else if ($(myTargetElement).is('.search-input')) { }
            else {
                $('.navbar-list li').removeClass('iq-show');
                $('.navbar-list li .search-toggle').removeClass('active');
            }
        });
    }
    wrapperMenuToggle($) {
        const elementExist = this.checkElement('class', 'wrapper-menu');
        if (elementExist) {
            const wrapperMenu = document.querySelectorAll('.wrapper-menu');
            const body = document.querySelector('body');
            for (let i = 0; i < wrapperMenu.length; i++) {
                wrapperMenu[i].addEventListener('click', function () {
                    wrapperMenu[i].classList.toggle('open');
                    body.classList.toggle('sidebar-main');
                });
            }
        }
    }
    fullscreen($) {
        const elementExist = this.checkElement('class', 'iq-full-screen');
        if (elementExist) {
            $(document).on('click', '.iq-full-screen', function () {
                /*const elem = $(this);
                if (!document.fullscreenElement &&
                  !document.mozFullScreenElement &&
                  !document.webkitFullscreenElement &&
                  !document.msFullscreenElement) {
                  if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                  } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                  } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                  } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                  }
                } else {
                  if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                  } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                  } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                  } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                  }
                }
                elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line');*/
            });
        }
    }
    apexChart(element, chartOption) {
        const selector = '#' + element;
        if (chartOption !== undefined) {
            const chart = new ApexCharts(document.querySelector(selector), chartOption);
            chart.render();
        }
    }
    accordionToggle($) {
        $('.iq-accordion .iq-accordion-block .accordion-details').hide();
        $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
        $(document).on('click', '.iq-accordion .iq-accordion-block', function () {
            if ($(this).children('div.accordion-details ').is(':hidden')) {
                $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
                $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
            }
        });
    }
    getActiveLink(item, activeRoute) {
        let active = false;
        if (item.children !== undefined) {
            item.children.filter((child) => {
                if (child.link === activeRoute) {
                    active = true;
                }
            });
        }
        else {
            if (item.link === activeRoute) {
                active = true;
            }
        }
        return active;
    }
};
PluginsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PluginsService);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.BASE_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint;
        // Add options on Http Request
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle error on Http Request
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error(`Status : ${error.status}, ` +
                `Response : ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something want wrong. please try again later.');
    }
    // Get users data
    getList() {
        return this.http
            .get(this.BASE_PATH + '/users')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    getMenuList() {
        return this.http
            .get('http://localhost:3000/data')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint;
    }
    login(payload) {
        return this.http.post(`${this.BASE_URL}/login`, payload);
    }
    register(payload) {
        return this.http.post(`${this.BASE_URL}/register`, payload);
    }
    get userData() {
        return localStorage.getItem('user');
    }
    authenticated() {
        if (localStorage.getItem('token') !== null) {
            return true;
        }
        else {
            return false;
        }
    }
    logoutUser() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.reload();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.cartItem = [];
        this.photo = 'assets/images/no_logo.png';
        this.BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndpoint;
    }
    getCategory() {
        return this.http.get(`${this.BASE_URL}/category`);
    }
    getAllProducts(page) {
        return this.http.get(`${this.BASE_URL}/category-products?page=${page}`);
    }
    getProductCategory(id, page) {
        return this.http.get(`${this.BASE_URL}/category-products/${id}?page=${page}`);
    }
    getOneProduct(id) {
        return this.http.get(`${this.BASE_URL}/product/${id}`);
    }
    addToCart(item) {
        return this.cartItem.unshift(item);
    }
    getCart() {
        let id = localStorage.getItem('user');
        this.http.get(`${this.BASE_URL}/mycart/${id}`).subscribe(res => {
            let arr = res;
            this.cartItem = arr;
        });
    }
    removeFromCart(id) {
        this.cartItem.splice(id, 1);
        console.log(this.cartItem, id);
    }
    emptyCart() {
        return (this.cartItem = []);
    }
    getCatItem() {
        return this.cartItem;
    }
    getMyOrders(id) {
        return this.http.get(`${this.BASE_URL}/my-orders/${id}`);
    }
    getMyInvoice(id) {
        return this.http.get(`${this.BASE_URL}/my-invoice/${id}`);
    }
    getMyDrugstoc(id) {
        return this.http.get(`${this.BASE_URL}/my-drugtoc/${id}`);
    }
    getProfile(id) {
        return this.http.get(`${this.BASE_URL}/profile/${id}`);
    }
    makeOrder(id, payload) {
        return this.http.post(`${this.BASE_URL}/create-order/${id}`, payload);
    }
    search() {
        return this.http.get(`${this.BASE_URL}/search`);
    }
    changePhoto(phoro) {
        return (this.photo = phoro);
    }
    search_result(query) {
        return this.http.post(`${this.BASE_URL}/search-result`, { query });
    }
    per_company() {
        return this.http.get(`${this.BASE_URL}/company-list`);
    }
    lis_per_company(query) {
        return this.http.post(`${this.BASE_URL}/per-company`, { query });
    }
    updateCat(data) {
        let id = localStorage.getItem('user');
        return this.http.post(`${this.BASE_URL}/mycart/${id}`, data);
    }
    get_recommended_products() {
        return this.http.get(`${this.BASE_URL}/recommended`);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/store/actions/ticket-booking.actions.ts":
/*!*********************************************************!*\
  !*** ./src/app/store/actions/ticket-booking.actions.ts ***!
  \*********************************************************/
/*! exports provided: TicketBookingActionTypes, TicketBookingAction, CountTicketBooking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketBookingActionTypes", function() { return TicketBookingActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketBookingAction", function() { return TicketBookingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountTicketBooking", function() { return CountTicketBooking; });
var TicketBookingActionTypes;
(function (TicketBookingActionTypes) {
    TicketBookingActionTypes["countTicketBooking"] = "[TicketBooking] Count TicketBookings";
})(TicketBookingActionTypes || (TicketBookingActionTypes = {}));
class TicketBookingAction {
}
class CountTicketBooking {
    constructor(payload) {
        this.payload = payload;
        this.type = TicketBookingActionTypes.countTicketBooking;
    }
}


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ticket_booking_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-booking.reducer */ "./src/app/store/reducers/ticket-booking.reducer.ts");


const reducers = {
    ticketBooking: _ticket_booking_reducer__WEBPACK_IMPORTED_MODULE_1__["TicketBookingReducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/store/reducers/ticket-booking.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/reducers/ticket-booking.reducer.ts ***!
  \**********************************************************/
/*! exports provided: TicketBookingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketBookingReducer", function() { return TicketBookingReducer; });
/* harmony import */ var _states_ticket_booking_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/ticket-booking.state */ "./src/app/store/states/ticket-booking.state.ts");
/* harmony import */ var _actions_ticket_booking_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/ticket-booking.actions */ "./src/app/store/actions/ticket-booking.actions.ts");


function TicketBookingReducer(state = _states_ticket_booking_state__WEBPACK_IMPORTED_MODULE_0__["initialTicketBookingState"], action) {
    switch (action.type) {
        case _actions_ticket_booking_actions__WEBPACK_IMPORTED_MODULE_1__["TicketBookingActionTypes"].countTicketBooking:
            return {
                ticketCount: action.payload.countTicket
            };
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/states/ticket-booking.state.ts":
/*!******************************************************!*\
  !*** ./src/app/store/states/ticket-booking.state.ts ***!
  \******************************************************/
/*! exports provided: initialTicketBookingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialTicketBookingState", function() { return initialTicketBookingState; });
const initialTicketBookingState = {
    ticketCount: 0,
    ticketData: []
};


/***/ }),

/***/ "./src/app/views/pages/error-page/error-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/error-page/error-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ErrorPageComponent = class ErrorPageComponent {
    constructor() {
        this.errorType = '400';
    }
    ngOnInit() {
        const url = window.location.href;
        this.errorType = url.substr(url.lastIndexOf('/') + 1);
    }
};
ErrorPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/pages/error-page/error-page.component.html")).default
    })
], ErrorPageComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiEndpoint: 'http://3.129.99.242:3200',
    // apiEndpoint: 'https://localhost/api',
    // apiEndpoint: 'https://localhost:3200',
    apiEndpoint: 'https://shop.drugstoc.com:3200',
    mapbox: {
        accessToken: 'pk.eyJ1IjoiZ29sZGVubWFjZWRldiIsImEiOiJjazBnYnFxb3AwNWdqM2JuNWRwazZxMWY0In0._I3zpcM9QTHNqcXWjWpD6Q',
        mapStyle: 'mapbox://styles/goldenmacedev/ck49vpeap08b61cnubglcag7l'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adewale/dev/drugstoc web/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map