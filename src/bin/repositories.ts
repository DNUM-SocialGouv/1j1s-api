import { InMemoryDemandeDeContactRepository } from '../infra/InMemoryDemandeDeContactRepository'
import { DemandeDeContactRepository } from '../domain/repository/DemandeDeContactRepository'

export const demandeDeContactRepository: DemandeDeContactRepository = new InMemoryDemandeDeContactRepository()
