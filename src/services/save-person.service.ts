import PersonRepository from "src/repository/person.repository"
import Person from "src/domain/person.domain"
import { Injectable } from "@nestjs/common"

@Injectable()
export default class SavePerson {

    constructor(
        private readonly repository: PersonRepository
    ) { }

    async create(person: Person): Promise<Person> {
        
        return this.repository.save(person)
    }
}