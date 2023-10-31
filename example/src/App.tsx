import { SlotWrapper } from 'react-slots';
import Test from './Test';

export default () => (
  <div>
    App
    <Test>
      <SlotWrapper name="slot1">
        <div>Slot 1</div>
      </SlotWrapper>
      <SlotWrapper name="slot2">
        <div>Slot 2</div>
      </SlotWrapper>
      <SlotWrapper name="slot3">
        <div>Slot 2</div>
      </SlotWrapper>
    </Test>
  </div>
);
