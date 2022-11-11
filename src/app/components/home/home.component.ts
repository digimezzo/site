import { Component } from "@angular/core";
import { Constants } from "src/app/common/constants";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  public copyright: string = Constants.copyright;
}
