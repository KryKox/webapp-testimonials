export const LoaderSpinner = ({ message }: { message?: string }) => {
    return (
        <div className="w-full flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
                {message && <p className="text-gray-500 mt-4">{message}</p>}
            </div>
        </div>
    );
};

