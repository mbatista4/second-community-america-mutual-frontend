import React from 'react';
import './About.css';

export default function About() {

    return(
        <body className="about-page">
            <h1 className="about-us">About Us</h1>
            <div className="about-info1">
                <h1 className="about-title">Who We Are</h1>

                <p>Welcome to Second Community American Mutual.
                Second Community American Mutual was built and designed from the ground up with the member's experience in mind.
                Here at S.C.A.M we are dedicated to delivering the best possible banking experience to our member
                by providing to them a safe, reilable, and convenient banking experience.
                Our professional and well-trained tellers are dedicated to helping our members by 
                providing to them a fast and easy banking process.
                Our number one goal was and always will be the satisfaction of our customer because without satisfied members there can
                be no S.C.A.M, and if there is no S.C.A.M then there are no satisfied members.
                S.C.A.M is not just a bank, but it is the bank of the people.</p>

            </div>

            <div className="about-info2">
                <h1 className="about-title">Have Any Questions?</h1>

                <p>At S.C.A.M the members are our number one priority, we are dedicated to providing our members any assitance they may need.
                    If you need any assitance or have any concerns, our team of representatives are qualified to handle most issues.
                    If you wish to contact us you can do so by calling 1-800-YES-SCAM. We will connect you to one of our representatives
                    to assist you with your concerns or questions. We are always happy to help.
                </p>

            </div>

            <div className="about-info3">
            <h1 className="about-title3">Contact Info</h1>
                <div class="image" className="image0">
                    <img src="https://icon-library.com/images/office-phone-icon/office-phone-icon-7.jpg"></img>
                    <p>1-800-YES-SCAM</p>
                </div>

                <div class="image" className="image0">
                    <img src="https://freeiconshop.com/wp-content/uploads/edd/mail-var-solid.png"></img>
                    <p>assistance@SCAM.com</p>
                </div>

                <div class="image" className="image0">
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bank-account-banking-building-1-31235.png"></img>
                    <p>33 Community Avenue</p>
                </div>
            </div>

        </body>
    )
}
