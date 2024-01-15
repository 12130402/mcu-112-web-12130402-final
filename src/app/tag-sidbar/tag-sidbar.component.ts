import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'app-tag-sidbar',
  standalone: true,
  imports: [TagListComponent],
  templateUrl: './tag-sidbar.component.html',
  styleUrl: './tag-sidbar.component.css',
})
export class TagSidbarComponent {
  @HostBinding('class') class='sidebar';
  tags = {'enim', 'repellat', 'est', 'eos'};
}
