import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout({children}) {
  return (
    <div className='kasa-layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}  
export default Layout;
