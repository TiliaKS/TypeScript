import {Category} from './enums';
import {Book, Logger} from './intefaces';
import {BookRequiredFields, UpdatedBook, CreateCustomerFunctionType} from './types';
import {createCustomer} from './functions';
import {UniversityLibrarian} from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
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
const logDamage: Logger = (reason) => {
         console.log(`Damaged ${reason}`)
};
logDamage('missing back cover');

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
// const refBook = new refBook('Title', 2020, 10);
// console.log(refBook);
// refBook.printItem();
// refBook.publisher = 'abc';
// console.log(refBook.publisher);

// Task 05.03
// const refBook = new Encyclopedia('Title', 2020, 10);
// refBook.printCitation();
// console.log(refBook);

// Taks 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = "Tilia";
// favoriteLibrarian.assistCustomer('Pasha');
// console.log(favoriteLibrarian);

// Task 05.05
// const personBook: PersonBook = {
//     name: 'Sergey',
//     email: 'test@mail.com',
//     id: 5,
//     title: 'My title',
//     available: true,
//     category: Category.CSS,
//     author: 'Anton Pelex'
// };
//
// console.log(personBook);


// Task 06.05
// import ('./classes').then(module => {
//     const reader = new module.Reader();
//     console.log(reader);
//     reader.name = 'Anna';
//     reader.});

//===================================================================
// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// console.log(purge(inventory));
// console.log(purge([1, 2, 3]));

// Task 07.02
// const bookshelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookshelf.add(book));
// const firstBook = bookshelf.getFirst();
// console.log(firstBook);
//
// const mazazines: Mazazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Mazazine>();
// mazazines.forEach(mag => magazineShelf.add(mag));
// const firstMag = magazineShelf.getFirst();
// console.log(firstMag);

// Task 07.03
// magazineShelf.printTitles();
// const result = magazineShelf.find('Five Points');
// console.log(result);

// Task 07.04
// const book: BookRequiredFields = {
//     id:1,
//     title: '',
//     author: 'Unknown',
//     available: false,
//     category: Category.TypeScript,
//     markedDamaged: null,
//     pages: 300
// };
//
// const updatedBook: UpdatedBook = {
//     id: 1,
//     title: 'Refactoring JavaScript'
// };
//
// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

//===================================================================
// Task 08.01

const o = new UniversityLibrarian();
console.log(o);

// Task 08.02

o.name = 'Sergey';
(o as any).printLibrarian();
