
import Hero from './style.scss'


const SingleColumnContent = (props) => {
    return(
        <div className="single-column-content">
            <h2>{props.heading}</h2>
            <div className='content' dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    );
   };

   export default SingleColumnContent;