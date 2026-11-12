import { Component } from "@angular/core";

@Component({
  selector: "app-me",
  templateUrl: "./me.component.html",
  styleUrls: ["./me.component.scss"],
})
export class MeComponent {
  public photoUrl: string | null = "assets/images/me.png";
}
