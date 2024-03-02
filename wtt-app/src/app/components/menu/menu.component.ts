import { Component, inject } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  template: `
    <nav class="pico-background-zinc-50">
      <div class="container">
        <ul>
          <img width="60" height="60" src="assets/logo.png" alt="Wind Turbine Tycoon Logo">
          <li><strong class="pico-color-pumpkin">Wind Turbine Tycoon</strong></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      height: 80px;
    }
    .container {
      display: flex;
    }
  `],
})
export class MenuComponent {
  server = inject(ServerService);
  serverVersion = this.server.getVersion();
}
