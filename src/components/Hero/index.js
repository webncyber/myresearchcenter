import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Hero(props){

    var divImage = {
        backgroundImage: "url("+props.url+")"
    }
    return(
            <div className="hero" style={divImage}>
                <div>Hero Text...</div>
             </div>
      
    );

}


export default Hero;