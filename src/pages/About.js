import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import styles from "../styles/About.module.css";
import appStyles from "../App.module.css";

const AboutPage = () => {
    return (
        <Row>
            <Col md={6} className={`my-auto d-md-block p-2`}>
                <div className={styles.Info}>
                    <h1>About</h1>
                    <p>Welcome to school fun times Website!</p>
                    <p>
                        school fun times is a web page for school students and teachers,
                        where all can participate by sharing their activities during holidays,
                        this allows all to learn more about potenial places to visit in the future.
                    </p>
                    <p>
                        Our mission is to encourages students to benifit from each others by exploring new
                        places, share adventures, and participate.
                    </p>
                </div>
            </Col>
            <Col md={6} className={`my-auto d-none d-md-block p-2`}>
                <Image
                    className={`${appStyles.FillerImage}`}
                    src={
                        "https://res.cloudinary.com/nazek/image/upload/v1696594524/fun_times_3-removebg-preview_ab83wx.png"
                    }
                />
            </Col>

        </Row>
    );
};

export default AboutPage;