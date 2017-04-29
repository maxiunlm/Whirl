/* global expect */

import Calculus from '../../../src/maths/calculus/Calculus';
import CommonFakes from '../../../Selenium/Fakes/commonFakes';


describe('Calculus - ', () => {
    let commonFakes = new CommonFakes();

    describe('toDegrees - ', () => {
        it('With a "Radian Angle" parameter returns a "Degree Angle" value', () => {
            let sut = new Calculus();

            let result = sut.toDegrees(commonFakes.flatAngleInRadians);

            expect(result).toEqual(commonFakes.flatAngleInDegrees);
        });
    });
});
