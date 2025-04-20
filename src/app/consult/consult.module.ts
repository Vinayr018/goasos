import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GoasosCommonModule } from "../common/common.module";
import { GoasasMatModule } from "../mat/goasos-mat.module";
import {
  ConsultBaseComponent, ConsultBankComponent,
  ConsultDataAiComponent, ConsultMarketComponent,
  ConsultProductsComponent
} from './components';

const routes: Routes = [
  { path: 'bank', component: ConsultBankComponent },
  { path: 'market', component: ConsultMarketComponent },
  { path: 'data', component: ConsultDataAiComponent },
]

@NgModule({
  declarations: [
    ConsultBankComponent,
    ConsultDataAiComponent,
    ConsultMarketComponent,
    ConsultBaseComponent,
    ConsultProductsComponent
  ],
  exports: [RouterModule, ConsultProductsComponent],
  imports: [RouterModule.forChild(routes), CommonModule,
    GoasosCommonModule, GoasasMatModule]
})
export class ConsultModule { }