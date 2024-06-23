const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 400;
    const message = "Please check your Input Field";
    const extraMessage = err.errors[0].message;
    console.log("Extramsg: ", extraMessage);

    const error = {
      status,
      message,
      extraMessage,
    };

    console.log(error);

    next(error);
  }
};

module.exports = validate;
