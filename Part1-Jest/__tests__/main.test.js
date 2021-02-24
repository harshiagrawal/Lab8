const {formatVolumeIconPath} = require('../assets/scripts/main');

describe('has icon level', () => {
    test(" 3 when volume > 66", () => {
        expect(formatVolumeIconPath(67)).toMatch("3");
    });
    
    test(" 2 when 33 < volume < 67", () => {
        expect(formatVolumeIconPath(50)).toMatch("2");
    });
    
    test(" 1 when 0 < volume < 34", () => {
        expect(formatVolumeIconPath(5)).toMatch("1");
    });
    
    test(" 0 when volume < 0", () => {
        expect(formatVolumeIconPath(-2)).toMatch("0");
    });
});
