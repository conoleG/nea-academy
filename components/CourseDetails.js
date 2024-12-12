'use client'
import React from "react";
import { useState } from "react";
import { Tabs, Tab, Card, CardBody, Switch, CardHeader } from "@nextui-org/react";

export default function CourseDetails() {
    const [isVertical, setIsVertical] = useState(true);
    return (
        <div className="flex flex-col px-4">
            <Switch className="mb-4" isSelected={isVertical} onValueChange={setIsVertical}>
                Vertical
            </Switch>
            <div className="flex w-auto flex-col">
                <Tabs aria-label="Options" isVertical={isVertical}>
                    <Tab key="What" title="What is NEA">
                        <Card>
                            <CardBody>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl py-5">What Is Natenrock Entrepreneurship Academy About (NEA)</p>
                                Academy is a 30-day online entrepreneurship school + a 30-day business mentorship and guide
                                The Academy is designed to enable entrepreneurs or intending entrepreneur to learn Basic entrepreneurial skills that will enable them start and grow their business. From building the entrepreneurial spirit and mindset, financial knowledge, to marketing and sales will be taught in this course. It is well rounded, structured and designed to suit the need of any budding entrepreneur
                                Soft and digital/tech skills and tools will be taught to include invoicing tools, business feasibility, plans, and proposal tools, soft skill (communication, leadership, management and negotiation skills), spreadsheets, content creation and marketing tools, word processing tools, social media creation and optimization skills, marketing and marketing design skills inventory tools and so much more.
                                It is the school to attend to develop oneself with the necessary entrepreneurial skills (technological, social, financial, and psychological skills to enable you thrive as a new, intending or growing entrepreneur.
                                THE DRIVE BEHIND THE ACADEMY
                                SMEs contribute to the largest number of employment and existing businesses globally and contribute massively to economic growth and development. It is established that over 70% of SMEs fail within the first 5 years of existence and part of the cause include the lack of the right skill set by the entrepreneur.
                                Natenrock Entrepreneurship Academy is driven to bridge this gap Across Africa, thereby seeking to attain the UN SDGs (sustainable Development goals) of Decent work and economic growth, no poverty and Zero Hunger.
                                So as an entrepreneur that takes this course, be rest assured that it is designed to ensure you succeed
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key=" Drive" title="The Drive..">
                        <Card>
                            <CardBody>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl py-5">The Drive Behind The Academy</p>
                                SMEs contribute to the largest number of employment and existing businesses globally and contribute massively to economic growth and development. It is established that over 70% of SMEs fail within the first 5 years of existence and part of the cause include the lack of the right skill set by the entrepreneur.
                                Natenrock Entrepreneurship Academy is driven to bridge this gap Across Africa, thereby seeking to attain the UN SDGs (sustainable Development goals) of Decent work and economic growth, no poverty and Zero Hunger.
                                So as an entrepreneur that takes this course, be rest assured that it is designed to ensure you succeed
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="Who Should Attend?" title="Who Should Attend?">
                        <Card>
                            <CardBody>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl py-5">Who Should Attend? </p>
                                <ul>
                                    <li>For those that want to build a source or income (main or side)</li>
                                    <li>For the business owner, hoping to grow their business</li>
                                    <li>For the school leaver wanting to become an entrepreneur</li>
                                    <li>For the career intrapreneur, wanting to branch into entrepreneurship or needing a side hustle</li>
                                    <li>For those with knowledge in any industry, hoping to monetize their knowledge</li>
                                    <li>For the intending entrepreneur with an idea</li>
                                    <li>For those needing to build the mindset and courage to thrive in business</li>
                                    <li>For those desiring to expand their knowledge and upskill</li>
                               </ul>
                            </CardBody>
                        </Card>
                        </Tab>
                        <Tab key="Course Objective" title="Course Objective">
                        <Card>
                            <CardBody>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl py-5">Course Objective </p>
                                <p><strong>This basic entrepreneurship course is designed to help individuals to:</strong></p>
                                <ul>
                                    <li>Identify the characteristics, abilities, attitudes, and drive required for entrepreneurship success.</li>
                                    <li>Identify personal qualities and limitations that align with the profiles of successful small business owners. And those qualities you have as a person you can simply use to your business advantage.</li>
                                    <li>Create personal growth plans to improve small business success by addressing gaps and leveraging strengths.</li>
                                    <li>Understand target market demands for new business ideas.</li>
                                    <li>Analyze the market potential for a credible proposal.</li>
                                    <li>Establish initial sales, profit, competitive landscape, and future growth projections for a feasible business plan.</li>
                                    <li>Align prospective viable ideas with personal assessment profile.</li>
                                    <li>Develop and monetize ideas</li>
                                    <li>Understand the fundamentals of entrepreneurship</li >
                                    <li>Discover how opportunity leads to success and the major aspects that impact entrepreneurship.</li >
                                    <li>Explain entrepreneur motivation elements and killers.Prepare for hurdles and conquer them</li >
                                    <li>Recognize and think imaginatively about unusual business prospects.</li >
                                    <li>Learn to manage a new or existing business, create effective business plans, understand accounting records, financials,
        and reporting, conduct market research, increase sales through marketing, help businesses make and grow wealth, and provide transferable skills for individuals to use in their own or others' businesses.</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
