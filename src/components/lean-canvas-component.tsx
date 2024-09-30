import React, { useState, useRef } from 'react';

const LeanCanvas = () => {
  const [canvasData, setCanvasData] = useState({
    problem: '',
    existingAlternatives: '',
    solution: '',
    keyMetrics: '',
    uniqueValueProposition: '',
    unfairAdvantage: '',
    channels: '',
    customerSegments: '',
    costStructure: '',
    revenueStreams: ''
  });

  const textAreaRefs = {
    problem: useRef(null),
    existingAlternatives: useRef(null),
    solution: useRef(null),
    keyMetrics: useRef(null),
    uniqueValueProposition: useRef(null),
    unfairAdvantage: useRef(null),
    channels: useRef(null),
    customerSegments: useRef(null),
    costStructure: useRef(null),
    revenueStreams: useRef(null),
  };

  const handleChange = (field, value) => {
    setCanvasData(prevData => ({
      ...prevData,
      [field]: value
    }));

    // Set focus and cursor position after state update
    setTimeout(() => {
      const textarea = textAreaRefs[field].current;
      if (textarea) {
        textarea.focus();
        textarea.setSelectionRange(value.length, value.length);
      }
    }, 0);
  };
  const TextArea = ({ label, value, onChange, placeholder, className = "", fieldName }) => (
    <div className={`flex flex-col h-full ${className}`}>
      <label className="font-bold mb-2">{label}</label>
      <textarea
        ref={textAreaRefs[fieldName]}
        className="flex-grow p-2 border border-gray-300 rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 bg-red-100 p-4 rounded">
          <TextArea
            label="PROBLEM"
            value={canvasData.problem}
            onChange={(value) => handleChange('problem', value)}
            placeholder="List your customers' top 3 problems"
            fieldName="problem"
          />
          <div className="mt-4">
            <h3 className="font-bold mb-2">EXISTING ALTERNATIVES</h3>
            <textarea
              ref={textAreaRefs.existingAlternatives}
              className="w-full p-2 border border-gray-300 rounded"
              value={canvasData.existingAlternatives}
              onChange={(e) => handleChange('existingAlternatives', e.target.value)}
              placeholder="How these problems are solved today"
            />
          </div>
        </div>
        
        <div className="col-span-1 flex flex-col gap-4">
          <div className="bg-blue-100 p-4 rounded flex-grow">
            <TextArea
              label="SOLUTION"
              value={canvasData.solution}
              onChange={(value) => handleChange('solution', value)}
              placeholder="Outline possible solutions for each problem"
              fieldName="solution"
            />
          </div>
          <div className="bg-green-100 p-4 rounded flex-grow">
            <TextArea
              label="KEY METRICS"
              value={canvasData.keyMetrics}
              onChange={(value) => handleChange('keyMetrics', value)}
              placeholder="List the key numbers that tell you how your business is doing"
              fieldName="keyMetrics"
            />
          </div>
        </div>
        
        <div className="col-span-1 bg-yellow-100 p-4 rounded">
          <TextArea
            label="UNIQUE VALUE PROPOSITION"
            value={canvasData.uniqueValueProposition}
            onChange={(value) => handleChange('uniqueValueProposition', value)}
            placeholder="Single, clear, compelling message that states why you are different and worth paying attention. High-level concept: Your X for Y analogy"
            fieldName="uniqueValueProposition"
          />
        </div>
        
        <div className="col-span-1 flex flex-col gap-4">
          <div className="bg-purple-100 p-4 rounded flex-grow">
            <TextArea
              label="UNFAIR ADVANTAGE"
              value={canvasData.unfairAdvantage}
              onChange={(value) => handleChange('unfairAdvantage', value)}
              placeholder="Something that can't be easily copied or bought"
              fieldName="unfairAdvantage"
            />
          </div>
          <div className="bg-yellow-100 p-4 rounded flex-grow">
            <TextArea
              label="CHANNELS"
              value={canvasData.channels}
              onChange={(value) => handleChange('channels', value)}
              placeholder="List your path to customers"
              fieldName="channels"
            />
          </div>
        </div>
        
        <div className="col-span-1 bg-orange-100 p-4 rounded">
          <TextArea
            label="CUSTOMER SEGMENTS"
            value={canvasData.customerSegments}
            onChange={(value) => handleChange('customerSegments', value)}
            placeholder="List your target customers and users. Early Adopters: List the characteristics of your ideal customers"
            fieldName="customerSegments"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-pink-100 p-4 rounded">
          <TextArea
            label="COST STRUCTURE"
            value={canvasData.costStructure}
            onChange={(value) => handleChange('costStructure', value)}
            placeholder="List your fixed and variable costs"
            fieldName="costStructure"
          />
        </div>
        
        <div className="bg-green-100 p-4 rounded">
          <TextArea
            label="REVENUE STREAMS"
            value={canvasData.revenueStreams}
            onChange={(value) => handleChange('revenueStreams', value)}
            placeholder="List your sources of revenue"
            fieldName="revenueStreams"
          />
        </div>
      </div>
    </div>
  );
};

export default LeanCanvas;