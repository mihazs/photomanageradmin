import React from 'react';
import {ReferenceInput, ImageInput, ImageField} from "react-admin";
import {pointerFormat, pointerParse} from "../utils";
import Parse from "parse";
import {initializeParse} from "../App";



initializeParse(Parse);
export function PointerInput(props){
 return (<ReferenceInput {...props} format = {pointerFormat} parse={pointerParse(props.reference)}/>);
}
export function ImageParseInput({source, label}){
    return ( <ImageInput {...{source, label}} accept="image/*" 
    format = {(v) => {
        if(!v)
        return '';    
        
        if(typeof v === typeof new Parse.File()){
            return v['_source'].file;
        }
        return v.rawFile;
    }}
    parse = {(v) => {return new Parse.File(v.title, v.rawFile)}}>

    <ImageField source="preview" title="title" />
</ImageInput>)
}