import { Component } from "@angular/core";
import { Constants } from "src/app/common/constants";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  public copyright: string = Constants.copyright;
}
