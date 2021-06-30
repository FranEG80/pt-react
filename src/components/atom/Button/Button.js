import './Button.css'

const Button = ({children,  className, onPress, disabled, style, type} = {}) => {
    let styles = style ? {...style} : {};

    if (disabled) styles.opacity = 0.7
    
    return (
    <button
        className={`button ${className ?? ''}`}
        style={styles}
        onClick={onPress}
        disabled={disabled}
        type={type ?? 'button'}
    >
        {children}
    </button>
)}

export default Button