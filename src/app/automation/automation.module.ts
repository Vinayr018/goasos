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
      { path: '', component: AutomationHomeComponent, pathMatch: 'full' }
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