
function Hero(props){

    var divImage = {
        backgroundImage: "url("+props.url+")"
    }
    return(
            <div className="hero" style={divImage}>
               <h1>{props.headingOne}</h1>
               <h2>{props.headingTow}</h2>
             </div>
      
    );

}


export default Hero;