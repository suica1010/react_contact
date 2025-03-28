import { useState } from "react"

export default function Todo(){
    //リスト用の配列
    const [todos, setTodos] = useState([])
    const [listName, setListName] = useState("")
    const [id, setId] = useState(0)

    //リストへ追加
    const listAdd = () => {
        setId(id + 1)
        setTodos([...todos, {name: listName, listId:id}])
    }
    //名称の取得
    const listNameAdd = (e) => {
        setListName(e.target.value)
    }

    return (
        <div>
            <ul>
                {
                    todos.map((value, index) => (
                        <li key={value.listId}>{value.name}
                        <button onClick={() => 
                            setTodos(todos.filter(e => (
                                e.listId !== value.listId
                            )))
                        }>削除</button></li>
                ))}
            </ul>
            リスト<input type="text" value={listName} onChange={listNameAdd}/>
            <button onClick={listAdd}>追加</button>
        </div>
    )
}
