import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DonateComponent } from "./components/donate/donate.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { MenuComponent } from "./components/menu/menu.component";
import { SocialMediaLinkComponent } from "./components/social-media-links/social-media-links.component";
import { SoftwareComponent } from "./components/software/software.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoftwareComponent,
    DonateComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
    SocialMediaLinkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
