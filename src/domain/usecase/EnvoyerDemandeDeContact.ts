import { v4 as uuidv4 } from 'uuid'
import { DemandeDeContact } from '../model/DemandeDeContact'
import { DemandeDeContactRepository } from '../repository/DemandeDeContactRepository'

export class EnvoyerDemandeDeContact {
	// eslint-disable-next-line no-useless-constructor
	constructor (private readonly repository: DemandeDeContactRepository) { }

	public async execute () : Promise<string> {
		const demande: DemandeDeContact = { id: uuidv4() }
		await this.repository.save(demande)
		return demande.id
	}
}
