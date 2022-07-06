import { EnvoyerDemandeDeContact } from '../../../src/domain/usecase/EnvoyerDemandeDeContact'
import { InMemoryDemandeDeContactRepository } from '../../../src/infra/DemandeDeContactRepository'
import ChaiUuid from 'chai-uuid'
import chai from 'chai'
chai.use(ChaiUuid)
const expect = chai.expect

describe('EnvoyerDemandeDeContact', () => {
  let repository: InMemoryDemandeDeContactRepository
  let envoyerDemandeDeContact: EnvoyerDemandeDeContact
  beforeEach(() => {
      repository = new InMemoryDemandeDeContactRepository()
			envoyerDemandeDeContact = new EnvoyerDemandeDeContact(repository)
  })
	describe('.execute()', () => {
		it('résoud un uuid', async () => {
			// When
			const actual = await envoyerDemandeDeContact.execute()
			// Then
			expect(actual).to.be.a.uuid('v4')
		})

    it('enregistre dans le dépôt à demande de contacts', async () => {
			// When
			const id = await envoyerDemandeDeContact.execute()
      // Then
      const saved = await repository.get(id)
      expect(saved).to.deep.equal({ id })
    })
	})
})
