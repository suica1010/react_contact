
export default function SendForm(props) {
    return (
        <div>
            <form onSubmit={props.SendForm}>
                <table className={props.Styles.FormTable}>
                    <tr>
                        <th>名前</th>
                        <td>
                                <input type="text" onChange={props.NameAdd} value={props.name} className={props.Styles.inputArea} placeholder="名前"/>
                        </td>
                    </tr>
                    <tr>
                        <th>email</th>
                        <td>
                            <input type="text" onChange={props.EmailAdd} value={props.email} className={props.Styles.inputArea} placeholder="email"/>
                        </td>
                    </tr>
                    <tr>
                        <th>内容</th>
                        <td>
                            <textarea onChange={props.ContentAdd} value={props.content} className={props.Styles.inputArea} placeholder="内容"></textarea>
                        </td>
                    </tr>
                </table>
                <button type="submit">送信</button>
            </form>
        </div>
    )
}