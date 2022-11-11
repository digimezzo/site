import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { DonateComponent } from "./components/donate/donate.component";
import { HomeComponent } from "./components/home/home.component";
import { SoftwareComponent } from "./components/software/software.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "software", component: SoftwareComponent },
  { path: "donate", component: DonateComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
