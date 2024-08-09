import { NgModule } from "@angular/core";
import { AutomationMenuComponent } from './components';

@NgModule({
  declarations: [
    AutomationMenuComponent
  ],
  exports: [AutomationMenuComponent]
})
export class AutomationModule { }