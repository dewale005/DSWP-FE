import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LottieModule } from 'ngx-lottie';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgwWowModule } from 'ngx-wow';
import { playerFactory } from 'src/app/app.module';
import { SofboxModule } from 'src/app/components/sofbox/sofbox.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InfiniteScrollModule,
    SofboxModule,
    LottieModule.forRoot({player: playerFactory}),
    ProgressbarModule,
    CarouselModule,
    TabsModule,
    NgScrollbarModule,
    NgwWowModule,
    SlickCarouselModule,
    NgxSkeletonLoaderModule,
  ]
})
export class HomeModule { }
