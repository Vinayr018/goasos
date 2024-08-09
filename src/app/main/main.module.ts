import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainBaseComponent } from './components';
import { GoasosCommonModule } from "../common/common.module";
import { AutomationModule } from "../automation/automation.module";
import { ConsultModule } from "../consult/consult.module";

const routes: Routes = [
    { path: '', component: MainBaseComponent }
]

@NgModule({
    declarations: [
        MainBaseComponent
    ],
    imports: [RouterModule.forChild(routes), GoasosCommonModule, AutomationModule, ConsultModule],
    exports: [RouterModule]
})
export class MainModule { }