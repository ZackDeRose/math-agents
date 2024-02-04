// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';

export function App() {
  const [status, setStatus] = useState<string>('connecting to server...');
  const [username, setUsername] = useState<string>('Guest 1');
  return (
    <div>
      <h1>Math Agents</h1>
      <h2>Welcome {username}</h2>
      <h2>{status}</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const name = (
            document.getElementById('enterNameForm') as HTMLInputElement
          ).value;
          setUsername(name);
          (document.getElementById('enterNameForm') as HTMLInputElement).value =
            '';
        }}
      >
        <label htmlFor="enterNameForm">Enter your name:</label>
        <input type="text" id="enterNameForm" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
