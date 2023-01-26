import { BaseSyntheticEvent, KeyboardEvent, useState } from "react"


const App: React.FC = () => {

  const [userQuery, setUserQuery] = useState('');

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  const updateUserQuery = (event: BaseSyntheticEvent) => {
    setUserQuery(event.target.value);
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      searchQuery();
    }

  }

  return (
    <div className="App">
      <h1>Hello {userQuery}</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyDown={(event) => handleKeyDown(event)}
        />
        <button type='button' onClick={searchQuery}>Search</button>
      </div>
    </div>
  )
}

export default App
