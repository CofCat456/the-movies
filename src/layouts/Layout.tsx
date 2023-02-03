import { Montserrat } from '@next/font/google';

interface Props {
  children: React.ReactNode;
}

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const Layout: React.FC<Props> = ({ children }) => {
  return <main className={`${montserrat.className} mx-32 my-12`}>{children}</main>;
};

export default Layout;
