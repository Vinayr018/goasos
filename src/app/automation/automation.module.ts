import { NgModule } from "@angular/core";
import {
  AutomationHomeComponent, AutomationBaseComponent,
  AutomationOfficeComponent, AutomationIndustryComponent,
  AutomationSecurityComponent, AutomationSpaceComponent,
  AutomationProductsComponent, ProductVideoComponent,
  AutomationEnergyComponent
} from './components';
import { RouterModule, Routes } from "@angular/router";
import { GoasosCommonModule } from "../common/common.module";
import { CommonModule } from "@angular/common";
import { GoasasMatModule } from "../mat/goasos-mat.module";
import { AutomationDataService } from "./services/data.service";

const routes: Routes = [
  { path: 'smart-home-automation-solutions', component: AutomationHomeComponent },
  { path: 'office', component: AutomationOfficeComponent },
  { path: 'industry', component: AutomationIndustryComponent },
  { path: 'security', component: AutomationSecurityComponent },
  { path: 'space', component: AutomationSpaceComponent },
  { path: 'energy', component: AutomationEnergyComponent },
]

@NgModule({
  declarations: [

    AutomationHomeComponent,
    AutomationBaseComponent,
    AutomationOfficeComponent,
    AutomationIndustryComponent,
    AutomationSecurityComponent,
    AutomationSpaceComponent,
    AutomationProductsComponent,
    ProductVideoComponent,
    AutomationEnergyComponent
  ],
  imports: [RouterModule.forChild(routes), GoasosCommonModule,
    CommonModule, GoasasMatModule],
  exports: [RouterModule, AutomationProductsComponent],
  providers: [AutomationDataService]
})
export class AutomationModule { }