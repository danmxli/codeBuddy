const SubmitCode = ({ value, onChange }) => {
    return (
        <form>
            <div className="w-full px-4 py-4 rounded-r-3xl bg-gray-900">
                <textarea id="comment" rows="4" className="w-full h-64 px-0 focus:outline-none text-sm bg-gray-900 focus:ring-0 text-white placeholder-gray-400"
                    required
                    value={value}
                    onChange={onChange}
                ></textarea>
            </div>
        </form>
    );
};

export default SubmitCode;