import PersonService from "src/services/person.service";
import { Controller, Post, Body } from "@nestjs/common";
import PersonDto from "src/domain/dto/person.domain";

@Controller('person')
export default class PersonController {

    constructor(
        private readonly personService: PersonService
    ) { }

    @Post() 
    public async create(@Body() person: PersonDto) {
        return this.personService.createPerson(person)
    }
}