import React from "react";
import { renderHook,act } from '@testing-library/react-hooks'
import useForm from "../hooks/useForm";
describe('prueba del hook', () => {
    test('I hope the value is the same as declared', () => {
        const field={
            name:''
        }
        const {result}=renderHook(()=>useForm(field));
        expect(result.current[0]).toEqual(field);
    });
   
})
