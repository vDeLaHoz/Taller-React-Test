import {useEffect, useState} from 'react'
import { getPokemon } from '../helpers/obtenerpokemon'

export const useGetPokemones = (busqueda) => {

    const [estado, setEstado] = useState({
        pokemones: [],
        cargando: true
    })

    useEffect(() =>{
        setTimeout(() =>{
            let pokemones = getPokemon(busqueda)
            setEstado({
                pokemones: pokemones,
                cargando: false
            })
        }, 20)
    }, [busqueda])

    return estado;
  
}