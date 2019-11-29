import { TitleComponent } from "../title/title.component";

export class BrandTitleComponent {

    constructor(text) {
        this.title = new TitleComponent(text);
        this.element = null;
    }

    display(parent) {
        this.element = document.createElement("app-brand-title");
        const logo = document.createElement("div-img");
        this.element.appendChild(logo);
        this.title.display(this.element);
        parent.appendChild(this.element);
    }

    hide() {
        this.title.hide();
        this.element.parentNode.removeChild(this.element);
    }

}