import React from "react";
import {GET_ONE, withDataProvider, FunctionField} from "react-admin";

function Field(props){
    const {reference, label} = props;
    const handle = async (record) => {
        const data = await dataProvider(GET_ONE, reference, {id: data});
        
    }
    return (<FunctionField label={label} render={handle} />)
    
}
export const PointerField = withDataProvider(Field); 