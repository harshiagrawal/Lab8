describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => expect($el).to.have.value(75));
  });

  it('Number changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get("#volume-number").then($el => expect($el).to.have.value(33));
  });

  it('Audio volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get("#horn-sound").then($el => expect($el).to.have.prop('volume', 0.33));
  });

  it('Image source changes when party horn button is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then($el => expect($el).to.have.attr('src', './assets/media/images/party-horn.svg'));
  });

  it('Audio source changes when party horn button is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then($el => expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3'));
  });

  it('Volume image changes when volume is set: 0', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then($el => expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg'));
  });

  it('Volume image changes when volume is set: 1', () => {
    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image').then($el => expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg'));
  });

  it('Volume image changes when volume is set: 2', () => {
    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image').then($el => expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg'));
  });

  it('Volume image changes when volume is set: 3', () => {
    cy.get('#volume-number').clear().type('100');
    cy.get('#volume-image').then($el => expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg'));
  });

  it('Honk button disabled when textbox is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => expect($el).to.have.prop('disabled', true));
  });

  it('Honk button disabled when textbox is nonnumber', () => {
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then(($el) => expect($el).to.have.prop('disabled', true));
  });

  it('Error shown when volume is out of range', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number:invalid').then(($el) => expect($el).to.exist);

    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number:invalid').then(($el) => expect($el).to.exist);
  });
});
