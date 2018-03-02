---
to: src/components/<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.story.js
---

import React from 'react'
import { storiesOf } from '@storybook/react'
import <%= h.inflection.camelize(name) %> from './<%= h.inflection.camelize(name, true) %>'

storiesOf('<%= h.inflection.camelize(name) %>', module)
  .add('renders', () => (
    <<%= h.inflection.camelize(name) %> />
  ))
