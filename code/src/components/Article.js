import React from "react";


const Article = (props) => {
    console.log(`props article:`, props);
    return (
      <article className="article">
        <h2>{props.articleDetails.title}</h2>
        <p>{props.articleDetails.description}</p>
        <p>
            {new Date(props.articleDetails.date).toLocaleDateString('en-UK', {
                weekday: 'long',
                month: 'long',
            })}
        </p>
        <img src={props.articleDetails.image} alt="Nick Cage"/>
        <div className="tag-container">
				{props.articleDetails.tags.map((singleTag) => {
					return (
						<span key={singleTag} className="tag">
							{singleTag}
						</span>
					);
				})}
	    </div>
      </article>
    );
  };
  
  export default Article;



/*
export const Article = (props) => {
	console.log(`props:`, props);
}
*/