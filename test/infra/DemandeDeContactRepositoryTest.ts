import { expect } from 'chai'
import { DemandeDeContactRepository } from '../../src/domain/repository/DemandeDeContactRepository'
import { InMemoryDemandeDeContactRepository } from '../../src/infra/DemandeDeContactRepository'
import { DemandeDeContact } from '../../src/domain/model/DemandeDeContact'

describe('InMemoryDemandeDeContactRepository', () => {
	const id = '555'
	let repository: DemandeDeContactRepository

	function demandeDeContact (contactId = id): DemandeDeContact {
		return { id: contactId }
	}

	beforeEach(() => {
		repository = new InMemoryDemandeDeContactRepository()
	})

	context('Quand y\'a pas de données dans le dépôt', () => {
		describe('et qu\'on fait .get(id)', () => {
			it('ça résoud undefined', async () => {
				// When
				const actual = await repository.get(id)

				// Then
				expect(actual).to.be.undefined
			})
		})

		describe('et qu\'on fait .save(demandeDeContact)', () => {
			it('ça résoud true', async () => {
				// When
				const actual = await repository.save(demandeDeContact())

				// Then
				expect(actual).to.be.true
			})

			describe('et qu\'on refait .get(id)', () => {
				it('ça résoud la demande de contact', async () => {
					// Given
					await repository.save(demandeDeContact())

					// When
					const actual = await repository.get(id)

					// Then
					expect(actual).to.deep.equal(demandeDeContact())
				})
			})
		})
	})

	context('Quand y\'a des données dans le repository', () => {
		beforeEach(async () => {
			await repository.save(demandeDeContact())
			await repository.save(demandeDeContact('666'))
		})

		describe('et qu\'on appelle .get avec un ID existant', () => {
			it('on résoud la demande de contact', async () => {
				// When
				const actual = await repository.get(id)

				// Then
				expect(actual).to.deep.equal(demandeDeContact())
			})
		})

		describe('et qu\'on appelle .get avec un ID inexistant', () => {
			it('on résoud undefined', async () => {
				// When
				const actual = await repository.get('777')

				// Then
				expect(actual).to.be.undefined
			})
		})

		describe('et qu\'on appelle .save avec un ID existant', () => {
			it('on résoud false', async () => {
				// When
				const actual = await repository.save(demandeDeContact())

				// Then
				expect(actual).to.be.false
			})
		})
	})
})
