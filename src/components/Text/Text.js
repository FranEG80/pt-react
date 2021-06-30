import './Text.css'

const Text = ({type, children, className, style}) => (
    <span 
        className={`${type} ${className ? className : ''}`} 
        style={style}
    >
        {children}
    </span>
)

export default Text