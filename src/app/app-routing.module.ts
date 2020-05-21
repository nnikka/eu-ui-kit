import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from './pages/home/home.component'
import { InputsComponent } from './pages/inputs/inputs.component'

export const appRoutes = [
  { path: "", component: HomeComponent },
  { path: "inputs", component: InputsComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
