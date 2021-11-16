import { Formik } from 'formik';
import { useDropzone } from 'react-dropzone';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email'),
  number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  birthdate: Yup.date('invalid date'),
  zip: Yup.string().min(5, 'Too short').max(5, 'Max 5 digits')
});
const GeneralForm = () => {
  const navigate = useNavigate();
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, .pdf'
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div className="general-form-container">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          clientId: '',
          email: '',
          number: '',
          birthdate: '',
          gender: '',
          streetAddress: '',
          city: '',
          state: '',
          country: '',
          zip: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          navigate('/forms/personal');
        }}
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
            <h5>Edit basic information</h5>
            <div {...getRootProps({ className: 'drop-style' })}>
              <input {...getInputProps()} />
              <p className="heading">Drag and drop to upload logo</p>
              <p>.jpeg .png .pdf etc</p>
              <aside>
                <ul className="accepted">{acceptedFileItems}</ul>
                <ul className="rejected">{fileRejectionItems}</ul>
              </aside>
            </div>
            <div className="mb-2 mt-2 col-6">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    First Name*
                  </label>
                </div>
              </div>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                className="form-control input-field"
                placeholder="Placeholder"
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName && (
                <div className="error">{errors.firstName}</div>
              )}
            </div>
            <div className="mb-2 mt-2 col-6">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="name" className="form-label">
                    Last Name
                  </label>
                </div>
              </div>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                className="form-control  input-field"
                onBlur={handleBlur}
                placeholder="Placeholder"
              />
            </div>
            <div className="mb-2 mt-2 col-6">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="clientId" className="form-label">
                    Client ID
                  </label>
                </div>
              </div>
              <input
                type="text"
                name="clientId"
                onChange={handleChange}
                value={values.clientId}
                className="form-control  input-field"
                placeholder="Placeholder"
                onBlur={handleBlur}
              />
            </div>
            <div className="mb-2 mt-2 col-6">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                </div>
              </div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                className="form-control input-field"
                onBlur={handleBlur}
                placeholder="Placeholder"
              />
              {errors.email && touched.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="mb-2 mt-2 col-6">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="number" className="form-label">
                    Cell no
                  </label>
                </div>
              </div>
              <input
                type="tel"
                name="number"
                onChange={handleChange}
                value={values.number}
                className="form-control input-field"
                placeholder="Placeholder"
                onBlur={handleBlur}
              />
              {errors.number && touched.number && <div className="error">{errors.number}</div>}
            </div>
            <div className="mb-2 mt-2 col-6">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="birthdate" className="form-label">
                    Date of birth
                  </label>
                </div>
              </div>
              <input
                type="date"
                name="birthdate"
                onChange={handleChange}
                value={values.birthdate}
                className="form-control input-field"
                placeholder="Placeholder"
                onBlur={handleBlur}
              />
            </div>
            <div className="mb-2 mt-2 row">
              <label className="form-check-label col-2">Gender</label>
              <div className="col-10 row" role="group">
                <div className="form-check col">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={values.gender}
                    placeholder="Placeholder"
                    onChange={e => {
                      setFieldValue('gender', 'male');
                    }}
                    onBlur={e => {
                      setFieldValue('gender', e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check col">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={values.gender}
                    placeholder="Placeholder"
                    onChange={e => {
                      setFieldValue('gender', 'female');
                    }}
                    onBlur={e => {
                      setFieldValue('gender', e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Female
                  </label>
                </div>
                <div className="form-check col">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value={values.gender}
                    placeholder="Placeholder"
                    onChange={e => {
                      setFieldValue('gender', 'other');
                    }}
                    onBlur={e => {
                      setFieldValue('gender', e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <h5>Add Location</h5>
            <div className="mb-2 mt-2 col-6">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="streetAddress" className="form-label">
                    Street Address
                  </label>
                </div>
              </div>
              <input
                type="text"
                name="streetAddress"
                onChange={handleChange}
                value={values.streetAddress}
                className="form-control input-field"
                placeholder="Placeholder"
                onBlur={handleBlur}
              />
              {errors.streetAddress && touched.streetAddress && (
                <div className="error">{errors.streetAddress}</div>
              )}
            </div>
            <div className="mb-2 mt-2 col-lg-6">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <select
                className="form-select"
                name="city"
                value={values.city}
                placeholder="Placeholder"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled={true}>Select City</option>
                <option value="munbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="goa">Goa</option>
                <option value="ambala">Ambala</option>
              </select>
              {errors.city && touched.city && <div className="error">{errors.city}</div>}
            </div>
            <div className="mb-2 mt-2 col-lg-6">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <select
                className="form-select"
                name="state"
                value={values.state}
                placeholder="Placeholder"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled={true}>Select state</option>
                <option value="haryana">Haryana</option>
                <option value="maharashtra">Maharashtra</option>
              </select>
              {errors.state && touched.state && <div className="error">{errors.state}</div>}
            </div>
            <div className="mb-2 mt-2 col-lg-6">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <select
                className="form-select"
                name="country"
                value={values.country}
                placeholder="Placeholder"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option disabled={true}>Select Country</option>
                <option value="india">India</option>
                <option value="america">America</option>
              </select>
              {errors.country && touched.country && <div className="error">{errors.country}</div>}
            </div>
            <div className="mb-2 mt-2 col-6">
              <div className="row align-items-center">
                <div className="col">
                  <label htmlFor="zip" className="form-label">
                    zip code
                  </label>
                </div>
              </div>
              <input
                type="number"
                name="zip"
                onChange={handleChange}
                value={values.zip}
                className="form-control input-field"
                placeholder="Placeholder"
                onBlur={handleBlur}
              />
              {errors.zip && touched.zip && <div className="error">{errors.zip}</div>}
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

export default GeneralForm;
