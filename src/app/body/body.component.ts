import { ArticleListComponent } from './../article-list/article-list.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ArticleListComponent, TagSidebarComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {}
