import React from "react";
import { Phone, Email } from "@mui/icons-material";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col gap-6">
      {/* Call Section */}
      <div className="flex items-start gap-4">
        <div className="text-red-500">
          <Phone fontSize="large" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Call To Us</h3>
          <p className="text-gray-600 text-sm">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-gray-800 font-medium mt-1">
            Phone: +8801611112222
          </p>
        </div>
      </div>

      <hr />

      {/* Email Section */}
      <div className="flex items-start gap-4">
        <div className="text-red-500">
          <Email fontSize="large" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Write To Us</h3>
          <p className="text-gray-600 text-sm">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-gray-800 font-medium mt-1">
            Emails: customer@exclusive.com
          </p>
          <p className="text-gray-800 font-medium">support@exclusive.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
