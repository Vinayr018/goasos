import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

const matModules: any[] = [
    MatButtonModule,
    MatIconModule
];

@NgModule({
    imports: [matModules],
    exports: [matModules]
})
export class GoasasMatModule { }