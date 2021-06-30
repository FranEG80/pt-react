
const Input = ({id, className, type, placeholder, style, onChange} = {}) =>  (
    <input
        id={id}
        type={type ? type : 'text'} 
        placeholder={placeholder}
        className={className}
        style={style}
        onChange={onChange}
    />
)

export default Input