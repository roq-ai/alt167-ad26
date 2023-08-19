import * as yup from 'yup';

export const roleValidationSchema = yup.object().shape({
  role_name: yup.string().required(),
  role_description: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
