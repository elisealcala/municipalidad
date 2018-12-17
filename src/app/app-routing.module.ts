import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SplashScreenComponent } from "./splash-screen/splash-screen.component";

const routes: Routes = [
    { path: "", redirectTo: "/splash-screen", pathMatch: "full" },
    { path: "splash-screen", component: SplashScreenComponent},
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
