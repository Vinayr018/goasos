import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GoasosCommonModule } from "../common/common.module";
import { GoasasMatModule } from "../mat/goasos-mat.module";
import {
  ConsultBaseComponent, ConsultBankComponent,
  ConsultDataAiComponent, ConsultMarketComponent
} from './components';

const routes: Routes = [
  {
    path: 'consulting', component: ConsultBaseComponent, children: [
      { path: '', component: ConsultBankComponent, pathMatch: 'full' },
      { path: 'market', component: ConsultMarketComponent },
      { path: 'data', component: ConsultDataAiComponent },
    ]
  }
];

@NgModule({
  declarations: [
    ConsultBankComponent,
    ConsultDataAiComponent,
    ConsultMarketComponent,
    ConsultBaseComponent
  ],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes), CommonModule,
    GoasosCommonModule, GoasasMatModule]
})
export class ConsultModule { }