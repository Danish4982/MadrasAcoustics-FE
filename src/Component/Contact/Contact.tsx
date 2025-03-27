import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendQuery } from "../../API/contactAPI";
import { Loader } from "../Loader/Loader";

export const Contact = () => {
  const userData = {
    name: "",
    email: "",
    message: "",
    mobileNumber: "",
    subject: "",
    address: "",
  };

  const [formData, setFormData] = useState<any>(userData);
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Please fill this field";
    if (!formData.email.trim()) newErrors.email = "Please fill this field";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.subject.trim()) newErrors.subject = "Please fill this field";
    if (!formData.message.trim()) newErrors.message = "Please fill this field";
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = "Please fill this field";
    else if (!/^\d{10,}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Invalid phone number";
    if (!formData.address.trim()) newErrors.address = "Please fill this field";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitted(true); 
  
    if (!validate()) return;
  
    setLoading(true);
    try {
      const send = await sendQuery(formData);
      if (send?.status === 200) {
        toast.success("Review submitted successfully!", { autoClose: 2000 });
        setFormData(userData);
        setIsSubmitted(false); 
      }
    } catch (error) {
      toast.error("Failed to submit review. Please try again.", { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      {loading && <Loader></Loader>}
      <ToastContainer />
      <div className="contact-page">

        <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/contact-us-banner.jpg`} alt="Contact" className="hero-image" />

          {/* <img src={`${process.env.PUBLIC_URL}/images/contact-us-banner.jpg`} alt="Contact" className="hero-image" /> */}
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>We’d love to hear from you! Reach out with any queries or concerns.</p>
          </div>
        </div>


        <div className="contact-container">

          <div className="contact-info">
            <h2>Our Location</h2>

            {/* Contact Details */}
            <div className="contact-details">
              <p><i className="fas fa-envelope contact-icon"></i>jeromedj@madrasacoustics.com</p>
              <p><i className="fas fa-phone-alt contact-icon"></i> +91-82483 65067</p>
              <p><i className="fas fa-map-marker-alt contact-icon"></i><span>9/10, Perumal Kovil Street, Kotturpuram, Chennai -600 085 </span></p>
            </div>

            {/* Social Media Icons Row */}
            <div className="contact-social-icons">
              <a href="tel:+918248365067" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i></a>
              <a href="https://wa.me/918248365067" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
              <a href="mailto:jeromedj@madrasacoustics.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
              <a href="https://www.facebook.com/share/18kVHF8oaP/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com/madras_acoustics/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://x.com/madrasacoustics?t=L0Mh48j0u6tjYhUAw00f_g&s=08" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
            </div>
          </div>

          <div className="query-form">
      <h2 className="text-center">Submit Your Query</h2>


      {isSubmitted && Object.values(formData).some((value) => typeof value === "string" && value.trim() === "") && (
  <p className="error-text">Please fill in all fields.</p>
)}

      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <div key={field}>
            <input
              type={field === "email" ? "email" : field === "mobileNumber" ? "tel" : "text"}
              id={field}
              placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}

              value={formData[field as keyof typeof formData] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>


          {/* <div className="query-form">
            <h2 className="text-center">Submit Your Query</h2>
            <form onSubmit={handleSubmit}>
              {Object.keys(userData).map((field) => (
                <div key={field}>
                  <input
                    type={field === "email" ? "email" : field === "mobileNumber" ? "tel" : "text"}
                    id={field}
                    placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                    value={formData[field]}
                    onChange={handleChange}
                    className={errors[field] ? "error-input" : ""}
                  />
                  {errors[field] && <p className="error-text">{errors[field]}</p>}
                </div>
              ))}
              <button type="submit">Submit</button>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};


