import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  public constructor(private router: Router) {}

  @Input()
  public isHomeSelected: boolean = false;

  @Input()
  public isSoftwareSelected: boolean = false;

  @Input()
  public isDonateSelected: boolean = false;

  @Input()
  public isContactSelected: boolean = false;

  public navigateToHome(): void {
    this.router.navigateByUrl("/home");
  }

  public navigateToSoftware(): void {
    this.router.navigateByUrl("/software");
  }

  public navigateToDonate(): void {
    this.router.navigateByUrl("/donate");
  }

  public navigateToContact(): void {
    this.router.navigateByUrl("/contact");
  }
}
