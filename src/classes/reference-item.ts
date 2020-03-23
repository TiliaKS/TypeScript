import {timeout} from '../decorators';

export abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log(`Crateing a new title`);
    //     this.title = newTitle;
    //     this.year = newYear
    // }

    constructor(public title: string, protected year: number) {
        console.log(`Crateing a new title`);
    }

    private _publisher: string;

    static deparment: string = 'Classical';

    get publisher(): string {
        return this._publisher.toLocaleUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} title was published in ${this.year}}`);
        console.log(`Department ${ReferenceItem.deparment}`)
    }

    abstract printCitation(): void;
}
