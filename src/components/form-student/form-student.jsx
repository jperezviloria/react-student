import React, {useState, useEffect} from "react"
import {useForm} from "react-hook-form"
import "./style.css"
import axios from "axios"

function FormStudent(){

    const {register, handleSubmit} = useForm();

    const callingSaveStudent = async (data) => {
        var studentModel = {
            nameStudent : data.nameStudent,
            ageStudent : data.ageStudent
        }
        console.log(studentModel)
        axios.post("/student", studentModel)
        .catch(error =>{
            console.log(error)
        })
    }

    const saveStudent = (data) => {
        callingSaveStudent(data)
    }

    const onSubmitInsertStudent = (data) => {
        saveStudent(data)
    }

    return(
        <div className="complete-form">
            <h1>Save student</h1>
            <form onSubmit={handleSubmit(onSubmitInsertStudent)} className="particular-form">
                <input 
                type="text" 
                placeholder="name student" 
                name= "nameStudent"
                ref={register}                
                />
                <input 
                type="number" 
                placeholder="age student" 
                name= "ageStudent"
                ref={register}
                />
                <button type="submit"> save </button>
            </form>
            <img src="https://i.imgur.com/Ih8XMS3.png" alt=""/>

        </div>
    )
}

export default FormStudent;