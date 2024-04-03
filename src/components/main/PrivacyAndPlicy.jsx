import React from 'react'
// import { createPortal } from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function PrivacyAndPlicy({ openPrivacyPopup }) {
 return (
  <div
   className=' termsCondition bg-white w-[100%] h-[100vh] overflow-y-scroll z-[9]
   fixed top-0 transition-opacity duration-500'>
   <div className='my-16 pt-5 px-5'>
    <div className='flex justify-between relative px-5'>
     <h2 className='text-fontSize2 text-lightBlue mt-3 font-bold'>
      Privacy Policy for ExpertSkillz
     </h2>
     <button
      className='fixed right-2 text-2xl text-lightBlue mt-5 pr-5'
      onClick={openPrivacyPopup}>
      <FaTimes />
     </button>
    </div>
    <div className='flex flex-col leading-7 px-10'>
     <div>
      <div className='mt-5'>
       <p className='text-gray-500 font-medium pl-4 pb-3'>
        Welcome to ExpertSkillz. We are committed to protecting your personal
        information and your right to privacy. If you have any questions or
        concerns about our policy or our practices regarding your personal
        information, please contact us at wearexpertskillz@gmail.com.
       </p>
       <p className='text-gray-500 font-medium pl-4 '>
        This Privacy Policy applies to all information collected through our
        website and other related services, features, and technologies
        (collectively, "Services"). By accessing or using our Services, you
        signify your consent to our Privacy Policy and agree to our collection,
        use, and disclosure of your personal information as described herein.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='font-bold'>1. Information We Collect</h3>
       <p className='text-gray-500 font-medium'>
        We collect personal information you provide directly to us when you use
        our Services. The types of personal information we may collect include:
       </p>
       <ul className=' pl-8 list-disc text-gray-500 font-medium'>
        <li>
         Contact Information, such as name, email address, mailing address, and
         phone number.
        </li>
        <li>Registration Information, such as username and password.</li>
        <li>
         Payment Information, such as credit card or other payment method
         details.
        </li>
        <li>
         Information about your use of our Services, such as the courses you
         access, viewing history, and user-generated content.
        </li>
        <li>
         Communications and Correspondence, including any feedback, questions,
         or information you send to us.
        </li>
       </ul>
      </div>
      <div className='mt-5'>
       <h3 className='font-bold'>2. Collection and Use of Personal Data</h3>
       <p>We may collect and use your personal data in the following ways:</p>
       <ul className=' pl-8 list-[lower-alpha] text-gray-500 leading-7 font-medium'>
        <li>
         <p className='pl-4'>To provide access to our courses and content.</p>
        </li>
        <li>
         <p>To process payments for course enrollment.</p>
        </li>
        <li>
         <p>
          To personalize your learning experience and make recommendations.
         </p>
        </li>
        <li>
         <p>
          To improve our services, monitor trends, and analyze user behavior.
         </p>
        </li>
        <li>
         To communicate with you, including sending important updates and
         information about our services.
        </li>
       </ul>
      </div>
      <div className='mt-5'>
       <h3 className='font-bold'>3. Security of Your Personal Data</h3>
       <p className='text-gray-500 pl-4 font-medium'>
        We take rigorous measures to protect your personal data. Our security
        protocols include encryption, access controls, and regular security
        assessments to safeguard your information. While we take these
        precautions, please be aware that no method of transmission over the
        internet is entirely secure, and we cannot guarantee the absolute
        security of your data.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='font-bold'>5. Payments and Refunds</h3>
       <h3 className='text-gray-500 font-bold pl-5 py-1'>
        4. Disclosure of Personal Data:
       </h3>
       <p className='text-gray-500 pl-4 py-1 font-medium'>
        We may disclose your personal data in the following circumstances:
       </p>
       <p className='text-gray-500 pl-4 py-3 font-medium'>
        To Trusted Third Parties: We may share your personal data with trusted
        third-party service providers who assist us in providing, maintaining,
        and enhancing the services on ExpertSkillz. These third parties are
        contractually obligated to keep your information secure and
        confidential.
       </p>

       <p className='text-gray-500 pl-4 py-2 font-medium'>
        Legal Compliance: We may share your personal information with law
        enforcement agencies, government officials, or other third parties when
        we are required to do so by applicable law, regulation, or legal
        process. This includes situations where we need to respond to legal
        requests, enforce our policies, or protect the rights, property, or
        safety of ExpertSkillz, our users, or others.
       </p>

       <p className='text-gray-500 pl-4 py-2 font-medium'>
        Business Transactions: In the event of a merger, acquisition, sale of
        assets, or other similar business transaction, your personal data may be
        transferred to a new owner or partner. We will provide notice before
        your data is transferred and becomes subject to a different privacy
        policy.
       </p>
      </div>

      <div className='mt-5'>
       <h3 className='font-bold'>6. User Content</h3>
       <p className='text-gray-500 pl-4 py2 font-medium'>
        Protection of Rights: We may share your personal data to protect the
        rights, privacy, safety, or property of ExpertSkillz, our users, or
        others when we have a good-faith belief that the disclosure is necessary
        to prevent harm or financial loss, to address technical issues, or to
        protect our legal rights.
       </p>
       <h5 className='font-bold'>
        Consent: We may share your personal data with your consent or at your
        direction.
       </h5>
       <p className='text-gray-500 pl-4 py2 font-medium'>
        Please note that this list is not exhaustive, and there may be other
        circumstances where we disclose your personal data as required or
        permitted by law. We take appropriate measures to ensure that your
        personal information is handled securely and in accordance with
        applicable data protection laws.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='font-bold'>5. Changes to Our Privacy Policy</h3>
       <p className='text-gray-500 pl-4 font-medium'>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices. Any changes will be posted on this page, and the date
        of the latest revision will be indicated. We encourage you to review
        this Privacy Policy periodically to stay informed.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='font-bold'>6. Children's Privacy</h3>
       <p className='text-gray-500 pl-4 font-medium'>
        Our services are not directed at individuals under the age of 13. We do
        not knowingly collect or use personal data from children. If you believe
        that we have collected data from a child, please contact us, and we will
        take steps to delete such information.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='font-bold'>7. Your Rights and Choices</h3>
       <p className='text-gray-500 pl-4 font-medium'>
        You have the right to access, update, or delete your personal
        information by contacting our support team. We will make reasonable
        efforts to respond to your requests. Additionally, you can opt out of
        receiving marketing communications from us by using the unsubscribe link
        in our emails.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='font-bold'>8. Contact Information</h3>
       <p className='text-gray-500 pl-4 font-medium'>
        If you have any questions or concerns about this Privacy Policy, our
        data practices, or wish to exercise your privacy rights, please contact
        us at{' '}
        <Link
         to='/contact'
         className='text-lightBlue hover:text-lightpurple hover:font-bold font-semibold'>
         Contact us
        </Link>
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>
  // document.getElementById('termsConditionPopup')
 )
}

export default PrivacyAndPlicy
