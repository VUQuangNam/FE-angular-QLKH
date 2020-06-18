import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.style.scss']
})
export class SignInComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    onclick = () => {
        try {
            const value = [];
            for (let index = 0; index < 10000; index++) {
                const x = Math.floor((Math.random() * 1000));
                const check = value.find(a => a === x);
                if (!check) {
                    value.push(x);
                    if (value.length === 480) {
                        const data = value.map(b => {
                            if (b < 10) { return '00' + b; }
                            if (b >= 10 && b < 100) { return '0' + b; }
                            if (b >= 100) { return + b; }
                        }).toString();
                        console.log(data);
                    }
                }
            }
        } catch (ex) {
            console.log(ex);
        }
    }

}
