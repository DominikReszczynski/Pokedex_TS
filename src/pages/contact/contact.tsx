import { ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios'
import "./contact.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}
export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [nameIsFiled, setNameFiled] = useState<boolean>(false);
  const [emailIsFiled, setEmailFiled] = useState<boolean>(false);
  const [messageIsFiled, setMessageFiled] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    whetherNameIsEmpty();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendForm();
    clearFormFields();
  };

  const whetherNameIsEmpty = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    formData.name.length > 1 ? setNameFiled(true) : setNameFiled(false);
    formData.message.length > 10
      ? setMessageFiled(true)
      : setMessageFiled(false);
    emailPattern.test(formData.email)
      ? setEmailFiled(true)
      : setEmailFiled(false);
  };

  const sendForm = () => {
    axios.post("http://localhost:5000/send_email", {
      email: formData.email,
      userName: formData.name,
      message: formData.message
    })
    .then(function (response) {
      console.log('Response: ', response)
    })
    .catch(function (error) {
      console.error('Error: ', error)
    })
  };

  const clearFormFields = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setNameFiled(false)
    setEmailFiled(false)
    setMessageFiled(false)
  };

  console.log(nameIsFiled, emailIsFiled, messageIsFiled);
  return (
    <main className="site_conteiner">
      <div className="contact__wrapper">
        <h1 className="contact__title">! SKONTAKTUJ SIĘ Z NAMI !</h1>
        <p>
          Napisz na maila:
          <br />
          kontakt@pokelab.pl
        </p>
        <p>lub</p>
        <p>Wypełnij formularz</p>
        <form className="contact_form" onSubmit={handleSubmit}>
          <label htmlFor="name">Imię:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Adres e-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Wiadomość:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            disabled={!emailIsFiled && !nameIsFiled && !messageIsFiled}
            type="submit"
          >
            Wyślij
          </button>
        </form>
      </div>
    </main>
  );
};
