import React, { Fragment, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import useForm from '../../../hooks/useForm'
import { VALIDACION_DNI, VALIDACION_PHONE } from '../../helpers/validaciones'
import { Footer } from '../../layout/Footer'
interface User {
    dni: string,
    birthday: string,
    phone: string,
    acceptPolicy: boolean,
    acceptShipping: boolean
}
type Errores = {
    dni?: string,
    phone?: string,
    birthday?: string,
    acceptPolicy?: string,
    acceptShipping?: string
}


export const Login: React.FC<RouteComponentProps> = ({ history }) => {
    const [fields, cambiarInput] = useForm<User>({ dni: '', birthday: '', phone: '', acceptPolicy: false, acceptShipping: false })
    const [errores, setErrores] = useState<Errores>({})
    const lanzar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errores: Errores = {};

        if (!VALIDACION_DNI.test(fields.dni)) {
            errores.dni = 'dni no valido'
        }
        if (!VALIDACION_PHONE.test(fields.phone)) {
            errores.phone = 'telefono no valido'
        }
        if (!fields.acceptPolicy) {
            errores.acceptPolicy = 'debe aceptar los terminos y condiciones'
        }
        if (!fields.acceptShipping) {
            errores.acceptShipping = 'debe aceptar la politica de envio'
        }
        if (fields.birthday.length === 0) {
            errores.birthday = 'la fecha de nacimiento no debe estar vacio'
        }

        if (Object.keys(errores).length > 0) {
            console.log('aun hay errores')
            return setErrores(errores);
        }
        setErrores({});

        if (fields.dni === '74615439') {
            return history.push('agregar-paciente')
        }
    }

    return (
        <Fragment>
            <div className="content-devide">
                <div className="banner">
                    <div className="banner__container" >
                        <header >
                            <div className="container">
                                <img src="/assets/images/logo.png" alt="logo rimac" />
                            </div>
                        </header>
                        <div className="banner__content--relative">
                            <div className="banner__content container">
                                <div className="banner__texts text-white">
                                    <h3 className="banner__title m-0">Seguro de <span className="font-500">Salud</span></h3>
                                    <ul className="banner__list">
                                        <li className="banner__item">
                                            <img src="/assets/images/escudo.svg" alt="logo rimac" />

                                            <p className="banner_desc m-0">Cotiza y compra tu seguro 100% digital </p>
                                        </li>
                                        <li className="banner__item">
                                            <img src="/assets/icons/mobile.svg" alt="logo rimac" />

                                            <p className="banner_desc m-0">Cotiza y compra tu seguro 100% digital </p>
                                        </li>
                                        <li className="banner__item">
                                            <img src="/assets/icons/money.svg" alt="logo rimac" />

                                            <p className="banner_desc m-0">Hasta S/.12 millones de cobertura anual</p>
                                        </li>
                                        <li className="banner__item">
                                            <img src="/assets/icons/clinic.svg" alt="logo rimac" />

                                            <p className="banner_desc m-0">Más de 300 clínicas en todo el Perú</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="banner__thumbnail">
                                    <img className="banner_img mobile" src="/assets/images/dibujo.png" alt="" />
                                    <img className="banner_img desktop" src="/assets/images/persons.svg" alt="" />
                                </div>
                                <p className="text-footer--banner text-white">© 2019 RIMAC Seguros y Reaseguros.</p>

                            </div>

                        </div>



                    </div>
                    <div className="layouteffect">
                        <div className="layouteffect__curve"></div>

                    </div>

                </div>
                <div className="container form" >
                    <h3 className="m-0 form__title p-b-2">Obtén tu <span className="color-primary">seguro ahora</span></h3>
                    <p className="m-0 form__subtitle">Ingresa los datos para comenzar.</p>
                    <form onSubmit={lanzar}>
                        <div className="form__gridfield pb-2">
                            <div className="form__fieldshare">
                                <select className="w100 h100" id="">
                                    <option value="dni">DNI</option>
                                </select>
                            </div>
                            <input onChange={cambiarInput} name="dni" className="w100 form-field" placeholder="Nro. de Documento" type="text" />
                            <span className="error">{errores.dni}</span>
                        </div>
                        <div className="form__fieldshare mb-2">
                            <input name="birthday" onChange={cambiarInput} className="w100 " placeholder="Fecha de nacimiento" type="date" />

                            <span className="error">{errores.birthday}</span>
                        </div>
                        <input className="w100 " name="phone" onChange={cambiarInput} placeholder="Celular" type="phone" />
                        <span className="error mb-2">{errores.phone}</span>

                        <div className="checkbox-container form__policy form_terms">
                            <label className="checkbox-label">
                                <input name="acceptPolicy" onChange={e => cambiarInput(e, true)} type="checkbox" id="terminos" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="ml-1" htmlFor="terminos">Acepto la <span className="form__link">Política de Protección de Datos Personales y los Términos y Condiciones.</span></label>
                        </div>
                        <span className="error mb-2">{errores.acceptPolicy}</span>


                        <div className="checkbox-container form__shipping">
                            <label className="checkbox-label">
                                <input name="acceptShipping" onChange={e => cambiarInput(e, true)} type="checkbox" id="envio" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="ml-1" htmlFor="envio">Acepto la <span className="form__link">Política de Envío de Comunicaciones Comerciales.</span></label>
                        </div>
                        <span className="error">{errores.acceptShipping}</span>

                        <input type="submit"  className="form__submit" value="Comencemos" />
                    </form>
                </div>

            </div>

            <Footer/>
        </Fragment>
    )
}
