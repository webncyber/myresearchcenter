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
        },
        {
          property: "og:title",
          content: props.title
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: canonicalUrl
        },
        {
          property: "og:image",
          content: props.imageUrl
        },
        {
          property: "og:description",
          content:  props.description
        },
        {
          property: "og:site_name",
          content:  "myresearchcenter.com"
        },
        {
          name: "twitter:card", 
          content: props.imageUrl
        },
        {
          name: "twitter:title", 
          content: props.title
        },
        {
          name: "twitter:site", 
          content: "myresearchcenter.com"
        },
        {
          name: "twitter:description", 
          content:  props.description
        },
        {
          name: "twitter:image:src", 
          content:  props.imageUrl
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