import { JSXElementConstructor, ReactElement, ReactNode, useMemo } from 'react';
import { SlotWrapper } from '../components';
import { Slots } from '../models';

type SlotChild = ReactElement<
  {
    children: JSX.Element;
    name: string;
  },
  JSXElementConstructor<{
    name: string;
  }>
>;

export const useSlots = (children?: ReactNode) =>
  useMemo(() => {
    const registerSlot: Slots = {};

    const register = (child: ReactNode) => {
      if (
        child &&
        typeof child === 'object' &&
        'props' in child &&
        'type' in child
      ) {
        const {
          props: { children: slotChildren, name: slotName },
          type: { name },
        } = child as SlotChild;
        if (name === SlotWrapper.name && slotChildren && slotName) {
          registerSlot[slotName] = {
            element: slotChildren,
          };
        }
      }
    };

    if (children) {
      if (Array.isArray(children)) {
        children.forEach(register);
      } else {
        register(children);
      }
    }
    return registerSlot;
  }, [children]);
