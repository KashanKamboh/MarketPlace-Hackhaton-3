import { type SchemaTypeDefinition } from 'sanity'
import { product } from './productSchema'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,order],
}
