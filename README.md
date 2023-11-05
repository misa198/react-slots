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

<a href="https://stackblitz.com/edit/react-slots-misa198?file=README.md">
<img src="https://raw.githubusercontent.com/misa198/react-slots/master/docs/stackblitz.png?token=GHSAT0AAAAAACII7MLHIZZWZOOOS6NS733CZKBF5XA" width="200">
</a>

<br />

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
      <div>Slot 1</div>
    </SlotWrapper>
    <SlotWrapper name="slot2">
      <div>Slot 2</div>
    </SlotWrapper>
    <SlotWrapper name="slot3">
      <div>Slot 3</div>
    </SlotWrapper>
  </Parent>
);

```

### Server Side Rendering

`SlotWrapper` components must be children of the component when rendered. With the above example:

- If `App.tsx` is the server side component and `Parent.tsx` is the client side component, the `Slot` components will not be rendered.

- If both `App.tsx` and `Parent.tsx` are server side components or client side components, the `Slot` components will be rendered.
