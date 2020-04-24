import {Directive, HostListener, HostBinding} from "@angular/core"

@Directive({
    selector: "[appDropdown]"
})

export class DropdownDirective{

    //attahced to the class of the host... especigically to open. if is open is true, the it attaches the open class to the classes of the dom element
    @HostBinding("class.open") isOpen = false

    @HostListener("click") toggleOpen(){
    this.isOpen = !this.isOpen
    }



}