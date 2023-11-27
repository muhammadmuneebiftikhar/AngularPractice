import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Router } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-root",
  template: `<main>
    <header class="brand-name">
      <img
        (click)="navigateToHome()"
        src="/assets/logo.svg"
        alt="logo"
        aria-hidden="true"
      />
    </header>
    <section>
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  constructor(private router: Router) {}

  title = "homes";
  navigateToHome() {
    this.router.navigate([""]);
  }
}
