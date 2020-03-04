showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

enum Category {JavaScript, CSS, HTML, TypeScript, Angular}

function getAllBooks(): object[] {
    let books: object[] = [
        {title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        {title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript},
        {title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        {title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript}
    ];

    return books;
}

function logFirstAvailable(books: any[]): void {
    const numberOfBooks = books.length;
    let firstBookTitle: string = '';

    for (const book of books) {
        if (book.available) {
            firstBookTitle = book.title;
            break;
        }
    }
    console.log(`Total Books ${numberOfBooks}`);
    console.log(`First Available Book ${firstBookTitle}`);
}

function getBookTitleByCategory(category: Category): Array<string> {
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

function calcTotalPages(): bigint {
    const data = [
        {lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280}
    ];
    const result = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    return result
}

//===================================================================
//Task 01.02
// logFirstAvailable(getAllBooks());
// const titles = getBookTitleByCategory(Category.JavaScript);
// logBookTitles(titles);
// const result = getBookAuthorByIndex(1);
// console.log(result);
console.log(calcTotalPages());