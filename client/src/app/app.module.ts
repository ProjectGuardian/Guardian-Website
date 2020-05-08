import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service'
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import { environment } from 'src/environments/environment'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddPostComponent } from './add-post/add-post.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddPostComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}