import { NgModule } from "@angular/core";
import {
  HeaderComponent, BaseComponent, BoxComponent,
  BrochureComponent, MenuComponent, VideoBoxComponent,
  VideoBrochureComponent, ProductGalleryComponent, VideoComponent,
  SlideBoxComponent, SuccessSnackComponent, SeoMetaComponent,
  HeroComponent, ServiceAreasComponent
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

@NgModule({
  declarations: [
    HeaderComponent,
    BaseComponent,
    BoxComponent,
    BrochureComponent,
    MenuComponent,
    VideoBoxComponent,
    VideoBrochureComponent,
    ProductGalleryComponent,
    VideoComponent,
    SafeVideoPipe,
    SlideBoxComponent,
    SuccessSnackComponent,
    SeoMetaComponent,
    HeroComponent,
    ServiceAreasComponent,
  ],
  exports: [HeaderComponent, BaseComponent, BoxComponent,
    BrochureComponent, MenuComponent, ProductGalleryComponent,
    VideoBrochureComponent, SlideBoxComponent, SuccessSnackComponent,
    SeoMetaComponent, HeroComponent, ServiceAreasComponent],
  imports: [GoasasMatModule, RouterModule, CommonModule,
    ThemeDirective, CarouselComponent,
    CarouselInnerComponent, CarouselItemComponent,
    CarouselControlComponent, CarouselCaptionComponent
  ]


})
export class GoasosCommonModule { }