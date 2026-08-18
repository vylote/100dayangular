import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <ul class="nav nav-tabs my-4 mx-4">
      <li class="nav-item" *ngFor="let link of navs">
        <a class="nav-link" href="#">
            <ng-container *ngIf="linkTmpl else noTmpl">
                <ng-container *ngTemplateOutlet="linkTmpl; context:{$implicit: link}">

                </ng-container>
            </ng-container>
            <ng-template #noTmpl> {{ link }}</ng-template>
        </a>
      </li>
    </ul>
  `
})
export class TabComponent {
    @Input() navs: string[]
    @Input() linkTmpl: TemplateRef<any>
}
