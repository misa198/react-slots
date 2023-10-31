# react-slots

- A simple react component that uses slots to render children

![](https://img.shields.io/badge/Author-misa198-green)
![](https://camo.githubusercontent.com/832d01092b0e822178475741271b049a2e27df13/68747470733a2f2f62616467656e2e6e65742f62616467652f2d2f547970655363726970742f626c75653f69636f6e3d74797065736372697074266c6162656c)
[![](https://img.shields.io/npm/dt/@misa198/react-slots)](https://www.npmjs.com/package/@misa198/react-slots)

# Installation

```bash
# npm
npm i @misa198/react-slots

# yarn
yarn add @misa198/react-slots
```

# Usage

```ts
// Parent.tsx

import { Slot, useSlots } from '@misa198/react-slots';
import { PropsWithChildren } from 'react';

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

```

```ts
// App.tsx

import { SlotWrapper } from '@misa198/react-slots';
import { useState } from 'react';

export default () => (
  <Parent>
    <SlotWrapper name="slot1">
      Slot 1
    </SlotWrapper>
    <SlotWrapper name="slot2">
      Slot 2
    </SlotWrapper>
    <SlotWrapper name="slot3">
      Slot 3
    </SlotWrapper>
  </Parent>
);

```
