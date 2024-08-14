import { NgModule } from "@angular/core";
import { AutomationMenuComponent, AutomationHomeComponent } from './components';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: 'automation', component: AutomationHomeComponent }
];

@NgModule({
  declarations: [
    AutomationMenuComponent,
    AutomationHomeComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [AutomationMenuComponent, RouterModule]
})
export class AutomationModule { }