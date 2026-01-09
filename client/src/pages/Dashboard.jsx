import { useEffect, useState } from "react"
import { dummyCreationData } from "../assets/assets";

export function Dashboard() {
    const [creations,setCreations] = useState([]);

    const getDashboardData = async  ()=>{
        setCreations(dummyCreationData)
    }

    useEffect(()=>{
        
    },[])

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}