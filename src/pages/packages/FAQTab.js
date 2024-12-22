const FAQTab = (faqsParams) => {
    let faqsData = JSON.parse(JSON.stringify(faqsParams));
    //console.log(faqsData);
    if (!Array.isArray(faqsData.faqs) || faqsData.faqs.length === 0) {
        return <p>No Faq available</p>;
    }
    return (
        <div>
            <h2 className="pb-4">Faqs List</h2>
            <ul>
            {faqsData.faqs.map((item, index) => (
                <div key={index} className="space-y-2">
                    <li className="text-sm"><b>Quesion {index+1}. </b> {item.question}</li>
                    <li className="text-sm"><b>Answer {index+1} .</b> {item.answer}</li>
                    <hr className="pt-4 border-white"/>
                </div>
               
            ))} 
            </ul>
        </div>
    );
}

export default FAQTab;
