import React from "react"
import "./style.css"

function FormStudent(){
    return(
        <div className="complete-form">
            <h1>Save student</h1>
            <form className="particular-form">
                <input type="text" placeholder="name student"/>
                <input type="number" placeholder="age student"/>
                <button type="submit"> save </button>
            </form>
            <img src="https://i.imgur.com/Ih8XMS3.png" alt=""/>

        </div>
    )
}

export default FormStudent;