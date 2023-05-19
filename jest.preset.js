const nxPreset = require('@nx/jest/preset').default;

nxPreset.collectCoverage = true;
nxPreset.coverageThreshold = {
  global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: -10,
    }
}
module.exports = { ...nxPreset };
