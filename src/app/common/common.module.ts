import { NgModule } from "@angular/core";
import {
  HeaderComponent, BaseComponent, BoxComponent,
  BrochureComponent, MenuComponent, VideoBoxComponent,
  VideoBrochureComponent, ProductGalleryComponent, VideoComponent
} from './components';
import { GoasasMatModule } from "../mat/goasos-mat.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SafeVideoPipe } from "./pipes/safe-video.pipe";

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
  ],
  exports: [HeaderComponent, BaseComponent, BoxComponent,
    BrochureComponent, MenuComponent, ProductGalleryComponent],
  imports: [GoasasMatModule, RouterModule, CommonModule]
})
export class GoasosCommonModule { }