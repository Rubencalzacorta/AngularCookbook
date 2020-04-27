import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    
    collapsed = true;

}
