import { Component, ContentChild, forwardRef, Inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';
import { TabContentDirective } from './tab-content.directive';

@Component({
  selector: 'tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [''],
})
export class TabPanelComponent {
  @Input() title: string;

  @ViewChild(TemplateRef, { static: true }) panelBody: TemplateRef<unknown>;  

  @ContentChild(TabContentDirective, {static: true}) explicitBody: TabContentDirective

  constructor(private tabGroup: TabGroupComponent) {}

  ngOnInit() {
    console.log(this.explicitBody)
    this.tabGroup.addTab(this);
  }

  ngOnDestroy() {
    this.tabGroup.removeTab(this);
  }
}
