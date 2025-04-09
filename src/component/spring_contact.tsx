import axios from "axios";
import { useEffect, useState } from "react";
import EditTemplate from './button/editTemplate.tsx'
import SendForm from './button/sendTemplate.tsx'
import List from './button/list.tsx'
import styles from '../list.module.css'

export default function SpringGet() {
    const [render, setRender] = useState<string | number>("")
    const [list, setList] = useState<Array<{
        id: number,
        name: string,
        email: string,
        content: string,
        editFlg?: boolean
    }>>([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")
    const url = "http://localhost:8080/api/"
    // const awsUrl = "http://ec2-54-168-57-4.ap-northeast-1.compute.amazonaws.com/api/"
    const awsUrl = "https://ne1z4vlk16.execute-api.ap-northeast-1.amazonaws.com/SpringAPI/"
    const LOCAL = "localhost"
    const regex = "^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\\.)+[a-zA-Z]{2,}$"
    type ListTp = {
        id: number;
        name: string;
        email: string;
        content: string;
        editFlg?: boolean;
    }

    //List用
    const updateListField = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: string,
        id: number
    ) => {
        const newContent = e.target.value
        setList(prev => 
            prev.map(item => item.id === id ? {...item, [field]: newContent } :item)
        )
    }

    //登録用
    //名前設定
    const NameAdd = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(e.target.value)
    }
    //email設定
    const EmailAdd = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(e.target.value)
    }
    //コンテンツ設定
    const ContentAdd = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }

    //springへの送信処理
    const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //url判定後取得
        const currentUrl = location.href.match(LOCAL) ? url : awsUrl
        const springSaveUrl = currentUrl
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
                    console.log(res)
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
    const ListDelete = async (value: number) => {
        const currentUrl = location.href.match(LOCAL) ? url : awsUrl
        const deleteUrl = `${currentUrl}${value}`
        try{
            const response = await axios.delete(deleteUrl)
            console.log(response)
            setRender(Date.now())
        }catch(error ){
            console.error("通信に失敗しました:delete", error)
        }
    }

    //保存処理
    const EditSave = async (value: ListTp) => {
        const currentUrl = location.href.match(LOCAL) ? url : awsUrl
        const updateUrl = `${currentUrl}${value.id}`
        try{
            const response = await axios.put(updateUrl, {
                name: value.name,
                email: value.email,
                content: value.content
            })

            setList(list.map(item => 
                item.id === Number(value.id)
                ? {...item, editFlg: false} 
                : item
            ))
            console.log(response)
            setRender(Date.now())
        }catch(error){
            console.error("通信に失敗しました:edit", error)
        }
    }

    //編集キャンセル
    const EditCancel = (id: number) => {
        console.log("EditCancel")
        setList(list.map(item => 
            item.id === Number(id) 
            ? {...item, editFlg: false} 
            : item
        ))
        setRender(Date.now())
        console.log(list)
    }

    //編集項目出力
    const trueEdit = async (id: number) => {
        console.log("trueEdit")
        await setList(list.map(item => 
            item.id === Number(id) 
           ? {...item, editFlg: true} 
           : item
        ))
        setRender(Date.now())
    }
    
    //リスト追加処理
    useEffect(() => {
        setList([])
        //url判定後取得
        const currentUrl = location.href.match(LOCAL) ? url : awsUrl
        const sprinGetUrl = currentUrl
        const DataGet = async () => {
            try{
                const response = await fetch(sprinGetUrl, {
                    method: 'GET',
                    headers: { 
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()

                const format = data.map((value: ListTp) => ({
                    id: value.id,
                    name: value.name,
                    email: value.email,
                    content: value.content,
                    editFlg: list.find(item => item.id === value.id)?.editFlg === undefined ? false : list.find(item => item.id === value.id)?.editFlg
                }))
                setList(format)
            }catch (error) {
                console.error('通信に失敗しました:list', error)
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
                    <tr>
                        <th>名前</th>
                        <th>Email</th>
                        <th>内容</th>
                        <th>編集</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(value => 
                            value.editFlg ? (
                                <EditTemplate 
                                    key={value.id}
                                    EditSave={EditSave}
                                    EditCancel={EditCancel}
                                    list={list}
                                    value={value}
                                    updateListField={updateListField}
                                />
                            ):(
                                <List 
                                    key={value.id}
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

