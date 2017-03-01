import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

	loginTitle: string = 'Login';

    regTitle: string = 'Registration';

    public formRegistration: FormGroup;

    constructor(private fb: FormBuilder) {

    	this.formRegistration = this.fb.group({
	        email: ['', this.emailValidator],
	        agree: ['', this.agreeValidator],
	        passwordGroup: this.fb.group({
	        	password: [''],
	        	pswconfirm: ['']
	        },
	        {
	        	asyncValidator: this.confirmValidator
	        })
	    })

    }

    public emailValidator(control: FormControl): {[key: string]: boolean} {

    	const value = control.value || '';
    	const valid = value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    	return valid ? null : {emailError: true};

    }

    public confirmValidator({value}: FormControl): Observable<{[key: string]: boolean}> {

    	const [first, ...rest] = Object.keys(value || {});
   		const valid = first&&first.length>5 && rest.every(v => value[v] === value[first]);
    	//const valid = control.value['password'] === control.value['pswconfirm'];
    	return Observable.of(valid ? null : {confirm: true}).delay(2000);

    }

    public agreeValidator(control: FormControl): {[key: string]: boolean} {

    	const value = control.value || '';
    	const valid = value;
    	return valid ? null : {emailError: true};

    }

    public loginSubmit(value: any):void {
    	console.log(value);
    }

    

}

