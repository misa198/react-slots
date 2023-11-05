import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Layout from '@/components/Layout';
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';
import { SlotWrapper } from '@misa198/react-slots';

export default () => (
  <Layout>
    <SlotWrapper name="header">
      <Header />
    </SlotWrapper>
    <SlotWrapper name="main">
      <Main />
    </SlotWrapper>
    <SlotWrapper name="sidebar">
      <Sidebar />
    </SlotWrapper>
    <SlotWrapper name="footer">
      <Footer />
    </SlotWrapper>
  </Layout>
);
