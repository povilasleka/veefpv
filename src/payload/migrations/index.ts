import * as migration_20260710_212504_initial_schema from './20260710_212504_initial_schema';
import * as migration_20260710_215014_add_hero_global from './20260710_215014_add_hero_global';

export const migrations = [
  {
    up: migration_20260710_212504_initial_schema.up,
    down: migration_20260710_212504_initial_schema.down,
    name: '20260710_212504_initial_schema',
  },
  {
    up: migration_20260710_215014_add_hero_global.up,
    down: migration_20260710_215014_add_hero_global.down,
    name: '20260710_215014_add_hero_global'
  },
];
