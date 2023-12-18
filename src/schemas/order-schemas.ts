import joi from 'joi';

export const createOrderSchema = joi.object({
  customer: joi.string().required(),
  total: joi.number().required(),
  products: joi.array().required()
});