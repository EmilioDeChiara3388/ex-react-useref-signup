import { useState } from "react"

function App() {

  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [specialty, setSpecialty] = useState("")
  const [experience, setExperience] = useState(0)
  const [description, setDescription] = useState("")

  function submitForm(e) {
    e.preventDefault()
    if (experience < 0) {
      console.log("Compila tutti i campi correttamente per favore");
    } else {
      console.log(`Nome Completo: ${name};
        Username: ${userName};
        Password: ${password};
        Specializzazione: ${specialty};
        Anni di Esperienza: ${experience};
        Descrizione: ${description}`);
    }

  }

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
          <input type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required />
          <input type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
          <select name="specialty"
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            required>
            <option value=""></option>
            <option value="Full Stack">
              Full Stack
            </option>
            <option value="Frontend">
              Frontend
            </option>
            <option value="Backend">
              Backend
            </option>
          </select>
          <input type="number"
            placeholder="Anni di esperienza"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required />
          <textarea
            name="description"
            id="description"
            placeholder="Descriviti brevemente"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required>
          </textarea>
          <button type="submit">Invia!</button>
        </form>

      </div>
    </>
  )
}

export default App
