import { Injectable } from "@nestjs/common"
import Person from "src/domain/person.domain"
import PersonRepository from "src/repository/person.repository"
import IbgeApi from "./ibge/ibge-api.service"

@Injectable()
export default class SavePerson {

    constructor(
        private readonly repository: PersonRepository,
        private readonly ibgeApi: IbgeApi
    ) { }

    async create(person: Person): Promise<Person> {
        const { cityCode } = person
        await this.ibgeApi.findIbgeCity(person, cityCode)

        await this.repository.save(person)
        return person
    }
}