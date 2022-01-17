
import { Component, ViewEncapsulation } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-designer-resources-en';
import * as GcDesigner from '@grapecity/spread-sheets-designer';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    designer: any;
    spread: any;
    props = {
       styleInfo: 'width: 100%; height: 900px',
    };
}
