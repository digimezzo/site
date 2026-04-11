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
      "Dopamine started as a small side project and has grown thanks to people like you using it. I work on it in my spare time, evenings and weekends, to keep it fast, simple, and free for everyone. If it's part of your daily music routine and you'd like to support its development, you can make a small donation via PayPal or Ko-fi. It really means a lot.",
  },
  knowte: {
    name: "Knowte",
    title: "Support Knowte",
    description:
      "Knowte started as a small side project and has grown thanks to people like you using it. I work on it in my spare time, evenings and weekends, to keep it fast, simple, and free for everyone. If it's part of your daily note-taking routine and you'd like to support its development, you can make a small donation via PayPal or Ko-fi. It really means a lot.",
  },
};

const DEFAULT_CONFIG: SoftwareConfig = {
  name: "Default",
  title: "Donate",
  description:
    "This software started as a small side project and has grown thanks to people like you using it. I work on it in my spare time, evenings and weekends, to keep it fast, simple, and free for everyone. If it's part of your daily note-taking routine and you'd like to support its development, you can make a small donation via PayPal or Ko-fi. It really means a lot.",
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
