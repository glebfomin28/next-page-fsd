import { Header } from '@/widgets/header';

export const AppLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
