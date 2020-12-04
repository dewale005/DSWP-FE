import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SofboxModule} from './components/sofbox/sofbox.module';
import {ErrorPageComponent} from './views/pages/error-page/error-page.component';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {reducers, metaReducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgScrollbarModule} from 'ngx-scrollbar';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';
import { LayoutComponent } from './drugstoc_web/layout/layout.component';
import { HomeComponent } from './drugstoc_web/home/home.component';
import { LottieModule } from 'ngx-lottie';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import player from 'lottie-web';
import { ProductComponent } from './drugstoc_web/product/product.component';
import { MyDrugstocComponent } from './drugstoc_web/my-drugstoc/my-drugstoc.component';
import { MyOrdersComponent } from './drugstoc_web/my-orders/my-orders.component';
import { MyInvoiceComponent } from './drugstoc_web/my-invoice/my-invoice.component';
import { ProblemComponent } from './drugstoc_web/problem/problem.component';
import { ProfileComponent } from './drugstoc_web/profile/profile.component';
import { PromotionsComponent } from './drugstoc_web/promotions/promotions.component';
import { AngularRaveModule } from 'angular-rave';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
 
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './drugstoc_web/cart/cart.component';
import { PerProductsComponent } from './drugstoc_web/per-products/per-products.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerCategoryComponent } from './drugstoc_web/per-category/per-category.component';
import { PerCategoryListComponent } from './drugstoc_web/per-category-list/per-category-list.component';
import { SearchComponent } from './drugstoc_web/search/search.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LayoutComponent,
    // HomeComponent,
    ProductComponent,
    MyDrugstocComponent,
    MyOrdersComponent,
    MyInvoiceComponent,
    ProblemComponent,
    ProfileComponent,
    PromotionsComponent,
    CartComponent,
    PerProductsComponent,
    PerCategoryComponent,
    SearchComponent,
    PerCategoryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule, 
    ReactiveFormsModule,
    SofboxModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    SweetAlert2Module.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    ProgressbarModule.forRoot(),
    NgScrollbarModule,
    NgxSkeletonLoaderModule,
    AutocompleteLibModule,
    LottieModule.forRoot({player: playerFactory}),
    SlickCarouselModule,
    BrowserAnimationsModule,
    AngularRaveModule.forRoot('FLWPUBK_TEST-cf76417bee6d832f8caa419a15864f1b-X'),
    NgwWowModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    SofboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
