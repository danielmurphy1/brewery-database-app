import React from "react";

function BreweryCard(props){
    console.log(props)
    console.log(props.name)
    //console.log(props.name[1])
    
    return(
        <div className="row">
            <div className="col">
                <div className="card" style={{minWidth: 400, maxWidth: 400}}>
                    <div className="card-body">
                        <div className="card-title h5">{props.name[0]}</div>
                        <p className="card-text">Located in <b>City, State</b></p>
                        <p>Phone: <b>5555555555</b> </p>
                        <a href="" className="btn btn-primary">Visit Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BreweryCard;