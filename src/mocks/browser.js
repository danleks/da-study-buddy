import { setupWorker } from 'msw';
import { db } from './db';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

const seed = () => {
  db.group.create({
    id: 'A',
  });
  db.group.create({
    id: 'B',
  });
  db.group.create({
    id: 'C',
  });

  for (let i = 0; i < 15; i++) {
    db.student.create();
  }
};

seed();
