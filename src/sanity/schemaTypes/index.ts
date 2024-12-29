import { type SchemaTypeDefinition } from 'sanity';
import { comment } from './comment'; // Adjust path if needed
// import { blog } from ''; // Assuming you have a blog schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ comment], // Add all your schemas here
};
