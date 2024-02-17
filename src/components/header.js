import "./header.css";
import AddInfo from "./note_adder";
import React, {useState} from "react";
function Header(props){

    const [noteAddition, addHook] = useState(false);

    return(
     <div>

         <div className="hdr">
      
             <h2>todo list:</h2>

             <div>
                <button onClick={() => addHandler()}>+</button>
            </div>

         </div>

        <AddInfo active={noteAddition} enableHook={addHook} notes={props.notes} noteHook={props.hook}></AddInfo>

     </div>
    )



    function addHandler(){
        addHook(!noteAddition);
    }
}

export default Header;