import { Component, Input } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  public constructor() {}

  @Input()
  public isHomeSelected: boolean = false;

  @Input()
  public isSoftwareSelected: boolean = false;

  @Input()
  public isDonateSelected: boolean = false;

  @Input()
  public isContactSelected: boolean = false;
}
