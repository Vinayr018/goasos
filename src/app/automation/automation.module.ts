import { NgModule } from "@angular/core";
import {
  AutomationMenuComponent, AutomationHomeComponent,
  AutomationBaseComponent, AutomationOfficeComponent,
  AutomationIndustryComponent, AutomationSecurityComponent,
  AutomationSpaceComponent
} from './components';
import { RouterModule, Routes } from "@angular/router";
import { GoasosCommonModule } from "../common/common.module";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: 'automation', component: AutomationBaseComponent, children: [
      { path: '', component: AutomationHomeComponent, pathMatch: 'full' },
      { path: 'office', component: AutomationOfficeComponent },
      { path: 'industry', component: AutomationIndustryComponent },
      { path: 'security', component: AutomationSecurityComponent },
      { path: 'space', component: AutomationSpaceComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AutomationMenuComponent,
    AutomationHomeComponent,
    AutomationBaseComponent,
    AutomationOfficeComponent,
    AutomationIndustryComponent,
    AutomationSecurityComponent,
    AutomationSpaceComponent
  ],
  imports: [RouterModule.forChild(routes), GoasosCommonModule, CommonModule],
  exports: [AutomationMenuComponent, RouterModule]
})
export class AutomationModule { }