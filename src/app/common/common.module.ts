import { NgModule } from "@angular/core";
import {
  HeaderComponent, BaseComponent, MenuComponent,
  SlideBoxComponent, SuccessSnackComponent, SeoMetaComponent,
  HeroComponent, ServiceAreasComponent, ContactComponent,
  FloatContactComponent, GoasosFooterComponent, PhoneComponent,
  InterestComponent, SelectComponent, VideoDialogComponent
} from './components';
import { GoasasMatModule } from "../mat/goasos-mat.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SafeVideoPipe } from "./pipes/safe-video.pipe";

import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  ThemeDirective,
  CarouselCaptionComponent,
} from '@coreui/angular';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    BaseComponent,
    MenuComponent,
    SafeVideoPipe,
    SlideBoxComponent,
    SuccessSnackComponent,
    SeoMetaComponent,
    HeroComponent,
    ServiceAreasComponent,
    ContactComponent,
    SelectComponent,
    FloatContactComponent,
    GoasosFooterComponent,
    PhoneComponent,
    InterestComponent,
    VideoDialogComponent,
  ],
  exports: [HeaderComponent, BaseComponent, MenuComponent,
    SlideBoxComponent, SuccessSnackComponent,
    SeoMetaComponent, HeroComponent, ServiceAreasComponent, ContactComponent,
    FloatContactComponent, GoasosFooterComponent, InterestComponent],
  imports: [GoasasMatModule, RouterModule, CommonModule,
    ThemeDirective, CarouselComponent,
    CarouselInnerComponent, CarouselItemComponent,
    CarouselControlComponent, CarouselCaptionComponent,
    ReactiveFormsModule
  ],
  providers: []


})
export class GoasosCommonModule { }