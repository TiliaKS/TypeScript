import * as Interfaces from '../intefaces';
import {format, logger, logMethod, logParameter, sealed, writable} from '../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter customerName: string): void {
        console.log(`${this.name} is assisting ${customerName}`);
    }

    @writable(true)
    assistFaculty() {
        console.log(`Assisting faculty`)
    }

    @writable(false)
    teachCommunity() {
        console.log(`Teaching community`)
    }
}
