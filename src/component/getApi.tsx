import { useState, useEffect } from "react";

export default function ApiGet() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const [users, setUsers] = useState([])
    //urlからデータ取得

    //ユーザー配列に追加
    const usersSet = (value) => {
        setUsers(prev => [...prev, {id:value.id, userName: value.username, email: value.email}])
    }

    //user追加処理
    useEffect(() => {
        const usersAdd = async () => {
            const response = await fetch(url)
            //取得後、json形式に変換
            const dataList = await response.json()
            //配列初期化
            setUsers([])
            //配列に変換する
            const formated = dataList.map(value => ({
                id: value.id,
                userName: value.username,
                email: value.email
            }))
            //返還後、users配列に追加する
            dataList.forEach((value) => {
                usersSet(value)
            })
        }
        //起動
        usersAdd()
    },[]) //初回のみ実行
        
    //
    return(
        <div>
            <ul>
                {
                    users.map((value) => {
                        return <li>{value.id}:{value.userName}:{value.email}</li>
                    })
                }
            </ul>
        </div>
    )
}


