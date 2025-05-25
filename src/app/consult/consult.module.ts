import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GoasosCommonModule } from "../common/common.module";
import { GoasasMatModule } from "../mat/goasos-mat.module";
import {
  ConsultBankComponent
} from './components';

const routes: Routes = [
  { path: 'software-consulting-services', component: ConsultBankComponent },
]

@NgModule({
  declarations: [
    ConsultBankComponent,
  ],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes), CommonModule,
    GoasosCommonModule, GoasasMatModule]
})
export class ConsultModule { }