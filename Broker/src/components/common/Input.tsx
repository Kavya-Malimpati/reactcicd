import React from "react"

export default function Input(props):any {
    return (
        <>
          {props.type === "checkbox" ? (
            <div>
              <input 
                type="checkbox" 
                id={props.name} 
                name={props.name}
                checked={props.checked} 
                onChange={props.onChange} 
                className="mr-2" 
              />
              <label htmlFor={props.name} className="text-sm text-gray-800 mb-0">
                {props.label}
              </label>
            </div>
          ) : (
            <div className="mb-2">
              <label>{props.label}</label>
              <input 
                type={props.type} 
                name={props.name} 
                value={props.value} 
                onChange={props.onChange} 
                className="w-full px-3 py-3 border border-gray-300 rounded text-sm"
              />
            </div>
          )}
        </>
      );
}