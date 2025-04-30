
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Props {
  children: React.ReactNode;
}
// eslint-disable-next-line react-refresh/only-export-components
const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen bg-primary flex flex-col">
      <Header className="sticky top-0 z-50"/>
      <main className='flex-1 flex flex-col w-full h-full'>
        <div className="flex-1 flex flex-col w-full h-full">
            {children}
        </div>
      </main>
      <Footer className="sticky bottom-0 z-50"/>
    </div>
  );
};
export default MainLayout;
