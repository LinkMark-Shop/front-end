import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter } from "next/router"
import "./style.css"

interface LoginForm {
  email: string
  password: string
}

const Login = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      await response.json()
      router.push("/")
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const router = useRouter()
  const handleLoginRedirect = () => {
    router.push("/register")
  }

  return (
    <div className="teste">
      <div className="card">
        <div className="teste3">
          <div className="teste2">
            <h1>Linkmark Shop</h1>
            <p className="teste5">
              Entre com suas credenciais para acessar sua conta.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-input">
              <label className="custom-label">E-mail</label>
              <input
                placeholder="Entre com seu usuário ou email"
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
                <small>
                  <strong>Esqueceu sua senha?</strong>
                </small>
              </div>
              <div style={{ position: "relative", width: "100%" }}>
                <input
                  className="custom-input"
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Digite sua senha"
                  value={formData.password}
                  onChange={handleInputChange}
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
                Entrar
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
              Não tem nenhuma conta?{" "}
              <small
                onClick={handleLoginRedirect}
                style={{ cursor: "pointer" }}
              >
                Registre-se
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
