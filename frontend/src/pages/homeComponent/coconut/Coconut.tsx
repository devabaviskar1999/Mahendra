import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
<a
  href="https://instagram.com/dev_22kr"
  target="_blank"
  rel="noopener noreferrer"
></a>;
const Coconut = () => {
  return (
    <div className="flex flex-col rounded-b-3xl md:rounded-none items-center w-full h-auto bg-yellow-900/30 text-black pt-5 md:pb-10">
      <div className="mb-4 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-black ">
          Answers to your Questions
        </h2>
      </div>
      <div className="w-full h-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {accordionData.map(({ value, question, answer }) => (
            <AccordionItem
              key={value}
              value={value}
              className="border border-white/20 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <AccordionTrigger className="tracking-tight  w-full px-4 py-3 text-left text-md md:text-xl font-medium transition-all duration-300 hover:underline hover:text-black-300 hover:cursor-pointer">
                {question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-black text-sm md:text-lg transition-all duration-300 font-serif">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

// Accordion content data
const accordionData = [
  {
    value: "item-1",
    question: "Is it couple friendly?",
    answer: "Yes. it is couple friendly.",
  },
  {
    value: "item-2",
    question: "What is the checkout time?",
    answer: "24hrs from checking time.",
  },
  {
    value: "item-3",
    question: "Can i come with my Girlfriend/Boyfriend?",
    answer: "Yes. you can but your girlfriend age should be 18+.",
  },
  {
    value: "item-4",
    question: "How much is the distance from Bus Stand/ Railway station?",
    answer:
      "From Railway station the distance will be 2km and from Bus stand it is around 2.5km. You can get shared auto rickshaws and the reasonable fair from BusStand should be max 30Rs/person and from Railway station it should be around 20Rs/person.",
  },
  {
    value: "item-5",
    question: "Do you have Restaurant and Bar?",
    answer:
      "Yes, we do have Restaurant and bar. You can order food and drinks from your room. We have a wide variety of food and drinks available.",
  },
];

export default Coconut;
