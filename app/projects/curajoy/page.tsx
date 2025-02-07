import Image from "next/image";
import donateForm from "../../images/DonateForm.png";
import videoPitch from "../../images/VideoPitch.png";
import navBar from "../../images/NavBar.png";


export default function Page() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:loading-10 md:text-6xl md:loading-13">
          CuraJOY
        </h1>
      </div>


        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p>As a software engineer at CuraJOY,  I&apos;ve contributed to the ongoing revamp of the website.</p>
          <p>Technologies used: Typescript, Next.js, React, Tailwind CSS, Jest</p>
          <p>Key Contributions:</p>
          <ul>
            <li>Collaborated with a team of designers and developers to enhance the website&apos;s functionality and aesthetic</li>
            <li>Built responsive components that would look great at any screen size</li>
            <li>Used accessible elements to ensure these componenets are friendly for user with disabilities</li>
            <li>Implemented unit tests for reliability</li>
          </ul>
          <p>Components I Worked On:</p>
          <ul>
            <li className="mb-[1.33em]">
              <b>Donate Form</b>
              <Image src={donateForm} alt="Donate Form" className="mb-0 mt-0"/>
               The challenge here was figuring out how to handle recurring donations because it was a feature that wasn&apos;t currently working in the live site. Since Stripe&apos;s API doesn&apos;t directly support recurring donations, I worked around it by creating subscription links for different preset amounts. 
            </li>
            <li className="mb-[1.33em]">
              <b>Video Pitch</b>
              <Image src={videoPitch} alt="Video Pitch" className="mt-0"/>
            </li>
            <li>
              <b>Nav Bar</b>
              <Image src={navBar} alt="Nav Bar" className="mt-0"/>
            </li>
          </ul>
        </div>
      
    </div>
  )
}