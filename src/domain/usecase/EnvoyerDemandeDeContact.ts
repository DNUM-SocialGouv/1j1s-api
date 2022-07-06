import { v4 as uuidv4 } from 'uuid'

export class EnvoyerDemandeDeContact {
	public async execute () : Promise<string> {
		return uuidv4()
	}
}
