import { NgModule } from "@angular/core";
import {
  AutomationHomeComponent, 
  AutomationOfficeComponent, AutomationIndustryComponent,
  AutomationSecurityComponent, AutomationSpaceComponent,
  AutomationEnergyComponent
} from './components';
import { RouterModule, Routes } from "@angular/router";
import { GoasosCommonModule } from "../common/common.module";
import { CommonModule } from "@angular/common";
import { GoasasMatModule } from "../mat/goasos-mat.module";

const routes: Routes = [
  { path: 'smart-home-automation-solutions', component: AutomationHomeComponent },
  { path: 'smart-office-automation-solutions', component: AutomationOfficeComponent },
  { path: 'industrial-automation-solutions', component: AutomationIndustryComponent },
  { path: 'cctv-video-surveillance-security-cameras', component: AutomationSecurityComponent },
  { path: 'space-saving-furniture-solutions', component: AutomationSpaceComponent },
  { path: 'solar-energy-solutions', component: AutomationEnergyComponent },
]

@NgModule({
  declarations: [
    AutomationHomeComponent,
    AutomationOfficeComponent,
    AutomationIndustryComponent,
    AutomationSecurityComponent,
    AutomationSpaceComponent,
    AutomationEnergyComponent
  ],
  imports: [RouterModule.forChild(routes), GoasosCommonModule,
    CommonModule, GoasasMatModule],
  exports: [RouterModule],
})
export class AutomationModule { }