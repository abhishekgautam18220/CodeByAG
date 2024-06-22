import Hero from '@/components/hero'
import { FaHome } from 'react-icons/fa';
import { FloatingNav } from '@/components/ui/FloatingNav';
import Grid from '@/components/grid';
import RecentProjects from '@/components/recentProjects';
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-content-center item-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl-w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome/>}
        ]}
        />
        <Hero/>
        <Grid/>
        <RecentProjects/>
      </div>
    </main>
  );
}
