
export default function List(props){
    return(
        <>
            <tr>
                <td>{props.value.name}</td>
                <td>{props.value.email}</td>
                <td>{props.value.content}</td>
                <td>
                    <button type="submit" onClick={() => props.ListDelete(props.value.id)}>削除</button>
                    <button type="submit" onClick={() => props.trueEdit(props.value)}>編集</button>
                </td>
            </tr>
        </>
    )
}
