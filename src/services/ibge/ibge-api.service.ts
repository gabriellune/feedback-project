import { HttpException, Injectable } from "@nestjs/common";
import Person from "src/domain/person.domain";

const axios = require('axios')

@Injectable()
export default class IbgeApi {

    constructor() { }

    public async findIbgeCity(person: Person, cityCode: number): Promise<Person> {

        await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cityCode}/distritos`).then(res => {
            if (res.status == 200) {
                const list = res.data 
                const city = list.map((status) => (status.nome)).toString()
                person.calculations.unshift(city)
                
                if (list.length === 0) {
                    throw new HttpException("This municipality does not exist", 404)
                }
            }
        })
        return person
    }
}