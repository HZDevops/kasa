import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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
