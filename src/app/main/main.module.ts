import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
    MainContactComponent,
    MainBaseComponent, MainHomeComponent,
    MainAboutComponent, ProductVideoComponent,
    MainContactBranchComponent, MainContactFormComponent,
    MainContactSocialComponent, MainGeoComponent
} from './components';
import { GoasosCommonModule } from "../common/common.module";
import { AutomationModule } from "../automation/automation.module";
import { ConsultModule } from "../consult/consult.module";
import { GoasasMatModule } from "../mat/goasos-mat.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { provideHttpClient } from "@angular/common/http";

const routes: Routes = [
    { path: '', component: MainHomeComponent, pathMatch: 'full' },
    { path: 'about-us', component: MainAboutComponent },
    { path: 'contact-us', component: MainContactComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    declarations: [
        MainBaseComponent,
        MainHomeComponent,
        MainAboutComponent,
        MainContactComponent,
        MainContactBranchComponent,
        MainContactFormComponent,
        MainContactSocialComponent,
        MainGeoComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        BrowserAnimationsModule,
        GoasosCommonModule,
        AutomationModule,
        ConsultModule,
        GoasasMatModule,
        ReactiveFormsModule,
    ],
    exports: [RouterModule],
    providers: [provideHttpClient()]
})
export class MainModule { }