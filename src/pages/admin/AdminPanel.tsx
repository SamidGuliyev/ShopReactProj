import React, { /*useEffect, useRef,*/ useState } from 'react'
import './admin.css'
import AddProductForm from './AddProductForm'
import ProductTable from './ProductTable'
import Modal from '../../components/layout/Modal'

const AdminPanel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const adminRootRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log(adminRootRef.current ? adminRootRef.current.getBoundingClientRect() : null);
  // }, []);

  return (
    <div className="admin-root" /*ref={adminRootRef}*/>
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
            <button 
              className="btn primary" 
              onClick={() => setIsModalOpen(true)}
            >
              New Product
            </button>
          </div>
        </header>

        <section className="admin-body">
          <ProductTable />
        </section>

        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title="Add New Product"
          className="large-modal"
        >
          <AddProductForm />
        </Modal>
      </main>
    </div>
  )
}

export default AdminPanel
