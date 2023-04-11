import joi from "joi";

const animalSchema = joi.object({
  _id: joi.string().required(),
  name: joi.string().required(),
  type: joi.string().required(),
  age: joi.number().required().min(0),
  location: joi.string().required(),
  gender: joi.string().required(),
  characteristics: joi
    .object()
    .keys({
      food: joi.array().required(),
      color: joi.string().required(),
      isDangerous: joi.boolean().required(),
      weight: joi.number().required(),
      enclosure: joi.string().required(),
    })
    .required(),
});

const animalValidator = (req, res, next) => {
  const animalData = req.body;
  const validate = animalSchema.validate(animalData);

  if (validate?.error) {
    res.status(400).send(validate?.error?.details?.[0]?.message);
  } else {
    next();
  }
};

export default animalValidator;
