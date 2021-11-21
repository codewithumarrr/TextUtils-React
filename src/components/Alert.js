import React from "react";

export default function Alert(props) {


   const capitalize = () => {
      let msg = props.alert.type;
      return msg[0].toUpperCase() + msg.slice(1)
   }


  return (

      <div style={{height:"50px"}}>
   {props.alert && <div

        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert" >
        <strong>{capitalize()} :</strong> {props.alert.msg}
   
      </div>}
    </div>
  );
}
