import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: `ng-template[tabContent]`
})
/* directive là 1 feature đặc biệt có thể gán được directive lên DOM node, component,...match với selector 
ta sẽ cung cấp được cho cái component, DOM node đó những tính năng mà ta muốn
đây là 1 cách tách ra feature mà ta muốn reuse lại directive trên nhiều component khác nhau theo Single Responsibility (SOLID) */
export class TabContentDirective {
    constructor(public templateRef: TemplateRef<unknown>) {}
}

// Ví dụ <ng-template tabPanel></ng-template> ở đây nó sẽ match dc cái tabPanel này bằng instance của TabPanelDirective tạo ra 
// ở ngay đây