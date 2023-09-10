import { useContext, useEffect, useState } from "react"
import style from "../css/accountholderpage.module.css"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { index1 } from "./AccountHolderLogin"

const AccountHolderPage=(props)=>{
    // let id=useContext(index1)

// let [id,setId]=useState({props})

let {index}=useParams()


    let[email,setEmail]=useState("")
    let[name,setName]=useState("")
    let[balance,setBalance]=useState(0)
    let[accno,setAccno]=useState("")

    useEffect(()=>{
        // axios.get(`http://localhost:3000/accountholder/${id}`)
        axios.get(`http://localhost:3000/accountholder/${index}`)
        .then((r)=>{
            setName(r.data.name)
            setBalance(r.data.balance)
            setEmail(r.data.email)
            setAccno(r.data.accno)
            console.log("Found")
        })
        .catch(()=>{
            console.log("No Datas Found")
            console.log(index)
        })
    },[index])

    let navigate=useNavigate()

    let transaction=()=>{
        navigate(`/transaction/${index}`)
    }

    return(
        <div>
                <div id={style.maindiv}>
                <div id={style.subdiv}>
                    {/* <div><Link to={`/transaction/2`}>TRANSACTION</Link></div> */}
                    <div id={style.d3}>
                        <label htmlFor="">Name</label>                : <input type="text" value={name}/><br />
                        <label htmlFor="">Email</label>               : <input type="text" value={email}/><br />
                        <label htmlFor="">Account Number</label>      : <input type="text" value={accno}/><br />
                        <label htmlFor="">Balance</label>             : <input type="text" value={balance}/><br />
                        
                        <div id={style.d1}><button onClick={transaction}>TRANSACTION</button></div>
                    </div>
                    {/* <div id={style.d1}><button onClick={transaction}>TRANSACTION</button></div>
                    <div id={style.d2}><button onClick={completeTransaction}>Complete The Transaction</button></div> */}
                </div>
            </div>
        </div>
    )
}
export default AccountHolderPage