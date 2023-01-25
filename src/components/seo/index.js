import { Helmet } from 'react-helmet';
import React from 'react';

const SEO = (props) => {
  const canonicalUrl = "https://myresearchcenter.com" + props.url

	return (
  <Helmet htmlAttributes={{ lang: 'en' }} title={props.title} meta={[
        {
          name: 'description',
          content: props.description,
        },
        {
          name: 'keywords',
          content: props.keywords,
        },
        {
          name: "robots", 
          content: props.robots
        }
		]}
    link={[
     {
          rel: 'canonical',
          href: canonicalUrl,
      },
    ]}
    />
 );
}
export default SEO;