import { NgModule } from "@angular/core";
import { HeaderComponent, BaseComponent } from './components';
import { GoasasMatModule } from "../mat/goasos-mat.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    BaseComponent
  ],
  exports: [HeaderComponent, BaseComponent],
  imports: [GoasasMatModule, RouterModule]
})
export class GoasosCommonModule { }