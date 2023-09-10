import { useNavigate, useParams } from "react-router"
import style from "../css/transaction.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

const Transaction=()=>{
let[balance,setBalance]=useState(0)
let[name,setName]=useState("")
let[email,setEmail]=useState("")
let[accno,setAccno]=useState("")
let[password,setPassword]=useState("")

let {index}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/accountholder/${index}`)
        .then((r)=>{
            setName(r.data.name)
        setEmail(r.data.email)
        setAccno(r.data.accno)
        setPassword(r.data.password)
            setBalance(r.data.balance)
            console.log("Found")
        })
        .catch(()=>{
            console.log("No data found")
            console.log(index)
        })
    },[index])

    let deposit=()=>{
        var dep=prompt("Enter the amount to deposit")
            var a=parseInt(dep)
            var b=parseInt(balance)
            let total=a+b
            setBalance(total)
    }

    let withdraw=()=>{
        var dep=prompt("Enter the amount to Withdraw")
            var a=parseInt(dep)
            var b=parseInt(balance)
            let total=b-a
            setBalance(total)
    }

    let navigate=useNavigate()

    let completeTransaction=()=>{
        let payload={name,email,accno,password,balance}
        axios.put(`http://localhost:3000/accountholder/${index}`,payload)
    }


    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                    <div id={style.subdiv2}>
                    <div>
                        <button onClick={deposit}>DEPOSIT</button>
                    </div>
                    <div>
                    <button onClick={withdraw}>WITHDRAW</button>
                    </div>
                    <div><button onClick={completeTransaction}>COMPLETE THE TRANSACTION</button></div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Transaction