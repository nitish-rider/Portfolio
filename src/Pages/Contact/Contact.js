import React, { useState, useEffect } from "react";
import "./Contact.css";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import resumeDetails from "../../utils/resumeDetails";
import { db } from "../../firebase";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <Grid container className="contact-form" >
                <Grid item className="heading-contact">
                    <span></span>
                    <h6>Contact Me 🖐</h6>
                </Grid>
                <Grid item className="input-name" xs={12}>
                    <br />
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>

                <Grid item className="input-email" xs={12}>
                    <br />
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>

                
                <Grid item xs={12}>
                    <input
                        className="input-message"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Grid>
                <button
                    xs={12}
                    type="submit"
                    style={{ background: loader ? "#ccc" : "" }}
                >
                    Submit
                </button>
            </Grid>
        </form>
        </>
    );
};

export default Contact;
