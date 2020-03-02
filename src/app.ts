showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// enum Category { javascript, css, html, angular }
//
// function getAllBooks(): object[] {//Array<{ title: string, author: string, available: boolean
//     const books: object[] = [
//         {title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category.javascript},
//         {title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category.css},
//         {title: 'CSS Secrets', author: 'Lea Verou', available: true, category.css},
//         {title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true}
//     ];
//     return books;
// }
//
// function logFirstAvailable(books: any[]): void {
//     const numberOfBooks = books.length;
//     let firstBookTitle: string = '';
//
//     for (const book of books) {
//         if (book.available) {
//             firstBookTitle = book.title;
//             break
//         }
//     }
//     console.log(`Total books ${numberOfBooks}`);
//     console.log(`Total books ${firstBookTitle}`)
// }
//
// function getBookTitlesByCategory(category: Category): Array<string> {
//     const books = getAllBooks() as any[];
//     const titles: string = [];
//     for (const book of books) {
//         if (book.category === category) {
//             titles.push(book.title);
//             break
//         }
//     }
//     return titles;
// }
//
// function logBookTitles(titles: string[]): void {
//     titles.forEach((title: string) => console.log(title))
// }
//
// function getBookAuthorByIndex(index: number): [string, string] {
//     const books = getAllBooks();
//     const {title, author} = <any>books[index];
//
//     return [title, author]
// }
//
//   function calcTotalPages(){
//       const data = [
//
//       ]
//   }
//
// //===============================================
// //Task 01.02
//
// // logFirstAvailable(getAllBooks());
// //
// // const titles = getBookTitlesByCategory(Category.javascript);
// // logBookTitles(titles);
// const result = getBookAuthorByIndex(1);
// console.log(result);

enum Category {JavaScript, CSS, HTML, TypeScript, Angular}

function getAllBooks():object[] {
    let books: object[] = [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript},
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];

    return books;
}

function logFirstAvailable(books: any[]):void {
    const numberOfBooks = books.length;
    let firstBookTitle: string = '';

    for (const book of books) {
        if(book.available) {
            firstBookTitle = book.title;
            break;
        }
    }
    console.log(`Total Books ${numberOfBooks}`);
    console.log(`First Available Book ${firstBookTitle}`);
}

//===================================================================
//Task 01.02

logFirstAvailable(getAllBooks());
