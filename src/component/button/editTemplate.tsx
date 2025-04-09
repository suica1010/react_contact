type ListTp = {
    id: number,
    name: string,
    email: string,
    content: string,
    editFlg?: boolean,
}
type listType = {
    updateListField: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: string,
        id: number) => void,
    EditSave: (
        value: ListTp
    ) => void,
    EditCancel: (
        value: number
    ) => void
    list: ListTp[]
    value: ListTp
}

export default function EditTemplate(props: listType){
    return(
        <>
            <tr>
                <td>
                    <input type="text" onChange={(e) => props.updateListField(e, "name",props.value.id)} value={props.value.name}/>
                </td>
                <td>
                    <input type="text" onChange={(e) => props.updateListField(e, "email",props.value.id)} value={props.value.email}/>
                </td>
                <td>
                    <textarea onChange={(e) => props.updateListField(e, "content",props.value.id)} value={props.value.content}></textarea>
                </td>
                <td>
                    <button onClick={() => props.EditSave(props.value)}>保存</button>
                    <button onClick={() => props.EditCancel(props.value.id)}>キャンセル</button>
                </td>
            </tr>
        </>
    )
}