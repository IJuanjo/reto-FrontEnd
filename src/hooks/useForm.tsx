import React, {  useState } from 'react'

function useForm<T>(inititalValue: T): [T, (e: React.ChangeEvent<HTMLInputElement>, isChecked?: boolean) => void,React.Dispatch<React.SetStateAction<T>>] {
    const [fields, setFields] = useState(inititalValue);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>, isChecked?: boolean) => {
        setFields({
            ...fields,
            [event.target.name]: isChecked ? event.target.checked : event.target.value
        });
    }

    return [fields, inputChange,setFields]
}
export default useForm;