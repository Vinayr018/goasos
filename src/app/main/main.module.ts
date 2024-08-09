import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainProductComponent, MainContactComponent, MainBaseComponent, MainHomeComponent, MainAboutComponent } from './components';
import { GoasosCommonModule } from "../common/common.module";
import { AutomationModule } from "../automation/automation.module";
import { ConsultModule } from "../consult/consult.module";
import { GoasasMatModule } from "../mat/goasos-mat.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const routes: Routes = [
    {
        path: '', component: MainBaseComponent, children: [
            { path: '', component: MainHomeComponent, pathMatch: 'full' },
            { path: 'about', component: MainAboutComponent },
            { path: 'contact', component: MainContactComponent },
            { path: 'product', component: MainProductComponent },
        ]
    }
]

@NgModule({
    declarations: [
        MainBaseComponent,
        MainHomeComponent,
        MainAboutComponent,
        MainContactComponent,
        MainProductComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        BrowserAnimationsModule,
        GoasosCommonModule,
        AutomationModule,
        ConsultModule,
        GoasasMatModule
    ],
    exports: [RouterModule]
})
export class MainModule { }