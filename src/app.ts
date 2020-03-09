showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

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

type BookProperties = keyof Book;



function getAllBooks(): readonly Book[] {
    const books:readonly Book[] = <const>[
        {id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        {id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
        {id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        {id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript}
    ];

    return books
}

function logFirstAvailable(books: readonly object[] = getAllBooks()): void {
    const numberOfBooks = books.length;
    let firstBookTitle: string = '';

    for (const book of <any>books) {
        if (book.available) {
            firstBookTitle = book.title;
            break;
        }
    }
    console.log(`Total Books ${numberOfBooks}`);
    console.log(`First Available Book ${firstBookTitle}`);
}

function getBookTitleByCategory(category?: Category.JavaScript): Array<string> {
    const books = getAllBooks() as any[];
    const titles: string[] = [];

    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
            break;
        }
    }
    return titles;
}

function logBookTitles(titles: string[]): void {
    titles.forEach((titles: string) => {
        console.log(titles)
    })
}

function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const {title, author} = <any>books[index];
    return [title, author];
}

// function calcTotalPages(): bigint {
//     const data = <const>[
//         {lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250},
//         {lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300},
//         {lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280}
//     ];
//     надо поменять в ts json 
//     return data.reduce((acc: bigint, obj) => {
//         return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
//     }, 0n)
// }

function getBookById(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find((book: Book) => book.id === id);
}

function createCustomerId(name: string, id: number): string {
    return `${id} - ${name}`;
}
    
function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Create customer ${name}`);

    if (age) {
        console.log(`Create customer ${age}`)
    }

    if (city) {
        console.log(`Create customer ${city}`)
    }
}

function checkOutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log(`Cheking out books for ${customer}`)
    const titles: string[] = [];

    for (const id of bookIds) {
        const book = getBookById(id);

        if (book && book.available) {
            titles.push(book.title);
        }
    }
    return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    if ((args.length < 1) || (args.length > 2)) {
        return [];
    }

    if (args.length === 1) {
        const arg = args[0];
        if (typeof arg === 'string') {
            return books.filter((book: any) => book.author === arg).map((book: any) => book.title);
        }
        if (typeof arg === 'boolean') {
            return books.filter((book: any) => book.available === arg).map((book: any) => book.available);
        }
    }

    if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter((book: any) => book.available === available && book.id === id).map((book: any) => book.title)
        }
    }
}

function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a stirng');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);

     return [...title].reverse().join('');
}

function printBook(book: Book): void {
    console.log(`${book.title}  by  ${book.author}`)
}

function getBookProp(book: Book, prop: BookProperties) {
    if(typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

class ReferenceItem {
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

    printItem(): void {
        console.log(`${this.title} title was published in ${this.year}}`);
        console.log(`Department ${ReferenceItem.deparment}`)
    }
}
class Encyclopedia extends ReferenceItem {
    constructor(title: string, year, public edition: number) {
        super(title, year)
    }
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`)
    }
}

//===================================================================
//Task 01.02
// logFirstAvailable(getAllBooks());
// const titles = getBookTitleByCategory(Category.JavaScript);
// logBookTitles(titles);
// const result = getBookAuthorByIndex(1);
// console.log(result);
// console.log(calcTotalPages());

//===================================================================
//Task 03.01
// const titles = getBookTitleByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));
// const book = getBookById(10);
// console.log(book)

//Task 03.02
// const myId = createCustomerId('Ann', 10);
// console.log(myId);
// let idGenerator: (name: string, id: number) => string = (name: string, id: number) => `${id} - ${name}`;
// idGenerator = createCustomerId;
// console.log(idGenerator('boris', 20));

//Task 03.03
// createCustomer('Boris', 35);
// createCustomer('Tilia', 35, 'kiev');
// console.log(getBookTitleByCategory());
// logFirstAvailable();
// const myBooks = checkoutBooks('Ann', 1, 2, 3);
// console.log(myBooks);

//Task 03.04
// const checkedOutBooks = getTitles('1');
// console.log(checkedOutBooks);

//Task 03.05
// console.log(bookTitleTransform((getAllBooks()[0] as any).title));
// console.log(bookTitleTransform(123)

//===================================================================
//Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     markedDamaged: (reason: string) => {
//         console.log(`Damaged ${reason}`)
//     }
// };

// printBook(myBook);
// myBook.markedDamaged('missing back cover')
// myBook.markedDamaged('missing back cover');

//Task 04.02
// const logDamage: DamageLogger = (reason) => {
//          console.log(`Damaged ${reason}`)
// };
// logDamage('missing back cover');

//Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     numBookPublished: 10
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@email.com',
//     department: 'Classic Literature',
//     assistCustomer: null
// }

// Task 04.04
// const offer: any ={
//     book: {
//         title: 'Essential TypeScript'
//     }
// };

// console.log(offer?.magazine);

//Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markedDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

//===================================================================

// Task 05.01
// const ref = new ReferenceItem('my title', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'My pablisher';
// console.log(ref.publisher);

// Task 05.02
const refBook = new Encyclopedia('Title', 2020, 10);
console.log(refBook);
refBook.printItem();
refBook.publisher = 'abc';
console.log(refBook.publisher)