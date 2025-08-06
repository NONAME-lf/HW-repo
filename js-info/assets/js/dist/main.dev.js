"use strict";

var ladder = {
  step: 0,
  up: function up() {
    this.step++;
    return this;
  },
  down: function down() {
    this.step--;
    return this;
  },
  showStep: function showStep() {
    // shows the current step
    alert(this.step);
    return this;
  }
};
ladder.up().up().down().showStep().down().showStep();