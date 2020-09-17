import { IsNotEmpty } from 'class-validator';

export default class PersonDto {

    @IsNotEmpty({ message: "Please insert the name!"})
    name: string

    @IsNotEmpty({ message: "Please insert the cpf!"})
    cpf: string
}