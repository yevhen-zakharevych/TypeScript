import { Book, Logger, Magazine } from './iterfaces';
import { ReferenceItem, RefBook, UniversityLibrarian, Library as Lib, Shelf } from './classes';
import { Category } from './enum';
import {
    calcTotalPages,
    getAllBooks,
    getBookAuthorByIndex,
    getBookTitlesByCategory,
    logBookTitles,
    logFirstAvalaible,
    getProperty,
    purge,
    createCustomerID,
    createCustomer,
    getBookByID,
    checkoutBooks,
    getTitles,
    bookTitleTransform,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';

import type { Library } from './classes';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ===================================
// Task 02.01
// logFirstAvalaible(getAllBooks());
// console.log(getBookAuthorByIndex(0));
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(calcTotalPages());

// Task 03.01
// const myID = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (p1: string, p2: number) => string = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 11));

//Task 03.02
// createCustomer('Boris');
// createCustomer('Oleg', 43);
// createCustomer('Anna', 23, 'Kyiv');
// console.log(getBookTitlesByCategory());
// logFirstAvalaible();
// console.log(getBookByID(1));
// const myBooks = checkoutBooks('Ann', ...[1, 2, 4]);
// console.log(myBooks);

// Task 03.03
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);
// const checkedOutBooks2 = getTitles(4, true);
// console.log(checkedOutBooks2);

// console.log(bookTitleTransform({}));
// console.log(bookTitleTransform('hello'));
// console.log(bookTitleTransform(123));

// Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: (reason: string): void => console.log(`Damaged: ${reason}`),
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: Logger /*DamageLogger*/ = reason => console.log(`Damaged: ${reason}`);

// logDamage('missing back cover 2');

// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     numBooksPublished: 1,
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@gmail.com',
//     department: 'JavaScript Literature',
//     assistCustomer: name => console.log(`Assist name ${name}`),
// };

// Task 04.04

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book?.getTitle?.());
// console.log(offer.book?.author?.[0]);

// Task 04.05
// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem(1, 'I love TypeScript', 2021);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'unknown publisher';
// console.log(ref.publisher);
// console.log(ref.getId());

// Task 05.02 05.03, 06.03
// const refBook: RefBook = new RefBook(1, 'I love typescript', 2021, 3);

// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 05.05
// const personBook: PersonBook = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     title: 'some title',
// };

// console.log(personBook);

// Task 06.05
// const flag = true;

// if (flag) {
//     import('./classes').then(m => {
//         const reader = new m.Reader();
//         reader.name = 'Anna';
//         reader.take(getAllBooks()[2]);
//         console.log(reader);
//     });
// }

// Task 06.06
// let libObj: Library;
// const libObj2 = new Lib();

// Taks 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];

// const result1 = purge(inventory);
// console.log(result1);
// const result2 = purge([1, 2, 3, 4]);
// console.log(result2);

// Task 07.02, 07.03
// const bookShelf = new Shelf<Book>();
// bookShelf.add(...inventory);
// console.log(bookShelf);
// console.log(bookShelf.getFirst());

// const magazine: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazineShelf.add(...magazine);
// console.log(magazineShelf);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// Task 07.04
// const book: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Node,
//     markDamaged: null,
//     title: 'title',
//     pages: 200,
// };

// const newBook: UpdatedBook = {
//     title: 'no Name',
// };

// let params: Parameters<CreateCustomerFunctionType> = ['Anna', 30];

// createCustomer(...params); need to add function

// Task 08.01, 08.02
//const obj: UniversityLibrarian = new UniversityLibrarian();
// obj.a = '1';
// const proto = Object.getPrototypeOf(obj);
// console.log(proto);
// proto.a = 1;

// obj.name = 'Anna';
// console.log(obj);
// obj.printLibrarian();

// Task 08.03
// obj.assistFaculty = null;
// obj.teachCommunity = null;

// Task 08.04

// const enc = new RefBook(1, 'I love typescript', 2021, 3);
// enc.printItem();

// Task 08.05

// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
// obj.assistCustomer('Boris');
// console.log(obj);

// Task 08.06
// const obj = new UniversityLibrarian();
// obj.name = 'Anna';
// obj.assistCustomer('Boris');
// console.log(obj);
// console.log(obj.name);

// Task 08.07
// const enc = new RefBook(1, 'I love TypeScript', 2021, 3);
// //enc.copies = -5;
// // enc.copies = 10;
// enc.copies = 4.6;
// console.log(enc);

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.Node, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.Software)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Promise has been resolved or rejected'));
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(data => {
//         console.log(data);

//         return data.length;
//     })
//     .then(data => console.log(`Length: ${data}`))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Promise has been resolved or rejected'));
// console.log('End');

// Task 09.03
// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software).catch(error => console.log(`Error: ${error}`));
// console.log('end');

// function checks if object is instanse of class RefBook;

function assertRefBookInstance(instance: any): asserts instance is RefBook {
    if (!(instance instanceof RefBook)) {
        throw new Error('It is not instance of RefBook');
    }
}

function printBook(data: any) {
    assertRefBookInstance(data);

    data.printItem();
}

const refBook: RefBook = new RefBook(1, 'I love typescript', 2021, 3);
const obj: UniversityLibrarian = new UniversityLibrarian();

printBook(refBook);
// printBook(obj); // -- error

interface User {
    id: number,
    name: string
}

function fetchUsers(): Promise<User[]> {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
}

async function fetchUser2(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    return await response.json();
}

fetchUsers()
    .then(users => {
        console.log('Fetch users 1', users);
    });

fetchUser2()
    .then(users => {
        console.log('Fetch users 2', users)
    })
