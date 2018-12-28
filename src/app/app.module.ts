import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from './components/home/home.component';
import { ContraloriaComponent } from "./components/contraloria/contraloria.component";
import { DataService } from './services/data.service'
import { GastoComponent } from "./components/gasto/gasto.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ContraloriaComponent,
        GastoComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [DataService]
})
export class AppModule { }
