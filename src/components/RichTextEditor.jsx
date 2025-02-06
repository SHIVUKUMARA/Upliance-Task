import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const RichTextEditor = () => {
  const [text, setText] = useState(localStorage.getItem("richText") || "");

  const handleChange = (value) => {
    setText(value);
    localStorage.setItem("richText", value);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={11} lg={8}>
          <Card>
            <Card.Body>
              <h3 className="text-center mb-4">Rich Text Editor</h3>
              <ReactQuill value={text} onChange={handleChange} className="mb-4" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RichTextEditor;
