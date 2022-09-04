import React, { Fragment, useState } from "react";
import axios from "axios";
// Styles
import {
  GridDiv,
  Section,
  ContentWrapper,
  Title,
  Row,
  Col,
  FormOverlay,
  FormDiv,
  CenterDiv,
} from "../components/Div";
import { H1 } from "../components/H1";
import { PCenter, Span } from "../components/P";
import { Button } from "../components/Button";
import { Input } from "../components/FormItems/Input";
import { TextArea } from "../components/FormItems/Input";
import { FormGroup } from "../components/FormItems/FormGroup";
import { Form } from "../components/FormItems/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    isErrName: false,
    isErrEmail: false,
    isErrPhone: false,
    isErrMessage: false,
    isFormActive: true,
    isOverlayActive: false,
  });

  const {
    name,
    email,
    phone,
    message,
    isErrName,
    isErrEmail,
    isErrPhone,
    isErrMessage,
    isFormActive,
    isOverlayActive,
  } = formData;

  const [loading, setLoading] = useState({
    isLoading: true,
    isSuccess: null,
  });

  const { isLoading, isSuccess } = loading;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = (e) => {
    setLoading({ ...loading, isLoading: true, isSuccess: null });
    setFormData({
      ...formData,
      isFormActive: true,
      isOverlayActive: false,
      name: "",
      email: "",
      phone: "",
      message: "",
      isErrName: false,
      isErrEmail: false,
      isErrPhone: false,
      isErrMessage: false,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault(e);

    let isErrorName,
      isErrorEmail,
      isErrorPhone,
      isErrorMessage = false;
    let isError = false; // Check to see if any errors in the forms

    // Check for name
    if (!name) {
      isErrorName = true;
      isError = true;
    }
    // Check for valid email
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      isErrorEmail = true;
      isError = true;
    }

    // Check for either a black or a phone number
    if (phone) {
      if (
        !String(phone).match(
          /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/
        )
      ) {
        isErrorPhone = true;
        isError = true;
      }
    }

    // Check to see if message there is a message
    if (!message) {
      isErrorMessage = true;
      isError = true;
    }

    // If no errors, submit email
    if (!isError) {
      setFormData({
        ...formData,
        isFormActive: false,
        isOverlayActive: true,
      });
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post("https://formsubmit.co/ajax/eocebreiro@gmail.com", {
          email: email,
          name: name,
          message: message,
        })
        .then((response) => {
          setLoading({
            ...loading,
            isLoading: false,
            isSuccess: true,
          });
          console.log(response);
        })
        .catch((error) => {
          setLoading({
            ...loading,
            isLoading: false,
            isSuccess: false,
          });
          console.log(error);
        });
    } else {
      setFormData({
        ...formData,
        isErrName: isErrorName,
        isErrEmail: isErrorEmail,
        isErrPhone: isErrorPhone,
        isErrMessage: isErrorMessage,
      });
    }
  };
  return (
    <Section background="#edeff1" id="contact">
      <ContentWrapper style={{ height: "650px" }}>
        <Col>
          <Title>
            <H1 size="L">Contact</H1>
            <PCenter>
              Use the form below or email{" "}
              <Span color="primary" style={{ fontWeight: "700" }}>
                eocebreiro@gmail.com
              </Span>{" "}
              to contact me.
            </PCenter>
          </Title>

          <Form>
            <GridDiv>
              <FormDiv active={isFormActive}>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                    required
                    autoComplete="on"
                    NoValidate
                    error={isErrName}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                    autoComplete="on"
                    NoValidate
                    error={isErrEmail}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Phone number (optional)"
                    name="phone"
                    value={phone}
                    onChange={(e) => onChange(e)}
                    autoComplete="on"
                    NoValidate
                    error={isErrPhone}
                  />
                </FormGroup>
                <FormGroup>
                  <TextArea
                    type="text"
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => onChange(e)}
                    autoComplete="off"
                    NoValidate
                    error={isErrMessage}
                    rows="7"
                  />
                </FormGroup>
                <Input
                  type="submit"
                  onClick={(e) => onSubmit(e)}
                  display="none"
                />
                <Button
                  type="submit"
                  onClick={(e) => onSubmit(e)}
                  width="100%"
                  color="primary"
                >
                  Send Message!
                </Button>
              </FormDiv>
              <FormOverlay active={isOverlayActive}>
                {isLoading ? (
                  <FontAwesomeIcon icon={faSpinner} pulse size="6x" />
                ) : isSuccess ? (
                  <Fragment>
                    <PCenter style={{ fontWeight: "700" }}>
                      Email sent sucessfully!
                    </PCenter>
                    <Button
                      type="submit"
                      onClick={(e) => resetForm(e)}
                      color="primary"
                    >
                      Send Another Email
                    </Button>
                  </Fragment>
                ) : (
                  <Fragment>
                    <PCenter style={{ fontWeight: "700" }}>
                      Opps, something went wrong.
                    </PCenter>
                    <Button type="submit" onClick={(e) => resetForm(e)}>
                      Try Again
                    </Button>
                  </Fragment>
                )}
              </FormOverlay>
            </GridDiv>
          </Form>
        </Col>
      </ContentWrapper>
    </Section>
  );
};
