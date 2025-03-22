import "../styles/Input.css";
const Input = ({ 
    onChange,
    labelText,
    value,
    placeHolder,
    id, 
    type, 
    "data-key": dataKey,
}) => {
    return(
        <div className="input-wrapper">
            <label htmlFor={id}>
                {labelText}
            </label>

            {type === "textarea" ? (
                <textarea
                id={id} 
                placeholder={placeHolder} 
                value={value} 
                onChange={onChange}
                data-key={dataKey}>
                </textarea>
            ) : (
                <input 
                type={type}
                id={id} 
                placeholder={placeHolder} 
                value={value} 
                onChange={onChange}
                data-key={dataKey}/>
            )}
            
        </div>
    );

}

export default Input;