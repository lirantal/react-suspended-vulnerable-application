import React from 'react';

export default function PackageTestimonial(props) {
    // xss poc works:
    return (
        <figure>
            <AuthorQuote {...props} />
            <figcaption>—{props.author}</figcaption>
        </figure>
    );
};

function AuthorQuote(props) {
    return (
        // for example:
        // <blockquote cite="https://www.huxley.net/bnw/four.html">
        // and another idea is to also use the inline quotation <q> element:
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
        <blockquote {...props}>
            {props.text}
        </blockquote>
    );
};
