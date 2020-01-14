import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/user/login/login.component';
// Add bootstrap angular
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Components
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {IndexComponent} from './pages/index/index.component';
import {SignUpComponent} from './pages/user/sign-up/sign-up.component';
import {HeroComponent} from './components/ui/home/hero/hero.component';
import { AlertComponent } from './components/ui/general/alert/alert.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'home', component: IndexComponent, data: {animation: 'isRight'}},
  {path: 'sign-up', component: SignUpComponent, data: {animation: 'isLeft'}}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    SignUpComponent,
    HeroComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
