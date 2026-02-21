import Header from './components/layout/Header'
import MainRouter from './providers/routes/main-router'
import CartProvider from './providers/carts/cart-providers'

function App() {

  return (
    <CartProvider>
      <Header />
      <MainRouter />
  </CartProvider>
  )
}

export default App
