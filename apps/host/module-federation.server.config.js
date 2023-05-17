// @ts-check

/**
 * @type {import('@nx/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'host',
  remotes: ['dashboard', 'duties'],
};

module.exports = moduleFederationConfig;
