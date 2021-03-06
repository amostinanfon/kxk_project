import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
//import instance from '../../firebase/instance';

import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";

const { TextArea } = Input;

function AppContact() {
  const [form] = Form.useForm();




  // Function to reset FormField
  const onReset = () => {
    form.resetFields();
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  // Using Hook to 
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [instagram, setInstagram] = useState("");
  let [sujet, setSujet] = useState("");
  let [message, setMessage] = useState("");
  //let [phone, setPhone] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  // const handlePhone = (e) => {
  //   setPhone(e.target.value);
  //   console.log(phone);                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  // };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleSujet = (e) => {
    setSujet(e.target.value);
    console.log(sujet);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const handleInstagram = (e) => {
    setInstagram(e.target.value);
    console.log(instagram);
  };

  let navigate = useNavigate();

  const PostDataHandler = async () => {
    await axios
      .post("https://kxk-projet-default-rtdb.firebaseio.com/data.json", {
        name,
        email,
        instagram,
        sujet,
        message,
      })
      .then((response) => console.log(response));
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_l8pcfwe",
        "template_wr9q418",
        { name, instagram, email, sujet, message },
        "n3T_AxpcfCqmusW6y"
      )
      .then(
        (response) => {
          console.log("SUCCESS!!!", response.status, response.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Function to post , submit and redirect to success page
  const Finish = (values) => {
    sendEmail({ values });
    PostDataHandler();
    navigate("/success");
  };

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Nous Contacter</h2>
          <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
        </div>
        <Form
          autoComplete="off"
          name="normal_login"
          className="login-form"
          form={form}
          initialValues={{ remember: true }}
          onFinish={Finish}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Entrer votre nom et prenom",
              },
            ]}
            hasFeedback
          >
            <Input
              value={name}
              onChange={handleName}
              placeholder="Nom et Prenom"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "L'email n'est pas correct",
              },
              {
                required: true,
                message: "Entrez votre Adresse Email ICI !",
              },
            ]}
            hasFeedback
          >
            <Input
              value={email}
              onChange={handleEmail}
              placeholder="Adresse Email"
            />
          </Form.Item>
          <Form.Item
            name="instagram"
            rules={[
              {
                required: true,
                message: "Entrer votre compte Instagram",
              },
            ]}
            hasFeedback
          >
            <Input
              value={instagram}
              onChange={handleInstagram}
              placeholder="Compte Instagram"
            />
          </Form.Item>
          <Form.Item name="sujet">
            <Input value={sujet} onChange={handleSujet} placeholder="Sujet" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea
              value={message}
              onChange={handleMessage}
              placeholder="Message"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
            >
              <Checkbox>J'accepte les conditions d'utilisation.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
              style={{margin: "10px", textTransform:"uppercase"}}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Envoyez !!!
            </Button>
            <Button
              style={{margin: "10px", textTransform:"uppercase"}} 
              htmlType="button" 
              onClick={onReset}
            >
              Effacer ????
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AppContact;
