import { Location } from "@angular/common";
import { AfterViewInit, Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  public constructor(private router: Router, public location: Location) {}

  public isHomeSelected: boolean = false;
  public isSoftwareSelected: boolean = false;
  public isDonateSelected: boolean = false;
  public isContactSelected: boolean = false;

  public ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      this.showPage();
    });
  }

  public ngAfterViewInit(): void {
    this.showPage();
  }

  public showPage(): void {
    this.isHomeSelected = false;
    this.isSoftwareSelected = false;
    this.isDonateSelected = false;
    this.isContactSelected = false;

    switch (this.location.path()) {
      case "/home":
        this.isHomeSelected = true;

        return;
      case "/software":
        this.isSoftwareSelected = true;

        return;
      case "/donate":
        this.isDonateSelected = true;

        return;
      case "/contact":
        this.isContactSelected = true;

        return;
      default: {
        this.isContactSelected = true;

        return;
      }
    }
  }
}
