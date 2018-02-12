import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  lists = [
    {
    title: 'HTML Development',
    content : 'Elements, Semantics, API, WebSockets, SVG, Images, Canvas, Form Fields, Cookies, Tables'
  },
  {
    title: 'CSS Development',
    content: 'Selector, Transformation, Text-shadows, Responsiveness, Animations, Less CSs preprocesor, Sass Preprocessor'
  },
  {
    title: 'JS Development',
    content: 'Form Validation, Tranversal Methods, OOPS Logics, Plugins, Types, Error Handling, DataBinding, Actions, Control-flow'
  }

]

}
