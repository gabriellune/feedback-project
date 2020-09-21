import { Body, Controller, Post } from "@nestjs/common";
import { OkResponse } from "roit-response-api-node";
import PersonDto from "src/domain/dto/person.domain";
import Person from "src/domain/person.domain";
import PersonService from "src/services/person.service";

@Controller('person')
export default class PersonController {

    constructor(
        private readonly personService: PersonService
    ) { }

    @Post()
    public async create(@Body() person: PersonDto): Promise<Person> {
        const result = await this.personService.createPerson(person)
        return OkResponse(result)
    }
}