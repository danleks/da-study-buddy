import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

faker.seed(123);

const groups = ['A', 'B', 'C'];

const getRandomAverage = () => faker.datatype.number({ min: 2, max: 5, precision: 0.1 });
const getRandomGroup = (index) => groups[index];

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => faker.datatype.number({ min: 0, max: 100 }),
    average: getRandomAverage,
    group: () => getRandomGroup(faker.datatype.number({ min: 0, max: 2 })),
    course: () => faker.fake('{{random.word}} {{random.word}}'),
    grades: () => [
      {
        title: 'Modern Economy',
        average: getRandomAverage(),
      },
      {
        title: 'Trade and Logistics',
        average: getRandomAverage(),
      },
      {
        title: 'Business Philosophy',
        average: getRandomAverage(),
      },
    ],
  },
  group: {
    id: primaryKey(String),
  },
});
