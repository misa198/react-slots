import { Slot, useSlots } from '@misa198/react-slots';
import { PropsWithChildren } from 'react';

export default ({ children }: PropsWithChildren) => {
  const slots = useSlots(children);

  return (
    <div className="w-screen h-screen text-white flex flex-col bg-slate-900">
      <div className="w-full h-[90px] border-b border-slate-700">
        <Slot {...slots.header} />
      </div>
      <div className="w-full flex flex-1 border-b border-slate-700">
        <div className="w-[300px] h-full border-r border-slate-700">
          <Slot {...slots.sidebar} />
        </div>
        <div className="flex-1 h-full">
          <Slot {...slots.main} />
        </div>
      </div>
      <div className="w-full h-[90px]">
        <Slot {...slots.footer} />
      </div>
    </div>
  );
};
