import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "home", component: AppComponent },
  { path: "software", component: AppComponent },
  { path: "donate", component: AppComponent },
  { path: "contact", component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
