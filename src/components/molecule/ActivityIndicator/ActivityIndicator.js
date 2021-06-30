import './ActivityIndicator.css'
import DivElement from "../../atom/DivElement"

const ActivityIndicator = () => (
    <DivElement className="wrapper-activity">
        <DivElement className="profile-main-loader">
            <DivElement className="loader">
                <svg className="circular-loader" viewBox="25 25 50 50" >
                <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth="4" />
                </svg>
            </DivElement>
        </DivElement>
    </DivElement>
)

export default ActivityIndicator