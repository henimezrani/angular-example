import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {fader} from './lib/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader,
  ]
})
export class AppComponent {
  title = 'Countdown | Buy and sell easily';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
