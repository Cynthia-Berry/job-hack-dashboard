import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Card, Form} from "react-bootstrap";
import {toast} from "react-toastify";
import {Loading} from "../../../utils/helpers/constants";
import TokenHelper from "../../../utils/helpers/tokenHelper";
import AuthService from "../../../utils/services/auth.service";
import AuthLayout from "../../../components/layouts/AuthLayout";
import ActionCreator from "../../../utils/helpers/actionCreator";
import EncryptHelper from "../../../utils/helpers/encryptHelper";
import {setLoggedInUser} from "../../../store/actions/auth.action";
import {useAppDispatch} from "../../../components/hooks/useAppDispatch";
import * as AuthConstants from "../../../store/constants/auth.constant";


const Login = () => {
  const dispatch = useAppDispatch(),navigate = useNavigate(), isLoggedIn = TokenHelper.checkIfLoggedIn();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = async() => {
    setLoading(true);
    const {data: responseData} = await AuthService.login({adminId, password});
    if (responseData.status !== Loading.SUCCESS) toast.error(responseData.message)
    else {
      const user = EncryptHelper.jwtDecode(responseData.token);
      dispatch(ActionCreator(AuthConstants.LOGIN_SUCCESS, user.userId));
      dispatch(ActionCreator(AuthConstants.SET_LOGGED_IN_USER, !isLoggedIn));
      await dispatch(setLoggedInUser(responseData.token, user));
      await navigate('/');
    }
    await setLoading(false);
  };


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
                <Form.Group className="mb-3" controlId="adminID">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your ID" onChange={event => setAdminId(event.target.value)}/>
                  <Form.Text className="text-danger">
                    Invalid Email
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="password" placeholder="*******" onChange={event => setPassword(event.target.value)}/>
                  <Form.Text className="text-danger">
                    Invalid Email
                  </Form.Text>
                </Form.Group>
              </Form>
              <Button onClick={handleLogin}>
                Login{loading && <>&nbsp;<i className="fa fa-spin fa-spinner"/> </>}
              </Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </AuthLayout>
  )
}

export default Login;