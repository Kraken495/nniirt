import React from 'react'
import {Button, Radio} from 'antd'
import './Header.css'
interface HeaderProp{
    metod: string;
    setMetod: (metod:string)=>void
}
export const Header = (props:HeaderProp) =>{
    const {metod, setMetod} = props
    return(
        <div className={"Header"} >
            <h1>Choos method:</h1>
            <Radio.Group onChange={(e)=>setMetod(e.target.value)} value={metod}>
                <Radio.Button value="USB">USB</Radio.Button>
                <Radio.Button value="RS">RS</Radio.Button>
            </Radio.Group>
        </div>
    )
}