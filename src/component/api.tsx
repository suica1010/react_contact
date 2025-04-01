import { useState } from "react";

export default function ApiPost(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")
    const [list, setList] = useState([])
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
    const url = "https://jsonplaceholder.typicode.com/posts"

    const nameSend = (e) => {
        setName(e.target.value)
    }
    const emailSend = (e) => {
        setEmail(e.target.value)
    }
    const contentSend = (e) => {
        setContent(e.target.value)
    }
    const listAdd = (e) => {
        setList(prev => [...prev, {name: e.name, email: e.email, content: e.content}])
    }
    const clearList = () => {
        setList([])
    }
    
    const sendForm = async (e) => {
        e.preventDefault()
        const payload = {
            name: name,
            email: email,
            content: content
        }
        //各項目で空の項目がない場合
        if(name !== "" && email !== "" && content !== ""){
            //メールアドレスの形式が違う場合
            if(!email.match(regex)){
                alert("メールアドレスの形式が違います")
            } else {
                //リストを空にする
                clearList()
                //apiへ送信する
                const reponse = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            )
                if(reponse.ok){
                    const data = await reponse.json()
                    if(Array.isArray(data)){
                        //配列の場合
                        //すべての値が正常である場合、コンソール出力
                        data.forEach((value) => {
                            listAdd(value)
                        })
                    } else {
                        //配列ではない場合
                        listAdd(data)
                    }
                } else {
                    alert("api送信失敗")
                }
            }
        } else {
            //各値で空の値を設定する
            const formList = [
                {key : "name", value : name },
                {key : "email", value : email },
                {key : "content", value : content },
            ].filter(field => field.value.trim() === "")
            .map(field => field.key)
            .join(",")

            const textList = formList + "が入力されていません"
            //未入力項目をアラート出力する
            alert(textList)
        }
    }

    return(
        <div>
            <form action="" method="POST" onSubmit={sendForm}>
                名前：<input type="text" onChange={nameSend} />
                email:<input type="text" onChange={emailSend} />
                お問い合わせ内容<textarea onChange={contentSend}></textarea>
                <button type="submit">送信</button>
                <ul>
                    {list.map((value, index) => {
                        return (
                            <li key={index}>{value.name}:{value.email}:{value.content}</li>
                        )
                    })}
                </ul>
            </form>
        </div>
    )
}