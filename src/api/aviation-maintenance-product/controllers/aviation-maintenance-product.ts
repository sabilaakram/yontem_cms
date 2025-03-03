/**
 * aviation-maintenance-product controller
 */

"use strict";
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::aviation-maintenance-product.aviation-maintenance-product",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db
        .query("api::aviation-maintenance-product.aviation-maintenance-product")
        .findOne({
          where: { slug: id },
          populate: {
            product_main_image: {
              fields: ["alternativeText", "name", "url"],
            },
            product_extra_images: {
              fields: ["alternativeText", "name", "url"],
            },
            product_header_image: {
              fields: ["alternativeText", "name", "url"],
            },
          },
        });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
