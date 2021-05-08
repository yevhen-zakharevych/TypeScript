import { Category } from './enum';
import { Book, Callback, LibMgrCallback } from './iterfaces';
import { BookProperties } from './types';

export function getAllBooks(): ReadonlyArray<Book> {
    const books: readonly Book[] = [
        {
            id: 1,
            category: Category.JavaScript,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            category: Category.JavaScript,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        {
            id: 3,
            category: Category.CSS,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            available: true,
        },
        {
            id: 4,
            category: Category.JavaScript,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];

    return books;
}

export function logFirstAvalaible(books: readonly Book[] = getAllBooks()): void {
    const numBooks: number = books.length;
    const title: string = books.find(book => book.available)?.title;

    console.log(`Number of books: ${numBooks}.`);
    console.log(title);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();

    return books.filter(book => book.category === category).map(book => book.title);
}

export function logBookTitles(books: string[]) {
    books.forEach(book => console.log(book));
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];

    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = [
        {
            lib: 'libName1',
            books: 1_000_000_000,
            avgPagesPerBook: 250,
        },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];

    return data.reduce((acc, obj) => acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook), 0n);
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer Name: ${name}`);

    if (age) {
        console.log(`Customer Age: ${age}`);
    }

    if (city) {
        console.log(`Customer from: ${city}`);
    }
}

export function getBookByID(id: number): Book {
    const books = getAllBooks();

    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);

    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author).map(book => book.title);
        }

        if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    }

    const [id, available] = args;

    return books.filter(book => book.available === available && book.id === id).map(book => book.title);
}

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

// export function getProperty(book: Book, prop: BookProperties): any {
//     if (typeof book[prop] === 'function') {
//         return (book[prop] as Function).name;
//     }

//     return book[prop];
// }

export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    if (typeof obj[prop] === 'function') {
        return obj[prop]['name'];
    }

    return obj[prop];
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: Callback<string[]> /*LibMgrCallback*/): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No Books Found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]) {
    if (err) {
        console.log(err.message);

        return;
    }

    console.log(titles);
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found.');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category): Promise<string[]> {
    const result = await getBooksByCategoryPromise(category);
    console.log(result);

    return result;
}
