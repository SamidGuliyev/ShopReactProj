import React, { useEffect, useState } from 'react'
import './admin.css'
import AddProductForm from './AddProductForm'

const AdminPanel: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const v = localStorage.getItem('admin-theme')
      return (v === 'dark' ? 'dark' : 'light')
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('admin-theme', theme)
    } catch (e) {
      /* ignore */
    }
  }, [theme])

  return (
    <div className={`admin-root ${theme === 'dark' ? 'dark' : 'light'}`}>
      <aside className="admin-sidebar">
        <div className="brand">Admin Panel</div>
        <nav>
          <ul>
            <li className="active">Products</li>
            <li>Orders</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-top">
          <h1>Product Management</h1>
          <div className="top-actions">
            <button className="btn">Import</button>
            <button className="btn primary">Add Product</button>
            <button
              className="btn theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
            </button>
          </div>
        </header>

        <section className="admin-body">
          <AddProductForm />
        </section>
      </main>
    </div>
  )
}

export default AdminPanel
