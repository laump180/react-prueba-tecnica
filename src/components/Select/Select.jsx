import Select from 'react-select'
import './Select.css'
const SelectBase = ({options,handleOnChange, error, placeholder, value}) =>{
return <div className='select-container'>
    <Select options={options} placeholder={placeholder} onChange={handleOnChange} value={value} />
    <span className="error-message">{error}</span>
</div>
}

export default SelectBase
