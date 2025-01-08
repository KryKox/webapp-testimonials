import { Check } from "lucide-react";

interface GetStartedStepComponentProps {
    isCompleted: boolean;
    stepNumber: number;
    isCurrent: boolean;
    stepTitle: string;
}

export const GetStartedStepComponent = ({ isCompleted, stepNumber, isCurrent, stepTitle }: GetStartedStepComponentProps) => {
    const bgColor = isCompleted ? 'bg-green-500' : isCurrent ? 'bg-blue-500' : 'bg-gray-200';
    const textColor = 'text-white';
    
    return (
        <div className="flex items-center justify-center">
            <div
                className={`w-8 h-8 flex items-center justify-center border-2 rounded-full ${bgColor}`}
            >
                <span className={`text-lg font-bold ${textColor}`}>
                    {isCompleted ? <Check size={16} className={"text-white"} /> : stepNumber}
                </span>
            </div>
            {stepTitle && <div className="text-center ml-4">{stepTitle}</div>}
        </div>
    );
};

