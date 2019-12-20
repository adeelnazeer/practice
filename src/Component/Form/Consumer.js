import React, {Component} from "react";
import {Consumer} from "../../store";
import Child from "./Form";
export default (props)=> {
    return (
        <Consumer>
            {
                ({dispatch, word,name}) => (
                    <Child children={props.children} dispatch={dispatch}  name={name} word={word}/>
                )
            }
        </Consumer>
    )
}