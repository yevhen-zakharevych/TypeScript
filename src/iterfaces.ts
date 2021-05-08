import { Category } from './enum';

interface DamageLogger {
    (reason: string): void;
}

interface Book {
    id: number;
    category: Category;
    title: string;
    author: string;
    available: boolean;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    markDamaged?: DamageLogger;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (error: Error, titles: string[]): void;
}

interface Callback<T> {
    (error: Error, data: T): void;
}

export { Book, Callback, LibMgrCallback, DamageLogger as Logger, Person, Author, Librarian, Magazine, ShelfItem };
