import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

interface SoftwareConfig {
  name: string;
  title: string;
  description: string;
}

const SOFTWARE_CONFIGS: { [key: string]: SoftwareConfig } = {
  dopamine: {
    name: "Dopamine",
    title: "Support Dopamine",
    description:
      "Enjoying Dopamine? If you'd like to support its continued development, you can leave a donation. Every contribution is greatly appreciated!",
  },
  knowte: {
    name: "Knowte",
    title: "Support Knowte",
    description:
      "Enjoying Knowte? If you'd like to support its continued development, you can leave a donation. Every contribution is greatly appreciated!",
  },
};

const DEFAULT_CONFIG: SoftwareConfig = {
  name: "Default",
  title: "Donate",
  description:
    "Enjoying the project? If you'd like to support its continued development, you can leave a donation. Every contribution is greatly appreciated!",
};

@Component({
  selector: "app-donate",
  templateUrl: "./donate.component.html",
  styleUrls: ["./donate.component.scss"],
})
export class DonateComponent implements OnInit {
  config: SoftwareConfig = DEFAULT_CONFIG;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const software = params["software"]?.toLowerCase();
      this.config = SOFTWARE_CONFIGS[software] || DEFAULT_CONFIG;
    });
  }
}
