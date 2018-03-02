---
inject: true
to: src/components/stories.js
skip_if: /<%= h.inflection.camelize(name, true) %>.story
append: true
---
import './<%= h.inflection.camelize(name, true) %>/<%= h.inflection.camelize(name, true) %>.story'