import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'reactstrap';

// @TODO think what happens if the element with authorName id
// has dangerous HTML strings in it like: 'liran_tal <img src=x onerror=alert(1) />'
export default function PropsPointsAdvanced(props) {
    const [count, setCount] = useState(0)
    const authorName = 'Kate Libby'
    const name = useRef(null)
    const errorMsgRef = useRef(null)
    
    useEffect(() => {
        if (count >= 10) {
            errorMsgRef.current.innerHTML = `
            <div class="text-center">
            <h4>
                <p class="text-danger">
                        <br/>
                    We appreciate your kindness for <i><strong>${name.current.textContent}</strong></i>, but
                        <br/>
                    you can't provide more than 10 props for each maintainer
                </p>
            </h4>
            </div>
            `
        }
    })

    return (
        <div className="justify-content-md-center">

            <h4 className="text-primary text-center">
                {count} props from you
            </h4>

            <div className="row justify-content-md-center">
                <Button
                    className="btn-icon btn-round"
                    color="primary"
                    type="button"
                    onClick={() => count < 10 && setCount(count+1)}
                >
                    <i className="tim-icons icon-heart-2" />
                </Button>
            </div>

            <div ref={errorMsgRef}>
                <p className="card-text"></p>
            </div>

            <span ref={name} style={{display: 'none'}}>{authorName}</span>
        </div>
    )
}