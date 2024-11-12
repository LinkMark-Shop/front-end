import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter } from "next/router"
import "./styles.css"

interface SignupForm {
  username: string
  password: string
  email: string
}

const Register = () => {
  const [formData, setFormData] = useState<SignupForm>({
    username: "",
    password: "",
    email: "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      await response.json()
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const [passwordVisible, setPasswordVisible] = useState(false)
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const handleLoginRedirect = () => {
    router.push("/login")
  }

  return (
    <div className="teste">
      <div className="card">
        <div className="teste3">
          <div className="teste2">
            <h1>Linkmark Shop</h1>
            <p className="teste5">Registrar nova conta.</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="login-input">
              <label className="custom-label">Nome</label>
              <input
                placeholder="Qual seu nome?"
                value={formData.username}
                onChange={handleInputChange}
                className="custom-input"
                type="text"
                name="username"
              />
            </div>
            <div className="login-input">
              <label className="custom-label">E-mail</label>
              <input
                placeholder="Qual seu email?"
                className="custom-input"
                type="text"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div className="login-input">
              <div className="teste6">
                <label className="custom-label">Senha</label>
              </div>
              <div style={{ position: "relative", width: "100%" }}>
                <input
                  className="custom-input"
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Crie sua senha"
                  style={{
                    paddingRight: "40px",
                  }}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  {passwordVisible ? "🙈" : "👁️"}
                </span>
              </div>
            </div>
            <div className="login-input">
              <div className="teste6">
                <label className="custom-label">Confirme sua Senha</label>
              </div>
              <div style={{ position: "relative", width: "100%" }}>
                <input
                  className="custom-input"
                  type={passwordVisible ? "text" : "password"}
                  name="senha"
                  placeholder="Repita sua senha"
                  style={{
                    paddingRight: "40px",
                  }}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    fontSize: "18px",
                    color: "#333",
                  }}
                >
                  {passwordVisible ? "🙈" : "👁️"}
                </span>
              </div>
            </div>
            <div>
              <button type="submit" className="custom-button">
                Registrar
              </button>
            </div>
          </form>
          <div className="teste7">
            <div className="linha"></div>
            <p>Ou</p>
            <div className="linha"></div>
          </div>
          <div className="centra">
            <p>
              Já tem uma conta?{" "}
              <small
                onClick={handleLoginRedirect}
                style={{ cursor: "pointer" }}
              >
                Entrar
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
