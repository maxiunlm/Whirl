/* global expect */

import CommonFakes from '../../../Selenium/Fakes/commonFakes';
import EllipsePath from '../../../src/maths/paths/EllipsePath';

describe('EllipsePath', () => {
    let commonFakes = new CommonFakes();

    describe('CONSTRUCTOR', () => {
        it('Initializes the Object', () => {

            let sut = new EllipsePath(commonFakes.dimensions, {
                "width": commonFakes.userSpaceShipWidth,
                "height": commonFakes.userSpaceShipHeight
            });

            expect(sut.centerX).toEqual(Math.floor((commonFakes.gameWidth - commonFakes.userSpaceShipWidth) / commonFakes.ellipsePathHalfDivider));
            expect(sut.centerY).toEqual(Math.floor((commonFakes.gameHeight - commonFakes.userSpaceShipHeight) / commonFakes.ellipsePathHalfDivider));
            expect(sut.deltaA).toEqual(commonFakes.ellipsePathDeltaA);
            expect(sut.deltaB).toEqual(commonFakes.ellipsePathDeltaB);
            expect(sut.radius).toEqual(commonFakes.gameHeight * commonFakes.ellipsePathRadiusPercentage);
            expect(sut.angle).toEqual(commonFakes.ellipsePathInitialAngle);
            expect(sut.deltaAngle).toEqual(commonFakes.ellipsePathDeltaAngle);
        });
    });
});
