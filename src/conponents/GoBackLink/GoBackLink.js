import { Link } from "react-router-dom"
import { GoBack, Img } from "./style"
import arrowLeft from "../../images/left-arrow.svg"

const GoBackLink = () => {
    return  (
        <GoBack>
            <Link to={'/'}>
                <span>
                    <Img src={arrowLeft} alt="Go Back" />
                </span>
            </Link>
        </GoBack>
    )
} 

export default GoBackLink