import { Injectable } from "@nestjs/common";
import SaveUser from "./save-person.service";
import SavePerson from "./save-person.service";
import Person from "src/domain/person.domain";
import PersonDto from "src/domain/dto/person.domain";

@Injectable()
export default class PersonService {

    constructor(
        private readonly save: SavePerson
    ) { }

    async createPerson(dto: PersonDto): Promise<Person> {
        const person: Person = Object.assign(new Person(), dto)
        return this.save.create(person)
        
    }
}