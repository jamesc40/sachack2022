import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = document.querySelector("#login-form");
    let data = new FormData(form);

    for (var pair of data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  return (
    <Form id="login-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
