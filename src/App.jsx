// import React from 'react'
// import Hooks from './compontnts/hooks'

// const App = () => {
// 	return (
// 		<div>
// 			<h1>HOOKS</h1>
// 			<Hooks />
// 		</div>
// 	)
// }

// export default App

import React, { useActionState, useState, useSyncExternalStore } from 'react'
import Hooks from './compontnts/hooks'

const App = () => {
  // let name = 'Dev Mandal';
  const [name, setName] = useState('Dev Mandal')


  return (
    <div>
      <h1>My Name is {name}</h1>
      <button onClick={() => setName('Aman M')}>OnClick</button>
      <Hooks />
    </div>
  )
}

export default App
