import { PropsWithChildren } from 'react';
import { Slot, useSlots } from 'react-slots';

export default ({ children }: PropsWithChildren) => {
  const slots = useSlots(children);

  return (
    <div>
      <Slot {...slots.slot1} />
      <Slot {...slots.slot2} />
      <Slot {...slots.slot3} />
    </div>
  );
};
