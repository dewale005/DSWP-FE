import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Dashboard1Component} from './dashboards/dashboard1/dashboard1.component';
import {Dashboard2Component} from './dashboards/dashboard2/dashboard2.component';
import {AnalyticsComponent} from './dashboards/analytics/analytics.component';
import {WebAnalyticsComponent} from './dashboards/web-analytics/web-analytics.component';
import {TrackingComponent} from './dashboards/tracking/tracking.component';
import {TicketBookingComponent} from './dashboards/ticket-booking/ticket-booking.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PatientComponent } from './dashboards/patient/patient.component';
import { ChatComponent } from './application/chat/chat.component';
import { HomeComponent } from '../drugstoc_web/home/home.component';
import { ProductComponent } from '../drugstoc_web/product/product.component';
import { MyDrugstocComponent } from '../drugstoc_web/my-drugstoc/my-drugstoc.component';
import { PromotionsComponent } from '../drugstoc_web/promotions/promotions.component';
import { MyOrdersComponent } from '../drugstoc_web/my-orders/my-orders.component';
import { MyInvoiceComponent } from '../drugstoc_web/my-invoice/my-invoice.component';
import { ProblemComponent } from '../drugstoc_web/problem/problem.component';
import { ProfileComponent } from '../drugstoc_web/profile/profile.component';
import { CartComponent } from '../drugstoc_web/cart/cart.component';
import { PerProductsComponent } from '../drugstoc_web/per-products/per-products.component';
import { PerCategoryComponent } from '../drugstoc_web/per-category/per-category.component';
import { AuthGuard } from '../services/auth.guard';
import { PerCategoryListComponent } from '../drugstoc_web/per-category-list/per-category-list.component';
import { SearchComponent } from '../drugstoc_web/search/search.component';


const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('/src/app/drugstoc_web/home/home.module#HomeModule').then(m => m.HomeModule)
    // ./layouts/layout1/layout1.module#Layout1Module /Users/adewale/Desktop/drugstoc web/angular/src/app/drugstoc_web/home/home.module.ts
    component: HomeComponent
  },
  // {
  //   path: 'products',
  //   component: Dashboard2Component,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'new-products',
    component: ProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-drugstoc',
    component: MyDrugstocComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'promotions',
    component: PromotionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-orders',
    component: MyOrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-invoice',
    component: MyInvoiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'report-a-problem',
    component: ProblemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update-profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'company',
    component: PerCategoryListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'company/:id',
    component: PerProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category',
    component: PerCategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search/:data',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/application/ecommerce/ecommerce.module').then(m => m.EcommerceModule),
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'core',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/core/core.module').then(m => m.CoreModule),
      }
    ]
  },
  {
    path: 'forms',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/forms/forms.module').then(m => m.FormsModule),
      }
    ]
  },
  {
    path: 'table',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/table/table.module').then(m => m.TableModule),
      }
    ]
  },
  {
    path: 'charts',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/charts/charts.module').then(m => m.ChartsModule),
      }
    ]
  },
  {
    path: 'icons',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/icons/icons.module').then(m => m.IconsModule),
      }
    ]
  },
  {
    path: 'extra-pages',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/pages/pages.module').then(m => m.PagesModule),
      }
    ]
  },
  {
    path: 'maps',
    children: [
      {
        path: '',
        loadChildren: () => import('../views/maps/maps.module').then(m => m.MapsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
