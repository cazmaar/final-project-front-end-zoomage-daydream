import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import css from "./register.module.css";
import background from "../../images/background.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };



  return (
    <div className={css.registerSect}>
      <Header />
      <div className={css.mainContainer}>
        <form className={css.inputs} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className={css.labels}> FIRST NAME </label>
            <br></br>
            <input
              type="text"
              placeholder="First Name"
              {...register("First Name")}
              className={css.form}
              required
            />
          </div>
          <div>
            <label className={css.labels}> LAST NAME </label>
            <br></br>
            <input
              type="text"
              placeholder="Your Surname"
              {...register("Surname")}
              className={css.form}
              required
            />
          </div>
          <div>
            <label className={css.labels}> EMAIL ADDRESS </label>
            <br></br>
            <input
              type="text"
              placeholder="Email Address"
              {...register("Email Address")}
              className={css.form}
              required
            />
          </div>
          <div>
            <label className={css.labels}> DATE OF BIRTH </label>
            <br></br>
            <input
              type="date"
              placeholder="Your Date of Birth"
              {...register("Date of Birth")}
              className={css.form}
              required
            />
          </div>
          <div>
            <label className={css.labels}> PLEASE CHOOSE A USERNAME </label>
            <br></br>
            <input
              type="text"
              placeholder="Choose a Username"
              {...register("Username")}
              className={css.form}
              required
            />
          </div>
          {errors.exampleRequired && <p>This field is required</p>}

          <div>
            <Link to={"mission"}>
              <button type="button">NEXT</button>
            </Link>
          </div>
        </form>
        <div className={css.backgroundRegister}>
          <img src={background} alt="" className={css.imag} />
        </div>
      </div>
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
