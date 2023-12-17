import { faker } from '@faker-js/faker';

export class DataGenerator {
  public static todoGenerator() {
    return {
      id: faker.string.uuid(),
      text: faker.lorem.sentence({ min: 3, max: 5 }),
      completed: false,
    };
  }
}
