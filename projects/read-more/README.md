# ReadMore

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12 and Node Version is v18.10.0.

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
<app-read-more [text]="text" [maxLength]="40"></app-read-more>
```
By default it will reduce the string to 30 words if user does not pass the maxLength

## Contribution

Bug fixes and features are welcomed.

Here is the link for module [ng-readmore](https://www.npmjs.com/package/ng-readmore) 


