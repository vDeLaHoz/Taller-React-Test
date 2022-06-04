import {useGetPokemones} from '../../hooks/useGetPokemones';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas del custom hook usePokemones', ()=>{
    test('Retorna el estado inicial del hook', ()=>{
        const {result} = renderHook(()=>useGetPokemones('ivysaur'));
        const {pokemon, cargando} = result.current;

        expect(pokemon).toEqual({});
        expect(cargando).toBe(true);
    })

    test('Retorna el elemento del valor de la búsqueda', async ()=>{
        const {result, waitForNextUpdate} = renderHook(()=>useGetPokemones('ivysaur'));
        await waitForNextUpdate();
        const {pokemon, cargando} = result.current;
        
        expect(pokemon.nombre).toBe('ivysaur');
        expect(cargando).toBe(false);
    })  
})