import * as yup from 'yup';

export const tweetValidationSchema = yup.object().shape({
  content: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
