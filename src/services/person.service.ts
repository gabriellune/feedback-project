import { HttpException, Injectable } from "@nestjs/common";
import PersonDto from "src/domain/dto/person.domain";
import Person from "src/domain/person.domain";
import SavePerson from "./save-person.service";

const axios = require('axios')
@Injectable()
export default class PersonService {

    constructor(
        private readonly save: SavePerson
    ) { }

    async createPerson(dto: PersonDto): Promise<Person> {
        const person: Person = Object.assign(new Person(), dto)

        await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${person.cityCode}/distritos`).then(res => {
            if (res.status == 200) {
                const list = res.data
                if (list.length === 0) {
                    throw new HttpException("This municipality does not exist", 404)
                } else {
                    const city = list.map((status) => status.nome).toString()
                    if (person.cpf.length == 11) {
                        const number = parseInt(person.cpf.slice(9, 11))
                        const calc = (person.cityCode * number)
                        person.calculations.push(city, person.cityCode, `Os dois ultimos digitos do cpf multiplicado pelo código da cidade ${calc}`)
                    } else {
                        throw new HttpException("Please enter a valid cpf.", 400)
                    }
                }
            }
        })
        const result = await this.save.create(person)
        return result
    }
}