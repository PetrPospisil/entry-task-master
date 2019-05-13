import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appUnpack]'
})
export class UnpackDirective implements OnDestroy {
  @Input('appUnpack')
  set input$(input$: Observable<any>) {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }

    this.subscription = input$.subscribe(value => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.template, {appUnpack: value});
    });
  }

  private subscription: Subscription;

  constructor(private readonly template: TemplateRef<any>,
              private readonly viewContainer: ViewContainerRef) { }

  ngOnDestroy(): void {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
  }
}
