import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createForm } from "../../redux/actions/formActions";
import "./FormModal.css";

function FormModal() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        scrollTimeout = setTimeout(() => {
          setShow(true);
        }, 7000);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    const { name, phone, message } = formData;

    if (!name.trim()) newErrors.name = "Name is required";
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(createForm(formData));

    setSuccess(true); // Show success message
    setFormData({ name: "", phone: "", message: "" });

    setTimeout(() => {
      setSuccess(false);
      setShow(false); // Hide modal
    }, 2000);
  };

  const closeModal = () => setShow(false);

  if (!show) return null;

  return (
    <div className="form-modal-backdrop">
      <div className="form-modal-content">
        <button onClick={closeModal} className="form-close-btn">
          ×
        </button>

        {success ? (
          <div className="success-message">
            Thank you! We will contact you soon.
          </div>
        ) : (
          <>
            <h2 className="form-title">For Enquiry</h2>
            <p className="form-subtitle">
              Drop a quick message and we’ll get back to you!
            </p>
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-row">
                <div className="form-group">
                  <input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && (
                    <span className="error-text">{errors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && (
                    <span className="error-text">{errors.phone}</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && (
                  <span className="error-text">{errors.message}</span>
                )}
              </div>
              <button type="submit" className="form-submit-btn">
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default FormModal;
