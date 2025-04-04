
export default function EditTemplate(props){
    return(
        <>
            <tr>
                <td>
                    name:<input type="text" onChange={(e) => props.updateListField(e, "name",props.value.id)} value={props.value.name}/>
                </td>
                <td>
                    email:<input type="text" onChange={(e) => props.updateListField(e, "email",props.value.id)} value={props.value.email}/>
                </td>
                <td>
                    content:<textarea onChange={(e) => props.updateListField(e, "content",props.value.id)} value={props.value.content}></textarea>
                </td>
                <td>
                    <button onClick={() => props.EditSave(props.value)}>保存</button>
                    <button onClick={() => props.EditCancel(props.value)}>キャンセル</button>
                </td>
            </tr>
        </>
    )
}