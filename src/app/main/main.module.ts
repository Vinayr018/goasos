import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainBaseComponent } from './components';
import { GoasosCommonModule } from "../common/common.module";

const routes: Routes = [
    { path: '', component: MainBaseComponent }
]

@NgModule({
    declarations: [
        MainBaseComponent
    ],
    imports: [RouterModule.forChild(routes), GoasosCommonModule],
    exports: [RouterModule]
})
export class MainModule { }