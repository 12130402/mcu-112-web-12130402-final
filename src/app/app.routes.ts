import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'sign-in', component: SignInPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
];
