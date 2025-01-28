import React, { useState } from 'react';

interface PreferenceSelectorProps {
    question: string;
    option1: string;
    option2: string;
    onSelectionChange: (selected: string) => void;
}

const PreferenceSelector: React.FC<PreferenceSelectorProps> = ({
    question,
    option1,
    option2,
    onSelectionChange,
}) => {
    const [selectedOption, setSelectedOption] = useState<string>(option1);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        onSelectionChange(event.target.value);
    };

    return (
        <div className='mt-8'>
            <p className="text-lg font-semibold mb-4">{question}</p>
            <div className="flex items-center gap-6 space-x-4">
                <label className="flex items-center">
                    <input
                        type="radio"
                        value={option1}
                        checked={selectedOption === option1}
                        onChange={handleOptionChange}
                        className="form-radio h-5 w-5 checked:!bg-primary-600"
                    />
                    <span className="ml-2 text-gray-700 mr-2">{option1}</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        value={option2}
                        checked={selectedOption === option2}
                        onChange={handleOptionChange}
                        className="form-radio h-5 w-5 checked:!bg-primary-600"
                    />
                    <span className="ml-2 text-gray-700 mr-2">{option2}</span>
                </label>
            </div>
        </div>
    );
};

export default PreferenceSelector;