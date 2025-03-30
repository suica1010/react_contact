import { useState } from "react"


export default function SendForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/

    //各値を設定
    const sendName = (e) => setName(e.target.value)
    const sendEmail = (e) => setEmail(e.target.value)
    const sendContent = (e) => setContent(e.target.value)
    //送信時にconsole出力&各値を空にする
    const sendConsole = (e) => {
        e.preventDefault()
        if(name.trim() !== "" && email.trim() !== "" && content.trim() !== ""){
            if(email.match(regex)){
                //コンソール出力
                console.log(`name:${name.trim()},email:${email.trim()},content:${content.trim()}`)
                //各値を空欄に設定
                setName("")
                setEmail("")
                setContent("")
            } else {
                alert("メールアドレスの形式が正しくありません")
            }
        } else {
            //各値を設定
            const errorList = [
                {key: "name", value: name},
                {key: "email", value: email},
                {key: "content", value: content},
            ].filter(field => field.value.trim() === "")
            .map(filed => filed.key)
            .join(", ")
            //カンマで結合
            const rtText = errorList + " を入力してください"
            alert(rtText)
        }
    }

    return(
        <div>
            <form onSubmit={sendConsole}>
                <label htmlFor="">
                    名前：<input type="text" onChange={sendName} value={name}/>
                </label>
                <label htmlFor="">
                    メール：<input type="text" onChange={sendEmail} value={email}/>
                </label>
                <label htmlFor="">
                    内容：<textarea onChange={sendContent} value={content}></textarea>
                </label>
                <button type="submit">送信</button>
            </form>
        </div>
    )
}