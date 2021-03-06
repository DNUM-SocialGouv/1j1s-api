import { DemandeDeContact } from '../domain/model/DemandeDeContact'
import { DemandeDeContactRepository } from '../domain/repository/DemandeDeContactRepository'

export class InMemoryDemandeDeContactRepository implements DemandeDeContactRepository {
	private store: Map<string, DemandeDeContact> = new Map()

	async get (id: string): Promise<DemandeDeContact | undefined> {
		return this.store.get(id)
	}

	async save (demandeDeContact: DemandeDeContact): Promise<boolean> {
		const created = !this.store.has(demandeDeContact.id)
		this.store.set(demandeDeContact.id, demandeDeContact)
		return created
	}
}
