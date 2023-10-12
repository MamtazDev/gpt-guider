import React from "react";
import { Accordion } from "flowbite-react";
import Main from "@/Layouts/Main";
const FaqPage = () => {
  return (
    <div className="container my-10">
      {/*  */}
      <h3 className="text-3xl font-bold mb-5">Frequently Asked Questions</h3>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What are GPT Guider services?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              GPT Guider provides educational AI services that focus on helping
              students study more efficiently and productively.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What tools does GPT Guider provide?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <p>1. GPT Prof (including explanation & discussion)</p>
              <p>2. Browsing plugin</p>
              <p>
                3. Diagram plugin (including 10 types of diagrams & mind maps)
              </p>
              <p>
                4. Chat with PDF (including uploading multiple PDF files & OCR)
              </p>
              <p>5. AI Summaries & Notes</p>
              <p>6. Q & A generator</p>
              <p>7. Document OCR AI</p>
              <p>8. Audio transcription & summarization</p>
              <p>9. Video transcription & summarization</p>
              <p>10. YouTube video transcription & summarization</p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What AI models or technology does GPT Guider use?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              We use a combination of LLMs like GPT-4, GPT-3.5, Whisper (OpenAI
              voice-to-text model), AWS Polly neural voices, and Google Vision
              AI.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Who is the end user of GPT Guider?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              GPT Guider can be used in all fields according to the tasks you
              want to perform, but our primary end user is students, although
              it's also used by academics, teachers, researchers, and more.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How can I use the features available according to my subscription
            plan or are there any guidelines for using the features?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              You will find FAQ pages for each feature that provide
              comprehensive guidelines on how to use them and how they can
              benefit you.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is the difference between GPT Guider and other platforms that
            provide educational AI services?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              GPT Guider stands out due to its advanced LLMs models like GPT-4
              and GPT-3.5. Our features are rich and can serve a wide range of
              tasks. We offer competitive pricing and provide various local and
              global payment methods. Our platform is user-friendly, with FAQ
              pages to guide you in using the features effectively.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What languages does GPT Guider support?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              GPT Guider supports all languages, including English, Chinese,
              Arabic, German, French, Spanish, and more.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is the cancellation policy?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              You can cancel your subscription plan at any time. If you cancel,
              you will still have access to your plan until the end of the
              current 30-day billing period. To cancel your subscription, send
              an email request through any of the contact methods we provide.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What files are acceptable in GPT Guider?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              GPT Guider currently accepts text-based PDF files. Scanned or
              handwritten PDFs will be supported in the next update.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is GPT Guider free?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                No, GPT Guider is not free, but there is a free trial plan that
                is valid for four days. The free trial includes:
              </p>
              <p>Free Trial: Try our features for 3 days, which includes:</p>
              <p>1. Browsing plugin (20 messages)</p>
              <p>2. Diagram plugin (20 diagrams & mind maps)</p>
              <p>
                3. Chat with PDF, including OCR and uploading multiple PDF files
              </p>
              <p>4. AI Summaries & Notes (unlimited)</p>
              <p>5. Question & Answer generator (25 Q&A)</p>
              <p>
                For further information about subscription plans, please see the
                pricing page.
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is GPT Prof?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              GPT Prof is our most comprehensive AI tool, relying on the GPT-4
              model. It provides detailed explanations for your study materials
              and allows for in-depth discussion. It offers explanations in both
              text and voice, based on your language preference.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is the browsing plugin?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The browsing plugin enables users to browse search engine results
              within the chat interface. It provides clickable links,
              descriptive titles, and concise summaries for each search result,
              enhancing your knowledge base and access to up-to-date
              information.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How can I use the browsing plugin?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              You can use the browsing plugin by either searching with a query
              or providing a URL. It helps you summarize and understand long
              content websites, providing immediate and updated knowledge.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is the diagram plugin?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The diagram plugin enables you to create and edit diagrams and
              build mind maps based on your data. You can upload your document,
              select the pages you want to use, choose the type of diagram, or
              copy and paste the data.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What types of diagrams can you build?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              You can create various types of diagrams, including class
              diagrams, state diagrams, sequence diagrams, flow charts, mind
              maps, pie charts, ER charts, sequence diagrams, and quadrant
              charts.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How can the diagram plugin help you in your study?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The diagram plugin enhances understanding, facilitates efficient
              study, and improves memory retention by providing visual
              representations of complex topics and enabling customization of
              mind maps.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

FaqPage.PageLayout = Main;
export default FaqPage;
