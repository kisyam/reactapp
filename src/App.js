import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeword(event.target.value);
    console.log("I run all the time");
    useEffect(() => {
        console.log("Call The API....");
    }, []);
    useEffect(() => {
        console.log("Search for", keyword);
    }, [keyword]);
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Search here...."
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}

export default App;
