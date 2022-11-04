import { Component } from '@angular/core';  // C#'taki using gibi.

@Component({ // { demek obje demek, @ = attribute gibi
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Köşeli parantez dizi demek, css dosyalarını buraya atarız
})
export class AppComponent {
  title = 'northwind';
  user: string = "enes"
  
}
