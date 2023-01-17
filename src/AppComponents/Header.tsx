import { MouseEventHandler } from "react";


type HeaderProps = {
    SaveForm: MouseEventHandler<HTMLButtonElement>;
    FormID?: string
};

function Header(props:HeaderProps) {

    

    return (
        
            <nav className="navbar navbar-light sticky-top" style={{backgroundColor: "#ededed", marginBottom: "30px", zIndex: 9999} }>
            
            <div className="container">
    
            <a className="navbar-brand" href="#">
                React From Builder
            </a>
            <span className="navbar-text">

            <div className="form-inline my-2 my-lg-0">

                <span className="mr-2">{props.FormID}</span>

                <button className="btn btn-outline-success my-2 my-sm-0" onClick={props.SaveForm}>Save</button>
            </div>

            </span>
            </div>

            </nav>
        
    );
}

export default Header;