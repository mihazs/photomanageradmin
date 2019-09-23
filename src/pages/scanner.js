import React from "react";
import QrReader from 'react-qr-reader';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import {GET_ONE, withDataProvider} from "react-admin";
function Scanner({push, dataProvider}){
    const handleScan = (data) =>{
      if(data){
        dataProvider(GET_ONE, "Photograph", {id: data}).then((d)=>{
            push(`/Photograph/${data}`);
        }).catch((e)=>{
          console.log(e);
        });
      }
    }
    return (
        <>
        <QrReader
          delay={1500}
          onScan={handleScan}
          style={{width:"100%"}}
        />

        </>
    )
}
export default withDataProvider( connect(null, {
  push,
})(Scanner));