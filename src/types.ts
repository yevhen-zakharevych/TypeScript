import { Author, Book, Person } from './iterfaces';

// type Book = {
//     id: number;
//     category: Category;
//     title: string;
//     author: string;
//     available: boolean;
// };

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book & undefined;
export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Author, 'email'>;
export type CreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;

export type Unbox<T> = T extends (name: infer R, age?: number, city?: string) => void ? R : T;
