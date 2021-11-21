import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PasswordService {

    constructor() { }

    checkStrength(password: string): number {
        /* if (!password)
            return 0; */

        // 1
        let force: number = 0;

        // 2
        const regex: RegExp = /[$-/:-?{-~!"^_@`\[\]]/g;
        const lowerLetters: boolean = /[a-z]+/.test(password);
        const upperLetters: boolean = /[A-Z]+/.test(password);
        const numbers: boolean = /[0-9]+/.test(password);
        const symbols: boolean = regex.test(password);

        // 3
        const flags: boolean[] = [lowerLetters, upperLetters, numbers, symbols];

        // 4
        let passedMatches = 0;
        for (const flag of flags) {
            passedMatches += flag === true ? 1 : 0;
        }

        // 5
        force += 2 * password.length + ((password.length >= 10) ? 1 : 0);
        force += passedMatches * 10;

        // 6
        force = (password.length <= 8) ? Math.min(force, 10) : force;

        // 7
        force = (passedMatches === 1) ? Math.min(force, 10) : force;
        force = (passedMatches === 2) ? Math.min(force, 20) : force;
        force = (passedMatches === 3) ? Math.min(force, 30) : force;
        force = (passedMatches === 4) ? Math.min(force, 40) : force;

        return force;
    }
}
