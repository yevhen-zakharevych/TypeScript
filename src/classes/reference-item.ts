import { timeout } from '../decorators';

export abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new RefereceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    #id: number;

    private _publisher: string;

    static department: string = 'Class Literature';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        this.#id = id;
        console.log('Creating a new RefereceItem...');
    }

    @timeout(4000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }

    getId(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}
