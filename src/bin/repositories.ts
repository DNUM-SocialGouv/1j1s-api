import { InMemoryDemandeDeContactRepository } from '../infra/DemandeDeContactRepository'
import { DemandeDeContactRepository } from '../domain/repository/DemandeDeContactRepository'

export const demandeDeContactRepository: DemandeDeContactRepository = new InMemoryDemandeDeContactRepository()
