
const Form = ({children, className}) => {

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }
    
    return (
        <form className={className} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
export default Form