import { Ancient } from '../ts/lib/ancients';
import 'mocha';
import { expect } from 'chai';

describe('Ancients', () => {

  it('Leveling Fortuna to 10 should cost 2046 souls', () => {
    const ac : Ancient = new Ancient(12);
    const cost = ac.getCostUpToLevel(10);
    expect(cost.toString()).to.equal("2046");
  });
  it('Leveling Kuma to 55 should cost 72057594037927934 souls', () => {
    const ac : Ancient = new Ancient(21);
    const cost = ac.getCostUpToLevel(55);
    expect(cost.toString()).to.equal("72057594037927934");
  });
  it('Leveling Kuma from 2 to 13 should cost 16376 souls', () => {
    const ac : Ancient = new Ancient(21);
    const cost = ac.getCostUpToLevel(13, 2);
    expect(cost.toString()).to.equal("16376");
  });
  it("Atman effect at level 65 should be 42.78319813419456", () => {
    const ac : Ancient = new Ancient(13);
    const effect = ac.getBonusAmountForLevel(65);
    expect(effect.toString()).to.equal("42.78319813419456");
  });

});