
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  children: React.ReactNode;
}
// eslint-disable-next-line react-refresh/only-export-components
const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen bg-primary">
      <Header />
      <main className='w-full h-full'>
        <div className="w-full h-full">
            {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
