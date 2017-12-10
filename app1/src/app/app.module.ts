import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import { TypageComponent } from './components/typage/typage.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
    declarations : [
        AppComponent,
        UserComponent,
        TypageComponent,
        PipesComponent,
        InputComponent,
    ],
    imports : [
        BrowserModule
    ],
    providers : [],
    bootstrap : [ AppComponent ]
})
export class AppModule {
}
