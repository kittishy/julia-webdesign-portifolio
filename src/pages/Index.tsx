import Moon from '@/components/Moon';
import DecorativeElements from '@/components/DecorativeElements';
import MidAutumnText from '@/components/MidAutumnText';
import { cn } from '@/lib/utils';
import MainLayout from '@/layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <main className={cn("flex justify-center items-center bg-primary min-h-screen relative overflow-hidden")}>
        <div className='absolute inset-0 flex items-center justify-center flex-col'>
          <MidAutumnText />
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
        <DecorativeElements/>
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <Moon />
        </div>
      </main>
    </MainLayout>
  );
};

export default HomePage;
