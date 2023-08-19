import * as yup from 'yup';

export const itTechnicianValidationSchema = yup.object().shape({
  position: yup.string().required(),
  hire_date: yup.date().required(),
  salary: yup.number().integer().required(),
  department: yup.string().required(),
  user_id: yup.string().nullable(),
});
