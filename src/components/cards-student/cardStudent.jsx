import React, {useState, useEffect} from "react";
import axios from "axios"
import "./style.css"

function CardStudent(){

    const [students, setStudents] = useState([]);

    const studentss = {
        idStudent: "jlksdjflksdjfl",
        nameStudent: "alfredo",
        ageStudent:21
    }

    const getAllStudents = async() => {

        axios.get(`/student`)
        .then((response) => {
            console.log(response.data)
            console.log(response)
            setStudents(response.data)            
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {
        getAllStudents()
    }, []);



    return (
        <div className="allCards">
            {students.map((particularStudent) => (
                <div className="particularCard" key={particularStudent.idStudent} >
                    <img src="https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-silueta-de-avatar-masculino-casual-by-vexels.png" alt=""/>
                    <div className="information">
                        <p className="description" >name : </p>
                        <p className="nameClass">{particularStudent.nameStudent}</p>
                        <p className="description">age : </p>
                        <p className="ageClass">{particularStudent.ageStudent}</p>
                    </div>
                    <button>delete</button>
                    <button>update</button>
                </div>
            ))}
                        
        </div>
    )
}

export default CardStudent;