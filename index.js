module.exports = {
  name: 'ember-validations-cli',
  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/dist/ember-validations-cli.js');
  }
};
