class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    
    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDListElement;

        const importedNode = document.importNode(this.templateElement.content, true);
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin');
    }
}