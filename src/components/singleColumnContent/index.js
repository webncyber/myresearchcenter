
import Hero from './style.scss'
function SingleColumnContent(props){
    return(
        <div className="single-column-content">
            <h2>{props.heading}</h2>
            <div className='content'>
               {props.content}
            </div>
        </div>
    );

}

export default SingleColumnContent;