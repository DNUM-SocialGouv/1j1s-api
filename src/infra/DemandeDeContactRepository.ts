export interface DemandeDeContact {

    readonly id: string
}

export class DemandeDeContactRepository {

    private store: Map<string, DemandeDeContact> = new Map()

    async get(id: string): Promise<DemandeDeContact | undefined> {
        return this.store.get(id)
    }

    async save(demandeDeContact: DemandeDeContact): Promise<boolean> {
        this.store.set(demandeDeContact.id, demandeDeContact)

        return true
    }

}
