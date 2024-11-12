import { useState, ChangeEvent, FormEvent } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./style.css"

interface ProductForm {
  nome: string
  descricao: string
  preco: string
  estoque: string
  autor: string
  img: File | null
}

const NewProductWizard: React.FC = () => {
  const [formData, setFormData] = useState<ProductForm>({
    nome: "",
    descricao: "",
    preco: "",
    estoque: "",
    autor: "",
    img: null,
  })

  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    setFormData({ ...formData, img: file })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log("Produto cadastrado:", formData)

    toast.success("Produto cadastrado com sucesso!")
  }

  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="teste">
      <div className="card">
        <div className="teste3">
          <div className="teste2">
            <h1>Cadastro de Produto</h1>
            <p className="teste5">Preencha os dados do produto.</p>
          </div>

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <>
                <div className="login-input">
                  <label className="custom-label">Nome do Produto</label>
                  <input
                    placeholder="Digite o nome do produto"
                    className="custom-input"
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="login-input">
                  <label className="custom-label">Descrição</label>
                  <textarea
                    placeholder="Descrição do produto"
                    className="custom-input"
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="form-group">
                  <div className="half-width">
                    <label className="custom-label">Preço</label>
                    <input
                      placeholder="Preço do produto"
                      className="custom-input"
                      type="number"
                      name="preco"
                      value={formData.preco}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="half-width">
                    <label className="custom-label">Estoque</label>
                    <input
                      placeholder="Quantidade em estoque"
                      className="custom-input"
                      type="number"
                      name="estoque"
                      value={formData.estoque}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="login-input">
                  <label className="custom-label">Autor</label>
                  <input
                    placeholder="Autor do produto"
                    className="custom-input"
                    type="text"
                    name="autor"
                    value={formData.autor}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <div className="login-input">
                  <label className="custom-label">Imagem do Produto</label>
                  <input
                    type="file"
                    className="custom-input"
                    name="img"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                  />
                </div>

                {formData.img && (
                  <div className="image-preview-container">
                    <img
                      src={URL.createObjectURL(formData.img)}
                      alt="Imagem do produto"
                      className="preview-img"
                    />
                  </div>
                )}
              </>
            )}

            <div className="form-navigation">
              <button
                type="button"
                className="custom-button"
                onClick={goToPreviousStep}
                disabled={currentStep === 1}
              >
                Voltar
              </button>
              <button
                type="button"
                className="custom-button"
                onClick={goToNextStep}
                disabled={currentStep === 3}
              >
                Próximo
              </button>
            </div>

            {currentStep === 3 && (
              <div>
                <button type="submit" className="custom-button">
                  Cadastrar Produto
                </button>
              </div>
            )}
          </form>

          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default NewProductWizard
