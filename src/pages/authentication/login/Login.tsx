import AuthLayout from "../../../components/layouts/AuthLayout";
import {Card, Form} from "react-bootstrap";

const Login = () => {
  return (
    <AuthLayout>
      <div className="w-100 mb-3">
        <h2 className="text-center">JOB HACK</h2>
      </div>
      <Card className="card-width">
        <div className="container-fluid">
          <div className="row row-sm">
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                  <Form.Text className="text-danger">
                    Invalid Email
                  </Form.Text>
                </Form.Group>
              </Form>
            </Card.Body>
          </div>
        </div>
      </Card>
    </AuthLayout>
  )
}

export default Login;