import React, { useState } from 'react'

export default function Hooks() {
	const [count, setCount] = useState(0)

	const increment = () => setCount(c => c + 1)
	const decrement = () => setCount(c => c - 1)
	const incrementBy4 = () => setCount(c => c + 4)
    const incrementBy6 = () => setCount(c => c + 6)
	const reset = () => setCount(0)

	return (
		<div style={{padding: '1rem'}}>
			<p style={{fontSize: '1.25rem'}}>Count: {count}</p>
			<div style={{display: 'flex', gap: '0.5rem'}}>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
				   <button onClick={incrementBy4}>Increment By 4</button>
                <button onClick={incrementBy6}>Increment By 6</button>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	)
}

