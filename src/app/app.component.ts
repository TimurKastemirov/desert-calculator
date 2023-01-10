import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    title = 'dessert-calculator';
    userAgent: string = navigator.userAgent;
    platform: string = navigator.platform;
    @ViewChild('notch') notch!: ElementRef<HTMLDivElement>;

    constructor(private renderer: Renderer2) {
    }

    ngAfterViewInit(): void {
        if (this.isIOS()) {
            this.renderer.removeClass(this.notch.nativeElement, 'display-none');
        }
    }

    isIOS(): boolean {
        return [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
            ].includes(this.platform)
            // iPad on iOS 13 detection
            || (this.userAgent.includes("Mac") && "ontouchend" in document)
    }
}
