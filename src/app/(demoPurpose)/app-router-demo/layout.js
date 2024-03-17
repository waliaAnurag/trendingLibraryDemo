import Header from '../../../component/header/index';
import Footer from '../../../component/footer';
import mainLayoutStyles from '../../../styles/mainLayoutStyles.module.css'
export default function MainLayout({ children }) {
  return (
    <div className={mainLayoutStyles.containerStyles}>
      <div className="flex-grow">
        <Header />
        <main className="my-0 py-16">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
