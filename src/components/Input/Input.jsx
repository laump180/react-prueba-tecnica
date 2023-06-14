import './Input.css'

const Input = ({value,handleOnChange, placeholder, error}) =>{
return <div className="input-container">
    <input onChange={handleOnChange} value={value} placeholder={placeholder} className="input"/>
    <span className="error-message">{error}</span>
</div>
}

export default Input
