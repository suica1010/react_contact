import { useState } from "react"

export default function Todo(){
    //リスト用の配列
    const [todos, setTodos] = useState([])
    const [listName, setListName] = useState("")
    const [id, setId] = useState(0)


    //リストへ追加
    const listAdd = () => {
        if(listName.trim() === "") return
        setTodos([...todos, {name: listName, listId:id}])
        setId(prev => prev + 1)
        setListName("")
    }
    //名称の取得
    const listNameAdd = (e) => setListName(e.target.value)

    return (
        <div>
            <ul>
                {
                    todos.map((value) => (
                        <li key={value.listId}>{value.name}
                        <button onClick={() => 
                            setTodos(todos.filter(e => (
                                e.listId !== value.listId
                            )))
                        }>削除</button></li>

                ))}
            </ul>
            リスト<input type="text" value={listName} onChange={listNameAdd} id="addList"/>
            <button onClick={listAdd}>追加</button>
        </div>
    )
}
