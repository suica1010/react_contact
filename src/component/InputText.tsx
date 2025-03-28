import { useState } from "react";

export default function StateManage(){
    //useStateで値を保持、更新する
    const [lastName, setLastName] = useState("json")
    const [firstName, setFirstName] = useState("bone")
    const [count, setCount] = useState(0)

    //eを受け取って、target.valueで各値を更新
    const firstNameCng = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameCng = (e) => {
        setLastName(e.target.value)
    }
    //カウントアップ
    //+1カウントアップ(両方で元のcountが呼び出されている)
    const countUp = () => {
        setCount(count + 1)
        setCount(count + 1)
    }
    //2回更新される
    //+2カウントアップ(prevで更新後の値が呼び出される)
    const countUpWithPrev = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    return (
        <div>
            苗字：<input type="text" onChange={lastNameCng} value={lastName}/>
            名前：<input type="text" onChange={firstNameCng} value={firstName}/>
            <p>私は{lastName} {firstName}です</p>
            <p>カウンター:{count}</p>
            <button onClick={countUp}>カウントアップ</button>
            <button onClick={countUpWithPrev}>セットカウントアップ</button>
        </div>
    )
}
