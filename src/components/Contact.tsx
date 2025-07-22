import React, { useState } from 'react';
import Section from './Section';

interface ContactProps {
  onInViewChange: (id: string, inView: boolean) => void;
}

const Contact: React.FC<ContactProps> = ({ onInViewChange }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    school: '',
    city: '',
    state: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);


  const formFields = [
    { name: 'school', label: 'What is the name of your school?', type: 'text' },
    { name: 'city', label: 'In which city is your school located?', type: 'text' },
    { name: 'state', label: 'And in which state?', type: 'text' },
    { name: 'phone', label: 'What is your phone number?', type: 'tel' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < formFields.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);


    const scriptURL = 'https://script.google.com/macros/s/AKfycbxiP5rlh-j8bO8cdh7lBUrxXid0Z07gw1nI9vBWXVRXFOeneDU3tSlOKWiyOYetrl7RcA/exec';
    const form = document.createElement('form');
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log('Success!', response);
        setIsSubmitting(false);

        setCurrentStep(formFields.length); // Move to a 'thank you' state
      })
      .catch(error => {
        console.error('Error!', error.message);
        setIsSubmitting(false);

      });
  };

  return (
    <Section id="contact" onInViewChange={onInViewChange}>
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-form-container">
        {currentStep < formFields.length ? (
          <form onSubmit={handleSubmit}>
            <div className="form-step-container">
              {formFields.map((field, index) => (
                <div key={field.name} className={`form-step ${index === currentStep ? 'active' : ''}`}>
                  <div className="form-group">
                    <label htmlFor={field.name}>{field.label}</label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        required
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="form-navigation">
              {currentStep > 0 && (
                <button type="button" onClick={handleBack} className="btn-secondary">
                  Back
                </button>
              )}
              {currentStep < formFields.length - 1 ? (
                <button type="button" onClick={handleNext} className="btn-primary" style={{ marginLeft: 'auto' }} disabled={!formData[formFields[currentStep].name as keyof typeof formData]}>
                  Next
                </button>
              ) : (
                <button type="submit" className="btn-primary" style={{ marginLeft: 'auto' }} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              )}
            </div>
          </form>
        ) : (
          <div className="submission-status active">
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. We will get back to you soon.</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Contact;
