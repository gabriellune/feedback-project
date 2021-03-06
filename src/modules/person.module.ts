import { Module } from "@nestjs/common";
import PersonController from "src/controllers/person.controller";
import PersonService from "src/services/person.service";
import SavePerson from "src/services/save-person.service";
import PersonRepository from "src/repository/person.repository";
import IbgeApi from "src/services/ibge/ibge-api.service";

@Module({
    imports: [],
    controllers: [PersonController],
    providers: [
        PersonService,
        SavePerson,
        PersonRepository,
        IbgeApi
    ]
})
export class PersonModule { }