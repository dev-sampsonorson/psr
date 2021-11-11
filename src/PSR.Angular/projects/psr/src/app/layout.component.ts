import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-layout',
    template: `
      <app-header [showSignInOrSignUp]="isAuthenticated$ | async"></app-header>
      <!-- h-0 is here to make the immediate sibling fill height of this container -->
      <div class="flex-1 h-0">
          <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 min-h-full flex flex-col">
              <router-outlet></router-outlet>
          </div>
      </div>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
    `]
})
export class LayoutComponent implements OnInit {

    public isAuthenticated$: Observable<boolean>;

    constructor(private auth: AuthService) {
        this.isAuthenticated$ = this.auth.isAuthenticated()
    }

    ngOnInit(): void {
    }

}