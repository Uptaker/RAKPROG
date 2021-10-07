import React from 'react'
import {useState, useEffect} from 'react'


function Jokes() {

    const [joke, setJoke] = useState({
        setup: "",
        delivery: ""
    })
    const [jokeLoaded, setJokeLoaded] = useState(false)

    function fetchJoke() {
        fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')
        .then(response => response.json())
        .then(data => {
            setJoke({setup: data.setup, delivery: data.delivery})
            setJokeLoaded(true)
            console.log(data)
        })
        .catch(e => console.log(e));
    }

    useEffect(() => {
        fetchJoke();
    }, [])

    return (
        <div>
            { jokeLoaded ?
                <>
                    <h2>{joke.setup} <br/> {joke.delivery}</h2>
                    <button onClick={fetchJoke}>Click me for a new joke!</button>
                </>
                :
                <p>Joke loading...</p>
            }
            <p></p>
        </div>
    )
}


export default Jokes

