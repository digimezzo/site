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
      "If you enjoy Dopamine and would like to support its development, you can optionally send me a donation. The software remains completely free and there are no benefits or services attached to donating. Thank you.",
  },
  knowte: {
    name: "Knowte",
    title: "Support Knowte",
    description:
      "If you enjoy Knowte and would like to support its development, you can optionally send me a donation. The software remains completely free and there are no benefits or services attached to donating. Thank you.",
  },
};

const DEFAULT_CONFIG: SoftwareConfig = {
  name: "Default",
  title: "Donate",
  description:
    "If you enjoy the project and would like to support its development, you can optionally send me a donation. The software remains completely free and there are no benefits or services attached to donating. Thank you.",
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
