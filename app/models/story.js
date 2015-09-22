import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  photo: DS.attr(),
  body: DS.attr(),
  author: DS.attr()
});
