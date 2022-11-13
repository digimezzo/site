import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MarkdownModule } from "ngx-markdown";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogPostComponent } from "./components/blog/blog-post/blog-post.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DonateComponent } from "./components/donate/donate.component";
import { DopamineFaqComponent } from "./components/dopamine-faq/dopamine-faq.component";
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
    DopamineFaqComponent,
    BlogComponent,
    BlogPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
