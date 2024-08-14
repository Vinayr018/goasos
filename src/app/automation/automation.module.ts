import { NgModule } from "@angular/core";
import {
  AutomationMenuComponent, AutomationHomeComponent,
  AutomationBaseComponent
} from './components';
import { RouterModule, Routes } from "@angular/router";
import { GoasosCommonModule } from "../common/common.module";

const routes: Routes = [
  {
    path: 'automation', component: AutomationBaseComponent, children: [
      { path: '', component: AutomationHomeComponent, pathMatch: 'full' },
      { path: 'office', component: AutomationHomeComponent },
      { path: 'industry', component: AutomationHomeComponent },
      { path: 'security', component: AutomationHomeComponent },
      { path: 'space', component: AutomationHomeComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AutomationMenuComponent,
    AutomationHomeComponent,
    AutomationBaseComponent
  ],
  imports: [RouterModule.forChild(routes), GoasosCommonModule],
  exports: [AutomationMenuComponent, RouterModule]
})
export class AutomationModule { }