import { useState } from 'react';

function InputExample() {

    const [form, setForm] = useState({name: "", surname: ""})
    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value   })
    }
    return (
        <div>
            <input name="name" value={form.name} onChange={onChangeInput}/>
            <br/>
            <input name="surname" value={form.surname} onChange={onChangeInput}/>
            <br/>
            {form.name} {form.surname}
        </div>
    )
}

export default InputExample;
