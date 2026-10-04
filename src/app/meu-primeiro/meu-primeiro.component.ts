import { Component } from '@angular/core';

@Component({
    selector: 'meu-primeiro-component',
    template: `<p>Meu primeiro component com Angular 2!</p>`  // Segundo convenção, só deve ser utilizado o template inline se o código HTML tiver até 3 linhas
})

export class MeuPrimeiroComponent {}