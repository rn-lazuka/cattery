import React from 'react';
import '../../../App.css'
import cat1 from '../../../assets/images/parentsPhotos/GrammyMur/1.jpg'
import cat2 from '../../../assets/images/parentsPhotos/GrammyMur/2.jpg'
import cat3 from '../../../assets/images/parentsPhotos/GrammyMur/3.jpg'
import cat4 from '../../../assets/images/parentsPhotos/GrammyMur/4.jpg'
import MalesParents from "./MalesParents";


function MaleParentContainer() {
    let sliderArray = [cat1, cat2, cat3, cat4];
    let name = 'Grammy Mur Old Race';
    let birthDate = '25.06.2018';
    let color = 'Brown (Black) Spotted Tabby';

    return (
        <div>
                          <MalesParents
                              sliderArray={sliderArray}
                              name={name}
                              birthDate={birthDate}
                              color={color}
                          />
        </div>
    );
}

export default MaleParentContainer;