import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err)

    return (
        <div>
            <h1> OppS! Something went wrong</h1><br />
            <h4> {err.status} : {err.statusText}</h4>
        </div>
    )
}
export default Error;