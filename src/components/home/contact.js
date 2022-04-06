import React , {  useState } from 'react';
import emailjs from '@emailjs/browser';
//import instance from '../../firebase/instance';


import { Form, Input, Button, Checkbox , message } from 'antd';
import axios from 'axios';


const { TextArea } = Input;



function AppContact() {

  //const form = useRef()
  
  const [form] = Form.useForm();
  
  const onReset = () => {
    form.resetFields()
  }

  const info = () => {
    message.info('message envoyé !!!')
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };


let [name , setName] = useState('')
let [email , setEmail] = useState('')
let [telephone , setTelephone] = useState('')
let [sujet , setSujet] = useState('')
let [message , setMessage] = useState('')
//const [date , setDate] = useState('')


const handleName = (e) => {
  setName(e.target.value)
  console.log(name)
}

const handleEmail= (e) => {
  setEmail(e.target.value)
  console.log(email)

}

const handleSujet = (e) => {
  setSujet(e.target.value)
  console.log(sujet)

}

/*const handleDate = (e) => {
  setDate(e.target.value)
  console.log(date)

}*/





const handleMessage = (e) => {
  setMessage(e.target.value)
  console.log(message)

}

const handleTelephone = (e) => {
  setTelephone(e.target.value)
  console.log(telephone)

}


const postDataHandler = (e) => {
  //e.preventDefault();
  axios.post('https://kxk-projet-default-rtdb.firebaseio.com/data.json', 
        {name , email , telephone , sujet , message})
        .then(response => console.log(response))
}


  const sendEmail = (e) => {

  
    //e.preventDefault();

      emailjs.send('service_l8pcfwe', 'template_wr9q418' , 
                  {name, telephone, email, sujet, message }, 
                  'n3T_AxpcfCqmusW6y')
             .then((response) => {
             console.log('SUCCESS!!!', response.status, response.text);
            }, (error) => {
                console.log(error.text);
        });
    }

    /**useEffect(() => {
      axios.get('https://kxk-projet-default-rtdb.firebaseio.com/data.json')
           .then((response) => console.log(response.data))
           .catch((error) => console.log(error.text))
    }, []) */


    /*const getDataHandler = (e) => {
      axios.get('https://kxk-projet-default-rtdb.firebaseio.com/data.json')
           .then((response) => console.group(response))
           .catch(error =>console.log(error))
    }*/

    

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Nous Contacter</h2>
          <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
        </div>
        <Form
          autoComplete='off'
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          form={form} 
          onFinish = {(values) => sendEmail({values})}
        >
          <Form.Item
            name="name"
            rules={[
              { 
                required: true,
                message: 'Entrer votre nom et prenom' 
              }]
            }
            hasFeedback
          >
            <Input  value={name} onChange={handleName} placeholder="Nom et Prenom" />
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
                message: 'Entrez votre Adresse Email ICI !',
              },
            ]}
            hasFeedback
          >
            <Input value={email} onChange={handleEmail} placeholder="Adresse Email "/>
          </Form.Item>
          <Form.Item
            name="telephone"
            rules={[
              {
                required: true,
                message: "Entrer votre numéro de téléphone"
              }
            ]}
            hasFeedback
          >
            <Input  value={telephone} onChange={handleTelephone} placeholder="Téléphone" />
          </Form.Item>
          <Form.Item
            name="sujet"
          >
            <Input  value={sujet} onChange={handleSujet} placeholder="Sujet" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea  value={message} onChange={handleMessage} placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>J'accepte les conditions d'utilisation.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button
                //onFinish={success}
                onClick={postDataHandler}  
                //onSubmit={onReset}
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
            >
              Envoyez !!!
            </Button>
            <Button htmlType="button" onClick={info}>
              Effacer 🤨
            </Button> 
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}


export default AppContact;