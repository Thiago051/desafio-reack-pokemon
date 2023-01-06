import { Link } from "react-router-dom"
import arrowLeft from "../../images/left-arrow.svg"
import { GoBack } from "./style"

export const GoBackLink = () => {
    return (
        <GoBack>
            <Link to={'/'}>
                <img src={arrowLeft} alt="Go Back" />
            </Link>
        </GoBack>
    )
}