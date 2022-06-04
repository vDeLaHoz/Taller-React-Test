import { getPokemon } from "../../helpers/getPokemon";

describe('Pruebas en helper getPokemon',() => {
    test('debe traer 1 elemento', async () =>{
        const pokemon = await getPokemon('ivysaur');
        expect(pokemon.nombre).toBe('ivysaur');       
    })   
})