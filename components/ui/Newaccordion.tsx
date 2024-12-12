import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
    return (
        <div className="py-12">
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>Module 1 </AccordionTrigger>
                <AccordionContent>
                    Introduction to Course
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Module 2: Personal Evaluation</AccordionTrigger>
                <AccordionContent>
                        <p>Introduction to Entrepreneurship</p>
                        <p>Growing the entrepreneurship mindset (entrepreneurs are born and made)</p>
                        <p>Entrepreneurial attributes and traits, to cultivate for success</p>
                        <p>Key Leadership and management skills to cultivate for Success</p>
                        <p>Personal Evaluation, Assessment Potential and Development</p>
                        <p>Module 2 Assignment and deliverable</p >
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Module 3: Identify and evaluate an idea; assess the market</AccordionTrigger>
                <AccordionContent>
                    <p>Introduction to Identifying and evaluating an idea</p>
                    <p>Definition your “business”</p>
                    <p>Idea validation and possible monetization</p>
                    <p>Vision mission objective</p>
                    <p>Business Identity creation. (Name, brand, etc.)</p >
                    <p>Module 3 Assignments</p >
                </AccordionContent >
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Module 4:Explore the business, its risk and rewards</AccordionTrigger>
                
                <AccordionContent>
                    <p>Introduction to Exploring the business, its risk and rewards</p>
                    <p>Feasibility studies and market research</p>
                    <p>The business / strategy, plans</p>
                    <p>Understanding and studying Competitors</p>
                    <p>Deliverables for module 4</p >
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Module 5:Explore the business, its risk and rewards</AccordionTrigger>
                <AccordionContent>
                    <p>ntroduction to Marketing and sales</p>
                    <p>Online marketing</p>
                    <p>Off line and Face to face marketing still matters</p>
                    <p>Combination of face to face and online marketing</p>
                    <p>Business Locations</p >
                    <p>Online marketing, and design tools, social media optimization and content creation - facebook, whatsapp, instagram twitter, canva, Youtube, power point, Word processing</p >
                    <p>creative writing, copy writing</p >
                    <p>Establishing a strong network of related businesses for collaborations</p >
                    <p>Module 5 deliverables</p >
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger>Module 6:Basic Finance, Accounting and operations</AccordionTrigger>
                <AccordionContent>
                    <p>Introduction to Basic Finance, Accounting, and Operations</p>
                    <p>Budgeting and forecast</p>
                    <p>Stocking and stock taking</p>
                    <p>Simple Income statement, balance sheet, ledgers, transaction, cashflow, budgeting and forecast templates. Guide on how to use</p>
                    <p>Interpreting the numbers</p >
                <p>Operational tools(Basic Ms word, Basic Ms Excel, Invoicing tool</p >
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger>Module 7:Deliverables for students</AccordionTrigger>
                <AccordionContent>
                    <p>Introduction to practical course deliverables for students</p>
                    <p>Established and scalable business idea</p>
                    <p>Starting and scaling of business</p>
                    <p>Business registration and legalization</p>
                    <p>Visibility and online Prescence</p >
                    <p>Clear strategy feasibility and business plan</p >
                    <p>Clear marketing effort evident in sales growth</p >
                    <p>Ability to use Marketing, design, and operational tools effectively to support the effective operation of their businesses</p >
                    <p>Conduct accurate business research</p>
                    <p>understand business numbers and forecast effectively</p >
                    <p>Presentation of a summarized business pitch(business plan extracts)</p >
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
                <AccordionTrigger>Module Titles</AccordionTrigger>
                <AccordionContent>
                    <p>Introduction to the course (1)</p>
                    <p>Personal evaluation (2)</p>
                    <p>Identify and evaluate an idea; assess the market (3)</p>
                    <p>Explore the business, its risk and rewards (4)</p>
                    <p>Marketing and sales(5)</p >
                    <p>Basic Finance, Accounting and operations(6)</p >
                    <p>Course deliverables / Conclusion(7) </p >
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
                <AccordionTrigger>Additional benefit to include business, operational, research, accounting, record keeping, marketing and workplace software, tools and skill to include:</AccordionTrigger>
                <AccordionContent>
                    <p>Self-assessment (Business mindset)</p>
                    <p>Entrepreneurship drive assessment tool</p>
                    <p>Idea Viability tool</p>
                    <p>Ides Validation and Monetization tool</p>
                    <p>Feasibility study and research(simplified tool and template)</p >
                    <p>Business / strategic plan tool and template</p >
                    <p>Risk assessment</p >
                    <p>Competition analysis tool</p >
                    <p>Online marketing and social media</p >
                    <p>Design tools(Canva)</p >
                    <p>Sales Record Ledgers</p >
                    <p>Purchase Record Ledger</p >
                    <p>Expenditure Ledger</p >
                    <p>Basic income statement template(formatted)</p >
                    <p>Basic Budgeting and forecast template(Formatted)</p >
                    <p>Basic cashflow Template(Formatted)</p >
                    <p>Balance sheet Template</p >
                    <p>Basic word processing - Microsoft word</p >
                    <p>Basic spreadsheet - Microsoft Excel</p >
                    <p>Basic presentation</p >
                    <p>Soft skills(management and leadership skills)</p >
                    <p>Invoicing tool / skills</p >
                    <p>Stock management tool / skills</p >
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
    )
}
