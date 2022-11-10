import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DonateComponent } from "./components/donate/donate.component";
import { HomeComponent } from "./components/home/home.component";
import { SoftwareComponent } from "./components/software/software.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoftwareComponent,
    DonateComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
