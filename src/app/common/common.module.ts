import { NgModule } from "@angular/core";
import {
  HeaderComponent, BaseComponent, BoxComponent,
  BrochureComponent, MenuComponent, VideoBoxComponent,
  VideoBrochureComponent, ProductGalleryComponent, VideoComponent,
  SlideBoxComponent, SuccessSnackComponent, SeoMetaComponent,
  HeroComponent, ServiceAreasComponent, ContactComponent
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
import { SelectComponent } from './components/select/select.component';

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
    ContactComponent,
    SelectComponent,
  ],
  exports: [HeaderComponent, BaseComponent, BoxComponent,
    BrochureComponent, MenuComponent, ProductGalleryComponent,
    VideoBrochureComponent, SlideBoxComponent, SuccessSnackComponent,
    SeoMetaComponent, HeroComponent, ServiceAreasComponent, ContactComponent],
  imports: [GoasasMatModule, RouterModule, CommonModule,
    ThemeDirective, CarouselComponent,
    CarouselInnerComponent, CarouselItemComponent,
    CarouselControlComponent, CarouselCaptionComponent
  ]


})
export class GoasosCommonModule { }