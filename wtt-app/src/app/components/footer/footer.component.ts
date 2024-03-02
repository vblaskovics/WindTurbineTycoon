import { Component, inject } from '@angular/core'
import { ServerService } from '../../services/server.service'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AsyncPipe],
  template: `<div class="pico-background-pumpkin-300">
    <div class="container">
      <span class="">Server version: {{ serverVersion$ | async }}</span>
    </div>
  </div> `,
  styles: [``],
})
export class FooterComponent {
  serverVersion$ = inject(ServerService).getVersion()
}
