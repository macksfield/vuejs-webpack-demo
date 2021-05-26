export var store = {
  debug: true,
  state: {
    message: 'Hello!',
    selectedMilestone: 0,
    selectedTopic: -1,
    selectedTopicObject: {},
    selectedAudience: -1,
    selectedAudienceObject: {},
    faqAnd: false
  },
  setAction (prop, newValue) {
    if (this.debug) console.log('setAction triggered with', prop, newValue)
    this.state[prop] = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}
