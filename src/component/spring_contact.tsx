import axios from "axios";
import { useEffect, useState } from "react";
import EditTemplate from './button/editTemplate.tsx'
import SendForm from './button/sendTemplate.tsx'
import List from './button/list.tsx'
import styles from '../list.module.css'

export default function SpringGet() {
    const [message, setMessage] = useState("")
    const [render, setRender] = useState("")
    const [list, setList] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")
    const url = "http://localhost:8080/api/"
    const regex = "^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"

    //List用
    const updateListField = (e, field, id) => {
        const newContent = e.target.value
        setList(prev => 
            prev.map(item => item.id === id ? {...item, [field]: newContent } :item)
        )
    }

    //登録用
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
                } catch (error) {
                    console.error('通信に失敗しました', error)
                }
                setName("")
                setEmail("")
                setContent("")
                setRender(Date.now())
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
        const deleteUrl = `${url}delete/${value}`
        try{
            const response = await axios.delete(deleteUrl)
            setRender(Date.now())
        }catch(error ){
            console.error("通信に失敗しました", error)
        }
    }

    //保存処理
    const EditSave = async (value) => {
        const updateUrl = `${url}update/${value.id}`
        try{
            let response = await axios.put(updateUrl, {
                name: value.name,
                email: value.email,
                content: value.content
            })

            setList(list.map(item => 
                item.id === value.id 
                ? {...item, editFlg: false} 
                : item
            ))
            setRender(Date.now())
        }catch(error){
            console.error("通信に失敗しました", error)
        }
    }

    //編集キャンセル
    const EditCancel = (e) => {
        console.log("EditCancel")
        setList(list.map(item => 
            item.id === e.id 
            ? {...item, editFlg: false} 
            : item
        ))
        setRender(Date.now())
        console.log(list)
    }

    //編集項目出力
    const trueEdit = async (e) => {
        console.log("trueEdit")
        await setList(list.map(item => 
            item.id === e.id 
           ? {...item, editFlg: true} 
           : item
        ))
        setRender(Date.now())
    }
    
    //リスト追加処理
    useEffect(() => {
        setList([])
        const sprinGetUrl = url + "get"
        const DataGet = async (e) => {
            try{
                const response = await fetch(sprinGetUrl)
                const data = await response.json()
                const format = data.map(value => ({
                    id: value.id,
                    name: value.name,
                    email: value.email,
                    content: value.content,
                    editFlg: list.find(item => item.id === value.id)?.editFlg === undefined ? false : list.find(item => item.id === value.id)?.editFlg
                }))
                setList(format)
            }catch (error) {
                console.error('通信に失敗しました', error)
            }
        }
        DataGet()
    },[render]) //マウント時・レンダー変数が変更された際に再描画

    return (
        <div>
                    <SendForm 
                        name={name}
                        email={email}
                        content={content}
                        sendForm={sendForm}
                        NameAdd={NameAdd}
                        EmailAdd={EmailAdd}
                        ContentAdd={ContentAdd}
                        Styles={styles}
                        />
                    <h3 className={styles.ListTitle}>一覧</h3>
            <table className={styles.ListTable}>
                <thead>
                    <th>名前</th>
                    <th>Email</th>
                    <th>内容</th>
                    <th>編集</th>
                </thead>
                <tbody>
                    {
                        list.map(value => 
                            value.editFlg ? (
                                <EditTemplate 
                                    EditSave={EditSave}
                                    EditCancel={EditCancel}
                                    list={list}
                                    setList={setList}
                                    value={value}
                                    updateListField={updateListField}
                                />
                            ):(
                                <List 
                                    value={value}
                                    ListDelete={ListDelete}
                                    trueEdit={trueEdit}
                                />
                            )
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

