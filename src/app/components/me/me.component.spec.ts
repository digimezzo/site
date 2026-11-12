import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "../../app.component";
import { AppModule } from "../../app.module";
import { MeComponent } from "./me.component";

describe("Me page", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
    }).compileComponents();
  });

  it("navigates from the desktop menu and highlights Me", async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const router = TestBed.inject(Router);
    await router.navigateByUrl("/home");
    fixture.detectChanges();

    const link: HTMLAnchorElement = fixture.nativeElement.querySelector(
      ".horizontal-menu a[href='/me']"
    );
    expect(link).toBeTruthy();
    link.click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(router.url).toBe("/me");
    expect(fixture.nativeElement.querySelector("h1").textContent).toContain("Me");
    expect(fixture.nativeElement.querySelector(".horizontal-menu a.text-accent"))
      .toBeTruthy();
    const photo: HTMLImageElement = fixture.nativeElement.querySelector(".me-photo");
    expect(photo.getAttribute("src")).toBe("assets/images/me.png");
  });

  it("navigates from the mobile menu and dismisses it", async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const router = TestBed.inject(Router);
    await router.navigateByUrl("/home");
    fixture.detectChanges();

    fixture.nativeElement.querySelector(".hamburger-menu").click();
    fixture.detectChanges();
    const link = document.querySelector<HTMLAnchorElement>(
      ".offcanvas-body a[href='/me']"
    );
    expect(link).toBeTruthy();
    link!.click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(router.url).toBe("/me");
    expect(document.querySelector(".offcanvas-body")).toBeNull();
  });

  it("shows a photo when its URL is provided", () => {
    const fixture = TestBed.createComponent(MeComponent);
    fixture.componentInstance.photoUrl = "assets/images/portrait.jpg";
    fixture.detectChanges();

    const photo: HTMLImageElement = fixture.nativeElement.querySelector(".me-photo");
    expect(photo.getAttribute("src")).toBe("assets/images/portrait.jpg");
    expect(photo.alt).toBeTruthy();
    expect(fixture.nativeElement.querySelector(".me-photo-placeholder")).toBeNull();
  });

  it("shows the placeholder when no photo URL is provided", () => {
    const fixture = TestBed.createComponent(MeComponent);
    fixture.componentInstance.photoUrl = null;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector(".me-photo-placeholder").textContent)
      .toContain("Your photo");
    expect(fixture.nativeElement.querySelector("img.me-photo")).toBeNull();
  });
});
