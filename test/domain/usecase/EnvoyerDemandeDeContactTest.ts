import { EnvoyerDemandeDeContact } from '../../../src/domain/usecase/EnvoyerDemandeDeContact'
import chai from 'chai'
import ChaiUuid from 'chai-uuid'
chai.use(ChaiUuid)
const expect = chai.expect

describe('EnvoyerDemandeDeContact', () => {
	describe('.execute()', () => {
		it('résoud sans erreur', async () => {
			// GIVEN
			const envoyerDemandeDeContact = new EnvoyerDemandeDeContact()
			// WHEN
			await envoyerDemandeDeContact.execute()
		})
		it('résoud un uuid', async () => {
			// GIVEN
			const envoyerDemandeDeContact = new EnvoyerDemandeDeContact()
			// WHEN
			const actual = await envoyerDemandeDeContact.execute()
			// THEN
			expect(actual).to.be.a.uuid('v4') // @ts-ignore
		})
	})
})
