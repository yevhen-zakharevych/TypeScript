import { logger, logMethod, logParameter, sealed, writable } from '../decorators';
import { format } from '../decorators';
import * as Interfaces from '../iterfaces';

//@sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format() name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    //@writable(true)
    assistFaculty(): void {
        console.log('Assist faculity');
    }

    //@writable(false)
    teachCommunity(): void {
        console.log('Teach community');
    }
}

export { UniversityLibrarian };
