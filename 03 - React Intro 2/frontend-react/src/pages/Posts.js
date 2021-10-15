import {useState, useContext, useRef} from "react"
import {Context} from "../store"
import {addPost} from "../store/actions"

function Posts() {
    const [title, setTitle] = useState("")
    const [state, dispatch] = useContext(Context)
    const inputRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()

        const newPost = {
            id: Date.now(),
            title // same as title: title (wtf) 
        }
        dispatch(addPost(newPost))

        setTitle("")

        if (inputRef.current) inputRef.current.focus()
    }

    console.log({state})

    return (
        <div style={{textAlign: "center"}}>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
                <button type="submit">Submit</button>
            </form>

            {state.posts.data.map(e => <li key={e.id}>{e.id} {e.title}</li>)}

        </div>
    )
}

export default Posts;