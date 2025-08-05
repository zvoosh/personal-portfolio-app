import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { IoLocationSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "antd/dist/reset.css";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
  [key: string]: unknown;
}

const ContactPage = () => {
  const [submitForm] = useForm();

  const onFinish = (values: IForm) => {
    emailjs
      .send("service_h9py1vp", "template_yev6wql", values, "AoqdNMr_Mrg_Hzm_T")
      .then(
        (result) => {
          submitForm.resetFields();
          toast.success("Email sent successfully!");
        },
        () => {
          toast.error("Failed to send email.");
        }
      );
  };
  return (
    <>
      {/* Simple ContactPage component with the function of sending email messages */}
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-100 h-100 flex justify-center">
        <div>
          <Row gutter={16} className="w-100 h-100 text-white">
            <Col>
              <div className="m-1">
                <h1 className="contact-heading">
                  Contact me and let's build amazing things thogether
                </h1>
                <div className="font-11">
                  <div>
                    <IoLocationSharp className="red mr-05" />
                    Belgrade
                  </div>
                  <div className="pt-1">
                    <p className="">Belgrade, BG 11000</p>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/dusan-ilic-0997b4166/"
                        target="_blank"
                        className="white font-w-normal"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.github.com/zvoosh"
                        target="_blank"
                        className="white font-w-normal"
                      >
                        Github
                      </a>
                    </div>
                    <p className="pb-1">+381603311553</p>
                    <p className="pb-1">dusan.ilic1999@gmail.com</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="w-100 flex justify-center height-fit">
              <div className="form-wrapper">
                <div className="fill-form-title">
                  <p>Fill the form below</p>
                  <p>and send me an email message</p>
                </div>
                <Form
                  name="basic"
                  className="w-75"
                  layout="vertical"
                  form={submitForm}
                  onFinish={onFinish}
                >
                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        labelAlign="left"
                        label={
                          <span className="text-white font-12 white">
                            First name
                          </span>
                        }
                        className="w-100"
                        name={"firstName"}
                        rules={[
                          {
                            required: true,
                            message: "Please input first name!",
                          },
                        ]}
                      >
                        <Input className="w-100" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label={
                          <span className="text-white font-12 white">
                            Last name
                          </span>
                        }
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: "Please input last name!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        labelAlign="left"
                        label={
                          <span className="text-white font-12 white">
                            Email
                          </span>
                        }
                        className="text-white font-20"
                        name={"email"}
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label={
                          <span className="text-white font-12 white">
                            Subject
                          </span>
                        }
                        name="subject"
                        rules={[
                          {
                            required: true,
                            message: "Please input subject!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        label={
                          <span className="text-white font-12 white">
                            Message
                          </span>
                        }
                        name={"message"}
                        rules={[
                          { required: true, message: "Please input message." },
                        ]}
                      >
                        <TextArea />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row justify={"end"}>
                    <Button type="primary" htmlType="submit" className="green">
                      Send
                    </Button>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export { ContactPage };
