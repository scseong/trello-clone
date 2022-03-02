import { atom, selector } from 'recoil';

export const toDoState = atom({
  key: 'toDo',
  default: ['a', 'b', 'c', 'd'],
});

export const d = selector({
  key: 'z',
  get: ({ get }) => {
    const toDos = get(toDoState);
  },
});
