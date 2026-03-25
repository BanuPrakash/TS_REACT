import React, { useDeferredValue, useEffect, memo } from 'react'

const Item = ({ text }) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // Simulating a heavy computation
    }
    return <li>Text: {text}</li>
}

const List = memo(({ text }) => {
    const items = [];
    for (let i = 0; i < 1000; i++) {
        items.push(<Item key={i} text={text} />);
    }
    return <ul>{items}</ul>;
});


export default function DeferredDemo() {
    const [query, setQuery] = React.useState("");
    const deferredValue = useDeferredValue(query);

    useEffect(() => {
        console.log("Query changed:", query);
        console.log("Deferred value:", deferredValue);
    }, [deferredValue, query]);

    return (
        <div>
            <h1>DeferredDemo</h1>

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type something..." />
            <List text={deferredValue} />
        </div>
    )
}
