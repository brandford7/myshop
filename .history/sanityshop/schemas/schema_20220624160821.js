
import createSchema from 'part:@sanity/base/schema-creator'
import product from "./product"
import banner from "./banner"

import schemaTypes from 'all:part:@sanity/base/schema-type'


export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
  ]),
})
