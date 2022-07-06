import { DemandeDeContact } from '../model/DemandeDeContact'

export interface DemandeDeContactRepository {
  get (id: string): Promise<DemandeDeContact | undefined>
  save (demandeDeContact: DemandeDeContact): Promise<boolean>
}

