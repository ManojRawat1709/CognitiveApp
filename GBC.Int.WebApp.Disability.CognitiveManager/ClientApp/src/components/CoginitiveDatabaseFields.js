import React from 'react'
import { Form } from 'react-bootstrap';

const CoginitiveDatabaseFields = (props) => {
    console.log(props);
    const { formik } = props;
    return (
        <Form>
            <Form.Group controlId="DatabaseName">
                <Form.Label>Database Name</Form.Label>
                <Form.Control type="input" placeholder="Database Name" value={formik.values.DatabaseName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.errors.DatabaseName && formik.touched.DatabaseName && <Form.Text className="text-muted"> {formik.errors.DatabaseName} </Form.Text>}
            </Form.Group>
            <div className="form-group row">
                <label htmlFor="DatabaseName" className="form-field">Database Name</label>
                <input type="input" id="DatabaseName" name="DatabaseName" className="form-control"
                    value={formik.values.DatabaseName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.errors.DatabaseName && formik.touched.DatabaseName && <div className="col-sm-10 err">  {formik.errors.DatabaseName} </div>}
            </div>
            <Form.Group controlId="ServerName">
                <Form.Label>Server Name</Form.Label>
                <Form.Control type="input" placeholder="Server Name" value={formik.values.ServerName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.errors.ServerName && formik.touched.ServerName && <Form.Text className="text-muted"> {formik.errors.ServerName} </Form.Text>}
            </Form.Group>
            <div className="form-group row">
                <label htmlFor="ServerName" className="form-field">Server Name</label>
                <input type="input" id="ServerName" name="ServerName" className="form-control"
                    value={formik.values.ServerName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.errors.ServerName && formik.touched.ServerName && <div className="col-sm-10 err"> {formik.errors.ServerName} </div>}
            </div>
            <Form.Group controlId="MethodName">
                <Form.Label>Method Name</Form.Label>
                <Form.Control type="input" placeholder="MethodName" value={formik.values.MethodName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.errors.MethodName && formik.touched.MethodName && <Form.Text className="text-muted"> {formik.errors.MethodName} </Form.Text>}
            </Form.Group>
            <div className="form-group row">
                <label htmlFor="MethodName" className="form-field">Method Name</label>
                <input type="input" id="MethodName" name="MethodName" className="form-control"
                    value={formik.values.MethodName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                {formik.errors.MethodName && formik.touched.MethodName && <div className="col-sm-10 err"> {formik.errors.MethodName} </div>}
            </div>
        </Form>
    );
}
export default CoginitiveDatabaseFields