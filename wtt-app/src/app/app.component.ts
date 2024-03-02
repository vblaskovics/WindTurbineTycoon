import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MenuComponent } from './components/menu/menu.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  template: `
    <header><app-menu /></header>
    <main>Body</main>
    <footer><app-footer /></footer>
  `,
  styles: [
    `
      :host {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      main {
        flex-grow: 1;
      }
    `,
  ],
})
export class AppComponent {
  title = 'wtt-app'
}
