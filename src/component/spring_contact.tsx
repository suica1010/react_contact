import axios from "axios";
import { useEffect, useState } from "react";

export default function SpringGet() {
    const [message, setMessage] = useState("")
    const [render, setRender] = useState("")
    const [list, setList] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")
    const url = "http://localhost:8080/api/"
    const regex = "^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"

    //名前設定
    const NameAdd = (e) => {
        setName(e.target.value)
    }
    //email設定
    const EmailAdd = (e) => {
        setEmail(e.target.value)
    }
    //コンテンツ設定
    const ContentAdd = (e) => {
        setContent(e.target.value)
    }

    //springへの送信処理
    const sendForm = async (e) => {
        e.preventDefault()
        console.log(list)
        const springSaveUrl = url + "save"
        //値が入力されている場合
        if(name !== "" && email !== "" && content !== ""){
            //eメールの形式ではない場合
            if(!email.match(regex)){
                alert("メールアドレスの形式が正しくありません")
            } else {
                //axiosの場合
                try {
                    const res = await axios.post(springSaveUrl,{
                        name: name,
                        email: email,
                        content: content
                    })
                    console.log(res.data)
                } catch (error) {
                    console.error('error', error)
                }
                setName("")
                setEmail("")
                setContent("")
                setRender("post")
                console.log(name)
                console.log(email)
                console.log(content)
                //fetchの場合は以下処理
                // fetch(springSaveUrl, {
                //     method: "POST",
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         name: name,
                //         email: email,
                //         content: content
                //     })
                // })
            }
        } else {
            alert("値を入力してください")
        }
    }

    //削除処理
    const ListDelete = async (value) => {
        console.log(value)
        const deleteUrl = `${url}delete/${value}`
        const response = await axios.delete(deleteUrl)
        setRender("delete")
    }
    
    //リスト追加処理
    useEffect(() => {
        setList([])
        const sprinGetUrl = url + "get"
        const DataGet = async () => {
            const response = await fetch(sprinGetUrl)
            const data = await response.json()
            const format = data.map(value => ({
                id: value.id,
                name: value.name,
                email: value.email,
                content: value.content
            }))
            setList(format)
        }
        DataGet()
    },[render]) //マウント時・レンダー変数が変更された際に再描画

    return (
        <div>
            <ul>
                <form action="" onSubmit={sendForm}>
                    Name<input type="text" onChange={NameAdd} value={name}/>
                    Email<input type="text" onChange={EmailAdd} value={email}/>
                    content<textarea onChange={ContentAdd} value={content}></textarea>
                    <button type="submit">送信</button>
                </form>
                {list.map((value, key) => {
                    return <li key={key}>
                        {value.id}:{value.name}:{value.email}:{value.content}
                        <button type="submit" onClick={() => ListDelete(value.id)}>削除</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

