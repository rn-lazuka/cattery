import React from 'react';
import '../../../App.css'
import Kitten from "./Kitten";


function KittenContainer(props) {


    return (
        <div>
                          <Kitten
                              sliderArray={props.sliderArray}
                              name={props.name}
                              birthDate={props.birthDate}
                              color={props.color}
                              youtubeLink={props.youtube}
                          />
        </div>
    );
}

export default KittenContainer;