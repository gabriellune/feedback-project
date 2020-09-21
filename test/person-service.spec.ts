import PersonService from "src/services/person.service"
import SavePerson from "src/services/save-person.service"
import { Test, TestingModule } from "@nestjs/testing"
import PersonDto from "src/domain/dto/person.domain"
import Person from "src/domain/person.domain"

const mockedPersonDto = async () => JSON.parse(JSON.stringify(await import('./mock/PersonDto.mock')))
describe('Person test', () => {

    let personService: PersonService
    let savePerson: SavePerson

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PersonService, SavePerson]
        }).compile()

        personService = module.get<PersonService>(PersonService)
        savePerson = module.get<SavePerson>(SavePerson)
    })

    it('Should create a person', async () => {
        const personDto: PersonDto = await mockedPersonDto()
        jest.spyOn(savePerson, 'create').mockImplementation(async () => new Person)

        await personService.createPerson(personDto)
        expect(savePerson.create).toBeCalled()

    })
})