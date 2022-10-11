import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GrettingF = (props) => {

    //Breve introduccion al useState
    //const[variable, metodo para actualizarla] = useState(valorInicial)
    const [age, setAge] = useState(29);

const birthDay = () =>{
    //actualizar el state
    setAge(age + 1)
}

    return (
        <div>
                <h1>
                Hello { props.name} desde componente funcional!!
                </h1>
                <h2>
                    Tu edad es de: {
                        age
                    }
                </h2>
                <div>
                    <button onClick={birthDay}>
                        Cumplir años
                    </button>
                </div>
            </div>
    );
};


GrettingF.propTypes = {
    name: PropTypes.string
};


export default GrettingF;
