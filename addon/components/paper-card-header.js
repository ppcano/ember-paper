import Ember from 'ember';
import FlexMixin from '../mixins/flex-mixin';

export default Ember.Component.extend(FlexMixin, {
  tagName: 'md-card-header',
  classNames: ['paper-card-header']
});
