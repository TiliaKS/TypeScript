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

export {Book, DamageLogger as Logger, Person, Author, Librarian}
