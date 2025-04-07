import { useState, useRef, useMemo } from "react"

function App() {

  const nameRef = useRef()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const specialtyRef = useRef()
  const experienceRef = useRef()
  const [description, setDescription] = useState("")

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  const validUSerName = useMemo(() => {
    const charsValid = userName.split("").every(char => letters.includes(char.toLocaleLowerCase() || numbers.includes(char)))
    return charsValid && userName.trim().length >= 6
  }, [userName])

  const validPassword = useMemo(() => {
    return (password.trim().length >= 8
      && password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char)))
  }, [password])

  const validDescription = useMemo(() => {
    return description.trim().length >= 100 &&
      description.trim().length < 1000
  }, [description])

  function submitForm(e) {
    e.preventDefault()
    const name = nameRef.current.value
    const specialty = specialtyRef.current.value
    const experience = experienceRef.current.value
    if (!name.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !specialty.trim() ||
      !experience.trim() ||
      experience <= 0 ||
      !description.trim()) {
      alert("Compilare tutti i campi correttamente")
      return
    }
    else {
      console.log(`Nome Completo: ${nameRef.current.value};
        Username: ${userName};
        Password: ${password};
        Specializzazione: ${specialtyRef.current.value};
        Anni di Esperienza: ${experienceRef.current.value};
        Descrizione: ${description}`)
    }
  }

  return (
    <>
      <div className="formContainer">
        <h1>Compila il Form</h1>
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Nome Completo"
            ref={nameRef}
            required />
          <input type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required />
          <div className="messageContainer">
            <strong style={{ color: validUSerName ? "green" : "red" }}>
              {validUSerName ? "Username Valido" : "Minimo 6 caratteri, solo caratteri alfanumerici"}
            </strong>
          </div>
          <input type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="messageContainer">
            <strong style={{ color: validPassword ? "green" : "red" }}>
              {validPassword ? "Password Valida" : "Password non valida"}
            </strong>
          </div>
          <select name="specialty"
            id="specialty"
            ref={specialtyRef}
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
            required />
          <textarea
            name="description"
            id="description"
            placeholder="Descriviti brevemente"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required>
          </textarea>
          <div className="messageContainer">
            <strong style={{ color: validDescription ? "green" : "red" }}>
              {validDescription ? "Descrizione Valida" : "Descrizione non valida"}
            </strong>
          </div>
          <button type="submit">Invia!</button>
        </form>
      </div>
    </>
  )
}

export default App
