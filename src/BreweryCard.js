import React from "react";

function BreweryCard(props){
    //console.log(props)
    //console.log(props.breweries)
    //console.log(props.breweries)
    
    return(
        
            
                <div className="card" style={{minWidth: 400, maxWidth: 400}}>
                    <div className="card-body">
                        <div className="card-title h5">{props.breweries.name}</div>
                        <p className="card-text">Located in <b>{props.breweries.city}, {props.breweries.state}</b></p>
                        <p>Phone: <b>{props.breweries.phone}</b> </p>
                        <a href={props.breweries.website} className="btn btn-primary">Visit Site</a>
                    </div>
                </div>
            
        
    )
}



export default BreweryCard;