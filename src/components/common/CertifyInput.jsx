import "./CertifyInput.css";

const CertifyInput = (props) => {
    
    const onChange = (e) => {
        props.setForm({
            ...props.form,
            [e.target.name]: e.target.value,
        });
    }

    return(
        <div className="CertifyInput">
            <div>{props.label}</div>
            <input onChange={onChange} value={props.form[props.name]} name={props.name} type={props.type} placeholder={props.placeholder} />
            <button onClick={()=> props.onClickFunc()}>{props.buttonName}</button>
        </div>
    )
}

export default CertifyInput;