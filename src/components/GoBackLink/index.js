import { Link } from "react-router-dom"
import arrowLeft from "../../images/left-arrow.svg"
import * as styled from "./style"

export const GoBackLink = () => {
    return (
        <styled.GoBack>
            <Link to={'/'}>
                <span>
                    <styled.Img src={arrowLeft} alt="Go Back" />
                </span>
            </Link>
        </styled.GoBack>
    )
}