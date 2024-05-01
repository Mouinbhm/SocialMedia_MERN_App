import React from "react";

const Register = () => {
  return (
    <div className="register">
      <div className="register-cover"></div>

      <div className="register-content">
        <div>
          <h1>Join Our Community</h1>
          <p>Welcome to Let's Talk Social Media Platform</p>
        </div>

        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" />
          </div>

          <div className="form-group">
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="E-Mail" />
          </div>

          <div className="form-group">
            <input type="password" placeholder="Password" />
          </div>

          <div className="form-group">
            <textarea placeholder="Tell us about yourself"></textarea>
          </div>

          <div className="form-group">
            <input type="file" accept="image/*" />
          </div>

          <div className="form-group">
            <input type="date" placeholder="Birthdate" />
          </div>

          <button className="btn signup"> Sign Up </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
