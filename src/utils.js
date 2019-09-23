export function pointerFormat(v){

    if(v){
        if(typeof v == "string"){
            return v;
        } else return v.objectId || v.id;
    }
    return '';
    }
export function pointerParse(type){
    return (v) => ({"__type": "Pointer", "className": type,"objectId": v});
}