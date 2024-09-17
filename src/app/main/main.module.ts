import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
    MainProductComponent, MainContactComponent,
    MainBaseComponent, MainHomeComponent,
    MainAboutComponent, ProductVideoComponent,
    MainContactBranchComponent, MainContactFormComponent,
    MainContactSocialComponent
} from './components';
import { GoasosCommonModule } from "../common/common.module";
import { AutomationModule } from "../automation/automation.module";
import { ConsultModule } from "../consult/consult.module";
import { GoasasMatModule } from "../mat/goasos-mat.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

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
        MainProductComponent,
        ProductVideoComponent,
        MainContactBranchComponent,
        MainContactFormComponent,
        MainContactSocialComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        BrowserAnimationsModule,
        GoasosCommonModule,
        AutomationModule,
        ConsultModule,
        GoasasMatModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule]
})
export class MainModule { }