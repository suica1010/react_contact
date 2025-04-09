type listValue = {
    name: string, email: string, content: string, id: number
}
type listType = {
    value: listValue,
    ListDelete: (value: number) => void,
    trueEdit: (value: number) => void,
}


export default function List(props: listType){
    return(
        <>
            <tr>
                <td>{props.value.name}</td>
                <td>{props.value.email}</td>
                <td>{props.value.content}</td>
                <td>
                    <button type="submit" onClick={() => props.ListDelete(props.value.id)}>削除</button>
                    <button type="submit" onClick={() => props.trueEdit(props.value.id)}>編集</button>
                </td>
            </tr>
        </>
    )
}
