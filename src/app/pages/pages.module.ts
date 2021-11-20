import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageModule } from './home-page/home-page.module';
import { TestPageModule } from './test-page/test-page.module';

@NgModule({
  imports: [CommonModule, HomePageModule, TestPageModule],
  declarations: [],
})
export class PagesModule {}
