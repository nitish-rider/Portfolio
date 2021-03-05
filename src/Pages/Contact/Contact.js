import React, { useState, useEffect } from "react";
import "./Contact.css";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import resumeDetails from "../../utils/resumeDetails";
import  MapContainer from "../../Components/Maps/Maps";
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
            <Grid container className="header-container">
                <Grid item className="header-container-item">
                    <form onSubmit={handleSubmit}>
                        <Grid container className="contact-form">
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

                    <Grid
                        container
                        className="section-contact "
                        xs={12}
                        sm={12}
                        md={6}
                    >
                        <Grid item className="section_title-contact mt_50">
                            <span></span>
                            <h6 className="section_title_text-contact">
                                Contact Informations
                            </h6>
                        </Grid>
                        <Grid item className="section_topo_text" xs={12}>
                            <Typography
                                variant="body2"
                                className="contact_text"
                            >
                                {" "}
                                Address: {resumeDetails.address}
                            </Typography>
                            <Typography
                                variant="body2"
                                className="contact_text"
                            >
                                {" "}
                                Phone: {resumeDetails.phone}
                            </Typography>
                            <Typography
                                variant="body2"
                                className="contact_text"
                            >
                                {" "}
                                Job: {resumeDetails.jobs}
                            </Typography>
                            <Typography
                                variant="body2"
                                className="contact_text"
                            >
                                {" "}
                                Email: {resumeDetails.email}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className="Map-head">
                        <Grid item className="Map-Item-head">
                            <MapContainer/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Contact;

