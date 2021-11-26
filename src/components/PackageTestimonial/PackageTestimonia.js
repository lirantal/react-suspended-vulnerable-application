import React from "react";

export default function PackageTestimonial(props) {
  return (
    <figure>
      <AuthorQuote {...props} />
      <figcaption>—{props.author}</figcaption>
    </figure>
  );
}

function AuthorQuote(props) {
  return <blockquote {...props}>{props.text}</blockquote>;
}
