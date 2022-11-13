import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogPostComponent } from "./components/blog/blog-post/blog-post.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DonateComponent } from "./components/donate/donate.component";
import { DopamineFaqComponent } from "./components/dopamine-faq/dopamine-faq.component";
import { HomeComponent } from "./components/home/home.component";
import { SoftwareComponent } from "./components/software/software.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "software", component: SoftwareComponent },
  { path: "blog", component: BlogComponent },
  { path: "blog/post/:id", component: BlogPostComponent },
  { path: "site/blog/post/:id", component: BlogPostComponent },
  { path: "donate", component: DonateComponent },
  { path: "contact", component: ContactComponent },
  { path: "dopamine-faq", component: DopamineFaqComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
