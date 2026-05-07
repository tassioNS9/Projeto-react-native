import { atom } from 'jotai';

const items = atom([]);

const completedItems = atom([]);

const atoms = {
  items,
  completedItems,
};

export default atoms;
