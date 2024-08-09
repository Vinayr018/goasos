import { NgModule } from "@angular/core";
import { HeaderComponent } from './components';
import { GoasasMatModule } from "../mat/goasos-mat.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent],
  imports: [GoasasMatModule, RouterModule]
})
export class GoasosCommonModule { }