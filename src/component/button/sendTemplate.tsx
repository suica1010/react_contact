
export default function SendForm(props) {
    return (
        <div>
            <form action="" onSubmit={props.sendForm}>
                Name<input type="text" onChange={props.NameAdd} value={props.name}/>
                Email<input type="text" onChange={props.EmailAdd} value={props.email}/>
                content<textarea onChange={props.ContentAdd} value={props.content}></textarea>
                <button type="submit">送信</button>
            </form>
        </div>
    )
}