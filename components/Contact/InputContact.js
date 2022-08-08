import PropTypes from "prop-types";

const InputContact = ({ placeholder = "" }) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full p-4 bg-white border-2 border-gray-500"
        />
      </div>
    </div>
  );
};

InputContact.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputContact;
