import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedCouponsComponent } from './components/featured-coupons/featured-coupons.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PopularCategoriesComponent } from './components/popular-categories/popular-categories.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CardOneComponent } from './components/card-one/card-one.component';
import { CardTwoComponent } from './components/card-two/card-two.component';
import { CardThreeComponent } from './components/card-three/card-three.component';
import { CardFourComponent } from './components/card-four/card-four.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FeaturedCouponsComponent,
    HowItWorksComponent,
    PopularCategoriesComponent,
    TestimonialsComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    CardFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
