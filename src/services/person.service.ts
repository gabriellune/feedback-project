import { HttpException, Injectable } from "@nestjs/common";
import PersonDto from "src/domain/dto/person.domain";
import Person from "src/domain/person.domain";
import SavePerson from "./save-person.service";

@Injectable()
export default class PersonService {

    constructor(
        private readonly save: SavePerson
    ) { }

    async createPerson(dto: PersonDto): Promise<Person> {
        const person: Person = Object.assign(new Person(), dto)

        if (person.cpf.length == 11) {
            const number = parseInt(person.cpf.slice(9, 11))
            const calc = (person.cityCode * number)
            person.calculations.push(person.cityCode, `Os dois ultimos digitos do cpf multiplicados pelo código da cidade é igual a: ${calc}`)
        } else {
            throw new HttpException("Please enter a valid cpf.", 400)
        }

        const result = await this.save.create(person)
        return result
    }
}