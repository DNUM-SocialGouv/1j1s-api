import {expect} from "chai"
import {DemandeDeContact, DemandeDeContactRepository} from "../../src/infra/DemandeDeContactRepository";

describe('DemandeDeContactRepository', () => {
    const id = "555"
    let repository: DemandeDeContactRepository;

    function demandeDeContact(): DemandeDeContact {
        return {id}
    }

    beforeEach(() => {
        repository = new DemandeDeContactRepository();
    });

    context("Quand y'a pas de données dans le dépôt", () => {
        describe("et qu'on fait .get(id)", () => {
            it("ça résoud undefined", async () => {
                // When
                const actual = await repository.get(id)

                // Then
                expect(actual).to.equal(undefined)
            })
        })

        describe("et qu'on fait .save(demandeDeContact)", () => {
            it("ça résoud sans erreur", async () => {
                // When
                await repository.save(demandeDeContact())
            });

            it("ça résoud true", async () => {
                // When
                const actual = await repository.save(demandeDeContact())

                // Then
                expect(actual).to.be.true
            });

            describe("et qu'on refait .get(id)", () => {
                it("ça résoud la demande de contact", async () => {
                    // Given
                    await repository.save(demandeDeContact())

                    // When
                    const actual = await repository.get(id)

                    // Then
                    expect(actual).to.deep.equal(demandeDeContact())
                });
            });
        });
    })
})
