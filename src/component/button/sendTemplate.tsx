type listType = {
    sendForm: (e: React.FormEvent<HTMLFormElement>) => void,
    Styles: CSSModuleClasses,
    NameAdd: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    EmailAdd: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    ContentAdd: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    name: string,
    email: string,
    content: string
}


export default function SendForm(props: listType) {
    return (
        <div>
            <form onSubmit={props.sendForm}>
                <table className={props.Styles.FormTable}>
                    <tbody>
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
                    </tbody>
                </table>
                <button type="submit">送信</button>
            </form>
        </div>
    )
}