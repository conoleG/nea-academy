// import { Link } from "@nextui-org/link";
import React from 'react'
import Info from '../components/Info'
import LearnersSkill from '../components/LearnersSkill'
import Navbars from '../components/Navbars'
import Courses from '../components/Courses'
import CallToACtion from '../components/CallToAction'
import Headers from '../components/Headers'
import AccordionDemo from '../components/ui/Newaccordion'
import CourseDetails from '../components/CourseDetails'
import Testimonies from '../components/Testimonies'
import OtherBenefits from '../components/OtherBenenfits'
import AvailableDates from '../components/AvailableDates'
import CardCounter from '@/components/CardCounter'
import SocialLink from '../components/SocialLink'
import DialogContent from '../components/ui/DialogContent'
import SocialIcons from '../components/SocialIcons'
import Information from '../components/Information'
// import CardTestimony from '@/components/CardTestimony'
import SideInfo from '@/components/SideInfo'
export default function Home() {
  return (
    <section>
      <Headers/>
      
      <Info/>
       
      <Courses />
      
      <LearnersSkill/>
     
      <CallToACtion />
      <SideInfo/>
      <CourseDetails/>
      <Navbars />
      <AccordionDemo />
      <CardCounter />
      <Testimonies />
      <Information/>
      <OtherBenefits />
      <AvailableDates />
      {/* <MyCarousel /> */}
    
      <Courses />

      

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center py-20">
        <h1 className="text-3xl font-bold py-15">Follow us on social media</h1>
        <p className="mt-3 text-2xl"></p>
        <SocialIcons />
        <DialogContent/>
      </main>
    </section>
    
  );
}
