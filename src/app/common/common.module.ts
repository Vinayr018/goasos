import { NgModule } from "@angular/core";
import { HeaderComponent, BaseComponent, BoxComponent } from './components';
import { GoasasMatModule } from "../mat/goasos-mat.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    BaseComponent,
    BoxComponent
  ],
  exports: [HeaderComponent, BaseComponent, BoxComponent],
  imports: [GoasasMatModule, RouterModule]
})
export class GoasosCommonModule { }