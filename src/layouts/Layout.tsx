import { Montserrat } from '@next/font/google';

interface Props {
  children: React.ReactNode;
}

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const Layout: React.FC<Props> = ({ children }) => {
  return <main className={`${montserrat.className} xl:m-32 md:m-16 m-8`}>{children}</main>;
};

export default Layout;
