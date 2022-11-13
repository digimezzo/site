import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.scss"],
})
export class BlogPostComponent {
  private sub: Subscription = new Subscription();

  public post: string = "";

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.post = "./assets/blog/post/" + params["id"] + ".md";
    });
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
