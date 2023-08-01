import Quill from 'quill';

class QuillEditor extends HTMLElement {
    private quillContainer!: HTMLDivElement;
    private provider: Quill;

    constructor() {
        super();
        this.Init();
    }

    connectedCallback() {
        this.prepend(this.quillContainer);
        this.provider = new Quill(this.quillContainer, {
            theme: 'snow'
        });
    }

    private Init(): void {
        this.quillContainer = document.createElement('div');
    }

    public InsertText(index: number, text: string, format: string) {
        this.provider.insertText(index, text, format, true);
    }
}

customElements.define('quill-editor', QuillEditor);
