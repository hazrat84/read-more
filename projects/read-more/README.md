# ReadMore

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Intro

This is an angular module that will help reduce text to smaller version and will show read more/less option after that

## Installation

npm install ng-readmore --save

## Usage
```typescript
import { ReadMoreModule } from 'ng-readmore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReadMoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

app.component.html
```html
<app-read-more [text]="text" maxLength="40"></app-read-more>
```
this is how to use it in template file, if you do not pass the maxLength then the default will be 30 words after 30 words the read more link start appearing and toggling with read less



## Contribution

Bug fixes and features are welcomed.


