import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: "Home",
      url: "/menu/home",
    },
    {
      title: "About",
      url: "/menu/about",
    },
  ];

  selectedPath = "";

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {}
}
