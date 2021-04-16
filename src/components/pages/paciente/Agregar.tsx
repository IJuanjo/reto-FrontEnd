import React, { Fragment, useEffect, useState } from 'react'
import useForm from '../../../hooks/useForm'
import { Footer } from '../../layout/Footer'

interface infoUser{
    dni: string,
    name: string,
    lastName: string,
    lastNameMother: string,
    birthday: string,
    gender:'male' | 'female' | ''
}
type Errores = {
    dni?: string,
    gender?: string,
    lastName?: string,
    lastNameMother?: string,
    name?: string,
    birthday?:string
}



export const Agregar = () => {
    const [fields, cambiarInput,setField] = useForm<infoUser>({name:'',birthday:'',dni:'',gender:'',lastName:'',lastNameMother:''})
    const [errores, setErrores] = useState<Errores>({})
    
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        (async ()=>{
            const resp=await (await fetch('https://randomuser.me/api')).json();
            setField({
                dni:'74615439',
                gender:resp.results[0].gender,
                lastName:resp.results[0].name.last,
                lastNameMother:resp.results[0].name.last,
                name:resp.results[0].name.first,
                birthday:'08-07-1997'
            })
            setIsLoading(false);
        })()
    }, [])

    if(isLoading){
        return <>{/* Implementacion de esqueleton */}</>;
    }

    return (
        <Fragment>
            <div className="content-devide page">
                <div className="banner">
                    <div className="banner__container" >
                        <header >
                            <div className="container">
                                <img src="/assets/images/logo.png" alt="logo rimac" />
                            </div>
                        </header>
                    </div>

                    <div className="banner__texts container">
                        <h3 className="banner__title m-0 ">Hola, <span className="font-500 color-primary">{fields.name}</span></h3>
                        <p className="banner_desc m-0">Valida que los datos sean correctos.</p>
                    </div>
                </div>

                <div className="container form" >
                    <h3 className="m-0 form__title p-b-2">Datos personales del titular</h3>
                    <form >
                        <div className="form__gridfield pb-2">
                            <div className="form__fieldshare">
                                <select className="w100 h100" name="" id="">
                                    <option value="dni">DNI</option>
                                </select>
                            </div>
                            <input className="w100 form-field" name="dni" onChange={cambiarInput} value={fields.dni} placeholder="Nro. de Documento" type="text" />
                        </div>
           
                        <input className="w100 mb-2" name="name" onChange={cambiarInput} value={fields.name} placeholder="Nombres" type="text" />
                        <input className="w100 mb-2" name="lastName" onChange={cambiarInput} value={fields.lastName} placeholder="Apellido Paterno" type="text" />
                        <input className="w100 mb-2" name="lastNameMother" onChange={cambiarInput} value={fields.lastNameMother} placeholder="Apellido Materno" type="text" />
                        <div className="form__fieldshare">
                            <input   className="w100 mb-2" placeholder="Fecha de nacimiento" type="date" />

                        </div>

                        <input type="submit" className="form__submit" value="Continuar" />
                    </form>
                </div>

            </div>

           <Footer/>
        </Fragment>
    )
}
