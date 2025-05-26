import React from "react";

export default function Button(props):any{
    return(
        <button
            className={`custom-primary-button w-full py-3 rounded text-sm font-medium uppercase tracking-wider mb-4 ${props.style}`}
            type={props.type}
        >
            {props.text}
        </button>
    )
}