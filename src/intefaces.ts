import { Category } from './enums';

interface DamageLogger {
    (reason: string): void
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markedDamaged?: (reason: string) => void;
    markedDamaged?: DamageLogger;
}

interface Person {
    name: string
    email: string
}

interface Author extends Person {
    numBookPublished: number
}

interface Interface {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Mazazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

export {Book, LibMgrCallback, DamageLogger as Logger, Person, Mazazine, Author, Librarian, ShelfItem}
