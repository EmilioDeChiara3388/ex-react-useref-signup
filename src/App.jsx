import { useState, useRef } from "react"

function App() {

  //const [name, setName] = useState("")
  const nameRef = useRef()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  //const [specialty, setSpecialty] = useState("")
  const specialtyRef = useRef()
  //const [experience, setExperience] = useState(0)
  const experienceRef = useRef()
  const [description, setDescription] = useState("")

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  const containsLetter = (value) => letters.split("").some(char => value.includes(char))
  const containsNumber = (value) => numbers.split("").some(char => value.includes(char))
  const containsSymbol = (value) => symbols.split("").some(char => value.includes(char))

  const isAlphanumeric = (value) =>
    value.split("").every(char => letters.includes(char.toLowerCase()) || numbers.includes(char));

  const validUsername = userName.length >= 6 && isAlphanumeric(userName);
  const validPassword = password.length >= 8 && containsLetter(password) && containsNumber(password) && containsSymbol(password);
  const validDescription = description.length >= 100 && description.length <= 1000;

  function submitForm(e) {
    e.preventDefault()
    if (experienceRef.current.value < 0 || !validUsername || !validPassword || !validDescription) {
      console.log("Compila tutti i campi correttamente per favore");
    } else {
      console.log(`Nome Completo: ${nameRef.current.value};
        Username: ${userName};
        Password: ${password};
        Specializzazione: ${specialtyRef.current.value};
        Anni di Esperienza: ${experienceRef.current.value};
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
            ref={nameRef}
            //onChange={(e) => setName(e.target.value)}
            required />
          <input type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required />
          <strong style={{ color: validUsername ? "green" : "red" }}>
            {validUsername ? "Username Valido" : "Minimo 6 caratteri, solo caratteri alfanumerici"}
          </strong>
          <input type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <strong style={{ color: validPassword ? "green" : "red" }}>
            {validPassword ? "Password Valida" : "Password non valida"}
          </strong>
          <select name="specialty"
            id="specialty"
            ref={specialtyRef}
            //onChange={(e) => setSpecialty(e.target.value)}
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
            ref={experienceRef}
            //onChange={(e) => setExperience(e.target.value)}
            required />
          <textarea
            name="description"
            id="description"
            placeholder="Descriviti brevemente"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required>
          </textarea>
          <strong style={{ color: validDescription ? "green" : "red" }}>
            {validDescription ? "Descrizione Valida" : "Descrizione non valida"}
          </strong>
          <button type="submit">Invia!</button>
        </form>
      </div>
    </>
  )
}

export default App
