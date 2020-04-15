import React from 'react';
import '../../../App.css'
import Parent from "./Parent";


function ParentContainer(props) {


    return (
        <div>
                          <Parent
                              sliderArray={props.sliderArray}
                              name={props.name}
                              birthDate={props.birthDate}
                              color={props.color}
                          />
        </div>
    );
}

export default ParentContainer;