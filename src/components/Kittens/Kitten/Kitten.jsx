import ImageGallery from 'react-image-gallery';
import React from "react";
import '../../../App.css'
import "react-image-gallery/styles/css/image-gallery.css";
import s from "./Kitten.module.css";
import Footer from "../../Footer/Footer";
import YouTube from "react-youtube";


class Kitten extends React.Component {
    images = this.props.sliderArray.map(photo => {
        return {original: photo, thumbnail: photo}
    });
    someComponent = props => {
        // console.log(props.someProps.objectKey)
        return <div>{/* {props.someProps.objectKey} */}</div>;
    };
    opts = {
        height: '390',
        width: '640'
    };
    render() {
        console.log(this.props.youtubeLink)
        return (
            <div className={'mainBlock'}>
                <div className={'blockForNav'}></div>
                <div className={s.wrapper}>
                    <div className={s.description}>
                        <h2>{this.props.name}</h2>
                        <div>Date of Birth: {this.props.birthDate}
                            <div>Colour: {this.props.color}</div>
                            <div>Tests of parents: <b>PK def N/N, PRA-b N/N</b></div>
                        </div>
                        {this.props.youtubeLink?
                            <YouTube
                                videoId={this.props.youtubeLink}
                                opts={this.opts}
                            /> : null}
                    </div>
                    <div className={s.sliderModule}>
                        <ImageGallery
                            items={this.images}

                            showBullets={true}
                            showIndex={true}
                            showThumbnails={true}
                            lazyLoad={true}
                            showPlayButton={false}
                            renderCustomControls={this.someComponent}
                        />
                    </div>
                </div>
                <Footer/>
            </div>
        );

    }

}


export default Kitten