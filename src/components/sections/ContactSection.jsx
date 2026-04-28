import React, { useState } from 'react';
import { InputGroup } from '../ui/Input';
import Button from '../ui/Button';
import { ContactWaves } from './ContactWaves';
import emailjs from '@emailjs/browser';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tema: '',
    descripcion: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult('Enviando correo con tu nuevo diseño...');

    try {
      // The parameter keys must exactly match the `{{variable}}` inside the EmailJS template.
      const templateParams = {
        nombre: formData.nombre,
        email: formData.email,
        tema: formData.tema,
        descripcion: formData.descripcion,
        newsletter: formData.newsletter ? 'Sí' : 'No'
      };

      await emailjs.send(
        'service_u5c6wfd',      // Tu nuevo Service ID
        'template_veebebs',     // Tu Template ID nuevo
        templateParams,         // Tus Variables
        'Ac21gJd_bs000V1mW'     // Tu Public Key nueva correcta
      );

      setSubmitResult('✅ ¡Enviado! Revisa tu bandeja de entrada.');
      setFormData({ nombre: '', email: '', tema: '', descripcion: '', newsletter: false }); // clear form

    } catch (error) {
      console.error('FAILED...', error);
      setSubmitResult('❌ Ocurrió un error mandando el correo.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitResult(''), 6000);
    }
  };

  return (
    <>
      <section className="contact-section" id="contactanos-form">
        <div className="container contact-container">
          <h2 className="contact-section-title">Contáctanos</h2>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <InputGroup 
              label="Nombre" 
              name="nombre"
              placeholder="Nombre" 
              value={formData.nombre}
              onChange={handleChange}
            />
            <InputGroup 
              label="Email" 
              type="email"
              name="email"
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
            />
            <InputGroup 
              label="Tema" 
              name="tema"
              placeholder="Tema" 
              value={formData.tema}
              onChange={handleChange}
            />
            <InputGroup 
              label="Descripción" 
              name="descripcion"
              placeholder="Tema" // Mantiene el placeholder que se ve en la imagen UI
              isTextarea={true}
              value={formData.descripcion}
              onChange={handleChange}
            />

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Deseo recibir correos y notificaciones sobre el campamento y eventos con Nakawe A.C.
              </label>
            </div>

            <div className="contact-submit" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button variant="dark" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando correo...' : 'Enviar'}
              </Button>
              {submitResult && (
                <p style={{ marginTop: '15px', color: 'white', fontWeight: '500', fontSize: '1.1rem' }}>
                  {submitResult}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
      <ContactWaves />
    </>
  );
};

export default ContactSection;
