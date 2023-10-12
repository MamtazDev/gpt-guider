import Main from "@/Layouts/Main";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="container mt-[90px] mb-[120px]">
      <h4 className="text-center text-3xl font-bold mb-4"> About Us</h4>
      <h2>
        We are a team of developers, academics, and investors trying to solve
        problems in education through the integration of AI. Our educational
        solutions are accurate, reliable, and rich, and our prices are lower
        than any other platform. Our website is accessible worldwide& supports
        all languages.
      </h2>
      <h4>
        For business inquiries or to arrange an appointment with the founder,
        please contact support with your inquiry."
      </h4>

      <h3 className="text-center text-3xl font-bold my-4">
        Contact Information:
      </h3>

      <div>
        <p className="text-xl font-semibold mb-2">For Egypt</p>
        <p>23 July Street, El-Bagour, Menofuia, Egypt.</p>
        <p>Phone: +201226911067.</p>
        <p>
          Email: <span>support@gptguider.com.</span>
        </p>
        <p>
          Gmail: <span> gptguider@gmail.com</span>
        </p>
      </div>

      <h3 className="text-center text-3xl font-bold my-4">Help</h3>
      <p>
        If you encounter registration or payment issues, please don't hesitate
        to contact us for assistance. You can reach us through the following
        methods:
      </p>
      <p className="text-xl font-semibold my-2">For Egypt:</p>
      <p>Phone: +201226911067.</p>
      <p>
        Email: <span>support@gptguider.com.</span>
      </p>
      <p>
        Gmail: <span>gptguider@gmail.com.</span>
      </p>
    </div>
  );
};

AboutUsPage.PageLayout = Main;
export default AboutUsPage;
