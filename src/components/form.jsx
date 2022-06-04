import './form.css'
import {useState} from 'react'
import {firebase} from '../firebase'
import { getPokemon } from '../helpers/getpokemon'

let pokemones;

export const Formulario =({setCategoriasBusqueda})=>{
    const [valorBusqueda, setValorBusqueda] = useState('');
    const [url, setUrl] = useState('');
    const [nombre, setNombre] = useState('')
    const [lista, setLista] = useState([])

    pokemones = getPokemon(valorBusqueda)

    const guardar = async (e) =>{
        // e.preventDefault()
        try {
            const db = firebase.firestore()
            const nuevoPokemon = {
                nombre: pokemones.name,
                url: pokemones.url
            }
            
            setLista([...lista,
                {
                    nombre: pokemones.name,
                    url: pokemones.url
                }
            ])
            
            await db.collection('pokemones').add(nuevoPokemon)

            setNombre('')
            setUrl('')

        } catch (error) {
            console.log(error)
        }
    }

    const cambiarValorBusqueda= (e) => {
        setValorBusqueda(e.target.value);
    }

    const buscar = (e)=>{
        e.preventDefault();
        if (valorBusqueda.trim().length > 0){
          setCategoriasBusqueda(valores => [valorBusqueda, ...valores])
          setValorBusqueda('')
        }
        guardar()
    }

    return(
        <>
            <form onSubmit={buscar}>
                <p>REGISTRAR POKEMON</p>
                <input 
                    type="text" 
                    placeholder="Nombre del pokemon" 
                    id="Valorusqueda"
                    value = {valorBusqueda}
                    onChange={cambiarValorBusqueda}
                />
                <button className='boton' type="submit">Add</button>
            </form>
        </>
    );
}

