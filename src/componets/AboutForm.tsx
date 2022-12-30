import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export function AboutForm() {
  // Form Validation
  interface FormSubmit {
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    password: string;
    passwordConfirm: string;
    terms: boolean;
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    phone: Yup.number()
      .required("Please enter a valid phone number")
      .typeError("Please enter a valid phone number"),
    email: Yup.string()
      .required("An email address is required")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must not exceed 20 characters"),
    passwordConfirm: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    terms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const onSubmit = (data: FormSubmit) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSubmit>({
    resolver: yupResolver(validationSchema),
  });

  // Sign up Form
  return (
    <Container className="w-50 mb-4 mt-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Text>
          <h4>
            Sign up to recieve speical offers on our products, news about cereal
            and other stuff!
          </h4>
        </Form.Text>

        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            {...register("firstName")}
            className={`form-control ${
              errors.firstName != null ? "is-invalid" : ""
            }`}
            placeholder="First Name"
          />
          <Form.Text className="invalid-feedback">
            {errors.firstName?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            {...register("lastName")}
            className={`form-control ${
              errors.lastName != null ? "is-invalid" : ""
            }`}
            placeholder="Last Name"
          />
          <Form.Text className="invalid-feedback">
            {errors.lastName?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            {...register("phone")}
            className={`form-control ${
              errors.phone != null ? "is-invalid" : ""
            }`}
            placeholder="Phone Number"
          />
          <Form.Text className="invalid-feedback">
            {errors.phone?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            {...register("email")}
            className={`form-control ${
              errors.email != null ? "is-invalid" : ""
            }`}
            placeholder="Enter email"
          />
          <Form.Text className="invalid-feedback">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password")}
            className={`form-control ${
              errors.password != null ? "is-invalid" : ""
            }`}
            placeholder="Password"
          />
          <Form.Text className="invalid-feedback">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="passwordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            {...register("passwordConfirm")}
            className={`form-control ${
              errors.passwordConfirm != null ? "is-invalid" : ""
            }`}
            placeholder="Confirm Password"
          />
          <Form.Text className="invalid-feedback">
            {errors.passwordConfirm?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="form-check mt-2">
          <Form.Control
            id="check1"
            type="checkbox"
            {...register("terms")}
            className={`form-check-input ${
              errors.terms != null ? "is-invalid" : ""
            }`}
          />
          <Form.Label htmlFor="terms" className="form-check-label px-2">
            Please accept our terms and conditions
          </Form.Label>
          <Form.Text className="invalid-feedback">
            {errors.terms?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
