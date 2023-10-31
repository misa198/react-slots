import { cloneElement } from 'react';
import { SlotBody } from '../models';

export function Slot({ element }: SlotBody) {
  if (!element) {
    return null;
  }
  return cloneElement(element);
}
