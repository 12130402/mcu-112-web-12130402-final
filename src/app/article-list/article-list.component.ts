import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
  imports: [TagComponent],
})
export class ArticleListComponent {
  @HostBinding('class') class = 'article-list';
}
