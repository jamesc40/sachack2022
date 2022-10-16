import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function Signup() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = document.querySelector("#signup-form");
    let data = new FormData(form);

    let req = await fetch("/users", {
      method: "POST",
      body: data,
    });

    if (req.ok) {
      console.log(await req.json());
    }

    form.reset();
  };

  return (
    <Form id="signup-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control name="firstName" type="text" placeholder="..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control name="lastName" type="text" placeholder="..." />
      </Form.Group>
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
