import './Container.css'
const Container = ({children, style, className} = {}) => (
    <div
        className={className}
        style={style}
    >
        {children}
    </div>
)

export default Container