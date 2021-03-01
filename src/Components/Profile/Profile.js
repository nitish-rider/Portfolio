import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";

import TimeLine, { TimeLineSeparator } from "../Timeline/TimeLine";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";

import profile from "../../assets/images/profile1.jpg";

import resumeDetails from "../../utils/resumeDetails";
import PersonIcon from "@material-ui/icons/Person";
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';

const TimeLineItem = ({ title, text, link }) => (
    <TimelineItem>
        <TimeLineSeparator />
        <TimelineContent>
            {link ? (
                <Typography>
                    <span> {title}: </span>{" "}
                    <a href={link} target="_blank">
                        {text}
                    </a>
                </Typography>
            ) : (
                <Typography>
                    <span> {title}: </span> {text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    return (
        <div className="profile container_shadow margin">
            <div className="profile_name">
                <Typography className="name">{resumeDetails.name}</Typography>
                <Typography className="title">{resumeDetails.title}</Typography>
            </div>

            <figure className="profile_image">
                <img src={profile} alt="" />
            </figure>
            <div className="profile_information">
                <TimeLine icon={<PersonIcon />}>
                    <TimeLineItem title="Name" text={resumeDetails.name} />
                    <TimeLineItem title="Email" text={resumeDetails.email} />
                    <TimeLineItem title="Phone" text={resumeDetails.phone} />
                    <TimeLineItem title="Job" text={resumeDetails.jobs} />
                    <TimeLineItem
                        title="Address"
                        text={resumeDetails.address}
                    />
                    {/* {Object.keys(resumeDetails.social).map((key) => (
                    <TimeLineItem
                        title={key}
                        text={resumeDetails.social[key].text}
                        link={resumeDetails.social[key].link}
                    />
                ))} */}
                </TimeLine>
                <br />

                

                <button className="getresumebutton">Download Resume 
                <i class="fa fa-download download_icon" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
};

export default Profile;
