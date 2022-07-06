import { EnvoyerDemandeDeContact } from '../../../src/domain/usecase/EnvoyerDemandeDeContact'
import { DemandeDeContactRepository } from '../../../src/infra/DemandeDeContactRepository'
import ChaiUuid from 'chai-uuid'
import chai from 'chai'
chai.use(ChaiUuid)
const expect = chai.expect

describe('EnvoyerDemandeDeContact', () => {
	describe('.execute()', () => {
		it('résoud sans erreur', async () => {
			// GIVEN
      const repository = new DemandeDeContactRepository()
			const envoyerDemandeDeContact = new EnvoyerDemandeDeContact(repository)
			// WHEN
			await envoyerDemandeDeContact.execute()
		})

		it('résoud un uuid', async () => {
			// GIVEN
      const repository = new DemandeDeContactRepository()
			const envoyerDemandeDeContact = new EnvoyerDemandeDeContact(repository)
			// WHEN
			const actual = await envoyerDemandeDeContact.execute()
			// THEN
			expect(actual).to.be.a.uuid('v4')
		})

    it('enregistre dans le dépôt à demande de contacts', async () => {
			// Given
      const repository = new DemandeDeContactRepository()
			const envoyerDemandeDeContact = new EnvoyerDemandeDeContact(repository)
			// When
			const id = await envoyerDemandeDeContact.execute()
      // Then
      const saved = await repository.get(id)
      expect(saved).to.deep.equal({ id })
    })
	})
})
