import { NgModule } from "@angular/core";
import { HeaderComponent, BaseComponent, 
  BoxComponent, BrochureComponent,MenuComponent } from './components';
import { GoasasMatModule } from "../mat/goasos-mat.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent,
    BaseComponent,
    BoxComponent,
    BrochureComponent,
    MenuComponent
  ],
  exports: [HeaderComponent, BaseComponent, BoxComponent,
    BrochureComponent, MenuComponent],
  imports: [GoasasMatModule, RouterModule, CommonModule]
})
export class GoasosCommonModule { }