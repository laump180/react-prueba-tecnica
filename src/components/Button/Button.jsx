import './Button.css'
const Button = ({text,handleClick}) =>{
return <div className='button-container'>
    <button onClick={handleClick} className='button'>
    {text}
</button>
</div>
}

export default Button
