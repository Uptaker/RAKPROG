import {useState, useContext, useRef, useEffect} from "react"
import {Context} from "../store"
import {addPost, removePost, updatePosts} from "../store/actions"

function Posts() {
    const [title, setTitle] = useState("")
    const [state, dispatch] = useContext(Context)
    const inputRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        setTitle("")
        addNewPost();
        if (inputRef.current) inputRef.current.focus()
    }

    // kui [], siis muutub ühe korra. Kui [state], siis muutub iga kord kui state muutub
    useEffect(() => {
        dispatch(updatePosts([
            {
                id: 1,
                title: "pre-fetched array"
            },
            {
                id: 2,
                title: "pre-fetched array"
            },
            {
                id: 3,
                title: "pre-fetched array"
            },
            {
                id: 4,
                title: "pre-fetched array"
            }
        ]))
    },[]);



    const addNewPost = () => {
        const newPost = {
            id: Date.now(),
            title // same as title: title (wtf) 
        }

        // Salvestame andmebaasi ja kui on edukas,
        // siis teeme dispatchi ja uuendame state lokaalselt

        dispatch(addPost(newPost))
    }

    console.log({state})

    return (
        <div style={{textAlign: "center"}}>
            <h1>Add Post</h1>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" value={title} onChange={e => setTitle(e.target.value)} autoFocus/>
                <button type="submit">Submit</button>
            </form>

            {state.posts.data.map(e => <li key={e.id}>{e.id} {e.title}<span onClick={() => dispatch(removePost(e.id))} style={{cursor: "pointer"}}>&#128540;</span></li>)}

        </div>
    )
}

export default Posts;