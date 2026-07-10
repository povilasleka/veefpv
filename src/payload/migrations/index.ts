import * as migration_20260710_212504_initial_schema from './20260710_212504_initial_schema';
import * as migration_20260710_215014_add_hero_global from './20260710_215014_add_hero_global';
import * as migration_20260710_225103_add_media_prefix_field from './20260710_225103_add_media_prefix_field';
import * as migration_20260710_225712_remove_media_prefix_field from './20260710_225712_remove_media_prefix_field';

export const migrations = [
  {
    up: migration_20260710_212504_initial_schema.up,
    down: migration_20260710_212504_initial_schema.down,
    name: '20260710_212504_initial_schema',
  },
  {
    up: migration_20260710_215014_add_hero_global.up,
    down: migration_20260710_215014_add_hero_global.down,
    name: '20260710_215014_add_hero_global',
  },
  {
    up: migration_20260710_225103_add_media_prefix_field.up,
    down: migration_20260710_225103_add_media_prefix_field.down,
    name: '20260710_225103_add_media_prefix_field',
  },
  {
    up: migration_20260710_225712_remove_media_prefix_field.up,
    down: migration_20260710_225712_remove_media_prefix_field.down,
    name: '20260710_225712_remove_media_prefix_field'
  },
];
