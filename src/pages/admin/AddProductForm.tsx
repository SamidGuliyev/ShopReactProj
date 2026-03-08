import React from 'react'
import './admin.css'



const AddProductForm: React.FC = () => {

const [formData, setFormData] = React.useState({
  title: '',
  price: 0,
  category: '',
  image: '',
  description: ''
})

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('Form submitted:', formData)
}

  return (
    <div className="add-product">
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            <span>Title</span>
            <input type="text" onChange={handleInputChange} name="title" placeholder="Product title" />
          </label>
          <label>
            <span>Price</span>
            <input type="number" onChange={handleInputChange} name="price" placeholder="0.00" />
          </label>
          <label>
            <span>Category</span>
            <input type="text" onChange={handleInputChange} name="category" placeholder="Category" />
          </label>
          <label>
            <span>Image URL</span>
            <input type="text" onChange={handleInputChange} name="image" placeholder="https://..." />
          </label>
        </div>

        <label className="full">
          <span>Description</span>
          <textarea onChange={handleInputChange} name="description" rows={4} placeholder="Short description" />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn primary">Save Product</button>
          <button type="button" className="btn">Reset</button>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm
