'use strict';

/**
 * versionning service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::versionning.versionning');
