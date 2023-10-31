import { SlotWrapper } from '@misa198/react-slots';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

export default () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);

  return (
    <Layout>
      <SlotWrapper name="header">
        <Header />
      </SlotWrapper>
      <SlotWrapper name="main">
        <div className="w-full h-full flex flex-1 items-center justify-center space-x-8">
          <button
            className="rounded-md px-6 py-4 font-bold border border-slate-700"
            onClick={onDecrement}
          >
            <i className="fa-solid fa-minus" />
          </button>
          <h3 className="text-xl font-bold">{count}</h3>
          <button
            className="rounded-md px-6 py-4 font-bold border border-slate-700"
            onClick={onIncrement}
          >
            <i className="fa-solid fa-plus" />
          </button>
        </div>
      </SlotWrapper>
      <SlotWrapper name="sidebar">
        <Sidebar />
      </SlotWrapper>
      <SlotWrapper name="footer">
        <Footer />
      </SlotWrapper>
    </Layout>
  );
};
