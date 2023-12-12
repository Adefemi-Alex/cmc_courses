import React from 'react'
import { Link } from 'react-router-dom'
// import { createPortal } from 'react-dom'
import { FaTimes } from 'react-icons/fa'

function TermsAndCondPopup({ openTermsPopup }) {
 return (
  <div
   className=' termsCondition bg-white w-full h-full overflow-y-scroll z-[9]
   fixed top-0 transition-opacity duration-500'>
   <div className='my-16 pt-5 px-5'>
    <div className='flex justify-between relative px-5'>
     <h2 className='text-fontSize2 text-lightBlue mt-3 font-semibold'>
      Terms and Conditions
     </h2>
     <button
      className='fixed right-2 text-2xl text-lightBlue mt-5 pr-5'
      onClick={openTermsPopup}>
      <FaTimes />
     </button>
    </div>
    <div className='flex flex-col leading-7 px-10'>
     <div>
      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>1. Acceptance of Terms</h3>
       <p className='text-gray-500 font-medium pl-4'>
        Welcome to ExpertSkillz! These Terms and Conditions ("Terms") outline
        the rules and regulations for using ExpertSkillz, an online learning
        platform ("Platform"). By accessing and using this Platform, you agree
        to be bound by these Terms, including our Privacy Policy, which is
        incorporated into these Terms by reference.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>2. Definations</h3>
       <ul className=' pl-8 list-disc text-gray-500 font-medium space-y-3'>
        <li>
         Platform" refers to ExpertSkillz and all of its associated webpages,
         services, and content
        </li>
        <li>
         User" refers to any individual who accesses or uses the Platform.
        </li>
        <li>
         Course" refers to any training program, class, module, or material
         offered on the Platform
        </li>
        <li>
         Content" refers to all text, graphics, images, audio, video, and other
         materials on the Platform
        </li>
        <li>
         Instructor" refers to a person or entity that provides courses or
         instructional content on the Platform
        </li>
       </ul>
      </div>
      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>3. User Responsibilities</h3>
       <p className='text-gray-500 font-medium pl-4'>
        You agree to use the Platform in accordance with all applicable laws and
        regulations. You are responsible for ensuring the confidentiality of
        your account details, including login credentials. ExpertSkillz may
        suspend or terminate your account if we suspect unauthorized access or
        use.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>4. Access to Content</h3>
       <p className='text-gray-500 font-medium pl-4'>
        Upon payment of applicable fees, ExpertSkillz grants you a limited,
        non-exclusive, non-transferable license to access and use the content
        and services on the Platform for your personal, non-commercial use. You
        may not reproduce, distribute, or publicly display any Content without
        the express written permission of ExpertSkillz.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>5. Payments and Refunds</h3>
       <h3 className='text-gray-500 font-semibold pl-5 py-1'>
        Payments for courses on ExpertSkillz are non-refundable.
       </h3>
       <p className='text-gray-500 font-medium pl-4 py-2'>
        You agree to pay all fees and charges associated with your registration
        on our platform. Payment can be made through authorized payment gateways
        available on any course you want to study on ExpertSkillz.
       </p>
       <p className='text-gray-500 font-medium pl-4 py-2'>
        For your security, we strongly advise you to make all payments directly
        through our platform or our verified payment partners. Any payments made
        outside of these official channels, including payments to non-verified
        team members, pose a risk of potential scams and fraud. In such cases,
        ExpertSkillz will not be held responsible for any financial loss or
        adverse consequences resulting from these transactions.
       </p>
       <p className='text-gray-500 font-medium pl-4 py-2'>
        We encourage you to exercise caution and ensure that all payments are
        securely processed through our approved channels to safeguard your
        financial interests.
       </p>
       <p className='text-gray-500 font-medium pl-4 py-2'>
        If you encounter issues with your registration, please contact our
        support team for assistance.
       </p>
      </div>

      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>6. User Content</h3>
       <p className='text-gray-500 font-medium pl-4'>
        Users may submit content, such as reviews, comments, or feedback, to the
        Platform. By doing so, you grant ExpertSkillz the right to use and
        display this content without limitation.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>7. Intellectual Property</h3>
       <ul className=' pl-8 list-[lower-alpha] text-gray-500 font-medium leading-7 space-y-5'>
        <li>
         <p>
          Ownership of Content: All content available on the Platform, including
          but not limited to text, graphics, images, audio, video, and any other
          materials, is protected by copyright, trademark, and other
          intellectual property laws. This content is either owned or licensed
          by ExpertSkillz. You may not use, modify, reproduce, distribute, or
          publicly display any of the Content without express written permission
          from ExpertSkillz.
         </p>
        </li>
        <li>
         <p>
          User Content: Any content submitted or posted by users, including
          reviews, comments, feedback, or any other form of user-generated
          content, is subject to the following:
         </p>
        </li>
        <li>
         <p>
          User-Generated Content License: By submitting or posting any
          user-generated content on the Platform, you grant ExpertSkillz a
          worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and
          fully sublicensable license to use, reproduce, modify, adapt, publish,
          translate, create derivative works from, distribute, and display such
          content in any media. You also grant ExpertSkillz the right to use
          your username, real name, or other identifying information in
          connection with such content.
         </p>
        </li>
        <li>
         <p>
          Ownership of User Content: Users retain ownership of their
          user-generated content. However, by submitting or posting content on
          the Platform, you represent and warrant that you own or have obtained
          all necessary rights, licenses, or permissions to grant ExpertSkillz
          the aforementioned license to your user-generated content.
         </p>
        </li>
        <li>
         <p>
          Content Removal: ExpertSkillz reserves the right to review, remove, or
          modify any user-generated content that violates these Terms or any
          applicable laws or regulations. We do not endorse, support, or
          guarantee the accuracy, completeness, or reliability of user-generated
          content.
         </p>
        </li>
       </ul>
      </div>
      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>
        8. Disclaimers and Limitations
       </h3>
       <p className='text-gray-500 font-medium pl-4'>
        ExpertSkillz provides content for educational purposes only and makes no
        guarantees regarding the outcomes of using the Platform. We are not
        responsible for the accuracy, completeness, or suitability of the
        information provided.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>9. Termination</h3>
       <p className='text-gray-500 font-medium pl-4'>
        ExpertSkillz reserves the right to terminate or suspend your account
        without notice if you violate these Terms or engage in any activity that
        may harm our platform or other users. Termination or suspension of your
        account may result from but is not limited to the following
        circumstances:
       </p>
       <ul>
        <li>
         <p className='text-gray-500 font-medium pl-4'>
          Violation of Terms: Any breach or violation of these Terms, including,
          but not limited to, unauthorized use, fraudulent activity, or misuse
          of the Platform.
         </p>
        </li>
        <li>
         <p className='text-gray-500 font-medium pl-4'>
          Harm to the Platform: Engaging in activities or behaviors that could
          disrupt, damage, or impair the functionality, security, or reputation
          of ExpertSkillz.
         </p>
        </li>
        <li>
         <p className='text-gray-500 font-medium pl-4'>
          Repeated Violations: Multiple or repeated violations of these Terms,
          regardless of the nature of the violation.
         </p>
        </li>
        <li>
         <p className='text-gray-500 font-medium pl-4'>
          Legal Requirements: When required by applicable law or government
          authorities, ExpertSkillz may terminate or suspend accounts to comply
          with legal obligations.
         </p>
        </li>
       </ul>
      </div>
      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>10. Governing Law</h3>
       <p className='text-gray-500 font-medium pl-4'>
        These Terms and any disputes arising from or related to them shall be
        governed by and construed in accordance with the laws of Nigeria.
       </p>
      </div>
      <div className='mt-5'>
       <h3 className='text-gray-950 font-semibold'>11. Contact Information</h3>
       <p className='text-gray-500 font-medium pl-4'>
        If you have questions or concerns about these Terms, please contact us
        at
        <Link to='/wearexpertskillz@gmail.com.'>
         wearexpertskillz@gmail.com.
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

export default TermsAndCondPopup
