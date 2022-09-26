import { Directive, Input, OnDestroy } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { sameValueValidateFactory } from './same-value-validate-fn';

@Directive({
    selector: '[appSameFieldValue]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: SameFieldValueDirective,
            multi: true
        }

    ]
})
export class SameFieldValueDirective implements Validator, OnDestroy {

    @Input() appSameFieldValue = '';
    @Input() name!: string;
    otherControl!: AbstractControl;
    subscription!: Subscription;

    constructor(
        private form: NgForm
    ) {

    }

    validate(control: AbstractControl): ValidationErrors | null {

        const otherControl = this.form.controls[this.appSameFieldValue];

        if (this.subscription) { this.subscription.unsubscribe(); }

        this.subscription = otherControl.valueChanges!.subscribe(() => {
            control.updateValueAndValidity({ onlySelf: true });
        });
        return sameValueValidateFactory(this.name, otherControl, this.appSameFieldValue)(control);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
