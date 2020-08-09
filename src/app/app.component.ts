import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'voting-app-edu';

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article with title ${title.value} and link ${link.value}.`)
    return false;
  }
}
