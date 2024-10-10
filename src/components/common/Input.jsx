import "./Input.css";


const Input = (props) => {


    const onChange = (e) => {
        props.setForm({
            ...props.form,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="input-style">
            <div>{props.label}</div>
            <input onChange={onChange} value={props.form[props.name]} name={props.name} type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default Input;