import { Injectable } from "@nestjs/common";
import { BaseRepository } from "./config/base-repository";

@Injectable()
export default class PersonRepository extends BaseRepository {

    constructor() {
        super('person')
    }
}