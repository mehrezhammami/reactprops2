import React from 'react';
import Proptypes from 'prop-types';
function Profilcomponent(props) {
    return (
    <div>
            <p style={{fontSize : 20, fontStyle:'italic'}}>full name:{props.name}</p>
            <p style={{fontSize : 20, fontStyle:'italic'}}>biographie : {props.bio}</p>
            <p style={{fontSize : 20, fontStyle:'italic'}}>profession : {props.prof}</p> 
    
    <button
        className="btn btn-primary"
        onClick={() => props.clickHandler(props.name)}
        >
            alert name of profile
    </button>
    {props.children}
    </div>
    );
    }
    
            Profilcomponent.defaultProps={
                name:"hrouz",
                bio:"1993",
                prof:"chomeur"
        }
            Profilcomponent.propTypes ={
                name: Proptypes.string.isRequired,
                bio: Proptypes.string.isRequired,
                prof: Proptypes.string.isRequired


        }

export default Profilcomponent;