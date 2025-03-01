/**
 * pages-metadata controller
 */

"use strict";
import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::pages-metadata.pages-metadata', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db
        .query('api::pages-metadata.pages-metadata')
        .findOne({
          where: { slug: id }
        });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  }));
