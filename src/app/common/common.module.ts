import { NgModule } from "@angular/core";
import { HeaderComponent } from './components';
import { GoasasMatModule } from "../mat/goasos-mat.module";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent],
  imports: [GoasasMatModule]
})
export class GoasosCommonModule { }