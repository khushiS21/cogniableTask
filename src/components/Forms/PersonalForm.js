import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  height: Yup.number().required('feild cannot be empty'),
  weight: Yup.number().required('feild cannot be empty')
});
const PersonalForm = () => {
  return (
    <div className="personal-form-container">
      <Formik
        initialValues={{
          allergicTo: '',
          height: '',
          weight: '',
          ssn: '',
          language: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {}}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit} className="row">
            <h5>Edit personal information</h5>
            <div className="mb-2 mt-2 col-12">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="allergicTo" className="form-label">
                    Allergic To
                  </label>
                </div>
              </div>
              <input
                type="text"
                name="allergicTo"
                onChange={handleChange}
                value={values.allergicTo}
                className="form-control input-field"
                placeholder="Placeholder"
                onBlur={handleBlur}
              />
              {errors.allergicTo && touched.allergicTo && (
                <div className="error">{errors.allergicTo}</div>
              )}
            </div>
            <div className="mb-2 mt-2 col-12">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="height" className="form-label">
                    Height in inch*
                  </label>
                </div>
              </div>
              <input
                type="number"
                name="height"
                onChange={handleChange}
                value={values.height}
                className="form-control  input-field"
                onBlur={handleBlur}
                placeholder="Placeholder"
              />
              {errors.height && touched.height && <div className="error">{errors.height}</div>}
            </div>
            <div className="mb-2 mt-2 col-12">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="weight" className="form-label">
                    Weight in inch*
                  </label>
                </div>
              </div>
              <input
                type="number"
                name="weight"
                onChange={handleChange}
                value={values.weight}
                className="form-control  input-field"
                placeholder="Placeholder"
                onBlur={handleBlur}
              />
              {errors.weight && touched.weight && <div className="error">{errors.weight}</div>}
            </div>
            <div className="mb-2 mt-2 col-12">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="ssn" className="form-label">
                    SSN
                  </label>
                </div>
              </div>
              <input
                type="number"
                name="ssn"
                onChange={handleChange}
                value={values.ssn}
                className="form-control input-field"
                onBlur={handleBlur}
                placeholder="Placeholder"
              />
              {errors.ssn && touched.ssn && <div className="error">{errors.ssn}</div>}
            </div>
            <div className="mb-2 mt-2 col-lg-12">
              <label htmlFor="language" className="form-label">
                City
              </label>
              <select
                className="form-select"
                name="city"
                value={values.language}
                placeholder="Placeholder"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled={true}>Select Language</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
              </select>
            </div>
            <div className="mb-2 mt-2 col-12 submit">
              <div>close</div>
              <button type="submit" disabled={isSubmitting}>
                Save and Update
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalForm;
