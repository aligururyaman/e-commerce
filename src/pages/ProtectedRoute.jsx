import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function ProtectedRoute({ component: Component, admin, ...rest }) {
    const { loggedIn, user } = useAuth();

    return (
        <Route {...rest} render={(props) => {
            if (admin) {
                if (user.role !== 'admin') {
                    return <Redirect to={{ pathname: "/" }} />
                }
            }

            if (loggedIn) {
                return <Component {...props} />
            } else {
                return <Redirect to="/" />
            }
        }} />
    )
}

export default ProtectedRoute
