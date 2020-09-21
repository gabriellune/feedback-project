import { Injectable } from "@nestjs/common"
import Person from "src/domain/person.domain"
import PersonRepository from "src/repository/person.repository"

@Injectable()
export default class SavePerson {

    constructor(
        private readonly repository: PersonRepository
    ) { }

    async create(person: Person): Promise<Person> {

        await this.repository.save(person)
        return person
    }
}